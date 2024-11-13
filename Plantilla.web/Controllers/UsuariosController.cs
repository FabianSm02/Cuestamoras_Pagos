using Plantilla.core.Entities;
using Plantilla.core.Manager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Plantilla.web.Controllers
{
    public class UsuariosController : Controller
    {
      
   
        public ActionResult Index()
        {
            string cia = Session["CIA"].ToString();
            ViewBag.UsuariosInsertar = UsuariosManager.GetUsuariosSelectInsertar(cia);
            ViewBag.UsuariosEditar = UsuariosManager.GetUsuariosSelectEditar(cia);
            ViewBag.ObtenerRoles = UsuariosManager.ObtenerRoles(cia);
            return View();
        }
        public JsonResult ObtenerUsuarios()
        {
            string cia = Session["CIA"].ToString();

            var result = UsuariosManager.ObtenerUsuarios(cia);
           
            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult ObtenerPermisos()
        {
            string cia = Session["CIA"].ToString();

            var result = new
            {
                PermisosRoles = UsuariosManager.GetPermisos(cia)
            };
            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        [HttpPost]
        public JsonResult GuardarUsuario(string Insertar, string Usuario, string RolUsuario)
        {
            bool.TryParse(Insertar, out bool insertar);
            string Cia = Session["Cia"].ToString();
            string result;
            if (insertar)
            {
                result = UsuariosManager.InsertarUsuario(Usuario, RolUsuario, Cia);
            }
            else
            {
                result = UsuariosManager.EditarUsuario(Usuario, RolUsuario, Cia);
            }
            int.TryParse(result, out int res);
            return Json(res);
        }
        public JsonResult ActualizarEstadoUsuario(string usuario, string estado)
        {
            string cia = Session["CIA"].ToString();

            var result = UsuariosManager.ActualizarEstadoUsuario(usuario, estado, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        public JsonResult EditarRol(int Rol, string Descripcion)
        {
            string cia = Session["CIA"].ToString();

            var result = UsuariosManager.EditarRol(Rol, Descripcion, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        [HttpPost]
        public JsonResult GuardarRol(string Rol, string Descripcion)
        {
            string cia = Session["CIA"].ToString();
            int.TryParse(Rol, out int rol);
            string result;
            if (rol == 0)
            {
                result = UsuariosManager.InsertarRol(Descripcion, cia);
            }
            else
            {
                result = UsuariosManager.EditarRol(rol, Descripcion, cia);
            }
            int.TryParse(result, out int res);
            return Json(res);
        }

        [HttpPost]
        public JsonResult GuardarPermisos(FormCollection collection)
        {
            string cia = Session["CIA"].ToString();
            string result = UsuariosManager.EditarPermisos(
                collection["rol"],
                collection["PAGOS_PROYECTADOS"],
                collection["APROBACION_PAGOS"],
                collection["PAGO_PROVEEDORES"],
                collection["CONFIG_SFTP"],
                collection["ADMINISTRACION_USUARIOS"],
                cia
            );
            int.TryParse(result, out int res);
            return Json(res);
        }
        public JsonResult ObtenerCuentasSoftland()
        {
            string cia = Session["CIA"].ToString();

            var result = UsuariosManager.ObtenerCuentasSoftland(cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;
        }

        public JsonResult ObtenerRoles()
        {
            string cia = Session["CIA"].ToString();
            var result = new
            {
                Roles = UsuariosManager.ObtenerRoles(cia)
            };
            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        // GET: Usaurio
        public ActionResult Details()
        {
            return View();
        }
    }
}