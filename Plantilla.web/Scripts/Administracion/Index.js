const options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
var dataJSONArrayYachts = [
    {
        "CLIENT": "BOAT-0001",
        "COUNTRY": "USA",
        "PASSPORT": "945587123",
        "PHONE": "57ft",
        "CORREO": "35ft",
        "NOMBRE": "Yacht Eclipse",
        "OWNER": "John Thompson",
        "STATUS": "Motor Yacht",
        "GENRE": "10ft",
        "AGE": "8",
        "MEMBRECIA": "30 single amp",
        "EXPIRED": "Diesel",
        "Actions": null
    },
    {
        "CLIENT": "BOAT-0004",
        "COUNTRY": "USA",
        "PASSPORT": "856145223",
        "PHONE": "74ft",
        "CORREO": "35ft",
        "NOMBRE": "Yacht Hope",
        "OWNER": "John Thompson",
        "STATUS": "Motor Yacht",
        "GENRE": "10ft",
        "AGE": "8",
        "MEMBRECIA": "30 single amp",
        "EXPIRED": "Diesel",
        "Actions": null
    }
]

var dataJSONArray = [
    {
        "ID": 1,
        "REQUIREMENT": "Passport",
        "OBSERVATION": "",
        "DATE": "18/10/21",
        "BY": "admin"
    }, {
        "ID": 2,
        "REQUIREMENT": "Contract",
        "OBSERVATION": "",
        "DATE": "18/10/21",
        "BY": "admin"
    }, {
        "ID": 2,
        "REQUIREMENT": "Photo",
        "OBSERVATION": "",
        "DATE": "18/10/21",
        "BY": "admin"
    }
]

var services = [
    {
        "CONSECUTIVO": "REQ-000001",
        "YACHT": "Yacht Eclipse",
        "SERVICE": "20 Hour Service Check",
        "DATE": "14/10/21",
        "STATUS": "Finished",
        "OBSERVATION": ""
    }, {
        "CONSECUTIVO": "REQ-000021",
        "YACHT": "Yacht Eclipse",
        "SERVICE": "Adjust Throttle Shifter",
        "DATE": "16/10/21",
        "STATUS": "In process",
        "OBSERVATION": ""
    }
]

