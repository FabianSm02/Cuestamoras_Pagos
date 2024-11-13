const toastr2Options = {
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

const select3esp = {
    noResults: function () {
        return 'No hay resultados'
    },
    searching: function () {
        return 'Buscando...'
    },
    inputTooShort: function () {
        return 'Ingrese al menos 1 caracter'
    },
    errorLoading: function () {
        return "Escriba para buscar..."
    }
}


const KTDataTableUsuarios = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_usuarios').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                pageSize: 10,
                source: {
                    read: {
                        url: `${USUARIO_CONTROLLER}/ObtenerUsuarios`,
                        method: 'GET'
                    }
                },
                saveState: true
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
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

            search: {
                input: $('#kt_datatable_search_query_usuarios'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                    field: 'USUARIO',
                    title: 'Usuario',
                    width: 90
                }, {
                    field: 'NOMBRE',
                    title: 'Nombre'
                }, {
                    field: 'ROL_DESCRIPCION',
                    title: 'Rol'
                }, {
                    field: 'ESTADO',
                    title: 'Estado',
                    template: function (row) {
                        if (row.ESTADO == 'S') {
                            return `<span class="label font-weight-bold label-lg  label-light-primary label-inline">Activo</span>`
                        } else {
                            return `<span class="label font-weight-bold label-lg  label-light-danger label-inline">Inactivo</span>`
                        }
                    }
                }, {
                    field: 'Actions',
                    title: ADMINISTRACION_USUARIOS ? 'ACCIONES' : '',
                    width: ADMINISTRACION_USUARIOS ? 110 : 5,
                    sortable: false,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        if (!ADMINISTRACION_USUARIOS) {
                            return ''
                        }
                        let btns = ``
                        btns = `
							<a onclick="EditarUsuario('${row.USUARIO}', '${row.ROL}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar">
	                            <span class="svg-icon svg-icon-warning svg-icon-2x">
                                    <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
                                            <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
                                        </g>
                                    </svg>
                                </span>
							</a>`
                        if (row.ESTADO == 'S') {
                            btns +=
                                `<a onclick="ConfirmarCambioEstado('${row.USUARIO}','N')" class="btn btn-sm btn-clean btn-icon mr-2" title="Desactivar">
	                                <span class="svg-icon svg-icon-danger svg-icon-2x">
                                        <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                                <path d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z" fill="#000000"/>
                                            </g>
                                        </svg>
                                    </span>
							    </a>`
                        } else {
                            btns +=
                                `<a onclick="ConfirmarCambioEstado('${row.USUARIO}','S')" class="btn btn-sm btn-clean btn-icon mr-2" title="Activar">
	                            <span class="svg-icon svg-icon-success svg-icon-2x">
                                    <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <circle fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
                                            <path d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z" fill="#000000" fill-rule="nonzero"/>
                                        </g>
                                    </svg>
                                </span>
							</a>`
                        };
                        return btns
                    },
                }
            ],
        })
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
    };
}()

const DatatableRolesIndex = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_roles').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: RolesIndex,
                pageSize: 10,
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

            search: {
                input: $('#kt_datatable_search_query_roles'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                    field: 'ROL',
                    title: 'Consecutivo'
                }, {
                    field: 'DESCRIPCION',
                    title: 'Descripción'
                }, {
                    field: 'Actions',
                    title: ADMINISTRACION_USUARIOS ? 'Acciones' : '',
                    width: ADMINISTRACION_USUARIOS ? 110 : 5,
                    sortable: false,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        if (!ADMINISTRACION_USUARIOS) {
                            return ''
                        }
                        return `<a onclick="EditarRol   (${row.ROL}, '${row.DESCRIPCION}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar">
	                                <span class="svg-icon svg-icon-warning svg-icon-2x">
                                        <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
                                                <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
                                            </g>
                                        </svg>
                                    </span>
							    </a>`
                    },
                }
            ],
        })

    };

    return {
        // Public functions
        init: function () {
            demo()
        },
        reload: function () {
           // datatable.reload()
        },
        reset: function () {
            datatable.destroy()
            demo()
        }
    };
}()

