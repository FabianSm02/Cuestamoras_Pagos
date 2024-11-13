const ESTADO = {
    "N": { 'titulo': 'Sin aprobar', 'class': ' label-light-warning' },
    "T": { 'titulo': 'Aprobado', 'class': ' label-light-success' },
    "R": { 'titulo': 'Rechazado', 'class': ' label-light-danger' },
    "V": { 'titulo': 'Varios', 'class': ' label-light-info' }
};

let lineasParaBatch = []

//filtros
let fechaInicio = $('#FechaInicio').val().split('/').reverse().join('-')
let fechaFin = $('#FechaFinal').val().split('/').reverse().join('-')
let proveedor = $('#FiltroProveedor').val()
let transferencia = $('#FiltroTransferencia').val()
let estado = $('#FiltroEstado').val() === '0' ? '' : $('#FiltroEstado').val()
let aprobador = $('#FiltroAprobador').val()
//lineas
let lineasBatch
const KTDataTableAprobacion = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_aprobador').KTDatatable({

            data: {
                type: 'remote',
                source: {
                    read: {
                        url: `${RURL}/GetAprobaciones`,
                        method: 'GET',
                        contentType: 'application/json',
                        params: {
                            fechaInicio,
                            fechaFin,
                            proveedor,
                            transferencia,
                            estado,
                            aprobadorFinanciero: aprobador,
                            aprobadorGerencial: aprobador
                        }
                    }
                },
                pageSize: 10,
                saveState: false
            },

            // layout definition
            layout: {
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
                spinner: {
                    message: 'Cargando...'
                }
            },

            rows: {
                autoHide: false,
            },

            //subtable
            detail: {
                title: 'Ver detalles',
                content: subTableInit,
            },

            translate: {
                records: {
                    processing: 'Por favor espere...',
                    noRecords: 'Sin resultados.'
                },
                toolbar: {
                    pagination: {
                        items: {
                            info: 'Mostrando {{start}} - {{end}} de {{total}} registros.'
                        }
                    }
                }
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query_Aprobacion'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [

                {
                    field: 'LINEA',
                    title: '',
                    sortable: false,
                    width: 25,
                    textAlign: 'center',
                },
                {
                    field: 'CONSECUTIVO',
                    title: '',
                    sortable: false,
                    width: 30,
                    type: 'number',
                    selector: {
                        class: ''
                    },
                },
                //{
                //    field: 'CONSECUTIVO',
                //    title: '#',
                //    sortable: false,
                //    width: 30,
                //    type: 'number',
                //    selector: {
                //        class: ''
                //    },
                //},
                {
                    field: 'TRANSFERENCIA',
                    title: 'Transferencia',
                    width: 120
                }, {
                    field: 'FECHA',
                    title: 'Fecha',
                    width: 90
                }, {
                    field: 'BANCO',
                    title: 'Banco',
                    width: 80
                }, {
                    field: 'CUENTA',
                    title: 'Cuenta',
                    width: 110
                },
                //{
                //    field: 'USUARIO_TEF',
                //    title: 'Usuario Softland',
                //    width: 180
                //},
                {
                    field: 'MONEDA',
                    title: 'Moneda',
                    width: 70
                }, {
                    field: 'A_PAGAR',
                    title: 'A pagar',
                    width: 95,
                    template: function (row) {
                        return row.A_PAGAR_MILES
                    }
                }, {
                    field: 'APROBADOR_GERENCIAL_USUARIO',
                    title: 'Gerencia',
                    width: 120,
                    template: function (row) {
                        if (row.APROBADOR_GERENCIAL_USUARIO == row.USUARIO_APROBADOR) {
                            return `<span class="text-success">${row.APROBADOR_GERENCIAL_USUARIO}</span>`
                        }
                        else
                        {
                            return `<span>${row.APROBADOR_GERENCIAL_USUARIO}</span>`
                        }
                    }
                }, {
                    field: 'APROBADOR_FINANCIERO_USUARIO',
                    title: 'Financiero',
                    width: 120,
                    template: function (row) {
                        if (row.APROBADOR_FINANCIERO_USUARIO == row.USUARIO_APROBADOR) {
                            return `<span class="text-success">${row.APROBADOR_FINANCIERO_USUARIO}</span>`
                        }
                        else {
                            return `<span>${row.APROBADOR_FINANCIERO_USUARIO}</span>`
                        }
                    }
                }, {
                    field: 'ESTADO',
                    title: 'Estado',
                    width: 100,
                    template: function (row) {
                        return '<span class="label label-lg font-weight-bold' + ESTADO[row.ESTADO].class + ' label-inline">' + ESTADO[row.ESTADO].titulo + '</span>';
                    }
                }, {
                    field: 'CREADOR',
                    title: 'Creador',
                    width: 90,
                    template: function (row) {
                        if (row.CREADOR == row.USUARIO_APROBADOR) {
                            return `<span class="text-success">${row.CREADOR}</span>`
                        }
                        else {
                            return `<span>${row.CREADOR}</span>`
                        }
                    }
                },
                {
                    field: 'Actions',
                    title: APROBACION_PAGOS ? 'Acciones' : '',
                    width: APROBACION_PAGOS ? 130 : 5,
                    sortable: false,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        if (!APROBACION_PAGOS) {
                            return ''
                        }
                        let btns = ``
                        let aprobadores = [row.APROBADOR_GERENCIAL_USUARIO.toUpperCase(), row.APROBADOR_FINANCIERO_USUARIO.toUpperCase()]
                      //  if ((row.ESTADO == 'N' || row.ESTADO == null) && aprobadores.includes(usuarioSesion) && usuarioSesion != row.CREADOR) {
                        if ((row.ESTADO == 'N' || row.ESTADO == null) && APROBACION_PAGOS == '1') {
                            btns += `<a onclick="ValidarAprobarTransferencia('${row.TRANSFERENCIA}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Aprobar">
                                    <span class="svg-icon svg-icon-success svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-04-19-122603/theme/html/demo1/dist/../src/media/svg/icons/Code/Done-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
							    </a>
                                <a onclick="ValidarRechazarTransferencia('${row.TRANSFERENCIA}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Rechazar">
                                    <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
							    </a>`
                        }
                        if (row.ESTADO == 'N') {
                            btns += `<a onclick="CambiarUsuario('${row.APROBADOR_FINANCIERO_USUARIO}','${row.APROBADOR_GERENCIAL_USUARIO}','${row.TRANSFERENCIA}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Cambiar usuario">
                                     <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/User.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <polygon points="0 0 24 0 24 24 0 24"/>
                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
                                </a>`};
                        return btns
                    }
                }
            ]
        })

        datatable.on('datatable-on-check datatable-on-uncheck datatable-on-layout-updated', function (e) {
            lineasParaBatch = []
            let checkedNodes = datatable.rows('.datatable-row-active').nodes()

            $.each(checkedNodes, function (index, value) {
                lineasParaBatch.push({
                    tef: $(this).closest('tr').find("td:nth-child(3)").attr('aria-label'),
                    estado: $(this).closest('tr').find("td:nth-child(11)").attr('aria-label'),
                    gerencia: $(this).closest('tr').find("td:nth-child(9)").attr('aria-label'),
                    financiero: $(this).closest('tr').find("td:nth-child(10)").attr('aria-label'),
                    creador: $(this).closest('tr').find("td:nth-child(11)").attr('aria-label')
                })
            })

            if (lineasParaBatch.length > 0) {
                for (var i = 0; i < lineasParaBatch.length; i++) {
                    //if (lineasParaBatch[i].estado == 'N' && usuarioSesion != lineasParaBatch[i].creador && (lineasParaBatch[i].gerencia == usuarioSesion || lineasParaBatch[i].financiero == usuarioSesion)) {
                    if (lineasParaBatch[i].estado == 'N' && APROBACION_PAGOS == '1') {
                        $("#aprobarbatch").removeClass('d-none')
                        $("#rechazarbatch").removeClass('d-none')
                    } else {
                        $("#aprobarbatch").addClass('d-none')
                        $("#rechazarbatch").addClass('d-none')
                        i = lineasParaBatch.length;
                    }
                }
            } else {
                $("#aprobarbatch").addClass('d-none')
                $("#rechazarbatch").addClass('d-none')
            }

          
        })

        function subTableInit(e) {
            subtab = $('<div/>').attr('id', 'child_data_ajax_' + e.data.TRANSFERENCIA).appendTo(e.detailCell).KTDatatable({
                // datasource definition
                data: {
                    type: 'remote',
                    source: {
                        read: {
                            url: `${RURL}/GetAprobacionLineas?transferencia=${e.data.TRANSFERENCIA}`,
                            method: 'GET'
                        }
                    },
                    pageSize: 10,
                    saveState: false
                },
                rows: {
                    autoHide: false,
                },
                layout: {
                    scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                    footer: false, // display/hide footer
                    spinner: {
                        message: 'Cargando...'
                    }
                },
                translate: {
                    records: {
                        processing: 'Por favor espere...',
                        noRecords: 'Sin resultados'
                    },
                    toolbar: {
                        pagination: {
                            items: {
                                info: 'Mostrando {{start}} - {{end}} de {{total}} registros'
                            }
                        }
                    }
                },

                // column sorting
                sortable: true,

                pagination: true,

                // columns definition
                columns: [
                    //{
                    //    field: 'PROVEEDOR',
                    //    title: 'Selector',
                    //    sortable: false,
                    //    width: 25,
                    //    type: 'number',
                    //    selector: {
                    //        class: ''
                    //    },
                    //},
                    {
                        field: 'NOMBRE',
                        title: 'PROVEEDOR',
                        template: '{{PROVEEDOR}} - {{NOMBRE}}',
                        width: 150
                    }, {
                        field: 'DOCUMENTO',
                        title: 'DOCUMENTO',
                        template: '{{TIPO}} - {{DOCUMENTO}}',
                        width: 155

                    }, {
                        field: 'FECHA_VENCE',
                        title: 'VENCE',
                        width: 80
                    }, {
                        field: 'FECHA_PROYECTADA',
                        title: 'PROYECTADA',
                        width: 90,
                        template: function (row) {
                            let dateV = row.FECHA_PROYECTADA.split("/")
                            let hoy = new Date()
                            let vence = new Date(dateV[2], dateV[1] - 1, dateV[0]);
                            if (hoy > vence) {
                                return `<span class="text-danger">${row.FECHA_PROYECTADA}</span>`
                            }
                            else {
                                return `<span>${row.FECHA_PROYECTADA}</span>`
                            }
                        }
                    },
                    //{
                    //    field: 'ORDEN_COMPRA',
                    //    title: 'ORDEN COMPRA',
                    //    width: 120
                    //},
                    //{
                    //    field: 'ESTADO',
                    //    title: 'Estado hacienda',
                    //    width: 140,
                    //    template: function (row) {
                    //        return '<span class="label label-lg font-weight-bold' + ESTADO[row.ESTADO].class + ' label-inline">' + ESTADO[row.ESTADO].titulo + '</span>'
                    //    }
                    //},
                    {
                        field: 'MONEDA',
                        title: 'MONEDA',
                        width: 70,
                        template: function (row) {
                            return `<span id="mon${row.DOCUMENTO}">${row.MONEDA}<span/>`
                        }
                    }, {
                        field: 'MONTO',
                        title: 'MONTO',
                        width: 85,
                        template: function (row) {
                            return row.MONTO_MILES
                        }
                    }, {
                        field: 'SALDO',
                        title: 'SALDO',
                        width: 85,
                        template: function (row) {
                            return row.SALDO_MILES
                        }
                    }, {
                        field: 'A_PAGAR',
                        title: 'A PAGAR',
                        width: 85,
                        template: function (row) {
                            return row.A_PAGAR_MILES
                        }
                    }, {
                        field: 'APROBADOR_GERENCIAL_USUARIO',
                        title: 'GERENCIA',
                        width: 120
                    }, {
                        field: 'APROBADOR_FINANCIERO_USUARIO',
                        title: 'FINANCIERO',
                        width: 120
                    }, {
                        field: 'ESTADO',
                        title: 'ESTADO',
                        width: 100,
                        template: function (row) {
                            return '<span class="label label-lg font-weight-bold' + ESTADO[row.ESTADO].class + ' label-inline">' + ESTADO[row.ESTADO].titulo + '</span>';
                        }
                    }, {
                        field: 'Actions',
                        title: APROBACION_PAGOS ? 'Acciones' : '',
                        width: APROBACION_PAGOS ? 135 : 5,
                        template: function (row) {
                            let notificaciones = GetNotificaciones(row.NOTIFICACIONES)
                            let btns = ``
                            let aprobadores = [row.APROBADOR_GERENCIAL_USUARIO.toUpperCase(), row.APROBADOR_FINANCIERO_USUARIO.toUpperCase()]

                            if (!APROBACION_PAGOS) {
                                return `<a href="javascript:;" onclick="IniciarChatDocumento('${row.DOCUMENTO}','${row.NOMBRE}','${row.PROVEEDOR}')"  class="btn btn-sm btn-clean btn-icon mr-2" title="Comentarios">
                                        <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-04-19-122603/theme/html/demo1/dist/../src/media/svg/icons/General/Search.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"/>
                                                <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"/>
                                            </g>
                                        </svg><!--end::Svg Icon--></span>
                                        ${notificaciones}`
                            }
               //             if ((row.ESTADO == 'N' || row.ESTADO == null) && aprobadores.includes(usuarioSesion) && usuarioSesion != row.CREADOR) {
               //                 btns += `<a onclick="ValidarAprobarPago('${row.PROVEEDOR}','${row.DOCUMENTO}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Aprobar">
               //                         <span class="svg-icon svg-icon-success svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-04-19-122603/theme/html/demo1/dist/../src/media/svg/icons/Code/Done-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
               //                             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               //                                 <rect x="0" y="0" width="24" height="24"/>
               //                                 <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
               //                                 <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
               //                             </g>
               //                         </svg><!--end::Svg Icon--></span>
							        //</a>
               //                     <a onclick="ValidarRechazarPago('${row.PROVEEDOR}','${row.DOCUMENTO}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Rechazar">
               //                         <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Code/Error-circle.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
               //                             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
               //                                 <rect x="0" y="0" width="24" height="24"/>
               //                                 <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
               //                                 <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
               //                             </g>
               //                         </svg><!--end::Svg Icon--></span>
							        //</a>`
               //             }
                         

                            btns += `<a href="javascript:;" onclick="IniciarChatDocumento('${row.DOCUMENTO}','${row.NOMBRE}','${row.PROVEEDOR}')"  class="btn btn-sm btn-clean btn-icon mr-2" title="Comentarios">
                                        <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-04-19-122603/theme/html/demo1/dist/../src/media/svg/icons/General/Search.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"/>
                                                <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"/>
                                            </g>
                                        </svg><!--end::Svg Icon--></span>
                                        ${notificaciones}`;

                            return btns
                        }
                    }
                ]
            })

            subtab.on('datatable-on-check datatable-on-uncheck', function (e) {
                let lineas = []
                let checkedNodes = subtab.rows('.datatable-row-active').nodes()

                $.each(checkedNodes, function (index, value) {
                    lineas.push({
                        documento: $(value).find('.datatable-cell-check').next('td').next('td').next('td').find('span').html(),
                        proveedor: $(value).find('.datatable-cell-check').find('input').val()
                    })
                })
                if (lineas.length == 0) {
                    $('.multiple').addClass('d-none')
                } else {
                    $('.multiple').removeClass('d-none')
                }
                lineasBatch = JSON.stringify(lineas)
            })
        }
    };

    return {
        // Public functions
        init: function () {
            demo()
        },
        reload: function () {
            datatable.reload()
        },
        reset: function () {
            datatable.destroy()
            demo()
        }
    }
}()