var remitentes = [
    {
        "ID":"REM-0001",
        "NOMBRE": "Cachibaches Panama",
        "EMAIL": "cachpanama@email.com",
        "TELEFONO": "2222-1213",
        "DIRECCION": "San José, La Uruca",
        "ESTADO":"A"
    },
    {
        "ID": "REM-0002",
        "NOMBRE": "Cachibaches Guatemala",
        "EMAIL": "cachiguate@email.com",
        "TELEFONO": "2222-1214",
        "DIRECCION": "Heredia, Paseo Las Flores",
        "ESTADO": "A"
    },
    {
        "ID": "REM-0003",
        "NOMBRE": "Cachibaches Venezuela",
        "EMAIL": "cachivene@email.com",
        "TELEFONO": "2222-1215",
        "DIRECCION": "Alajuela, Alajuela",
        "ESTADO": "A"
    },
    {
        "ID": "REM-0004",
        "NOMBRE": "Cachibaches Salvador",
        "EMAIL": "cachisalva@email.com",
        "TELEFONO": "2222-2211",
        "DIRECCION": "San José, San Pedro",
        "ESTADO": "I"
    }
]
var destinatarios = [
    {
        "ID":"DES-0001",
        "NOMBRE": "Leonardo Solis",
        "EMAIL": "leosolis@gmail.com",
        "TELEFONO": "8765-1355",
        "DIRECCION": "Puntarenas, Jaco",
        "ESTADO":"A"
    },
    {
        "ID": "DES-0002",
        "NOMBRE": "Pablo Cesar Astua",
        "EMAIL": "aacea@email.com",
        "TELEFONO": "6255-4433",
        "DIRECCION": "Heredia, Paseo Las Flores",
        "ESTADO": "A"
    },
    {
        "ID": "DES-0003",
        "NOMBRE": "Carlos Perez Hurtado",
        "EMAIL": "calicheperez@email.com",
        "TELEFONO": "8694-0901",
        "DIRECCION": "Limón, Guapiles",
        "ESTADO": "A"
    },
    {
        "ID": "DES-0004",
        "NOMBRE": "Fernando Rodriguez",
        "EMAIL": "ferro@email.com",
        "TELEFONO": "8987-3325",
        "DIRECCION": "San José, San Pedro",
        "ESTADO": "I"
    }
]
var sitios = [
    {
        "ID":"SIT-0001",
        "NOMBRE": "LEHMAN ALAJUELA",
        "EMAIL": "alajuela@lehman.com",
        "TELEFONO": "2224-1355 ext 123",
        "DIRECCION": "Alajuela",
        "ESTADO":"A"
    },
    {
        "ID": "SIT-0002",
        "NOMBRE": "LEHMAN CARTAGO",
        "EMAIL": "cartago@lehman.com",
        "TELEFONO": "2224-1355 ext 124",
        "DIRECCION": "Cartago",
        "ESTADO": "A"
    },
    {
        "ID": "SIT-0003",
        "NOMBRE": "LEHMAN SAN JOSÉ",
        "EMAIL": "sanjose@lehman.com",
        "TELEFONO": "2224-1355 ext 125",
        "DIRECCION": "San José, Escazú",
        "ESTADO": "A"
    },
    {
        "ID": "SIT-0004",
        "NOMBRE": "LEHMAN HEREDIA",
        "EMAIL": "heredia@lehman.com",
        "TELEFONO": "2224-1355 ext 126",
        "DIRECCION": "Heredia",
        "ESTADO": "I"
    }
]
var vendors = [
    {
        "ID":"VEN-0001",
        "NOMBRE": "DHL",
        "EMAIL": "dhlcr@gmail.com",
        "TELEFONO": "2231-1355",
        "DIRECCION": "San José, Santa Ana",
        "ESTADO":"A"
    },
    {
        "ID": "VEN-0002",
        "NOMBRE": "UPS",
        "EMAIL": "upscr@email.com",
        "TELEFONO": "2244-4433",
        "DIRECCION": "Heredia, Santo domingo",
        "ESTADO": "A"
    },
    {
        "ID": "VEN-0003",
        "NOMBRE": "FEDEX",
        "EMAIL": "fedexcr@email.com",
        "TELEFONO": "8694-0901",
        "DIRECCION": "San José, Escazú",
        "ESTADO": "A"
    },
    {
        "ID": "VEN-0004",
        "NOMBRE": "YO VOY",
        "EMAIL": "yovoycr@email.com",
        "TELEFONO": "2211-3325",
        "DIRECCION": "San José, San Pedro",
        "ESTADO": "A"
    }
]

var depas = [
    {
        "ID": "DEP-0001",
        "NOMBRE": "Zapateria",
        "EMAIL": "depzap@gmail.com",
        "TELEFONO": "8694-0901",
        "DIRECCION": "San José, Escazú",
        "ESTADO": "A"
    },
    {
        "ID": "DEP-0002",
        "NOMBRE": "Cocina",
        "EMAIL": "depco@email.com",
        "TELEFONO": "8694-0901",
        "DIRECCION": "San José, Escazú",
        "ESTADO": "A"
    },
    {
        "ID": "DEP-0003",
        "NOMBRE": "Ferreteria",
        "EMAIL": "depfe@email.com",
        "TELEFONO": "8694-0901",
        "DIRECCION": "San José, Escazú",
        "ESTADO": "I"
    }
]

