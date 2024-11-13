using Plantilla.core.Manager;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Plantilla.web.Controllers
{
    public class ProveedoresController : Controller
    {
        // GET: Paquete
        public ActionResult Index()
        {
            string cia = Session["CIA"].ToString();
            ViewBag.ObtenerProveedores = ProveedorManager.ObtenerProveedores(cia);
            //ViewBag.ObtenerAprobadores = proveedorManager.ObtenerAprobadores(Session["ESQUEMA"].ToString());
            ViewBag.ObtenerCuentasBancos = ProveedorManager.ObtenerCuentasBancos(cia);
            //ViewBag.ObtenerEnviadores = proveedorManager.ObtenerEnviadores(Session["ESQUEMA"].ToString());
            return View();
        }

        [HttpGet]
        public JsonResult ObtenerLineasProveedores(decimal numeroOrigen)
        {
            string cia = Session["CIA"].ToString();

            var result = ProveedorManager.ObtenerLineasTransferencias(numeroOrigen, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

       
        //public ActionResult GenerarArchivo(string numeroOrigen, string nombreBanco)
        //{
        //    string result = null;
        //    if (nombreBanco == "MERCANTIL")
        //    {
        //        result = proveedorManager.ObtenerDatosTXT(numeroOrigen);
        //        var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;
        //    }
        //    else if (nombreBanco == "BANESCO")
        //    {
        //        //result = proveedorManager.ObtenerDatosTXTBanesco(numeroOrigen);
        //        //var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;
        //    }
        //    string filename = nombreBanco + numeroOrigen + "COFERSA.txt";
        //    string filepath = AppDomain.CurrentDomain.BaseDirectory + result;
        //    byte[] filedata = System.IO.File.ReadAllBytes(filepath);
        //    string contentType = MimeMapping.GetMimeMapping(filepath);

        //    var cd = new System.Net.Mime.ContentDisposition
        //    {
        //        FileName = filename,
        //        Inline = true,
        //    };

        //    Response.AppendHeader("Content-Disposition", cd.ToString());

        //    return File(filedata, contentType);


        //}

        public JsonResult ObtenerTransferenciaH2HProveedor(string start, string end, string proveedor, string cuenta, string esquema)
        {
            string cia = Session["CIA"].ToString();

            var result = ProveedorManager.ObtenerTransferenciaH2HProveedor(start, end, proveedor, cuenta, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }
        public JsonResult ActualizarEstadoParaReenviar(string referencia_softland, string cia)
        {
            var result = ProveedorManager.ActualizarEstadoParaReenviar(referencia_softland, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public ActionResult Details()
        {
            return View();
        }
    }
}