const KTDatepicker = function () {

    let arrows;
    if (KTUtil.isRTL()) {
        arrows = {
            leftArrow: '<i class="la la-angle-right"></i>',
            rightArrow: '<i class="la la-angle-left"></i>'
        }
    } else {
        arrows = {
            leftArrow: '<i class="la la-angle-left"></i>',
            rightArrow: '<i class="la la-angle-right"></i>'
        }
    }

    // Private functions
    const Range = function () {

        // range picker
        $('#kt_datepicker_5').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom auto",
            format: "dd/mm/yyyy",
            templates: arrows,
            language: 'es'
        });
        $('#FechaProyectada').datepicker({
            rtl: KTUtil.isRTL(),
            todayHighlight: true,
            orientation: "bottom auto",
            format: "dd/mm/yyyy",
            templates: arrows,
            language: 'es'
        });
    }

    return {
        // public functions
        init: function () {
            Range();
        }
    };
}()


var KTLayoutChat = function () {
    // Private functions
    let _init = function (element) {
        let scrollEl = KTUtil.find(element, '.scroll');
        let cardBodyEl = KTUtil.find(element, '.card-body');
        let cardHeaderEl = KTUtil.find(element, '.card-header');
        let cardFooterEl = KTUtil.find(element, '.card-footer');

        if (!scrollEl) {
            return;
        }

        // initialize perfect scrollbar(see:  https://github.com/utatti/perfect-scrollbar)
        KTUtil.scrollInit(scrollEl, {
            windowScroll: false, // allow browser scroll when the scroll reaches the end of the side
            mobileNativeScroll: true,  // enable native scroll for mobile
            desktopNativeScroll: false, // disable native scroll and use custom scroll for desktop
            resetHeightOnDestroy: true,  // reset css height on scroll feature destroyed
            handleWindowResize: true, // recalculate hight on window resize
            rememberPosition: true, // remember scroll position in cookie
            height: function () {  // calculate height
                let height;

                if (KTUtil.isBreakpointDown('lg')) { // Mobile mode
                    return KTUtil.hasAttr(scrollEl, 'data-mobile-height') ? parseInt(KTUtil.attr(scrollEl, 'data-mobile-height')) : 400;
                } else if (KTUtil.isBreakpointUp('lg') && KTUtil.hasAttr(scrollEl, 'data-height')) { // Desktop Mode
                    return parseInt(KTUtil.attr(scrollEl, 'data-height'));
                } else {
                    height = KTLayoutContent.getHeight();

                    if (scrollEl) {
                        height = height - parseInt(KTUtil.css(scrollEl, 'margin-top')) - parseInt(KTUtil.css(scrollEl, 'margin-bottom'));
                    }

                    if (cardHeaderEl) {
                        height = height - parseInt(KTUtil.css(cardHeaderEl, 'height'));
                        height = height - parseInt(KTUtil.css(cardHeaderEl, 'margin-top')) - parseInt(KTUtil.css(cardHeaderEl, 'margin-bottom'));
                    }

                    if (cardBodyEl) {
                        height = height - parseInt(KTUtil.css(cardBodyEl, 'padding-top')) - parseInt(KTUtil.css(cardBodyEl, 'padding-bottom'));
                    }

                    if (cardFooterEl) {
                        height = height - parseInt(KTUtil.css(cardFooterEl, 'height'));
                        height = height - parseInt(KTUtil.css(cardFooterEl, 'margin-top')) - parseInt(KTUtil.css(cardFooterEl, 'margin-bottom'));
                    }
                }

                // Remove additional space
                height = height - 2;

                return height;
            }
        });

        // attach events
        KTUtil.on(element, '.card-footer textarea', 'keydown', function (e) {
            if (e.keyCode == 13) {
                _handeMessaging(element);
                e.preventDefault();

                return false;
            }
        });

        KTUtil.on(element, '.card-footer .chat-send', 'click', function (e) {
            _handeMessaging(element);
        });
    }

    const _handeMessaging = function (element) {
        let messagesEl = KTUtil.find(element, '.messages');
        let scrollEl = KTUtil.find(element, '.scroll');
        let textarea = KTUtil.find(element, 'textarea');

        if (textarea.value.length === 0) {
            return;
        }

        let node = document.createElement("DIV");
        KTUtil.addClass(node, 'd-flex flex-column mb-5 align-items-end');
        let html = '';
        html += '<div class="d-flex align-items-center">';
        html += '	<div>';
        html += '		<span class="text-muted font-size-sm">' + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString().replace(/(.*)\D\d+/, '$1') + '</span>';
        html += '		<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Tu</a>';
        html += '	</div>';
        html += '</div>';
        html += '<div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">' + textarea.value + '</div>';

        KTUtil.setHTML(node, html);
        messagesEl.appendChild(node);
        let contenido = textarea.value
        textarea.value = '';
        scrollEl.scrollTop = parseInt(KTUtil.css(messagesEl, 'height'));

        let ps;
        if (ps = KTUtil.data(scrollEl).get('ps')) {
            ps.update();
        }
        InsertarMensajeDocumento(contenido)
    }

    // Public methods
    return {
        init: function (id) {
            // Init modal chat example
            _init(KTUtil.getById(id));

            // Trigger click to show popup modal chat on page load
            if (encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com') {
                setTimeout(function () {
                    if (!KTCookie.getCookie('kt_app_chat_shown')) {
                        let expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now

                        KTCookie.setCookie('kt_app_chat_shown', 1, { expires: expires });

                        if (KTUtil.getById('kt_app_chat_launch_btn')) {
                            KTUtil.getById('kt_app_chat_launch_btn').click();
                        }
                    }
                }, 2000);
            }
        },

        setup: function (element) {
            _init(element);
        },
        reset: function () {
            _init = null

        }
    };
}()

