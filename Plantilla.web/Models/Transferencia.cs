using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Plantilla.web.Models
{
    public class Transferencia
    {
        public string documento { get; set; }
        public string montoPago { get; set; }
        public string proveedor { get; set; }
        public string transferencia { get; set; }
        public string aprobador { get; set; }

    }
}