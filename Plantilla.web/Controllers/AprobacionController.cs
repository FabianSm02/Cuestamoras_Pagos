using Newtonsoft.Json.Linq;
using Plantilla.core.Entities;
using Plantilla.core.Manager;
using Plantilla.web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Plantilla.web.Controllers
{
    public class AprobacionController : Controller
    {
        // GET: Aprobacion
        public ActionResult Index()
        {
            string cia = Session["CIA"].ToString();
            ViewBag.Proveedores = AprobacionPagoManager.GetProveedores(cia);
            ViewBag.AprobadoresFinanciero = AprobacionPagoManager.GetAprobadores(cia);
            ViewBag.AprobadoresGerencia = AprobacionPagoManager.GetAprobadores(cia);
            ViewBag.Transferencias = AprobacionPagoManager.GetTransferencias(cia);
            //ViewBag.UsuariosTEF = AprobacionPagoManager.GetUsuariosTEF(cia);
            return View();
        }

        public JsonResult CambiarUsuarioTEF(string tef, string aprobadorFinanciero, string aprobadorGerencial)
        {
            string cia = Session["CIA"].ToString();

            var result = AprobacionManager.CambiarUsuarioTEF(tef, aprobadorFinanciero, aprobadorGerencial, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        [HttpGet]
        public JsonResult GetMensajesDocumento(string documento, string emisor)
        {
            string cia = Session["CIA"].ToString();
            string receptor = Session["Usuario"].ToString();
            string usuario = Session["Usuario"].ToString();
            List<PROC_OBT_MENSAJES_DOCUMENTOResult> result = AprobacionManager.GetMensajesDocumento(documento, emisor, receptor, usuario, cia);
            JsonResult json = new JsonResult();
            json.Data = result;
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        [HttpPost]
        public JsonResult InsertarMensajeDocumento(string documento, string receptor, string contenido)
        {
            string cia = Session["CIA"].ToString();
            string emisor = Session["Usuario"].ToString();
            string result = AprobacionManager.InsertarMensajeDocumento(documento, emisor, receptor, contenido, cia);
            int.TryParse(result, out int res);
            return Json(res);
        }

        [HttpGet]
        public JsonResult GetAprobaciones(
                string fechaInicio, string fechaFin, string proveedor,
                string aprobadorFinanciero, string aprobadorGerencial,
                string estado, string transferencia
        )
        {
            proveedor = string.IsNullOrEmpty(proveedor) || proveedor == "0" ? null : proveedor;
            transferencia = string.IsNullOrEmpty(transferencia) || transferencia == "0" ? null : transferencia;
            aprobadorFinanciero = string.IsNullOrEmpty(aprobadorFinanciero) || aprobadorFinanciero == "0" ? null : aprobadorFinanciero;
            aprobadorGerencial = string.IsNullOrEmpty(aprobadorGerencial) || aprobadorGerencial == "0" ? null : aprobadorGerencial;
            estado = string.IsNullOrEmpty(estado) || estado == "0" ? null : estado;
            string usuario = Session["Usuario"].ToString();
            string cia = Session["CIA"].ToString();
            List<PROC_OBT_APROBACIONResult> result = AprobacionManager.GetAprobaciones(
                fechaInicio, fechaFin, proveedor, usuario,
                aprobadorFinanciero, aprobadorGerencial, estado, transferencia, cia
            );
            JsonResult json = new JsonResult();
            json.Data = result;
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        [HttpGet]
        public JsonResult GetAprobacionLineas(string transferencia)
        {
            string cia = Session["CIA"].ToString();
            List<PROC_OBT_APROBACION_LINEASResult> result = AprobacionManager.GetAprobacionLineas(transferencia, cia);
            JsonResult json = new JsonResult();
            json.Data = result;
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        [HttpPost]
        public JsonResult EditarSeleccion(string transferencia, string documento, string proveedor, string notas, string estado)
        {
            string cia = Session["CIA"].ToString();
            string result;
            if (string.IsNullOrEmpty(transferencia))
            {
                result = AprobacionManager.EditarSeleccion(documento, proveedor, notas, estado, cia);
            }
            else
            {
                if (estado == "T")
                {
                    result = AprobacionManager.AprobarTEF(transferencia, Session["Usuario"].ToString(), notas, cia);
                }
                else
                {
                    result = AprobacionManager.RechazarTEF(transferencia, notas, Session["Usuario"].ToString(), cia);
                }

            }
            int.TryParse(result, out int res);
            return Json(res);
        }


        [HttpPost]
        public JsonResult AprobarBatch(
           List<TransferenciaBatch> lineasParaBatch, string notas
       )
        {
            if (lineasParaBatch.Count == 0)
            {
                return Json(2);
            }
            string cia = Session["CIA"].ToString();
            string result;
            foreach (var item in lineasParaBatch)
            {
                result = AprobacionManager.AprobarTEF(
                    item.tef,
                    Session["Usuario"].ToString(),
                    notas,
                    cia
                );
            }

            return Json(1);
        }

        public JsonResult RechazarBatch(
          List<TransferenciaBatch> lineasParaBatch, string notas
      )
        {
            if (lineasParaBatch.Count == 0)
            {
                return Json(2);
            }
            string cia = Session["CIA"].ToString();
            string result;
            foreach (var item in lineasParaBatch)
            {
                result = AprobacionManager.RechazarTEF(
                    item.tef, notas,
                    Session["Usuario"].ToString(), cia
                );
            }

            return Json(1);
        }


        //[HttpPost]
        //public JsonResult EditarSeleccionMultiple(string lineas, string notas, string estado)
        //{
        //    string cia = Session["CIA"].ToString();
        //    JArray array = JArray.Parse(lineas);
        //    string documento;
        //    string proveedor;
        //    foreach (JObject item in array)
        //    {
        //        documento = item.GetValue("documento").ToString();
        //        proveedor = item.GetValue("proveedor").ToString();
        //        AprobacionManager.EditarSeleccion(documento, proveedor, notas, estado, cia);
        //    }
        //    return Json(1);
        //}

        //public string ImpirmirReporte(string ordenCompra, string nombreReporte)
        //{
        //    //rutas
        //    string reporte = Server.MapPath(string.Format("~/Reports/{0}.{1}", nombreReporte, "rpt"));
        //    // credenciales sql
        //    string user = "sa";
        //    string pass = "123";
        //    try
        //    {
        //        using (ReportClass rptH = new ReportClass())
        //        {
        //            Response.Buffer = false;
        //            Response.ClearContent();
        //            Response.ClearHeaders();
        //            rptH.FileName = reporte;
        //            rptH.Load();
        //            rptH.Refresh();
        //            rptH.SetDatabaseLogon(user, pass);
        //            rptH.SetParameterValue("proveedor", ordenCompra);
        //            rptH.ExportToHttpResponse(ExportFormatType.PortableDocFormat, System.Web.HttpContext.Current.Response, false, "ReporteEvento");
        //            rptH.Close();
        //            rptH.Dispose();
        //            return "OK";
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Manager.WriteLog("ImpirmirComprobante", ex.Message);
        //        return null;
        //    }
        //}
    }
}