async function IniciarChatDocumento(documento, proveedor, receptor) {
    $('#ChatProveedor').html(proveedor)
    $('#ChatDocumento').val(documento)
    $('#ChatReceptor').val(receptor)
    let messagesEl = document.querySelector(".messages")
    messagesEl.innerHTML = ""
    let mensajes = await fetch(`${RURL}/GetMensajesDocumento?documento=${documento}&emisor=${receptor}`)
    mensajes = await mensajes.json()

    for (i = 0; i < mensajes.length; i++) {
        if (mensajes[i].EMISOR != usuarioSesion) {
            messagesEl.innerHTML += `<div class="d-flex flex-column mb-5 align-items-start">
										<div class="d-flex align-items-center">
											<div>
												<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">`+ mensajes[i].EMISOR + `</a >
												<span class="text-muted font-size-sm">`+ mensajes[i].FECHA_ENVIO + `</span>
											</div>
										</div>
										<div class="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">`+ mensajes[i].CONTENIDO + `</div >
									</div>`
        }
        else {
            messagesEl.innerHTML += `<div class="d-flex flex-column mb-5 align-items-end">
										<div class="d-flex align-items-center">
											<div>
												<span class="text-muted font-size-sm">`+ mensajes[i].FECHA_ENVIO + `</span>
												<a href="#" class="text-dark-75 text-hover-primary font-weight-bold font-size-h6">Yo</a>
											</div>
										</div>
										<div class="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">`+ mensajes[i].CONTENIDO + `</div>
									</div>`
        }
    }
    $('#kt_chat_modal').modal('show')
}

