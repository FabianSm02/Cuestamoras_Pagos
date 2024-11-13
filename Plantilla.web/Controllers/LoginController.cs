using Plantilla.core.Manager;
using System;
using System.Web.Configuration;
using System.Web.Mvc;
using ProdusoftLicenseValidation;
using Portal.web.Util;
using Plantilla.core.Entities;
using System.Configuration;

namespace Plantilla.web.Controllers
{
    public class LoginController : Controller
    {
        private LoginManager loginManager = new LoginManager();
        public ActionResult loginOffice(string userName)
        {
            if (userName == null)
                ViewBag.CIAS = LoginManager.ObtenerCIASSinAZURE();
            else
                ViewBag.CIAS = LoginManager.ObtenerCIAS(userName);
            return View();
        }

        public ActionResult Index()
        {
            Session["TID"] = ConfigurationManager.AppSettings["Tenant"];
            Session["CID"] = ConfigurationManager.AppSettings["ClientId"];
            Manager.SetLogDirectory(Server.MapPath("~/Log"));
            //Session["CIA"] = "CFIA";
            ViewBag.CIAS = Manager.GetCIAS();
            return View();
        }

        [HttpPost]
        public JsonResult Index(string usuarioNoADA, string passwordNoADA, string esquemaNoADA)
        {
            LicenseValidation licenseValidation = new LicenseValidation();
            if (!licenseValidation.ExitsLicense())
            {
                return Json(5); //No existe la licencia
            }

            string mensaje = licenseValidation.ValidateLicense();
            if (mensaje == "Error al leer la licencia.")
            {
                return Json(6); //Error al leer la licencia
            }

            if (mensaje != "Licencia Válida")
            {
                return Json(7); //Licencia caducó
            }

            return Login(usuarioNoADA, passwordNoADA, esquemaNoADA);

        }

        [HttpPost]
        public JsonResult IndexADA(string UsuarioExterno, string cia)
        {
            LicenseValidation licenseValidation = new LicenseValidation();
            if (!licenseValidation.ExitsLicense())
            {
                return Json(5); //No existe la licencia
            }

            string mensaje = licenseValidation.ValidateLicense();
            if (mensaje == "Error al leer la licencia.")
            {
                return Json(6); //Error al leer la licencia
            }

            if (mensaje != "Licencia Válida")
            {
                return Json(7); //Licencia caducó
            }

            return LoginADA(UsuarioExterno, cia);

        }



        [HttpPost]
        public JsonResult LoginADA(string UsuarioExterno, string cia)
        {

            if (UsuarioExterno != null)
            {
                Session["userOffice"] = "S";
                var permisos = LoginManager.ValidarUsuarioRolADA(UsuarioExterno, cia);
                if (permisos != null)
                {
                    Session["Rol"] = permisos.ROL;
                    Session["Usuario"] = permisos.USUARIO;
                    Session["Correo"] = permisos.CORREO;
                    Session["Proveedor"] = permisos.PROVEEDOR;
                    Session["Nombre"] = permisos.NOMBRE;
                    Session["CIA"] = permisos.CIA;
                    Session["ESQUEMA"] = permisos.CIA;



                    var result = loginManager.ObtenerUsuarioCIAS(permisos.USUARIO);
                    Session["CIAS"] = result;

                    PROC_OBT_USUARIO_PERMISOSResult accesos = UsuariosManager.GetPermisosPorUsuario(permisos.ROL.GetValueOrDefault(), cia);//Permisos por rol
                    if (accesos != null)
                    {
                        Session["PAGOS_PROYECTADOS"] = accesos.PAGOS_PROYECTADOS;
                        Session["APROBACION_PAGOS"] = accesos.APROBACION_PAGOS;
                        Session["PAGO_PROVEEDORES"] = accesos.PAGO_PROVEEDORES;
                        Session["CONFIG_SFTP"] = accesos.CONFIG_SFTP;
                        Session["ADMINISTRACION_USUARIOS"] = accesos.ADMINISTRACION_USUARIOS;

                    }
                    return Json(1); //LOGIN COMPLETO
                }
                else
                {
                    return Json(4); // USUARIO INACTIVO
                }
            }
            else
            {
                return Json(4); // CREDENCIALES NO VALIDAS
            }
        }

        [HttpPost]
        public JsonResult Login(string usuarioNoADA, string passwordNoADA, string cia)
        {
           // cia = Session["CIA"].ToString();
            string result = LoginManager.ValidarUsuarioSoftland(usuarioNoADA, passwordNoADA);
            result = result.Equals("1") ? result : LoginManager.ValidarUsuario(usuarioNoADA, passwordNoADA, cia);
            if (result.Equals("1"))
            {
                string activo = LoginManager.ValidarUsuarioActivo(usuarioNoADA);
                if (activo.Equals("S"))
                {
                    PROC_VAL_USUARIO_ROLResult permisos = LoginManager.ValidarUsuarioRol(usuarioNoADA, cia);
                    if (!string.IsNullOrEmpty(permisos.NOMBRE))
                    {
                        Session["Rol"] = permisos.ROL;
                        Session["Usuario"] = permisos.USUARIO;
                        Session["Correo"] = permisos.CORREO;
                        Session["Proveedor"] = permisos.PROVEEDOR;
                        Session["Nombre"] = permisos.NOMBRE;
                        Session["CIA"] = permisos.CIA;
                        Session["ESQUEMA"] = permisos.CIA;

                        var result2 = loginManager.ObtenerUsuarioCIAS(permisos.USUARIO);
                        Session["CIAS"] = result2;

                        PROC_OBT_USUARIO_PERMISOSResult accesos = UsuariosManager.GetPermisosPorUsuario(permisos.ROL.GetValueOrDefault(), cia);//Permisos por rol
                        if (accesos != null)
                        {
                            Session["PAGOS_PROYECTADOS"] = accesos.PAGOS_PROYECTADOS;
                            Session["APROBACION_PAGOS"] = accesos.APROBACION_PAGOS;
                            Session["PAGO_PROVEEDORES"] = accesos.PAGO_PROVEEDORES;
                            Session["CONFIG_SFTP"] = accesos.CONFIG_SFTP;
                            Session["ADMINISTRACION_USUARIOS"] = accesos.ADMINISTRACION_USUARIOS;

                        }
                        return Json(1); //LOGIN COMPLETO
                    }
                    else
                    {
                        return Json(3); // SIN PERMISOS
                    }
                }
                else
                {
                    return Json(4); // USUARIO INACTIVO
                }
            }
            else
            {
                return Json(2); // LIGIN FALLIDO
            }
        }

        public ActionResult Logout()
        {
            Session["Usuario"] = null;
            return RedirectToAction("Index");
        }

    }
}