var tableremi = function () {
    // Private functions

    // demo initializer
    var demorem = function () {


        datatablerem = $('#kt_datatable_remitentes').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: remitentes,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: 'Id',
                width: 80
            }, {
                field: 'NOMBRE',
                title: 'Nombre',
                width: 200
            }, {
                field: 'DIRECCION',
                title: 'Dirección',
                width: 180
            }, {
                field: 'TELEFONO',
                title: 'Telefono',
                width: 180
            }, {
                field: 'EMAIL',
                title: 'Email',
                width: 180
                },
                {
                    field: 'ESTADO',
                    title: 'Estado',
                    width: 180,
                    template: function (row) {
                        var status = {
                            "A": { 'title': 'Activo', 'class': ' label-light-success' },
                            "I": { 'title': 'Inactivo', 'class': ' label-light-danger' },
                            6: { 'title': 'Danger', 'class': ' label-light-danger' },
                            7: { 'title': 'Warning', 'class': ' label-light-warning' },
                        };
                        return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO].class + ' label-inline">' + status[row.ESTADO].title + '</span>';
                    },},
                {
                field: 'Actions',
                title: 'Acciones',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                    template: function (row) {
                        var btn = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar detalles" onclick="showObservationsModal('${row.NOMBRE}','${row.EMAIL}','${row.TELEFONO}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>`
                        if (row.ESTADO == 'A') {
                            btn += `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar" onclick="ActivarUnaLista('${row.ESTADO}', 'remitente')" >
                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                         <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                     </g>
                                </svg><!--end::Svg Icon--></span>
                            </span>
                        </a >
`
                        } else {
                            btn += ` <a href = "javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title = "Desactivar" onclick = "ActivarUnaLista('${row.ESTADO}', 'remitente')" >
                             <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                        </a >`

                        }
                    return btn;
                },
            }],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demorem();
        }, reload: function () {
            datatablerem.reload()
        },
        reset: function () {
            datatablerem.destroy()
            demorem()
        }
    };
}();
var tabledesti = function () {
    // Private functions

    // demo initializer
    var demodesti = function () {


        datatabledesti = $('#kt_datatable_destinatarios').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: destinatarios,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: 'Id',
                width: 80
            }, {
                field: 'NOMBRE',
                title: 'Nombre',
                width: 200
            }, {
                field: 'DIRECCION',
                title: 'Dirección',
                width: 180
            }, {
                field: 'TELEFONO',
                title: 'Telefono',
                width: 180
            }, {
                field: 'EMAIL',
                title: 'Email',
                width: 180
            },
            {
                field: 'ESTADO',
                title: 'Estado',
                width: 180,
                template: function (row) {
                    var status = {
                        "A": { 'title': 'Activo', 'class': ' label-light-success' },
                        "I": { 'title': 'Inactivo', 'class': ' label-light-danger' },
                        6: { 'title': 'Danger', 'class': ' label-light-danger' },
                        7: { 'title': 'Warning', 'class': ' label-light-warning' },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO].class + ' label-inline">' + status[row.ESTADO].title + '</span>';
                },
            },
            {
                field: 'Actions',
                title: 'Acciones',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var btn = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar detalles" onclick="showObservationsModal('${row.NOMBRE}','${row.EMAIL}','${row.TELEFONO}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>`
                    if (row.ESTADO == 'A') {
                        btn += `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar" onclick="ActivarUnaLista('${row.ESTADO}', 'destinatario')" >
                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                         <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                     </g>
                                </svg><!--end::Svg Icon--></span>
                            </span>
                        </a >
`
                    } else {
                        btn += ` <a href = "javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title = "Desactivar" onclick = "ActivarUnaLista('${row.ESTADO}', 'destinatario')" >
                             <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                        </a >`

                    }
                    return btn;
                },
            }],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demodesti();
        }, reload: function () {
            datatabledesti.reload()
        },
        reset: function () {
            datatabledesti.destroy()
            demodesti()
        }
    };
}();
var tableven = function () {
    // Private functions

    // demo initializer
    var demoven = function () {


        datatabledesti = $('#kt_datatable_vendors').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: vendors,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: 'Id',
                width: 80
            }, {
                field: 'NOMBRE',
                title: 'Nombre',
                width: 200
            }, {
                field: 'DIRECCION',
                title: 'Dirección',
                width: 180
            }, {
                field: 'TELEFONO',
                title: 'Telefono',
                width: 180
            }, {
                field: 'EMAIL',
                title: 'Email',
                width: 180
            },
            {
                field: 'ESTADO',
                title: 'Estado',
                width: 180,
                template: function (row) {
                    var status = {
                        "A": { 'title': 'Activo', 'class': ' label-light-success' },
                        "I": { 'title': 'Inactivo', 'class': ' label-light-danger' },
                        6: { 'title': 'Danger', 'class': ' label-light-danger' },
                        7: { 'title': 'Warning', 'class': ' label-light-warning' },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO].class + ' label-inline">' + status[row.ESTADO].title + '</span>';
                },
            },
            {
                field: 'Actions',
                title: 'Acciones',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var btn = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar detalles" onclick="showObservationsModal('${row.NOMBRE}','${row.EMAIL}','${row.TELEFONO}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>`
                    if (row.ESTADO == 'A') {
                        btn += `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar" onclick="ActivarUnaLista('${row.ESTADO}', 'vendor')" >
                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                         <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                     </g>
                                </svg><!--end::Svg Icon--></span>
                            </span>
                        </a >
`
                    } else {
                        btn += ` <a href = "javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title = "Desactivar" onclick = "ActivarUnaLista('${row.ESTADO}', 'vendor')" >
                             <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                        </a >`

                    }
                    return btn;
                },
            }],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demoven();
        }, reload: function () {
            datatableven.reload()
        },
        reset: function () {
            datatableven.destroy()
            demodesti()
        }
    };
}();
var tablesit = function () {
    // Private functions

    // demo initializer
    var demosit = function () {


        datatabledesti = $('#kt_datatable_sitios').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: sitios,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: 'Id',
                width: 80
            }, {
                field: 'NOMBRE',
                title: 'Nombre',
                width: 200
            }, {
                field: 'DIRECCION',
                title: 'Dirección',
                width: 180
            }, {
                field: 'TELEFONO',
                title: 'Telefono',
                width: 180
            }, {
                field: 'EMAIL',
                title: 'Email',
                width: 180
            },
            {
                field: 'ESTADO',
                title: 'Estado',
                width: 180,
                template: function (row) {
                    var status = {
                        "A": { 'title': 'Activo', 'class': ' label-light-success' },
                        "I": { 'title': 'Inactivo', 'class': ' label-light-danger' },
                        6: { 'title': 'Danger', 'class': ' label-light-danger' },
                        7: { 'title': 'Warning', 'class': ' label-light-warning' },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO].class + ' label-inline">' + status[row.ESTADO].title + '</span>';
                },
            },
            {
                field: 'Actions',
                title: 'Acciones',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var btn = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar detalles" onclick="showObservationsModal('${row.NOMBRE}','${row.EMAIL}','${row.TELEFONO}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>`
                    if (row.ESTADO == 'A') {
                        btn += `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar" onclick="ActivarUnaLista('${row.ESTADO}', 'sitio')" >
                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                         <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                     </g>
                                </svg><!--end::Svg Icon--></span>
                            </span>
                        </a >
`
                    } else {
                        btn += ` <a href = "javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title = "Desactivar" onclick = "ActivarUnaLista('${row.ESTADO}', 'sitio')" >
                             <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                        </a >`

                    }
                    return btn;
                },
            }],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demosit();
        }, reload: function () {
            datatablesit.reload()
        },
        reset: function () {
            datatablesit.destroy()
            demosit()
        }
    };
}();