function GetNotificaciones(nuevos) {
    if (nuevos > 0) {
        return `<span class="label label-danger label-rounded ml-1 px-2">${nuevos}</span>`
    } else {
        return ''
    }
}

function InsertarMensajeDocumento(contenido) {
    const url = `${RURL}/InsertarMensajeDocumento`
    let fd = new FormData()
    fd.set('receptor', $('#ChatReceptor').val())
    fd.set('contenido', contenido)
    fd.set('documento', $('#ChatDocumento').val())
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
            } else if (data == 0) {
                toastr.warning('No se pudo enviar el mensaje', 'Alerta', toastrOptions)
            }
            else {
                toastr.error('Error al enviar mensaje', 'Error', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}


function DescargarFactura(provedor) {
    if (provedor == "PE0001") {
        window.open("PortalProveedores/Files/Fac1.pdf")
    }
    else if (provedor == "PE0002") {
        window.open("PortalProveedores/Files/Fac2.pdf")
    }
    else {
        window.open("PortalProveedores/Files/Fac3.pdf")
    }
}

function obtenerDocumentos(tipo, recepcion) {
    const url = `${XURL}/ObtenerDocumentos`
    let fd = new FormData()
    fd.set('recepcion', recepcion);
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (tipo == "1") {
                $("#pdf_preview").empty();
                $('#pdf_preview').removeClass('d-none');
                var cuerpo = '<embed type="application/pdf" id="pdf" src="" style="width:100%; height:800px" />';

                $("#pdf_preview").append(cuerpo);
                $("#pdf").attr("src", data[0].PDF);
                $('#ModalPDF').modal('toggle');
            } else if (tipo == "2") {
                $("#xml_preview").empty();
                $('#xml_preview').removeClass('m--hidden');
                $('#xml_preview').innerHTML = "";
                $('#xml_preview').append('<xmp>' + formatXml(data[0].XML_FACTURA) + '</xmp>');
                $('#ModalXMLFAC').modal('toggle');
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        });
}

