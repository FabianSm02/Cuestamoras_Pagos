using System;
using System.Collections.Generic;
using System.Linq;
using Plantilla.core.Entities;

namespace Plantilla.core.Manager
{
    public class LoginManager : Manager
    {


        public List<PROC_OBT_USUARIO_CIASResult> ObtenerUsuarioCIAS(string usuario)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                List<PROC_OBT_USUARIO_CIASResult> result;
                try
                {
                    result = context.PROC_OBT_USUARIO_CIAS(usuario).ToList();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_USUARIO_CIAS", e);
                    result = null;
                }
                context.Connection.Close();
                return result;
            }
        }

        public static PROC_VAL_USUARIO_ROLResult ValidarUsuarioRol(string usuario, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_VAL_USUARIO_ROLResult result = new PROC_VAL_USUARIO_ROLResult();
                try
                {
                    result = context.PROC_VAL_USUARIO_ROL(usuario, cia).First();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VAL_USUARIO_ROL", e);
                }
                return result;
            }
        }

        public static PROC_VAL_USUARIO_ROL_ADAResult ValidarUsuarioRolADA(string usuario, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_VAL_USUARIO_ROL_ADAResult result = new PROC_VAL_USUARIO_ROL_ADAResult();
                try
                {
                    result = context.PROC_VAL_USUARIO_ROL_ADA(usuario, cia).First();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VAL_USUARIO_ROL_ADA", e);
                }
                return result;
            }
        }

        public static PROC_OBT_CIAS_ADAResult ObtenerCIAS(string usuario)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_OBT_CIAS_ADAResult result = new PROC_OBT_CIAS_ADAResult();
                try
                {
                    result = context.PROC_OBT_CIAS_ADA(usuario).First();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_OBT_CIAS_ADA", e);
                }
                return result;
            }
        }

        public static PROC_LOGIN_OBT_CIASResult ObtenerCIASSinAZURE()
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                PROC_LOGIN_OBT_CIASResult result = new PROC_LOGIN_OBT_CIASResult();
                try
                {
                    result = context.PROC_LOGIN_OBT_CIAS().First();
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_LOGIN_OBT_CIAS", e);
                }
                return result;
            }
        }

        public static string ValidarUsuarioSoftland(string usuario, string contrasena)
        {

            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    string result = context.PROC_VAL_USUARIO_SOFTLAND(usuario, contrasena).First().VALID.ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VAL_USUARIO_SOFTLAND", e);
                    return null;
                }
            }
        }
        public static string ValidarUsuario(string usuario, string contrasena, string cia)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    string result = context.PROC_VAL_USUARIO(usuario, contrasena, cia).First().VALID.ToString();
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VAL_USUARIO", e);
                    return null;
                }
            }
        }

        public static string ValidarUsuarioActivo(string usuario)
        {
            using (H2HContextDataContext context = new H2HContextDataContext(Connection))
            {
                try
                {
                    string result = context.PROC_VAL_USUARIO_ACTIVO(usuario).First().ACTIVO;
                    return result;
                }
                catch (Exception ex)
                {
                    string e = ex.Message;
                    e = e.Replace(Environment.NewLine, " ");
                    e = e.Replace('"', ' ');
                    e = e.Replace("'", " ");
                    WriteLog("PROC_VAL_USUARIO_ACTIVO", e);
                    return null;
                }
            }
        }

        //public List <PROC_OBT_USUARIO_CIASResult> ObtenerUsuarioCIAS(string usuario)
        //{
        //    this.AsignarConectionStringPorLicencia(LoginManager.LicenciaConexion);

        //    using (H2HContextDataContext H2Hcontext = new H2HContextDataContext())
        //    {
        //        List <PROC_OBT_USUARIO_CIASResult> result;
        //        try
        //        {
        //            //H2Hcontext.Connection.ConnectionString = licencia;
        //            result = H2HContext.PROC_OBT_USUARIO_CIAS(usuario).ToList();
        //        }
        //        catch (Exception ex)
        //        {
        //            string e = ex.Message;
        //            e = e.Replace(Environment.NewLine, " ");
        //            e = e.Replace('"', ' ');
        //            e = e.Replace("'", " ");
        //            WriteLog("PROC_OBT_USUARIO_CIAS", e);
        //            result = null;
        //        }
        //        H2HContext.Connection.Close();
        //        return result;
        //    }
        //}
    }
}