var tabledep = function () {
    // Private functions

    // demo initializer
    var demodep = function () {


        datatabledesti = $('#kt_datatable_depas').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: depas,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: 'Id',
                width: 80
            }, {
                field: 'NOMBRE',
                title: 'Nombre',
                width: 200
            }, {
                field: 'DIRECCION',
                title: 'Dirección',
                width: 180
            }, {
                field: 'TELEFONO',
                title: 'Telefono',
                width: 180
            }, {
                field: 'EMAIL',
                title: 'Email',
                width: 180
            },
            {
                field: 'ESTADO',
                title: 'Estado',
                width: 180,
                template: function (row) {
                    var status = {
                        "A": { 'title': 'Activo', 'class': ' label-light-success' },
                        "I": { 'title': 'Inactivo', 'class': ' label-light-danger' },
                        6: { 'title': 'Danger', 'class': ' label-light-danger' },
                        7: { 'title': 'Warning', 'class': ' label-light-warning' },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO].class + ' label-inline">' + status[row.ESTADO].title + '</span>';
                },
            },
            {
                field: 'Actions',
                title: 'Acciones',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    var btn = `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar detalles" onclick="showObservationsModal('${row.NOMBRE}','${row.EMAIL}','${row.TELEFONO}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>`
                    if (row.ESTADO == 'A') {
                        btn += `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar" onclick="ActivarUnaLista('${row.ESTADO}', 'sitio')" >
                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                         <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                     </g>
                                </svg><!--end::Svg Icon--></span>
                            </span>
                        </a >
`
                    } else {
                        btn += ` <a href = "javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title = "Desactivar" onclick = "ActivarUnaLista('${row.ESTADO}', 'sitio')" >
                             <span class="svg-icon svg-icon-success svg-icon-2x">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"/>
                                        <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                        <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                    </g>
                                </svg>
                            </span>
                        </a >`

                    }
                    return btn;
                },
            }],
        });
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demodep();
        }, reload: function () {
            tabledep.reload()
        },
        reset: function () {
            tabledep.destroy()
            demodep()
        }
    };
}();
function ActivarUnaLista(estado, tipo) {
    console.log(estado)
    let NuevoListaTexto = (estado == 'A' ? "desactivar" : "activar")
    Swal.fire({
        text: `¿Desea ${NuevoListaTexto} este ${tipo}?`,
        icon: "success",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-primary",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            NuevoListaTexto = estado == "A" ? "desactivado" : "activado"
            toastr.success(`${tipo} ${NuevoListaTexto}`, "Éxito", toastrOptions)


        }
    });
}