function CambiarUsuario(usuarioFinanciero, usuarioGerencial, tef) {
    $('#cambiarUsuarioFinanciero').val(usuarioFinanciero).trigger('change')
    $('#cambiarUsuarioGerencial').val(usuarioGerencial).trigger('change')
    $('#tef').val(tef).trigger('change')
    $('#modalCambiarUsuario').modal('show')
}

function CambiarUsuarioTEF() {
    var formData = new FormData();
    var _tef = $('#tef').val()
    var _aprobadorFinanciero = $('#cambiarUsuarioFinanciero').val()
    var _aprobadorGerencial = $('#cambiarUsuarioGerencial').val()

    formData.append('tef', _tef);
    formData.append('aprobadorFinanciero', _aprobadorFinanciero);
    formData.append('aprobadorGerencial', _aprobadorGerencial);


    let fd = {
        tef: _tef,
        aprobadorFinanciero: _aprobadorFinanciero,
        _aprobadorGerencial: _aprobadorGerencial

    }
    const url = `${RURL}/CambiarUsuarioTEF`
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data == "1") {
                toastr.success("El usuario de la transferencia cambió con éxito", 'Éxito', toastrOptions)
                $('#modalCambiarUsuario').modal('hide')
                KTDataTableAprobacion.reload()
            } else {
                toastr.warning('Algo salió mal', 'Alerta')//, options)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error')//, options)
        })

}

