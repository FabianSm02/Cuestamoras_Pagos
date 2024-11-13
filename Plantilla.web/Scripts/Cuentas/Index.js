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

let cuentassmtp = [
    {
        "ID": 1,
        "CUENTA": "CR012344432100012349",
        "IP": "10.32.73.10",
        "PUERTO": "22",
        "MONEDA": "CRC",
        "USUARIO": "BOSTON1",
        "PASSWORD": "r23efwe3u56hJAT936",
        "LLAVEPUBLICAREC": "d3Fkd2RxeGN6y3da",
        "LLAVEPUBLICAEMI": "MTJlc2FkcXdkZHdx",
        "PERMISO": "0"
    },
    {
        "ID": 2,
        "CUENTA": "CR010091532177789628",
        "IP": "10.32.72.32",
        "PUERTO": "22",
        "MONEDA": "DOL",
        "USUARIO": "BOSTON2",
        "PASSWORD": "JbhyHN816A69hT8",
        "LLAVEPUBLICAREC": "bGxhdmUgZW5jcmlw",
        "LLAVEPUBLICAEMI": "Ykd4aGRtVWd5dg4",
        "PERMISO": "0"
    }
]

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

var usuarios = [
    {
        "ID": 1,
        "USUARIO": "lsolis",
        "NUM_EMPLEADO": "EMP-0002",
        "NOMBRE": "LEONARDO SOLIS",
        "DESCRIPCION": "EQUIPO-001",
        "JEFE_NOMBRE": "Alejandro Álvarez",
        "JEFE": "EMP-0021",
        "ACTIVO": "S",
        "U_SOFTLAND": "202020",
        "ROL_DESCRIPCION": "Usuario",

    },
    {
        "ID": 2,
        "USUARIO": "pastua",
        "NUM_EMPLEADO": "EMP-0021",
        "NOMBRE": "PABLO CESAR ASTUA",
        "DESCRIPCION": "EQUIPO-001",
        "JEFE_NOMBRE": "Alejandro Álvarez",
        "JEFE": "EMP-0021",
        "ACTIVO": "S",
        "U_SOFTLAND": "202021",
        "ROL_DESCRIPCION": "Administrador",

    },
    {
        "ID": 3,
        "USUARIO": "cperez",
        "NUM_EMPLEADO": "EMP-0003",
        "NOMBRE": "CARLOS PÉREZ HURTADO",
        "DESCRIPCION": "EQUIPO-002",
        "JEFE_NOMBRE": "Alejandro Álvarez",
        "JEFE": "EMP-0021",
        "ACTIVO": "S",
        "U_SOFTLAND": "202023",
        "ROL_DESCRIPCION": "Aprobador",

    }
]

var roles = [
    {
        "ROL": 1,
        "DESCRIPCION": "Usuario",
        "COTIZACIONES": 2,
        "CLIENTES": 2,
        "SEGUIMIENTO": 1,
        "USUARIOS": 3,
        "CONFIGURACION": 3
    },
    {
        "ROL": 2,
        "DESCRIPCION": "Aprobador",
        "COTIZACIONES": 1,
        "CLIENTES": 1,
        "SEGUIMIENTO": 1,
        "USUARIOS": 1,
        "CONFIGURACION": 3
    },
    {
        "ROL": 3,
        "DESCRIPCION": "Administrador",
        "COTIZACIONES": 1,
        "CLIENTES": 1,
        "SEGUIMIENTO": 1,
        "USUARIOS": 1,
        "CONFIGURACION": 1
    }
]