var KTDatatableDataLocalDemo = function () {
    // Private functions

    // demo initializer
    var demo = function () {


        datatablereq = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'ID',
                title: ' ',
                selector: true,
                width: 10
            }, {
                field: 'REQUIREMENT',
                title: 'Requirement',
                width: 200
            }, {
                field: 'OBSERVATION',
                title: 'Observations',
                width: 180
            }, {
                field: 'DATE',
                title: 'Registered',
                type: 'date',
                format: 'MM/DD/YYYY',
                width: 100
            },
            {
                field: 'BY',
                title: 'Registered by',
            }, {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                overflow: 'visible',
                autoHide: false,
                template: function (row) {
                    return `
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details" onclick="showObservationsModal('${row.REQUIREMENT}','${row.OBSERVATION}');">
	                            <span class="svg-icon svg-icon-md">
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	                                        <rect x="0" y="0" width="24" height="24"/>
	                                        <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero"\ transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
	                                        <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
	                                    </g>
	                                </svg>
	                            </span>
							</a>
						`;
                },
            }],
        });

        $('#kt_datatable_search_status').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demo();
        }, reload: function () {
            datatablereq.reload()
        },
        reset: function () {
            datatablereq.destroy()
            demo()
        }
    };
}();

var KTDatatableDataLocalDemoYachts = function () {
    // Private functions

    // demo initializer
    var demo = function () {


        datatableyachts = $('#kt_datatable_yachts').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArrayYachts,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [
                {
                    field: 'CLIENT',
                    title: 'Boat',
                }, {
                    field: 'NOMBRE',
                    title: 'Name',
                }, {
                    field: 'PASSPORT',
                    title: 'Registry',
                }, {
                    field: 'OWNER',
                    title: 'Owner',
                }, {
                    field: 'STATUS',
                    title: 'Type',
                }, {
                    field: 'PHONE',
                    title: 'Length',
                    width: 60
                }, {
                    field: 'CORREO',
                    title: 'Beam',
                    width: 60
                }, {
                    field: 'GENRE',
                    title: 'Draft',
                    width: 60
                }, {
                    field: 'AGE',
                    title: 'Displacement',
                    template: function (row) {
                        return `${row.AGE} tons`
                    }
                }, {
                    field: 'MEMBRECIA',
                    title: 'Electrical',
                    autoHide: false,
                    // callback function support for column rendering

                }, {
                    field: 'EXPIRED',
                    title: 'Fuel',
                }, {
                    field: 'Actions',
                    title: 'Actions',
                    sortable: false,
                    width: 125,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        return `\
	                        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Eliminar"  onclick="showDeleteModal('${row.NOMBRE} ','${row.CLIENT}');">\
	                            <span class="svg-icon svg-icon-md svg-icon-primary">\
	                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
	                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
	                                        <rect x="0" y="0" width="24" height="24"/>\
	                                        <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
	                                        <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
	                                    </g>\
	                                </svg>\
	                            </span>\
	                        </a>\
	                    `;
                    },
                }],
        });

        $('#kt_datatable_search_status').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // Public functions
        init: function () {
            // init dmeo
            demo();
        },
        reload: function () {
            datatableyachts.reload()
        },
        reset: function () {
            datatableyachts.destroy()
            demo()
        }
    };
}();