function ValidarAprobarTransferencia(trnasferencia) {
    $('#TransferenciaAprobar').val(trnasferencia)
    $('#notasAprobar').val("")
    $('#ModalAprobarDocumento').modal('show')
}

function ValidarAprobarTransferenciaBatch() {
    $('#notasAprobarMultiple').val("")
    $('#ModalAprobarDocumentoBatch').modal('show')
}


async function AprobarTefBatch() {
    let fd = new FormData();
    fd.set('lineas', JSON.stringify(lineasParaBatch))
    fd.set('notas', $('#notasAprobarMultiple').val())
   
    const bodyO = {
        lineasParaBatch,
        notas: $('#notasAprobarMultiple').val()
    }

    const url = `${RURL}/AprobarBatch`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyO)
        })
        const result = await response.json()
        if (result == 1) {
            toastr.success('Transferencias aprobadas correctamente', 'Éxito', toastrOptions)
            $('#ModalAprobarDocumentoBatch').modal('hide')
            KTDataTableAprobacion.reload()
        } else if (result == 2) {
            toastr.warning(`Ya existe una TEF aprobada con el mismo número de consecutivo`, 'Alerta', toastrOptions)
        } else {
            toastr.warning('No se pudo guardar la línea', 'Alerta', toastrOptions)
        }

    } catch (err) {
        console.error(err)
        toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
    }

}