const DatatablePermisosRolesIndex = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_permisos').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: PermisosRolesIndex,
                pageSize: 10,
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

            search: {
                input: $('#kt_datatable_search_query_permisos'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                    field: 'ROL',
                    title: 'Rol',
                    width: 100,
                    template: function (row) {
                        return row.DESCRIPCION
                    }
                },
                {
                    field: 'PAGOS_PROYECTADOS',
                    title: 'Pagos Proyectados',
                    template: function (row) {
                        return SetIcono(row.PAGOS_PROYECTADOS)
                    }
                },
                {
                    field: 'APROBACION_PAGOS',
                    title: 'Aprobación de pagos',
                    template: function (row) {
                        return SetIcono(row.APROBACION_PAGOS)
                    }
                },
                {
                    field: 'PAGO_PROVEEDORES',
                    title: 'Pago Proveedores',
                    template: function (row) {
                        return SetIcono(row.PAGO_PROVEEDORES)
                    }
                },
                {
                    field: 'CONFIG_SFTP',
                    title: 'CONFIG SFTP',
                    template: function (row) {
                        return SetIcono(row.CONFIG_SFTP)
                    }
                },
                {
                    field: 'ADMINISTRACION_USUARIOS',
                    title: 'Admin usuarios',
                    template: function (row) {
                        return SetIcono(row.ADMINISTRACION_USUARIOS)
                    }
                },
                {
                    field: 'Actions',
                    title: ADMINISTRACION_USUARIOS ? 'Acciones' : '',
                    width: ADMINISTRACION_USUARIOS ? 110 : 5,
                    sortable: false,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        if (!ADMINISTRACION_USUARIOS) {
                            return ''
                        }
                        let permisos = [
                            Number(row.PAGOS_PROYECTADOS),
                            Number(row.APROBACION_PAGOS),
                            Number(row.PAGO_PROVEEDORES),
                            Number(row.CONFIG_SFTP),
                            Number(row.ADMINISTRACION_USUARIOS),
                            Number(row.ROL)
                        ]
                        return `<a onclick="EditarPermisos('${JSON.stringify(permisos)}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar">
	                                <span class="svg-icon svg-icon-warning svg-icon-2x">
                                        <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
                                                <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
                                            </g>
                                        </svg>
                                    </span>
							    </a>`
                    },
                }
            ],
        })

    };

    return {
        // Public functions
        init: function () {
            demo()
        },
        reload: function () {
            // datatable.reload()
        },
        reset: function () {
            datatable.destroy()
            demo()
        }
    };
}()

function verclaves(id, permiso) {
    cuentassmtp.find(function (obj, index) {
        if (obj.ID == id) {
            obj.PERMISO = permiso
            DatatableSFTPIndex.reset()
        }
    })


}

//function BuscarUsuarios() {

//    $.ajax({
//        url: `${USUARIO_CONTROLLER}/ObtenerUsuarios`,
//        async: true,
//        type: "POST",
//        success: function (data) {
//            UsuariosIndex = data.Usuarios;
//            $("#kt_datatable_usuarios").parent().html('<div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_usuarios"></div>');
//            KTDataTableUsuarios.init();
//        },
//        error: function (jqXHR, exception) {
//            var error = "";
//            if (jqXHR.status === 0) {
//                error = 'No conectado.\nVerifique su conexión de red.';
//            } else if (jqXHR.status == 404) {
//                error = 'La página solicitada no fue encontrada. [404]';
//            } else if (jqXHR.status == 500) {
//                error = 'Error interno del servidor [500].';
//            } else if (exception === 'parsererror') {
//                error = 'Fallo la conversión a JSON.';
//            } else if (exception === 'timeout') {
//                error = 'Error de tiempo de espera.';
//            } else if (exception === 'abort') {
//                error = 'Solicitud Ajax abortada.';
//            } else {
//                error = 'Error no detectado.\n' + jqXHR.responseText;
//            }
//            toastr.error(error, "¡Error!");
//        }

