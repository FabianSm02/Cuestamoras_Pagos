using Plantilla.core.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plantilla.core.Manager
{
    public class ProveedorManager : Manager
    {
        public static List<PROC_OBT_TRANSFERENCIA_H2H_PROVEEDORResult> ObtenerTransferenciaH2HProveedor(string start, string end, string proveedor, string cuenta, string esquema)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_TRANSFERENCIA_H2H_PROVEEDORResult> result;
                try
                {
                    result = context.PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR(start, end, proveedor, cuenta, esquema).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }

        public static List<PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR_LINEASResult> ObtenerLineasTransferencias(decimal numeroOrigen, string esquema)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR_LINEASResult> result;
                try
                {
                    result = context.PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR_LINEAS(numeroOrigen, esquema).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_TRANSFERENCIA_H2H_PROVEEDOR_LINEAS", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }

        public static List<PROC_OBT_PROVEEDORESResult> ObtenerProveedores(string esquema)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_PROVEEDORESResult> result;
                try
                {
                    result = context.PROC_OBT_PROVEEDORES(esquema).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_PROVEEDORES", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }
        //public List<PROC_OBT_APROBADORESResult> ObtenerAprobadores(string esquema)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext())
        //    {
        //        List<PROC_OBT_APROBADORESResult> result;
        //        try
        //        {
        //            context.Connection.ConnectionString = getConexion();
        //            result = context.PROC_OBT_APROBADORES(esquema).ToList();

        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_OBT_APROBADORES", e);
        //            result = null;
        //        }
        //        context.Connection.Close();
        //        return result;
        //    }
        //}
        //public List<PROC_OBT_ENVIADORESResult> ObtenerEnviadores(string esquema)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext())
        //    {
        //        List<PROC_OBT_ENVIADORESResult> result;
        //        try
        //        {
        //            context.Connection.ConnectionString = getConexion();
        //            result = context.PROC_OBT_ENVIADORES(esquema).ToList();

        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_OBT_ENVIADORES", e);
        //            result = null;
        //        }
        //        context.Connection.Close();
        //        return result;
        //    }
        //}

        public static List<PROC_OBT_CUENTAS_BANCOSResult> ObtenerCuentasBancos(string esquema)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_CUENTAS_BANCOSResult> result;
                try
                {
                    result = context.PROC_OBT_CUENTAS_BANCOS(esquema).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_CUENTAS_BANCOS", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }

        public static string ActualizarEstadoParaReenviar(string referencia_softland, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_CAMBIAR_ESTADO_TXT_PARA_REENVIAR(referencia_softland, cia).ToString();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_EDI_CAMBIAR_ESTADO_TXT_PARA_REENVIAR", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }
        //public string ActualizarEstadoAprobador(int referencia_softland, string estado, string aprobador, string esquema, string modulo)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext())
        //    {
        //        string result;
        //        try
        //        {
        //            context.Connection.ConnectionString = getConexion();
        //            context.PROC_ACT_ESTADO_APROVADOR(referencia_softland, estado, aprobador, esquema, modulo);
        //            result = "1";

        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_ACT_ESTADO_APROVADOR", e);
        //            result = "0";
        //        }
        //        context.Connection.Close();
        //        return result;
        //    }
        //}
        //public string ActualizarEstadoEnviador(int referencia_softland, string estado, string envio, string esquema, string modulo)
        //{
        //    using (H2HContextDataContext context = new H2HContextDataContext())
        //    {
        //        string result;
        //        try
        //        {
        //            context.Connection.ConnectionString = getConexion();
        //            context.PROC_ACT_ESTADO_ENVIA(referencia_softland, estado, envio, esquema, modulo);
        //            result = "1";

        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_ACT_ESTADO_ENVIA", e);
        //            result = "0";
        //        }
        //        context.Connection.Close();
        //        return result;
        //    }
        //}

    }
}
