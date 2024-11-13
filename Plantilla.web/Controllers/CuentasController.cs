using Plantilla.core.Manager;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Plantilla.web.Controllers
{
    public class CuentasController : Controller
    {
        private CuentasManager cuentasManager = new CuentasManager();
        // GET: Usaurio
        public ActionResult Index()
        {
            string cia = Session["CIA"].ToString();
            ViewBag.ObtenerCuentasSoftland = cuentasManager.ObtenerCuentasSoftland(cia);
            return View();
        }
       
        public JsonResult InsertarSFTP(string cuenta, int id, string moneda, string ip, int puerto, string usuario, string contrasena,
            string llaveReceptor, string llaveEmisor, string cuentaSoftland, string dns, string plan)
        {
            var result = cuentasManager.InsertarSFTP(cuenta, id, moneda, ip, puerto, usuario, contrasena, llaveReceptor, llaveEmisor, cuentaSoftland, dns, plan);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        public JsonResult EditarSFTP(string cuenta, int id, string moneda, string ip, int puerto, string usuario, string contrasena,
           string llaveReceptor, string llaveEmisor, string cuentaSoftland, string dns, string plan)
        {
            string cia = Session["CIA"].ToString();

            var result = cuentasManager.EditarSFTP(cuenta, id, moneda, ip, puerto, usuario, contrasena, llaveReceptor, llaveEmisor, cuentaSoftland, dns, plan, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult EliminarSFTP(int id)
        {
            var result = cuentasManager.EliminarSFTP(id);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult ObtenerSFTP()
        {
            string cia = Session["CIA"].ToString();
            var result = cuentasManager.ObtenerSFTP(cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        // GET: Usaurio
        public ActionResult Details()
        {
            return View();
        }
    }
}