//    });
//}

function BuscarRoles() {

    $.ajax({
        url: `${USUARIO_CONTROLLER}/ObtenerRoles`,
        async: true,
        type: "POST",
        success: function (data) {
            RolesIndex = data.Roles;
            $("#kt_datatable_roles").parent().html('<div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_roles"></div>');
            DatatableRolesIndex.init();
        },
        error: function (jqXHR, exception) {
            var error = "";
            if (jqXHR.status === 0) {
                error = 'No conectado.\nVerifique su conexión de red.';
            } else if (jqXHR.status == 404) {
                error = 'La página solicitada no fue encontrada. [404]';
            } else if (jqXHR.status == 500) {
                error = 'Error interno del servidor [500].';
            } else if (exception === 'parsererror') {
                error = 'Fallo la conversión a JSON.';
            } else if (exception === 'timeout') {
                error = 'Error de tiempo de espera.';
            } else if (exception === 'abort') {
                error = 'Solicitud Ajax abortada.';
            } else {
                error = 'Error no detectado.\n' + jqXHR.responseText;
            }
            toastr.error(error, "¡Error!");
        }

    });
}

function BuscarSFTP() {

    $.ajax({
        url: `${USUARIO_CONTROLLER}/ObtenerSFTP`,
        async: true,
        type: "POST",
        success: function (data) {
            SFTPIndex = data;
            $("#kt_datatable_cuentas").parent().html('<div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_cuentas"></div>');
            DatatableSFTPIndex.init();
        },
        error: function (jqXHR, exception) {
            var error = "";
            if (jqXHR.status === 0) {
                error = 'No conectado.\nVerifique su conexión de red.';
            } else if (jqXHR.status == 404) {
                error = 'La página solicitada no fue encontrada. [404]';
            } else if (jqXHR.status == 500) {
                error = 'Error interno del servidor [500].';
            } else if (exception === 'parsererror') {
                error = 'Fallo la conversión a JSON.';
            } else if (exception === 'timeout') {
                error = 'Error de tiempo de espera.';
            } else if (exception === 'abort') {
                error = 'Solicitud Ajax abortada.';
            } else {
                error = 'Error no detectado.\n' + jqXHR.responseText;
            }
            toastr.error(error, "¡Error!");
        }

    });
}

function BuscarPermisosRol() {
    $.ajax({
        url: `${USUARIO_CONTROLLER}/ObtenerPermisos`,
        async: true,
        type: "POST",
        success: function (data) {
            PermisosRolesIndex = data.PermisosRoles;
            $("#kt_datatable_permisos").parent().html('<div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_permisos"></div>');
            DatatablePermisosRolesIndex.init();
        },
        error: function (jqXHR, exception) {
            var error = "";
            if (jqXHR.status === 0) {
                error = 'No conectado.\nVerifique su conexión de red.';
            } else if (jqXHR.status == 404) {
                error = 'La página solicitada no fue encontrada. [404]';
            } else if (jqXHR.status == 500) {
                error = 'Error interno del servidor [500].';
            } else if (exception === 'parsererror') {
                error = 'Fallo la conversión a JSON.';
            } else if (exception === 'timeout') {
                error = 'Error de tiempo de espera.';
            } else if (exception === 'abort') {
                error = 'Solicitud Ajax abortada.';
            } else {
                error = 'Error no detectado.\n' + jqXHR.responseText;
            }
            toastr.error(error, "¡Error!");
        }

    });
}

