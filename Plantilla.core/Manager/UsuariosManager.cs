using Plantilla.core.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plantilla.core.Manager
{
    public class UsuariosManager : Manager
    {
        public static List<PROC_OBT_SELECT_USUARIOS_INSResult> GetUsuariosSelectInsertar(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_SELECT_USUARIOS_INSResult> result = new List<PROC_OBT_SELECT_USUARIOS_INSResult>();
                try
                {
                    result = context.PROC_OBT_SELECT_USUARIOS_INS(cia).ToList();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_SELECT_USUARIOS_INS", e);
                }
                return result;
            }
        }
        public static List<PROC_OBT_SELECT_USUARIOS_EDIResult> GetUsuariosSelectEditar(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_SELECT_USUARIOS_EDIResult> result = new List<PROC_OBT_SELECT_USUARIOS_EDIResult>();
                try
                {
                    result = context.PROC_OBT_SELECT_USUARIOS_EDI(cia).ToList();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_SELECT_USUARIOS_EDI", e);
                }
                return result;
            }
        }
        public static PROC_OBT_USUARIO_PERMISOSResult GetPermisosPorUsuario(int rol, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_OBT_USUARIO_PERMISOSResult result = new PROC_OBT_USUARIO_PERMISOSResult();
                try
                {
                    result = context.PROC_OBT_USUARIO_PERMISOS(rol, cia).FirstOrDefault();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_USUARIO_PERMISOS", e);
                }
                return result;
            }
        }

        public static string EditarPermisos(
               string rol,
               string PAGOS_PROYECTADOS,
               string APROBACION_PAGOS,
               string PAGO_PROVEEDORES,
               string CONFIG_SFTP,
               string ADMINISTRACION_USUARIOS,
               string cia
           )
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_PERMISOS(
                            Convert.ToInt32(rol),
                            Convert.ToInt32(PAGOS_PROYECTADOS),
                            Convert.ToInt32(APROBACION_PAGOS),
                            Convert.ToInt32(PAGO_PROVEEDORES),
                            Convert.ToInt32(CONFIG_SFTP),
                            Convert.ToInt32(ADMINISTRACION_USUARIOS),
                            cia
                        ).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    result = null;
                    WriteLog("PROC_EDI_PERMISOS", e);
                }
                return result;
            }
        }

        public static List<PROC_OBT_PERMISOSResult> GetPermisos(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_PERMISOSResult> result = new List<PROC_OBT_PERMISOSResult>();
                try
                {
                    result = context.PROC_OBT_PERMISOS(cia).ToList();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_PERMISOS", e);
                }
                return result;
            }
        }
        public static string InsertarUsuario(string usuario, string rol, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_INS_USUARIO(usuario, Convert.ToInt32(rol), cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    result = null;
                    WriteLog("PROC_INS_USUARIO", e);
                }
                return result;
            }
        }

        public static string EditarUsuario(string usuario, string rol, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDI_USUARIO(usuario, Convert.ToInt32(rol), cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    result = null;
                    WriteLog("PROC_EDI_USUARIO", e);
                }
                return result;
            }
        }
        public static List<PROC_OBT_USUARIOSResult> ObtenerUsuarios(string esquema)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_USUARIOSResult> result;
                try
                {
                    result = context.PROC_OBT_USUARIOS(esquema).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_USUARIOS", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }
        public static List<PROC_OBT_ROLESResult> ObtenerRoles(string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_ROLESResult> result;
                try
                {
                    result = context.PROC_OBT_ROLES(cia).ToList();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_ROLES", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }
        public static List<PROC_OBT_CUENTAS_BANCOS_SOFTLANDResult> ObtenerCuentasSoftland(string cia)
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
        public static string EditarRol(int rol, string descripcion, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_EDIT_DESCRIPCION_ROL(Convert.ToInt32(rol), descripcion, cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    result = null;
                    WriteLog("PROC_EDI_USUARIO", e);
                }
                return result;
            }
        }
        public static string ActualizarEstadoUsuario(string usuario, string estado, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                    result = context.PROC_UDT_ESTADO_USUARIO(usuario, estado, cia).ToString();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    result = null;
                    WriteLog("PROC_UDT_ESTADO_USUARIO", e);
                }
                return result;
            }
        }

        public static string InsertarRol(string descripcion, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                string result;
                try
                {
                   result = context.PROC_INS_ROL(descripcion, cia).ToString();

                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_INS_ROL", e);
                    result = null;
                }
                return result;
            }
        }
    }
}