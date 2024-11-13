using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Plantilla.core.Entities;
using Plantilla.core.Manager;

namespace Taller.web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
    {
            if (Session["PAGOS_PROYECTADOS"].ToString() != "3")
            {
                return Redirect("~/AprobacionPago");
            }
            else if (Session["APROBACION_PAGOS"].ToString() != "3")
            {
                return Redirect("~/Aprobacion");
            }
            else if (Session["PAGO_PROVEEDORES"].ToString() != "3")
            {
                return Redirect("~/Proveedores");
            }
            else if (Session["PAGOS_PROYECTADOS"].ToString() != "3")
            {
                return Redirect("~/Aprobacion");
            }
            else if (Session["CONFIG_SFTP"].ToString() != "3")
            {
                return Redirect("~/Cuentas");
            }
            else if (Session["ADMINISTRACION_USUARIOS"].ToString().Contains("2"))
            {
                return Redirect("~/Usuarios");
            }
            else
            {
                Session["Usuario"] = null;
                return Redirect("~/Login");
            }
        }
        public JsonResult GetCias() {
            //List<PROC_OBT_CIASResult> result = Manager.GetCIAS();
            JsonResult json = new JsonResult();
           // json.Data = result;
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        public JsonResult CambiarCIA(string cia)
        {
            JsonResult json = new JsonResult();
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            if (string.IsNullOrEmpty(cia))
            {
                json.Data = "0";
            }
            else
            {
                Session["CIA"] = cia;
                json.Data = "1";
            }
            return json;
        }
    }
}