function SetIcono(permiso) {
    let html = ''
    if (permiso == 1) {
        html = `<span class="svg-icon svg-icon-primary svg-icon-2x" title="Administrar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>
                        </g>
                    </svg>
                </span>`
    } else if (permiso == 2) {
        html = `<span class="svg-icon svg-icon-success svg-icon-2x" title="Listar">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <path d="M10.5,5 L19.5,5 C20.3284271,5 21,5.67157288 21,6.5 C21,7.32842712 20.3284271,8 19.5,8 L10.5,8 C9.67157288,8 9,7.32842712 9,6.5 C9,5.67157288 9.67157288,5 10.5,5 Z M10.5,10 L19.5,10 C20.3284271,10 21,10.6715729 21,11.5 C21,12.3284271 20.3284271,13 19.5,13 L10.5,13 C9.67157288,13 9,12.3284271 9,11.5 C9,10.6715729 9.67157288,10 10.5,10 Z M10.5,15 L19.5,15 C20.3284271,15 21,15.6715729 21,16.5 C21,17.3284271 20.3284271,18 19.5,18 L10.5,18 C9.67157288,18 9,17.3284271 9,16.5 C9,15.6715729 9.67157288,15 10.5,15 Z" fill="#000000"/>
                            <path d="M5.5,8 C4.67157288,8 4,7.32842712 4,6.5 C4,5.67157288 4.67157288,5 5.5,5 C6.32842712,5 7,5.67157288 7,6.5 C7,7.32842712 6.32842712,8 5.5,8 Z M5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 C6.32842712,10 7,10.6715729 7,11.5 C7,12.3284271 6.32842712,13 5.5,13 Z M5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 C6.32842712,15 7,15.6715729 7,16.5 C7,17.3284271 6.32842712,18 5.5,18 Z" fill="#000000" opacity="0.3"/>
                        </g>
                    </svg>
                </span>`
    } else {
        html = `<span class="svg-icon svg-icon-danger svg-icon-2x" title="Sin permisos">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"/>
                            <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M19.0710678,4.92893219 L19.0710678,4.92893219 C19.4615921,5.31945648 19.4615921,5.95262146 19.0710678,6.34314575 L6.34314575,19.0710678 C5.95262146,19.4615921 5.31945648,19.4615921 4.92893219,19.0710678 L4.92893219,19.0710678 C4.5384079,18.6805435 4.5384079,18.0473785 4.92893219,17.6568542 L17.6568542,4.92893219 C18.0473785,4.5384079 18.6805435,4.5384079 19.0710678,4.92893219 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                        </g>
                    </svg>
                </span>`
    }
    return html
}

function EditarRolBatch() {
    $('#modalEditarRolBatch').modal('show')
}

function ConfirmarEnviarCredenciales() {
    Swal.fire({
        title: '¿Desea enviar las credenciales a los usuarios seleccionados?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        toastr.success("Credenciales enviadas con éxito", 'Éxito', toastr2Options)
        //if (result.value) {
        //    toastr.info('Las credenciales se enviaron a los usuarios seleccionados', ' Info', options)
        //}
    })
}

function GuardarUsuario(form) {
    let fd = new FormData(form)
    const url = `${USUARIO_CONTROLLER}/GuardarUsuario`
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
                toastr.success('Usuario guardado correctamente', 'Éxito', toastrOptions)
                KTDataTableUsuarios.reload()
                $('#modalInsertarUsuario').modal('hide')
                $('#modalEditarUsuario').modal('hide')
                $('#modalUsuario').modal('hide')
            } else if (data == 2) {
                toastr.warning('El usuario no es válido', 'Alerta', toastrOptions)
            } else if (data == 3) {
                toastr.warning('El colaborador no es válido', 'Alerta', toastrOptions)
            } else {
                toastr.warning('No se pudo guardar el usuario', 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}


function ValidarGuardarUsuario(form) {
    let fd = new FormData(form)
    let result = true
    if (fd.get('Usuario') == '') {
        toastr.warning('Debe seleccionar un usuario', 'Alerta', toastrOptions)
        result = false
        //} else if (fd.get('Empleado') == '') {
        //    toastr.warning('Debe seleccionar un empleado', 'Alerta', toastrOptions)
        //    result = false
    } else if (fd.get('RolUsuario') == '') {
        toastr.warning('Debe seleccionar un rol', 'Alerta', toastrOptions)
        result = false
    }
    return result
}

function ValidarGuardarRol(form) {
    let fd = new FormData(form)
    let result = true
    if (fd.get('Descripcion') == '') {
        toastr.warning('Debe ingresar un nombre para el rol', 'Alerta', toastrOptions)
        result = false
    }
    return result
}

function ConfirmarCambioEstado(usuario, nuevoEstado) {
    let titulo = '¿Deesea activar este usuario?'
    if (nuevoEstado == 'N') {
        titulo = '¿Desea desactivar este usuario?'
    }
    Swal.fire({
        title: titulo,
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.value) {
            CambiarEstado(usuario, nuevoEstado)
        }
    })
}