var KTDatatableDataLocalDemoServices = function () {
    // Private functions

    // demo initializer
    var demo = function () {


        datatable = $('#kt_datatable_services').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: services,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch',
            },

            // columns definition
            columns: [{
                field: 'CONSECUTIVO',
                title: 'Id',
                width: 120
            }, {
                field: 'YACHT',
                title: 'Yacht',
                width: 120
            }, {
                field: 'SERVICE',
                title: 'Service',
            }, {
                field: 'DATE',
                title: 'Registered',
                type: 'date',
                format: 'MM/DD/YYYY',
                width: 100
            }, {
                field: 'OBSERVATION',
                title: 'Observations',
                width: 180
            }],
        });

        $('#kt_datatable_search_status').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_type').on('change', function () {
            datatable.search($(this).val().toLowerCase(), 'Type');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };
    return {
        // Public functions
        init: function () {
            // init dmeo
            demo();
        },
        reload: function () {
            datatable.reload()
        },
        reset: function () {
            datatable.destroy()
            demo()
        }
    };
}();


function showObservationsModal(nombre, email, telefono) {
    $("#AgregarAnotacion").modal('toggle');
    $("#RequisitoModal").val(nombre)
    $("#emailmod").val(email)
    $("#telefonomod").val(telefono)
}

function saveobs() {
    $("#AgregarAnotacion").modal('toggle');
    toastr.success('Remitente actualizado con éxito', 'Éxito', options)
}

function deleteRegistro(id) {
    for (var i = dataJSONArrayYachts.length - 1; i >= 0; i--) {
        if (dataJSONArrayYachts[i].CLIENT == id) {
            dataJSONArrayYachts.splice(i, 1);
        }
    }
    $("#deleteModal").modal("hide")
    KTDatatableDataLocalDemoYachts.reset()
    toastr.success('Yacht deleted successfully', 'Success', options)
}
function cambiartab(tab) {
    console.log(tab)
    switch (tab) {
        case 1: {
            tableremi.init();
            $("#div1").removeClass("d-none")
            $("#div2").addClass("d-none")
            $("#div3").addClass("d-none")
            $("#div4").addClass("d-none")
            $("#div5").addClass("d-none")
            $("#div6").addClass("d-none")
            break;
        }
        case 2: {
            tabledesti.init();
            $("#div2").removeClass("d-none")
            $("#div1").addClass("d-none")
            $("#div3").addClass("d-none")
            $("#div4").addClass("d-none")
            $("#div5").addClass("d-none")
            $("#div6").addClass("d-none")
            break;
        }
        case 3: {
            tableven.init();
            $("#div3").removeClass("d-none")
            $("#div1").addClass("d-none")
            $("#div2").addClass("d-none")
            $("#div4").addClass("d-none")
            $("#div5").addClass("d-none")
            $("#div6").addClass("d-none")
            break;
        }
        case 4: {
            $("#div4").removeClass("d-none")
            tablesit.init();
            $("#div1").addClass("d-none")
            $("#div3").addClass("d-none")
            $("#div2").addClass("d-none")
            $("#div5").addClass("d-none")
            $("#div6").addClass("d-none")
            break;
        }
        case 5: {
            tabledep.init();
            $("#div5").removeClass("d-none")
            //KTDatatableDataLocalDemoYachts.init();
            $("#div1").addClass("d-none")
            $("#div3").addClass("d-none")
            $("#div2").addClass("d-none")
            $("#div4").addClass("d-none")
            $("#div6").addClass("d-none")
            break;
        }
        case 6: {
            $("#div6").removeClass("d-none")
            KTDatatableDataLocalDemoServices.init();
            $("#div1").addClass("d-none")
            $("#div3").addClass("d-none")
            $("#div2").addClass("d-none")
            $("#div4").addClass("d-none")
            $("#div5").addClass("d-none")
            break;
        }
    }

}

