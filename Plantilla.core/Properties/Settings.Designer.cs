﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Plantilla.core.Properties {
    
    
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.VisualStudio.Editors.SettingsDesigner.SettingsSingleFileGenerator", "17.8.0.0")]
    internal sealed partial class Settings : global::System.Configuration.ApplicationSettingsBase {
        
        private static Settings defaultInstance = ((Settings)(global::System.Configuration.ApplicationSettingsBase.Synchronized(new Settings())));
        
        public static Settings Default {
            get {
                return defaultInstance;
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.ConnectionString)]
        [global::System.Configuration.DefaultSettingValueAttribute("Data Source=10.0.0.51\\URBANISMO;Initial Catalog=PS_H2H_PROYECCION;Persist Securit" +
            "y Info=True;User ID=publicaciones;Password=S3rv1c10sPubl1c4d0s*;Application Name" +
            "=PS_H2H_PROYECCION")]
        public string H2H {
            get {
                return ((string)(this["H2H"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.ConnectionString)]
        [global::System.Configuration.DefaultSettingValueAttribute("Data Source=190.106.76.120,1434;Initial Catalog=H2H;Persist Security Info=True;Us" +
            "er ID=Publicaciones;Password=S3rv1c10sPubl1c4d0s*")]
        public string Desarrollo {
            get {
                return ((string)(this["Desarrollo"]));
            }
        }
        
        [global::System.Configuration.ApplicationScopedSettingAttribute()]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.Configuration.SpecialSettingAttribute(global::System.Configuration.SpecialSetting.ConnectionString)]
        [global::System.Configuration.DefaultSettingValueAttribute("Data Source=190.106.76.120,1434;Initial Catalog=H2H;Persist Security Info=True;Us" +
            "er ID=publicaciones;Password=S3rv1c10sPubl1c4d0s*")]
        public string H2HConnectionString1 {
            get {
                return ((string)(this["H2HConnectionString1"]));
            }
        }
    }
}