function CambiarEstado(usuario, estado) {
    let fd = new FormData()
    fd.set('Usuario', usuario)
    fd.set('Estado', estado)
    const url = `${USUARIO_CONTROLLER}/ActualizarEstadoUsuario`
    const exitoString = estado == 'S' ? 'Usuario activado correctamente' : 'Usuario desactivado correctamente'
    const errorString = estado == 'S' ? 'No se pudo activar el usuario' : 'No se pudo desactivar el usuario'
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
                toastr.success(exitoString, 'Éxito', toastrOptions)
                KTDataTableUsuarios.reload()
            } else {
                toastr.warning(errorString, 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}

function CrearUsuario() {
    $('#UsuarioInsertar').val(null).trigger('change')
    $('#EmpleadoInsertar').val(null).trigger('change')
    $('#RolUsuarioInsertar').val(null).trigger('change')
    $('#modalInsertarUsuario').modal('show')
}

function CrearRol() {
    $('#modalInsertarRol').modal('show')
}

function EditarUsuario(usuario, rol) {
    $('#UsuarioEditar').val(usuario).trigger('change')
    $('#UsuarioEditarInput').val(usuario)
    $("#UsuarioEditar").prop("disabled", true);
    $('#RolUsuarioEditar').val(rol).trigger('change')
    $('#modalEditarUsuario').modal('show')
}


function EditarRol(rol, descripcion) {
    $('#EditarRolId').val(rol)
    $('#EditarRolDescripcion').val(descripcion)
    $('#modalEditarRol').modal('show')


}

function GuardarRol(form) {
    let fd = new FormData(form)
    const url = `${USUARIO_CONTROLLER}/GuardarRol`
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
                toastr.success('Rol guardado correctamente', 'Éxito', toastrOptions)
                BuscarRoles()
                BuscarPermisosRol()
                $('#modalInsertarRol').modal('hide')
                $('#modalEditarRol').modal('hide')
                form.reset()
            } else {
                toastr.warning('El rol no es válido', 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}


function EditarPermisos(permisos) {
    permisos = JSON.parse(permisos)
    $(`#pagosProyectados-${permisos[0]}`).prop("checked", true)
    $(`#aprobacionPagos-${permisos[1]}`).prop("checked", true)
    $(`#pagoProveedores-${permisos[2]}`).prop("checked", true)
    $(`#configSFTP-${permisos[3]}`).prop("checked", true)
    $(`#usuarios-${permisos[4]}`).prop("checked", true)
    $('#p-rol').val(permisos[5])
    $('#modalEditarPermisos').modal('show')
}

function EditarJefeBatch() {
    $('#modalJefeBath').modal('show')
}

function ManejarBotones() {
    $('#btn-insertar-usuario').on('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('#frm-insertar-usuario')
        if (ValidarGuardarUsuario(form)) {
            GuardarUsuario(form)
        }
    })
    $('#btn-editar-usuario').on('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('#frm-editar-usuario')
        if (ValidarGuardarUsuario(form)) {
            GuardarUsuario(form)
        }
    })

    $('#btn-insertar-rol').on('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('#frm-insertar-rol')
        if (ValidarGuardarRol(form)) {
            GuardarRol(form)
        }
    })

    $('#btn-editar-rol').on('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('#frm-editar-rol')
        if (ValidarGuardarRol(form)) {
            GuardarRol(form)
        }
    })

    $('#btn-guardar-permisos').on('click', (e) => {
        e.preventDefault()
        const form = document.querySelector('#frm-editar-permisos')
        let fd = new FormData(form)
        console.log(Object.fromEntries(fd))
        const url = `${USUARIO_CONTROLLER}/GuardarPermisos`
        fetch(url, {
            method: 'POST',
            body: fd
        })
            .then(res => res.json())
            .then(data => {
                if (data == 1) {
                    toastr.success("Permisos guardados correctamente", 'Éxito', toastrOptions)
                    BuscarPermisosRol()
                } else {
                    toastr.warning('No se pudieron guardar los permisos', 'Alerta', toastrOptions)
                }
            })
            .catch(err => {
                console.error(err)
                toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
            })
        $('#modalEditarPermisos').modal('hide')

    })

    
}