const DatatableSFTPIndex = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_cuentas').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: `${rurl}/ObtenerSFTP`
                    }
                },
                pageSize: 10, // display 20 records per page
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
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [
                {
                    field: 'ID',
                    title: 'Id',
                    width: 25
                }, {
                    field: 'CUENTA',
                    title: 'Cuenta',
                    width: 100
                }, {
                    field: 'NUMERO_PLAN',
                    title: 'Plan',
                    width: 60
                }, {
                    field: 'NUMERO_ENVIO',
                    title: 'Envio',
                    width: 60
                }, {

                    field: 'MONEDA',
                    title: 'Moneda',
                    width: 60
                }, {

                    field: 'IP_SFTP',
                    title: 'IP',
                    width: 100
                }, {

                    field: 'PUERTO_SFTP',
                    title: 'Puerto',
                    width: 60
                }, {

                    field: 'USUARIO',
                    title: 'Usuario',
                    width: 110
                }, {

                    field: 'CONTRASENA',
                    title: 'Contraseña',
                    width: 100,
                    template: function (row) {
                        return row.PERMISO === "0" ? `************` : row.CONTRASENA
                    }
                },
                {

                    field: 'CUENTA_SOFTLAND',
                    title: 'Cuenta Softland',
                    width: 140,
                }, {

                    field: 'LLAVE_RECEPTOR',
                    title: 'Llave receptor',
                    width: 120,
                    template: function (row) {
                        return row.PERMISO == "0" ? `************` : row.LLAVE_RECEPTOR
                        //return row.LLAVEPUBLICAREC == "SI" ? `<i class="las flaticon2-check-mark text-success icon-xl"></i>` : `<i class="las flaticon2-delete text-danger icon-xl"></i>`
                    },
                }, {

                    field: 'LLAVE_EMISOR',
                    title: 'Llave emisor',
                    width: 120,
                    template: function (row) {
                        return row.PERMISO == "0" ? `************` : row.LLAVE_EMISOR
                        //return row.LLAVEPUBLICAEMI == "SI" ? `<i class="las flaticon2-check-mark text-success icon-xl"></i>`:`<i class="las flaticon2-delete text-danger icon-xl"></i>`
                    },
                }, {
                    field: 'Actions',
                    title: CONFIG_SFTP ? 'Acciones' : '',
                    width: CONFIG_SFTP ? 110 : 5,
                    sortable: false,
                    overflow: 'visible',
                    autoHide: false,
                    template: function (row) {
                        if (!CONFIG_SFTP) {
                            return ''
                        }
                        let btns = ``
                        btns += `
                                <a onclick="EditarCuenta('${row.ID}', '${row.CUENTA}', '${row.NUMERO_PLAN}', '${row.NUMERO_ENVIO}', '${row.MONEDA}', '${row.IP_SFTP}', '${row.PUERTO_SFTP}', '${row.USUARIO}', '${row.CONTRASENA}', '${row.CUENTA_SOFTLAND}', '${row.LLAVE_RECEPTOR}', '${row.LLAVE_EMISOR}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Editar">
	                                <span class="svg-icon svg-icon-warning svg-icon-2x">
                                        <svg xmlns = "http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "24px" height = "24px" viewBox = "0 0 24 24" version = "1.1" >
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <rect x="0" y="0" width="24" height="24"/>
                                                <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>
                                                <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>
                                            </g>
                                        </svg>
                                    </span>
							    </a>

                                <a onclick="ConfirmarElininarSFTP('${row.ID}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Eliminar">
	                                <span class="svg-icon svg-icon-danger svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-02-01-052524/theme/html/demo1/dist/../src/media/svg/icons/Home/Trash.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M6,8 L18,8 L17.106535,19.6150447 C17.04642,20.3965405 16.3947578,21 15.6109533,21 L8.38904671,21 C7.60524225,21 6.95358004,20.3965405 6.89346498,19.6150447 L6,8 Z M8,10 L8.45438229,14.0894406 L15.5517885,14.0339036 L16,10 L8,10 Z" fill="#000000" fill-rule="nonzero"/>
                                            <path d="M14,4.5 L14,3.5 C14,3.22385763 13.7761424,3 13.5,3 L10.5,3 C10.2238576,3 10,3.22385763 10,3.5 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>
                                        </g>
                                    </svg><!--end::Svg Icon--></span>
							    </a>`
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



function verclaves(id, permiso) {
    SFTPIndex.find(function (obj, index) {
        if (obj.ID == id) {
            obj.PERMISO = permiso
            DatatableSFTPIndex.reset()
        }
    })


}
function cargaCuentasSoftland(item, index, arr) {
    let option = document.createElement("OPTION");
    option.value = item.CUENTA_BANCO;
    option.innerHTML = item.CUENTA_BANCO;
    $("#cuentaSoftland").append(option);
}

function buscaCuentasSoftland() {

    $.ajax({
        url: `${rurl}/ObtenerCuentasSoftland`,
        async: true,
        type: "POST",
        success: function (response) {
           /* $("#cuentaSoftland").empty();*/
            if (response) {
                response.forEach(cargaCuentasSoftland)

            }
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


//function BuscarSFTP() {

//    $.ajax({
//        url: `${rurl}/ObtenerSFTP`,
//        async: true,
//        type: "POST",
//        success: function (data) {
//            SFTPIndex = data;
//            $("#kt_datatable_cuentas").parent().html('<div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable_cuentas"></div>');
//            DatatableSFTPIndex.init();
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


function ManejarBotones() {

    

    $('#btn-insertar-cuenta').on('click', (e) => {
        e.preventDefault()
        GuardarSFTP()

        $('#modalsftp').modal('hide')

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
    $('#cuentaSoftland').select2({
        language: select3esp,
        placeholder: "Seleccione una cuenta",
    })
    $('#nocuenbta').select2({
        language: select3esp,
        placeholder: "Seleccione un banco H2H",
    })
    $('#moneda').select2({
        language: select3esp,
        placeholder: "Seleccione una moneda",
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

function EditarCuenta(id, cuenta, plan, envio, moneda, ip, puerto, usuario, pass, cuentaSoftland, llaverec, llaveemi) {
    $('#modalsftpLabel').text('Editar SFTP')

    $('#divID').addClass('d-none')
    $("#h2hID").val(id)
    $('#moneda').val(moneda).trigger('change')
    $("#nocuenbta").val(cuenta).trigger('change')
    $("#nocuenbta").prop("disabled", true);
    $("#plan").val(plan)
    $("#envio").removeClass('d-none')
    $("#envio").val(envio)
    $("#envio").prop("disabled", true);
    $("#dirip").val(ip)
    $("#divip").addClass('d-none')
    $("#puerto").val(puerto)
    $("#divpuerto").addClass('d-none')
    $("#usu").val(usuario)
    $("#divusuario").addClass('d-none')
    $("#contra").val(pass)
    $("#divcontrasena").addClass('d-none')
    $("#llavrec").val(llaverec)
    $("#divreceptor").addClass('d-none')
    $("#llavemi").val(llaveemi)
    $("#divemisor").addClass('d-none')
    $("#cuentaSoftland").val(cuentaSoftland).trigger('change')

    $('#modalsftp').modal('show')
}

function CrearCuenta() {
    $('#modalsftpLabel').text('Agregar nuevo SFTP')

    $('#divID').addClass('d-none')
    $("#h2hID").val("")
    $('#moneda').val("").trigger('change')
    $("#moneda").prop("disabled", false);
    $("#nocuenbta").val("Kyriba").trigger('change')
    $("#nocuenbta").prop("disabled", true);
    $("#plan").val("")
    $("#envio").val("")
    $('#divEnvio').addClass('d-none')
    $("#dirip").val("")
    $("#puerto").val("")
    $("#usu").val("")
    $("#contra").val("")
    $("#llavrec").val("")
    $("#llavemi").val("")
    $("#divip").removeClass('d-none')
    $("#divpuerto").removeClass('d-none')
    $("#divusuario").removeClass('d-none')
    $("#divcontrasena").removeClass('d-none')
    $("#divreceptor").removeClass('d-none')
    $("#divemisor").removeClass('d-none')


    $("#cuentaSoftland").val("").trigger('change')

    $('#modalsftp').modal('show')
}

function GuardarSFTP() {
    if ($('#modalsftpLabel').text() == "Editar SFTP") {
        var formData = new FormData();
        var _id = $('#h2hID').val()
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
        var _cuentaSoftland = $('#cuentaSoftland').val()
        var _dns = "N/D"
        var _accion = "U"

        if (_cuenta == "") {
            toastr.warning('Debe digitar un número de cuenta válido', 'Alerta', toastrOptions)
            return false
        } else if (_plan == "") {
            toastr.warning('Debe digitar un plan válido', 'Alerta', toastrOptions)
            return false
        } else if (_moneda == "") {
            toastr.warning('Debe digitar un tipo de moneda válido', 'Alerta', toastrOptions)
            return false
        } else if (_cuentaSoftland == "") {
            toastr.warning('Debe digitar una cuenta de softland válida', 'Alerta', toastrOptions)
            return false
        } else if (_ip == "") {
            toastr.warning('Debe digitar una ip válida', 'Alerta', toastrOptions)
            return false
        } else if (_puerto == "") {
            toastr.warning('Debe digitar un puerto válido', 'Alerta', toastrOptions)
            return false
        } else if (_usuario == "") {
            toastr.warning('Debe digitar un nombre de usuario', 'Alerta', toastrOptions)
            return false
        } else if (_contrasena == "") {
            toastr.warning('Debe digitar una contraseña', 'Alerta', toastrOptions)
            return false
        } else if (_llaveEmisor == "") {
            toastr.warning('Debe digitar una llave emisora', 'Alerta', toastrOptions)
            return false
        } else if (_llaveReceptor == "") {
            toastr.warning('Debe digitar una llave receptora', 'Alerta', toastrOptions)
            return false
        }


        formData.append('id', _id);
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
        formData.append('cuentaSoftland', _cuentaSoftland);
        formData.append('dns', _dns);
        formData.append('accion', _accion);


        let fd = {
            id: _id,
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
            cuentaSoftland: _cuentaSoftland,
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
                        DatatableSFTPIndex.reload()
                    } else {
                        toastr.warning('Cuenta no válida', 'Alerta', toastrOptions)
                    }
                })
                .catch(err => {
                    console.error(err)
                    toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
                })
    } else {
        var formData = new FormData();
        var _id = 0
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
        var _cuentaSoftland = $('#cuentaSoftland').val()
        var _dns = "N/D"
        var _accion = "I"

        if (_cuenta == "") {
            toastr.warning('Debe digitar un número de cuenta válido', 'Alerta', toastrOptions)
            return false
        } else if (_plan == "") {
            toastr.warning('Debe digitar un plan válido', 'Alerta', toastrOptions)
            return false
        } else if (_moneda == "") {
            toastr.warning('Debe digitar un tipo de moneda válido', 'Alerta', toastrOptions)
            return false
        } else if (_cuentaSoftland == "") {
            toastr.warning('Debe digitar una cuenta de softland válida', 'Alerta', toastrOptions)
            return false
        } else if (_ip == "") {
            toastr.warning('Debe digitar una ip válida', 'Alerta', toastrOptions)
            return false
        } else if (_puerto == "") {
            toastr.warning('Debe digitar un puerto válido', 'Alerta', toastrOptions)
            return false
        } else if (_usuario == "") {
            toastr.warning('Debe digitar un nombre de usuario', 'Alerta', toastrOptions)
            return false
        } else if (_contrasena == "") {
            toastr.warning('Debe digitar una contraseña', 'Alerta', toastrOptions)
            return false
        } else if (_llaveEmisor == "") {
            toastr.warning('Debe digitar una llave emisora', 'Alerta', toastrOptions)
            return false
        } else if (_llaveReceptor == "") {
            toastr.warning('Debe digitar una llave receptora', 'Alerta', toastrOptions)
            return false
        }

        formData.append('id', _id);
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
        formData.append('cuentaSoftland', _cuentaSoftland);
        formData.append('dns', _dns);
        formData.append('accion', _accion);


        let fd = {
            id: _id,
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
            cuentaSoftland: _cuentaSoftland,
            dns: _dns,
            accion: _accion
        }
        const url = `${Administrador}/InsertarSFTP`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data == "1") {
                    toastr.success("Cuenta creada con éxito", 'Éxito', toastrOptions)
                    $('#modalsftp').modal('hide')
                    DatatableSFTPIndex.reload()
                } else {
                    toastr.warning('Cuenta no válida', 'Alerta', toastrOptions)
                }
            })
            .catch(err => {
                console.error(err)
                toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
            })
    }
}

function ConfirmarElininarSFTP(id) {
    Swal.fire({
        title: `Eliminar cuenta`,
        html: `¿Desea eliminar esta cuenta?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Cancelar",
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed)
            EliminarSFTP(id)
    })
}

function EliminarSFTP(id) {
    var formData = new FormData();
    var _id = id

    formData.append('id', _id);
   
    const url = `${Administrador}/EliminarSFTP`
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => res.json())
        .then(data => {
            if (data == "1") {
                toastr.success("Cuenta eliminada con éxito", 'Éxito', toastrOptions)
                DatatableSFTPIndex.reload()
            } else {
                toastr.warning('Cuenta no se pudo eliminar', 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })

}

function MostrarAgregar(tab) {
    if (tab == 1 || !tab) {
        $('#botonesFlotantes').removeClass('d-none')
        DatatableUsuariosIndex.reload()
        $('#nuevo-rol').addClass('d-none')
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
        $('#cambio-rol').addClass('d-none')
        $('#sincronizar-usuarios').addClass('d-none')
        $('#reporte-usuarios').addClass('d-none')
        $('#nuevo-rol').removeClass('d-none')
    } else if (tab == 4) {
        try {
            $('#botonesFlotantes').removeClass('d-none')
            $('#nuevo-usuario').removeClass('d-none')
            BuscarSFTP()
            DatatableSFTPIndex.init()
        } catch {
            DatatableSFTPIndex.reload()
        }
        $('#nuevo-usuario').addClass('d-none')
        $('#cambio-rol').addClass('d-none')
        $('#sincronizar-usuarios').addClass('d-none')
        $('#reporte-usuarios').addClass('d-none')
        $('#nuevo-rol').addClass('d-none')
        $('#nuevasftp').removeClass('d-none')
    } else {
        BuscarPermisosRol()
        $('#botonesFlotantes').addClass('d-none')
        try {
            DatatablePermisosRolesIndex.init()
        } catch {
            DatatablePermisosRolesIndex.reload()
        }
        $('#nuevo-usuario').addClass('d-none')
        $('#nuevo-rol').addClass('d-none')
        $('#cambio-rol').addClass('d-none')
        $('#sincronizar-usuarios').addClass('d-none')
        $('#reporte-usuarios').addClass('d-none')
    }
}


$(document).ready(() => {
    //DatatableUsuariosIndex.init()
    DatatableSFTPIndex.init()
    InicilizarSelects()
    /*BuscarCuentasSoftland()*/
    ManejarBotones()
    IrATab()
    //JQUERY Mask
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/, optional: true
            }
        }
    });
    $('.plan').mask('AAAA');
    $('.puerto').mask('0000');
})