async function RechazarTefBatch() {
    let fd = new FormData();
    fd.set('lineas', JSON.stringify(lineasParaBatch))
    fd.set('notas', $('#notasRechazos').val())

    const bodyO = {
        lineasParaBatch,
        notas: $('#notasRechazos').val()
    }

    const url = `${RURL}/RechazarBatch`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyO)
        })
        const result = await response.json()
        if (result == 1) {
            toastr.success('Transferencias rechazadas correctamente', 'Éxito', toastrOptions)
            $('#ModalRechazarDocumentoBatch').modal('hide')
            KTDataTableAprobacion.reload()
        } else {
            toastr.warning('No se pudo rechazar las transferencias', 'Alerta', toastrOptions)
        }

    } catch (err) {
        console.error(err)
        toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
    }

}


function ValidarRechazarTransferenciaBatch() {
    $('#notasRechazos').val("")
    $('#ModalRechazarDocumentoBatch').modal('show')
}


function ValidarRechazarTransferencia(trnasferencia) {
    $('#TransferenciaRechazar').val(trnasferencia)
    $('#notasRechazo').val("")
    $('#notasAprobarMultiple').val("")
    $('#ModalRechazarDocumento').modal('show')
}


function ValidarAprobarPago(proveedor, documento) {
    document.querySelector('#FormAprobarDocumento').reset()
    $('#ProveedorAprobar').val(proveedor)
    $('#DocumentoAprobar').val(documento)
    $('#notasAprobarMultiple').val("")
    $('#ModalAprobarDocumento').modal('show')
}

function ValidarRechazarPago(proveedor, documento) {
    document.querySelector('#FormRechazarDocumento').reset()
    $('#ProveedorRechazar').val(proveedor)
    $('#DocumentoRechazar').val(documento)
    $('#notasRechazo').val("")
    $('#ModalRechazarDocumento').modal('show')
}

//function ValidarAprobarPagoMultiple() {
//    document.querySelector('#FormAprobarDocumentos').reset()
//    $('#notasAprobar').val("")
//    $('#ModalAprobarDocumentos').modal('show')
//}

//function ValidarRechazarPagoMultiple() {
//    document.querySelector('#FormRechazarDocumentos').reset()
//    $('#ModalRechazarDocumentos').modal('show')
//}