function CrearAccionBatch() {
    $('#modalAccionBath').modal('show')
}

function InicilizarSelects() {
    $('#tipoAccionBatch').select2({
        placeholder: "Seleccione una acción"
    })
    $('#EstadoUsuario').select2({
        placeholder: "Seleccione un estado"
    })
    $('#FiltroDepartamento').select2({
        placeholder: "Seleccione un equipo"
    })
    $('.jefe').select2({
        placeholder: "Seleccione un jefe"
    })
    $('.rol-usuario').select2({
        placeholder: "Seleccione un rol"
    })
    $('#RolCIA').select2({
        placeholder: "Seleccione un estado"
    })
    $('#UsuarioInsertar').select2({
        language: select3esp,
        placeholder: "Seleccione un usuario",
    })
    $('#UsuarioEditar').select2({
        language: select3esp,
        placeholder: "Seleccione un usuario",

    })
    $('#EmpleadoInsertar').select2({
        language: select3esp,
        placeholder: "Seleccione un empleado",

    })
    $('#EmpleadoEditar').select2({
        language: select3esp,
        placeholder: "Seleccione un colaborador",

    })
}

function SeleccionarTab(tab) {
    sessionStorage.setItem('tab', tab)
    MostrarAgregar(tab)
}

function IrATab() {
    const tab = sessionStorage.getItem('tab')
    $(`#${tab}-tab`).click()
}

function EditarCuenta(id, cuenta, plan, envio, moneda, ip, puerto, usuario, pass, llaverec, llaveemi) {
    $('#modalsftpLabel').text('Editar SFTP')
    $('#moneda').val(moneda).trigger('change')
    $("#nocuenbta").val(cuenta)
    $("#plan").val(plan)
    $("#envio").val(envio)
    $("#envio").prop("disabled", true);
    $("#dirip").val(ip)
    $("#puerto").val(puerto)
    $("#usu").val(usuario)
    $("#contra").val(pass)
    $("#llavrec").val(llaverec)
    $("#llavemi").val(llaveemi)
    $('#modalsftp').modal('show')
}
function CrearCuenta() {
    $('#modalsftpLabel').text('Agregar nuevo SFTP')

    $('#moneda').val("")
    $("#moneda").prop("disabled", false);
    $("#nocuenbta").val("")
    $("#nocuenbta").prop("disabled", false);
    $("#plan").val("")
    $("#envio").val("")
    $('#divEnvio').addClass('d-none')
    $("#dirip").val("")
    $("#puerto").val("")
    $("#usu").val("")
    $("#contra").val("")
    $("#llavrec").val("")
    $("#llavemi").val("")

    $('#modalsftp').modal('show')
}

function CrearCuenta() {
    $('#modalsftpLabel').text('Agregar nuevo SFTP')

    $('#moneda').val("")
    $("#moneda").prop("disabled", false);
    $("#nocuenbta").val("")
    $("#nocuenbta").prop("disabled", false);
    $("#plan").val("")
    $("#envio").val("")
    $('#divEnvio').addClass('d-none')
    $("#dirip").val("")
    $("#puerto").val("")
    $("#usu").val("")
    $("#contra").val("")
    $("#llavrec").val("")
    $("#llavemi").val("")

    $('#modalsftp').modal('show')
}