function reformatDate(dateStr) {
    dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0].substring(2); //ex out: "18/01/10"
}

$("#addservice").click(function (e) {
    e.preventDefault();
    let yacht = $("#yacht").val()
    let service = $("#service").val()
    let date = $("#dateservice").val()
    date = reformatDate(date)
    let objtemp = {
        "CONSECUTIVO": "REQ-000056",
        "YACHT": yacht,
        "SERVICE": service,
        "DATE": date,
        "STATUS": "Requested",
        "OBSERVATION": ""
    }
    services.push(objtemp)

    KTDatatableDataLocalDemoServices.reset()
    toastr.success('Your services has been requested successfully', 'Success', options)
    return false;
});
$("#addyacht").click(function (e) {
    e.preventDefault();
    let yacht = $("#yname").val()
    let registry = $("#yregistry").val()
    let type = $("#ytype").val()
    let leng = $("#ylength").val()
    let beam = $("#ybeam").val()
    let draft = $("#ydraft").val()
    let displacement = $("#ydisplacement").val()
    let electrical = $("#yelectrical").val()
    let fuel = $("#yfuel").val()

    let objtemp = {
        "CLIENT": "BOAT-0041",
        "COUNTRY": "USA",
        "PASSPORT": registry,
        "PHONE": leng + "ft",
        "CORREO": beam + "ft",
        "NOMBRE": yacht,
        "OWNER": "John Thompson",
        "STATUS": type,
        "GENRE": draft + "ft",
        "AGE": displacement,
        "MEMBRECIA": electrical,
        "EXPIRED": fuel,
        "Actions": null
    }
    dataJSONArrayYachts.push(objtemp)

    KTDatatableDataLocalDemoYachts.reset()
    toastr.success('Yacht saved successfully', 'Success', options)
    return false;
});

function showDeleteModal(nombre, cliente) {

    $("#deleteModalLabel").text(`Delete client`)
    $("#deleteText").text(`Do you really want to delete this boat ${nombre}?`)
    $("#deleteButton").val(cliente)
    $("#deleteModal").modal("show")
}

function actualizarNombre() {

    var name = $("#fname").val()
    $("#fname2").val(name)
    $("#fname3").val(name)
    $("#fname4").val(name)
    $("#fname5").val(name)
}
function actualizarPassport() {

    var pass = $("#passport").val()
    $("#passport1").val(pass)
    $("#passport2").val(pass)
    $("#passport3").val(pass)
    $("#passport4").val(pass)
    $("#passport5").val(pass)
}

jQuery(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name')
    const passport = urlParams.get('passport')
    cambiartab(1)
    if (name != null && name !== undefined) {

        $("#fname").val(name)
        $("#fname").attr("disabled", true);
        $("#fname2").val(name)
        $("#fname3").val(name)
        $("#fname4").val(name)
        $("#fname5").val(name)
    }
    if (passport != null && passport !== undefined) {

        $("#passport").val(passport)
        $("#passport").attr("disabled", true);
        $("#passport1").val(passport)
        $("#passport2").val(passport)
        $("#passport3").val(passport)
        $("#passport4").val(passport)
        $("#passport5").val(passport)
    }

});
