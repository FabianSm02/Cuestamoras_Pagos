using Plantilla.core.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plantilla.core.Manager
{
    public class CuentasManager : Manager
    {
        public List<PROC_OBT_FTP_DATAResult> ObtenerSFTP(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_FTP_DATAResult> result;
                try
                {
                    result = context.PROC_OBT_FTP_DATA(cia).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_FTP_DATA", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }

        public List<PROC_OBT_CUENTAS_BANCOS_SOFTLANDResult> ObtenerCuentasSoftland(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_CUENTAS_BANCOS_SOFTLANDResult> result;
                try
                {
                    result = context.PROC_OBT_CUENTAS_BANCOS_SOFTLAND(cia).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_CUENTAS_BANCOS_SOFTLAND", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }
        public string InsertarSFTP(string cuenta, int id, string moneda, string ip, int puerto, string usuario, string contrasena, 
            string llaveReceptor, string llaveEmisor, string cuentaSoftland, string dns, string plan)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                   result = context.PROC_INS_FTP_DATA(cuenta, id, moneda, ip, puerto, usuario, contrasena, llaveReceptor, llaveEmisor, cuentaSoftland, dns, plan).ToString();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_INS_FTP_DATA", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }
        public string EditarSFTP(string cuenta, int id, string moneda, string ip, int puerto, string usuario, string contrasena,
           string llaveReceptor, string llaveEmisor, string cuentaSoftland, string dns, string plan, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_FTP_DATA(cuenta, id, moneda, ip, puerto, usuario, contrasena, llaveReceptor, llaveEmisor, cuentaSoftland, dns, plan, cia).ToString();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_INS_FTP_DATA", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }

        public string EliminarSFTP(int id)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_ELIMINAR_CUENTA_SFTP(id).ToString();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_INS_UDT_FTP_DATA", e);
                    result = "0";
                }
                context.Connection.Close();
                return result;
            }
        }
    }
}