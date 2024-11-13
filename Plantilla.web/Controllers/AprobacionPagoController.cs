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
    public class AprobacionPagoController : Controller
    {
        public ActionResult Index()
        {
            string cia = Session["CIA"].ToString();
            ViewBag.Proveedores = AprobacionPagoManager.GetProveedores(cia);
            ViewBag.AprobadoresFinanciero = AprobacionPagoManager.GetAprobadores(cia);
            ViewBag.AprobadoresGerencia = AprobacionPagoManager.GetAprobadores(cia);
            ViewBag.FinancieroDefault = "SSOLANOR";
            ViewBag.GerenciaDefault = "KGARCIA";
            ViewBag.Transferencias = AprobacionPagoManager.GetTransferencias(cia);
            ViewBag.CuentasBancarias = AprobacionPagoManager.GetCuentasBancarias(cia);
            //ViewBag.UsuariosTEF = AprobacionPagoManager.GetUsuariosTEF(cia);
            return View();
        }

        public JsonResult CambiarTEFaOtraTEF(string tefAnterior, string tefNueva, string documento)
        {
            string cia = Session["CIA"].ToString();

            var result = AprobacionPagoManager.CambiarTEFaOtraTEF(tefAnterior, tefNueva, documento, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult VerificarSiExisteLaTEF(string tef)
        {
            string cia = Session["CIA"].ToString();

            var result = AprobacionPagoManager.ValidarSiExisteLaTEF(tef, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult ObtenerSaldosVencidos(string fechaVence, string fechaInicio, string fechaFin, string proveedor)
        {
            proveedor = string.IsNullOrEmpty(proveedor) || proveedor == "0" ? null : proveedor;

            string cia = Session["CIA"].ToString();

            List<PROC_OBT_SALDOS_VENCIDOSResult> result = AprobacionPagoManager.ObtenerSaldosVencidos(fechaVence, fechaInicio, fechaFin, proveedor, cia);

            //var result = AprobacionPagoManager.ObtenerSaldosVencidos(fechaVence, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        public JsonResult ObtenerSaldosSinVencer(string fechaVence, string fechaInicio, string fechaFin, string proveedor)
        {
            proveedor = string.IsNullOrEmpty(proveedor) || proveedor == "0" ? null : proveedor;

            string cia = Session["CIA"].ToString();

            List<PROC_OBT_SALDOS_SIN_VENCERResult> result = AprobacionPagoManager.ObtenerSaldosSinVencer(fechaVence, fechaInicio, fechaFin, proveedor, cia);

            //var result = AprobacionPagoManager.ObtenerSaldosVencidos(fechaVence, cia);

            var JsonResult = Json(result, JsonRequestBehavior.AllowGet); JsonResult.MaxJsonLength = int.MaxValue; return JsonResult;

        }

        [HttpGet]
        public JsonResult GetArobacionesPago(
            string fechaInicio, string fechaFin, string proveedor,
            string transferencia, string moneda, string fechaVence,
            string tipo
        )
        {
            proveedor = string.IsNullOrEmpty(proveedor) || proveedor == "0" ? null : proveedor;
            transferencia = string.IsNullOrEmpty(transferencia) || transferencia == "0" ? null : transferencia;
            moneda = string.IsNullOrEmpty(moneda) || moneda == "0" ? null : moneda;
            fechaVence = string.IsNullOrEmpty(fechaVence) || fechaVence == "0" ? null : fechaVence;
            tipo = string.IsNullOrEmpty(tipo) || tipo == "0" ? null : tipo;
            string cia = Session["CIA"].ToString();
            List<PROC_OBT_APROBACION_PAGOResult> result = AprobacionPagoManager.GetAprobacionesPago(
                fechaInicio, fechaFin, proveedor,
                transferencia, moneda, fechaVence,
                tipo, cia
            );
            JsonResult json = new JsonResult();
            json.Data = result;
            json.MaxJsonLength = int.MaxValue;
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        [HttpPost]
        public JsonResult EditarLineasAprobacionBatch(
           string transferencia, string cuenta,
           List<Transferencia> lineas, string fechaProyectada,
           string aprobadorFinanciero, string aprobadorGerencia, string tefPorProveedor
       )
        {
            if (lineas.Count == 0)
            {
                return Json(2);
            }
            string cia = Session["CIA"].ToString();
            string usuario = Session["Usuario"].ToString();
            //JArray array = JArray.Parse(lineas);
            //string documento;
            //string proveedor;
            //string montoPago;
            string result;
            foreach (var item in lineas)
            {
                //documento = item.GetValue("documento").ToString();
                //proveedor = item.GetValue("proveedor").ToString();
                //montoPago = item.GetValue("montoPago").ToString();
                transferencia = tefPorProveedor == "S" ? item.transferencia : transferencia;
                //usuariotef = !string.IsNullOrEmpty(item.aprobador) ? item.aprobador : usuariotef;
                result = AprobacionPagoManager.EditarLineaAprobacion(
                    transferencia, item.proveedor,
                    item.documento, cuenta,
                    item.montoPago, fechaProyectada,
                    aprobadorFinanciero, aprobadorGerencia,
                    usuario, cia
                );
            }

            return Json(1);
        }

        [HttpPost]
        public JsonResult EditarLineaAprobacion(
            string transferencia, string proveedor,
            string documento, string cuenta,
            string montoPago, string fechaProyectada,
            string aprobadorFinanciero, string aprobadorGerencia
        )
        {
            if (string.IsNullOrEmpty(proveedor))
            {
                return Json(2); //
            }
            string cia = Session["CIA"].ToString();
            string usuario = Session["Usuario"].ToString();
            string result = AprobacionPagoManager.EditarLineaAprobacion(
                    transferencia, proveedor,
                    documento, cuenta,
                    montoPago, fechaProyectada,
                    aprobadorFinanciero, aprobadorGerencia,
                    usuario, cia
                );
            int.TryParse(result, out int res);
            return Json(res);
        }

        //[HttpPost]
        //public JsonResult EnviarAAprobar(string lineas)
        //{
        //    if (string.IsNullOrEmpty(lineas))
        //    {
        //        return Json(2);//
        //    }

        //    string cia = Session["CIA"].ToString();
        //    JArray array = JArray.Parse(lineas);
        //    string documento;
        //    string proveedor;
        //    string result;
        //    foreach (JObject item in array)
        //    {
        //        documento = item.GetValue("documento").ToString();
        //        proveedor = item.GetValue("proveedor").ToString();
        //        result = AprobacionPagoManager.EditarEnvioAprobacion(proveedor, documento, "S", cia);
        //    }
        //    return Json(1);
        //}

    }
}
