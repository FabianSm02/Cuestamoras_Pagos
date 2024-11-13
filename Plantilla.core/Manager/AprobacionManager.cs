using Plantilla.core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plantilla.core.Manager
{
    public class AprobacionManager : Manager
    {
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

        public static List<PROC_OBT_MENSAJES_DOCUMENTOResult> GetMensajesDocumento(string documento, string emisor, string receptor, string usuario, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    List<PROC_OBT_MENSAJES_DOCUMENTOResult> result = context.PROC_OBT_MENSAJES_DOCUMENTO(documento, emisor, receptor, usuario, cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_MENSAJES_DOCUMENTO", e);
                    return null;
                }
            }
        }

        public static string InsertarMensajeDocumento(string documento, string emisor, string receptor, string contenido, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    string result = context.PROC_INS_MENSAJE_DOCUMENTO(documento, emisor, receptor, contenido, cia).ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    {
                        string e = ex.Message;
                        e = e.Replace(Environment.NewLine, " ");
                        e = e.Replace('"', ' ');
                        e = e.Replace("'", " ");
                        WriteLog("PROC_INS_MENSAJE_DOCUMENTO", e);
                        return null; //en caso de fallar, retorna un -1
                    }
                }
            }

        }
        public static List<PROC_OBT_APROBACIONResult> GetAprobaciones(
            string fechaInicio, string fechaFin, string proveedor, string usuario,
            string aprobadorFinanciero, string aprobadorGerencial, string estado,
            string transferencia, string cia
        )
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_APROBACIONResult> result = new List<PROC_OBT_APROBACIONResult>();
                try
                {
                    result = context.PROC_OBT_APROBACION(
                        fechaInicio, fechaFin, proveedor, usuario,
                        aprobadorFinanciero, aprobadorGerencial, estado,
                        transferencia, cia
                    ).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_APROBACION", e);
                    return null;
                }
            }
        }

        public static List<PROC_OBT_APROBACION_LINEASResult> GetAprobacionLineas(string transferencia, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_APROBACION_LINEASResult> result = new List<PROC_OBT_APROBACION_LINEASResult>();
                try
                {
                    result = context.PROC_OBT_APROBACION_LINEAS(transferencia, cia).ToList();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_APROBACION_LINEAS", e);
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

        public static string EditarSeleccion(string documento, string proveedor, string notas, string seleccion, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_SELECCION_TRANSFERENCIA(documento, proveedor, notas, seleccion, cia).ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_EDI_SELECCION_TRANSFERENCIA", e);
                    return null;
                }
            }
        }

        //public static string EditarTransferencia(string transferencia, string notas, string estado, string usuario, string cia)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext(Connection))
        //    {
        //        string result;
        //        try
        //        {
        //            result = context.PROC_EDI_TRANSFERENCIA(transferencia, notas, estado, usuario, cia).ToString();
        //            return result;
        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_EDI_TRANSFERENCIA", e);
        //            return null;
        //        }
        //    }
        //}

        public static string AprobarTEF(string transferencia, string usuario, string notas, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_GENERAR_TEF_UNA_VEZ_APROBADA_DINAMICA_PARA_LLAMAR(transferencia, usuario, notas, cia).ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_GENERAR_TEF_UNA_VEZ_APROBADA_DINAMICA_PARA_LLAMAR", e);
                    return null;
                }
            }
        }

        public static string RechazarTEF(string transferencia, string notas, string usuario, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_TRANSFERENCIA_RECHAZAR(transferencia, notas, usuario, cia).ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_EDI_TRANSFERENCIA_RECHAZAR", e);
                    return null;
                }
            }
        }

        public static string CambiarUsuarioTEF(string tef, string aprobadorFinanciero, string aprobadorGerencial, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_CAMBIAR_USUARIO_TEF   (tef, aprobadorFinanciero, aprobadorGerencial, cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_CAMBIAR_USUARIO_TEF", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }
    }
}