function GuardarSFTP() {
    if ($('#modalsftpLabel').text() == "Editar SFTP") {
        var formData = new FormData();
        var _cuenta = $('#nocuenbta').val()
        var _plan = $('#plan').val()
        var _envio = $('#envio').val()
        var _moneda = $('#moneda').val()
        var _ip = $('#dirip').val()
        var _puerto = $('#puerto').val()
        var _usuario = $('#usu').val()
        var _contrasena = $('#contra').val()
        var _llaveReceptor = $('#llavrec').val()
        var _llaveEmisor = $('#llavemi').val()
        var _dns = "N/D"
        var _accion = "U"

        if (_cuenta == "") {
            toastr.warning('Debe digitar un número de cuenta válido', 'Alerta')//, options)
            return false
        } else if (_plan == "") {
            toastr.warning('Debe digitar un plan válido', 'Alerta')//, options)
            return false
        } else if (_moneda == "") {
            toastr.warning('Debe digitar un tipo de moneda válido', 'Alerta')//, options)
            return false
        } else if (_ip == "") {
            toastr.warning('Debe digitar una ip válida', 'Alerta')//, options)
            return false
        } else if (_puerto == "") {
            toastr.warning('Debe digitar un puerto válido', 'Alerta')//, options)
            return false
        } else if (_usuario == "") {
            toastr.warning('Debe digitar un nombre de usuario', 'Alerta')//, options)
            return false
        } else if (_contrasena == "") {
            toastr.warning('Debe digitar una contraseña', 'Alerta')//, options)
            return false
        } else if (_llaveEmisor == "") {
            toastr.warning('Debe digitar una llave emisora', 'Alerta')//, options)
            return false
        } else if (_llaveReceptor == "") {
            toastr.warning('Debe digitar una llave receptora', 'Alerta')//, options)
            return false
        }


        formData.append('cuenta', _cuenta);
        formData.append('plan', _plan);
        formData.append('envio', _envio);
        formData.append('moneda', _moneda);
        formData.append('ip', _ip);
        formData.append('puerto', _puerto);
        formData.append('usuario', _usuario);
        formData.append('contrasena', _contrasena);
        formData.append('llaveReceptor', _llaveReceptor);
        formData.append('llaveEmisor', _llaveEmisor);
        formData.append('dns', _dns);
        formData.append('accion', _accion);


        let fd = {
            cuenta: _cuenta,
            plan: _plan,
            envio: _envio,
            moneda: _moneda,
            ip: _ip,
            puerto: _puerto,
            usuario: _usuario,
            contrasena: _contrasena,
            llaveReceptor: _llaveReceptor,
            llaveEmisor: _llaveEmisor,
            dns: _dns,
            accion: _accion
        }
        const url = `${Administrador}/EditarSFTP`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data == "1") {
                    toastr.success("Cuenta guardada con éxito", 'Éxito', toastrOptions)
                    $('#modalsftp').modal('hide')
                    BuscarSFTP()
                } else {
                    toastr.warning('Cuenta no válida', 'Alerta')//, options)
                }
            })
            .catch(err => {
                console.error(err)
                toastr.error('Error en la petición! recargue e intente de nuevo', 'Error')//, options)
            })
    } else {
        var formData = new FormData();
        var _cuenta = $('#nocuenbta').val()
        var _plan = $('#plan').val()
        var _envio = $('#envio').val()
        var _moneda = $('#moneda').val()
        var _ip = $('#dirip').val()
        var _puerto = $('#puerto').val()
        var _usuario = $('#usu').val()
        var _contrasena = $('#contra').val()
        var _llaveReceptor = $('#llavrec').val()
        var _llaveEmisor = $('#llavemi').val()
        var _dns = "N/D"
        var _accion = "I"

        if (_cuenta == "") {
            toastr.warning('Debe digitar un número de cuenta válido', 'Alerta')//, options)
            return false
        } else if (_plan == "") {
            toastr.warning('Debe digitar un plan válido', 'Alerta')//, options)
            return false
        } else if (_moneda == "") {
            toastr.warning('Debe digitar un tipo de moneda válido', 'Alerta')//, options)
            return false
        } else if (_ip == "") {
            toastr.warning('Debe digitar una ip válida', 'Alerta')//, options)
            return false
        } else if (_puerto == "") {
            toastr.warning('Debe digitar un puerto válido', 'Alerta')//, options)
            return false
        } else if (_usuario == "") {
            toastr.warning('Debe digitar un nombre de usuario', 'Alerta')//, options)
            return false
        } else if (_contrasena == "") {
            toastr.warning('Debe digitar una contraseña', 'Alerta')//, options)
            return false
        } else if (_llaveEmisor == "") {
            toastr.warning('Debe digitar una llave emisora', 'Alerta')//, options)
            return false
        } else if (_llaveReceptor == "") {
            toastr.warning('Debe digitar una llave receptora', 'Alerta')//, options)
            return false
        }

        formData.append('cuenta', _cuenta);
        formData.append('plan', _plan);
        formData.append('envio', _envio);
        formData.append('moneda', _moneda);
        formData.append('ip', _ip);
        formData.append('puerto', _puerto);
        formData.append('usuario', _usuario);
        formData.append('contrasena', _contrasena);
        formData.append('llaveReceptor', _llaveReceptor);
        formData.append('llaveEmisor', _llaveEmisor);
        formData.append('dns', _dns);
        formData.append('accion', _accion);


        let fd = {
            cuenta: _cuenta,
            plan: _plan,
            envio: _envio,
            moneda: _moneda,
            ip: _ip,
            puerto: _puerto,
            usuario: _usuario,
            contrasena: _contrasena,
            llaveReceptor: _llaveReceptor,
            llaveEmisor: _llaveEmisor,
            dns: _dns,
            accion: _accion
        }
        const url = `${Administrador}/EditarSFTP`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data == "1") {
                    toastr.success("Cuenta creada con éxito", 'Éxito', toastrOptions)
                    $('#modalsftp').modal('hide')
                    BuscarSFTP()
                } else {
                    toastr.warning('Cuenta no válida', 'Alerta')//, options)
                }
            })
            .catch(err => {
                console.error(err)
                toastr.error('Error en la petición! recargue e intente de nuevo', 'Error')//, options)
            })
    }
}

