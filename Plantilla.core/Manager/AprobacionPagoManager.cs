using Plantilla.core.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plantilla.core.Manager
{
    public class AprobacionPagoManager : Manager
    {
         public static List<PROC_OBT_PROVEEDORESResult> GetProveedores(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    List<PROC_OBT_PROVEEDORESResult> result = context.PROC_OBT_PROVEEDORES(cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_PROVEEDORES", e);
                    return null;
                }
            }
        }
        public static List<PROC_OBT_APROBACION_PAGOResult> GetAprobacionesPago(
            string fechaInicio, string fechaFin, string proveedor,
            string transferencia, string moneda, string fechaVence,
            string tipo, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_APROBACION_PAGOResult> result = new List<PROC_OBT_APROBACION_PAGOResult>();
                try
                {
                    result = context.PROC_OBT_APROBACION_PAGO(
                        fechaInicio, fechaFin, proveedor,
                        transferencia, moneda, fechaVence,
                        tipo, cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_APROBACION_PAGO", e);
                    return null;
                }
            }
        }

        public static List<PROC_OBT_TRANSFERENCIASResult> GetTransferencias(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_TRANSFERENCIASResult> result = new List<PROC_OBT_TRANSFERENCIASResult>();
                try
                {
                    result = context.PROC_OBT_TRANSFERENCIAS(cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_TRANSFERENCIAS", e);
                    return null;
                }
            }
        }

        //public static List<PROC_OBT_USUARIOS_TEFResult> GetUsuariosTEF(string cia)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext(Connection))
        //    {
        //        List<PROC_OBT_USUARIOS_TEFResult> result = new List<PROC_OBT_USUARIOS_TEFResult>();
        //        try
        //        {
        //            result = context.PROC_OBT_USUARIOS_TEF(cia).ToList();
        //            return result;
        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_OBT_USUARIOS_TEF", e);
        //            return null;
        //        }
        //    }
        //}

        public static List<PROC_OBT_APROBADORES_PROYECCIONResult> GetAprobadores(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_APROBADORES_PROYECCIONResult> result = new List<PROC_OBT_APROBADORES_PROYECCIONResult>();
                try
                {
                    result = context.PROC_OBT_APROBADORES_PROYECCION(cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_APROBADORES_PROYECCION", e);
                    return null;
                }
            }
        }

        public static List<PROC_OBT_SALDOS_VENCIDOSResult> ObtenerSaldosVencidos(string fechaVence, string fechaInicio, string fechaFin, string proveedor, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_SALDOS_VENCIDOSResult> result = new List<PROC_OBT_SALDOS_VENCIDOSResult>();
                try
                {
                    result = context.PROC_OBT_SALDOS_VENCIDOS(fechaVence, fechaInicio, fechaFin, proveedor, cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_SALDOS_VENCIDOS", e);
                    return null;
                }
            }
        }

        public static List<PROC_OBT_SALDOS_SIN_VENCERResult> ObtenerSaldosSinVencer(string fechaVence, string fechaInicio, string fechaFin, string proveedor, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_SALDOS_SIN_VENCERResult> result = new List<PROC_OBT_SALDOS_SIN_VENCERResult>();
                try
                {
                    result = context.PROC_OBT_SALDOS_SIN_VENCER(fechaVence, fechaInicio, fechaFin, proveedor, cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_SALDOS_SIN_VENCER", e);
                    return null;
                }
            }
        }

        public static PROC_VERIFICAR_SI_LA_TEF_EXISTEResult ValidarSiExisteLaTEF(string tef, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_VERIFICAR_SI_LA_TEF_EXISTEResult result = new PROC_VERIFICAR_SI_LA_TEF_EXISTEResult();
                try
                {
                    result = context.PROC_VERIFICAR_SI_LA_TEF_EXISTE(tef, cia).First();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VERIFICAR_SI_LA_TEF_EXISTE", e);
                }
                return result;
            }
        }


        public static List<PROC_OBT_CUENTAS_BANCARIASResult> GetCuentasBancarias(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_CUENTAS_BANCARIASResult> result = new List<PROC_OBT_CUENTAS_BANCARIASResult>();
                try
                {
                    result = context.PROC_OBT_CUENTAS_BANCARIAS(cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_CUENTAS_BANCARIAS", e);
                    return null;
                }
            }
        }

        public static string EditarLineaAprobacion(
            string transferencia, string proveedor,
            string documento, string cuenta,
            string montoPago, string fechaProyectada,
            string aprobadorFinanciero, string aprobadorGerencia,
            string usuario, string cia
        )
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    decimal montopago2 = decimal.Parse(montoPago, new NumberFormatInfo() { NumberDecimalSeparator = "." });
                    result = context.PROC_EDI_APROBACION_PAGO(
                            transferencia, proveedor,
                            documento, cuenta,
                            montopago2, fechaProyectada,
                            aprobadorFinanciero, aprobadorGerencia,
                            usuario, cia
                        ).ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_EDI_APROBACION_PAGO", e);
                    return null;
                }
            }
        }

        //public static string EditarEnvioAprobacion(string proveedor, string documentos, string enviado, string cia)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext(Connection))
        //    {
        //        string result;
        //        try
        //        {
        //            result = context.PROC_EDI_ENVIO_APROBACION(proveedor, documentos, enviado, cia).ToString();
        //            return result;
        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_EDI_ENVIO_APROBACION", e);
        //            return null;
        //        }
        //    }
        //}
        public static string CambiarTEFaOtraTEF(string tefAnterior, string tefNueva, string documento, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_CAMBIAR_TEF_A_OTRA_TEF(tefAnterior, tefNueva, documento, cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_CAMBIAR_TEF_A_OTRA_TEF", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }

    }
}