function CambiarEstadoPago(estado) {
    var _motivoRechazo = $('#notasRechazo').val()
    const exito = estado === 'T' ? 'aprobó' : 'rechazó'
    const error = estado === 'T' ? 'aprobar' : 'rechazar'
    const formId = estado === 'T' ? 'FormAprobarDocumento' : 'FormRechazarDocumento'
    const form = document.querySelector(`#${formId}`)
    let fd = new FormData(form)
    fd.set('estado', estado)
    if (estado == "R" && _motivoRechazo == "") {
        toastr.warning(`Debe especificar un motivo de rechazo`, 'Alerta', toastrOptions)
    } else {
        const url = `${RURL}/EditarSeleccion`
        fetch(url, {
            method: 'POST',
            body: fd
        })
            .then(res => res.json())
            .then(data => {
                if (data == 1) {
                    toastr.success(`Se ${exito} la línea correctamente`, 'Éxito', toastrOptions)
                    KTDataTableAprobacion.reload()
                    $('#ModalAprobarDocumento').modal('hide')
                    $('#ModalRechazarDocumento').modal('hide')
                } else if (data == 2) {
                    toastr.warning(`Ya existe una TEF aprobada con el mismo número de consecutivo`, 'Alerta', toastrOptions)
                    $('#ModalAprobarDocumento').modal('hide')
                    $('#ModalRechazarDocumento').modal('hide')
                } else {
                    toastr.warning(`No se pudo ${error} la línea`, 'Alerta', toastrOptions)
                }
            })
            .catch(err => {
                console.error(err)
                toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
            })
    }
}

function CambiarEstadoPagoMultiple(estado) {
    const exito = estado === 'P' ? 'aprobó' : 'rechazó'
    const error = estado === 'P' ? 'aprobar' : 'rechazar'
    const formId = estado === 'P' ? 'FormAprobarDocumentos' : 'FormRechazarDocumentos'
    const form = document.querySelector(`#${formId}`)
    let fd = new FormData(form)
    fd.set('estado', estado)
    fd.set('lineas', lineasBatch)
    const url = `${RURL}/EditarSeleccionMultiple`
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
                toastr.success(`Se ${exito} la línea correctamente`, 'Éxito', toastrOptions)
                KTDataTableAprobacion.reload()
                $('#ModalAprobarDocumentos').modal('hide')
                $('#ModalRechazarDocumentos').modal('hide')
            } else {
                toastr.warning(`No se pudo ${error} la línea`, 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}

function ImprimirOrden(orden) {
    if (orden !== '') {
        window.open(orden, '_blank')
        /* window.location.href = orden*/
    } else {
        toastr.info('Esta factura no tiene una orden asociada', 'Info', toastrOptions)
    }
}

function ActualizarFiltros() {
    fechaInicio = $('#FechaInicio').val().split('/').reverse().join('-')
    fechaFin = $('#FechaFinal').val().split('/').reverse().join('-')
    proveedor = $('#FiltroProveedor').val() == '0' ? '' : $('#FiltroProveedor').val()
    estado = $('#FiltroEstado').val() == '0' ? '' : $('#FiltroEstado').val()
    aprobador = $('#FiltroAprobador').val() == '0' ? '' : $('#FiltroAprobador').val()
    transferencia = $('#FiltroTransferencia').val() == '0' ? '' : $('#FiltroTransferencia').val()
}

function ManejarFiltros() {
    $('.filtro').on('change', () => {
        ActualizarFiltros()
        KTDataTableAprobacion.reset()
    })
}

function InicilizarSelects() {
    $('#FiltroProveedor').select2({
        placeholder: "Seleccione un proveedor"
    })
    $('#FiltroAprobador').select2({
        placeholder: "Seleccione un aprobador"
    })
    $('#FiltroEstado').select2({
        placeholder: "Seleccione un estado"
    })
    $('#FiltroTransferencia').select2({
        placeholder: "Seleccione transferencia"
    })
    $('#aprobadorgerencia').select2({
        placeholder: "Seleccione un aprobador"
    })
    $('#aprobadorfinanciero').select2({
        placeholder: "Seleccione un aprobador"
    })
    $('#cuentaBanco').select2({
        placeholder: "Seleccione una cuenta"
    })
    $('#cambiarUsuario').select2({
        placeholder: "Seleccione un usuario"
    })
    $('#cambiarUsuarioGerencial').select2({
        placeholder: "Seleccione un usuario"
    })
    $('#cambiarUsuarioFinanciero').select2({
        placeholder: "Seleccione un usuario"
    })
    $('#tef').select2({
        placeholder: "Seleccione una TEF"
    })
}

$(document).ready(() => {
    KTDataTableAprobacion.init()
    InicilizarSelects()
    KTDatepicker.init()
    ManejarFiltros()
    KTLayoutChat.init('kt_chat_modal')
    $('#cuentaBanco').on('change', () => {
        $('#tipo').val($('#cuentaBanco').children('option:selected').data('moneda'));
    })
})