function MostrarAgregar(tab) {
    if (tab == 1 || !tab) {
        $('#botonesFlotantes').removeClass('d-none')
        $('#nuevo-rol').addClass('d-none')
        $('#nueva-cuentasftp').addClass('d-none')
        KTDataTableUsuarios.reload()
        $('#nuevo-usuario').removeClass('d-none')
        $('#sincronizar-usuarios').removeClass('d-none')
        $('#reporte-usuarios').removeClass('d-none')
    } else if (tab == 2) {
        $('#botonesFlotantes').removeClass('d-none')
        BuscarRoles()
        try {
            DatatableRolesIndex.init()
        } catch {
            DatatableRolesIndex.reload()
        }
        $('#nuevo-usuario').addClass('d-none')
        $('#nueva-cuentasftp').addClass('d-none')
        $('#cambio-rol').addClass('d-none')
        $('#sincronizar-usuarios').addClass('d-none')
        $('#reporte-usuarios').addClass('d-none')
        $('#nuevo-rol').removeClass('d-none')
    } else {
        BuscarPermisosRol()
        $('#botonesFlotantes').addClass('d-none')
        try {
            DatatablePermisosRolesIndex.init()
        } catch {
            DatatablePermisosRolesIndex.reload()
        }
    }
}

function SincronizarUsuarios() {
    Swal.fire({
        title: '¿Desea sincronizar los usuarios con Softland?',
        text: 'Se crearán los usuarios con las acciones de personal de tipo contratación',
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar",
        reverseButtons: true
    }).then(function (result) {
        if (result.value) {
            Swal.fire(
                "Éxito",
                "Se crearon 10 usuarios",
                "success"
            )
        }
    });
}

$(document).ready(() => {
    //BuscarUsuarios()
    KTDataTableUsuarios.init()
    InicilizarSelects()
    ManejarBotones()
    IrATab()
})