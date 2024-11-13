const ESTADO = {
    "A": { 'titulo': 'Aprobada', 'class': ' label-light-success' },
    "R": { 'titulo': 'Recibido', 'class': ' label-light-info' }
}

let totalColones = 0
let totalDolares = 0
let active = []
//let user = document.getElementById("UsuarioLogin").innerHTML
//filtros
let lineasBatch = ''
let tefPorProveedor = 'S'
let existeLaTEF = 'N'

function updateTotal() {
    const montosPago = document.querySelectorAll('.monto-pago')
    const lineasPago = KTDataTable.getOriginalDataSet()
    let totalDolar = 0
    let totalColon = 0
    if (lineasPago) {
        for (const lineaPago of lineasPago) {
            if (lineaPago.SELECCIONADO == 'S') {
                const { MONEDA, SALDO } = lineaPago
                if (MONEDA == 'CRC') {
                    totalColon += Number(SALDO)

                } else {
                    totalDolar += Number(SALDO)
                }

            }
        }
    }
    $('#totalFacturaColones').text("₡" + addCommas(totalColon.toFixed(2).toString()))
    $('#totalFacturaDolares').text("$" + addCommas(totalDolar.toFixed(2).toString()))


    //let totalC = 0
    //let totalD = 0
    //let id = ""
    //let mon = ""
    //for (i = 0; i < active.length; i++) {
    //    id = "row" + active[i].getElementsByTagName("td")[2].children[0].innerText
    //    mon = "mon" + active[i].getElementsByTagName("td")[2].children[0].innerText
    //    if (document.getElementById(mon).text === "CRC") {
    //        totalC += Number(document.getElementById(id).value)
    //        //totalD += Number(document.getElementById(id).value) / 606

    //    }
    //    if (document.getElementById(mon).text === "USD") {
    //        totalD += Number(document.getElementById(id).value)
    //        //totalC += Number(document.getElementById(id).value) * 606

    //    }
    //}

    //$('#totalFacturaColones').text("₡" + addCommas(totalC.toFixed(2).toString()))
    //$('#totalFacturaDolares').text("$" + addCommas(totalD.toFixed(2).toString()))
    //// $('#totalFacturaDolares').text("$" + '0.00')

}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

const KTDataTable = function () {
    // Private functions
    let datatable
    // demo initializer
    let demo = function () {
        datatable = $('#kt_datatable_aprobacion').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: {
                    read: {
                        url: `${RURL}/GetArobacionesPago`,
                        method: 'GET',
                        params: {
                            fechaInicio: $('#FechaInicio').val().split('/').reverse().join('-'),
                            fechaFin: $('#FechaFinal').val().split('/').reverse().join('-'),
                            transferencia: $('#FiltroTEF').val(),
                            moneda: $('#filtromoneda').val(),
                            proveedor: $('#FiltroProveedor').val(),
                            fechaVence: $('#FechaLimite').val().split('/').reverse().join('-'),
                            tipo: $('#filtroTipo').val()

                        },
                        map: function (raw) {
                            //Ocultamos el boton de crear tef
                            $('#crearTranferenciaBatch').addClass('d-none')
                            let dataSet = raw;
                            if (typeof raw !== 'undefined') {
                                dataSet = raw.map(item => {
                                    item.SELECCIONADO = 'N'
                                    return item
                                });
                            }
                            return dataSet;
                        }
                    }
                },
                pageSize: 100,
                saveState: false
            },
            search: {
                input: $('#kt_datatable_search_query_Aprobacion'),
                key: 'generalSearch'
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
                //    field: 'CONSECUTIVO',
                //    title: 'Selector',
                //    sortable: false,
                //    width: 30,
                //    type: 'number',
                //    selector: {
                //        class: ''
                //    },
                //},
                {
                    field: 'SELECCIONADO',
                    title: `<label class="checkbox">
                                <input type="checkbox" checked="checked" class="checkbox-all" name="Checkboxes3"/>
                                <span></span>
                            </label>`,
                    width: 30,
                    sortable: false,
                    template: function (row) {
                        const SELECCIONADO = row.SELECCIONADO === 'S' ? 'checked' : ''
                        return `<label class="checkbox">
                                <input type="checkbox" class="checkbox-single" data-documento="${row.DOCUMENTO}" data-proveedor="${row.PROVEEDOR}" ${SELECCIONADO}/>
                                <span></span>
                            </label>`
                    }
                },
                {
                    field: 'PROVEEDOR',
                    title: 'Proveedor',
                    width: 200,
                    template: function (row) {
                        return row.PROVEEDOR + " - " + row.NOMBRE
                    }
                }, {
                    field: 'DOCUMENTO',
                    title: 'Documento',
                    width: 160
                },
                //{
                //    field: 'OC',
                //    title: 'Orden compra',
                //    width: 110
                //},
                {
                    field: 'FECHA',
                    title: 'Fecha rige',
                    width: 90,
                }, {
                    field: 'VENCE',
                    title: 'Vence',
                    width: 90,
                    template: function (row) {
                        if (FechaVencida(row.VENCE)) {
                            return `<span class="text-danger">${row.VENCE}</span>`
                        }
                        else {
                            return `<span>${row.VENCE}</span>`
                        }
                    }
                },
                {
                    field: 'TIPO',
                    title: 'Tipo',
                    width: 50
                }, {
                    field: 'MONEDA',
                    title: 'Moneda',
                    width: 70,
                    template: function (row) {
                        return `<a id="mon${row.DOCUMENTO}">${row.MONEDA}<a/>`
                    }
                },
                {
                    field: 'MONTO',
                    title: 'Monto',
                    width: 90,
                    template: function (row) {
                        return `<p value="${row.MONTO.toLocaleString("en-US")}" class="mt-4" style="text-align:right;">${row.MONTO_STR}</p>`
                    }
                },
                {
                    field: 'TRANSFERENCIA',
                    title: 'TEF',
                    width: 120,
                },
                {
                    field: 'SALDO',
                    title: 'Saldo',
                    width: 130,
                    //textAlign: 'right',
                    template: function (row) {
                        return `<p value="${row.SALDO.toLocaleString("en-US")}" class="mt-4" style="text-align:right;">${row.SALDO_STR}</p>`
                    }
                },
                {
                    field: 'MONTOPAGO',
                    title: PAGOS_PROYECTADOS ? 'Monto a pagar' : '',
                    width: PAGOS_PROYECTADOS ? 130 : 0,
                    //textAlign: 'right',
                    template: function (row) {
                        const SELECCIONADO = row.SELECCIONADO === 'N' ? 'disabled' : ''
                        return `<input ${SELECCIONADO} class="form-control monto-pago" style="text-align:right;" type="Number" min="1" max="${row.SALDO}" data-moneda="${row.MONEDA}" data-documento="${row.DOCUMENTO}" data-proveedor="${row.PROVEEDOR}" value="${row.SALDO}" id="row${row.DOCUMENTO}${row.PROVEEDOR}"></>`
                    }
                }
                //     {
                //         field: 'Actions',
                //         title: PAGOS_PROYECTADOS ? 'Acciones' : '',
                //         width: PAGOS_PROYECTADOS ? 90 : 5,
                //         template: function (row) {
                //             if (!PAGOS_PROYECTADOS) {
                //                 return ''
                //             }
                //             let btns = ``
                //             //             if (row.RECEPCION != null) {
                //             //                 btns += `<a class="btn btn-sm btn-clean btn-icon mr-2" title="Ver factura" onclick="obtenerDocumentos('1','${row.RECEPCION}')">
                //             //                         <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Files/DownloadedFile.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                //             //                             <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                //             //                                 <polygon points="0 0 24 0 24 24 0 24"/>
                //             //                                 <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                //             //                                 <rect fill="#000000" x="6" y="11" width="9" height="2" rx="1"/>
                //             //                                 <rect fill="#000000" x="6" y="15" width="5" height="2" rx="1"/>
                //             //                             </g>
                //             //                         </svg><!--end::Svg Icon--></span>
                //             //</a>`
                //             //             }


                //             if (row.TRANSFERENCIA != '-') {
                //                 btns += `<a class="btn btn-sm btn-clean btn-icon mr-2" title="Cambiar a otra TEF" onclick="ModalCambiarTEF('${row.TRANSFERENCIA}','${row.DOCUMENTO}')" >
                //                         <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/Navigation/Exchange.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                //                         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                //                             <polygon points="0 0 24 0 24 24 0 24"/>
                //                             <rect fill="#000000" opacity="0.3" transform="translate(13.000000, 6.000000) rotate(-450.000000) translate(-13.000000, -6.000000) " x="12" y="8.8817842e-16" width="2" height="12" rx="1"/>
                //                             <path d="M9.79289322,3.79289322 C10.1834175,3.40236893 10.8165825,3.40236893 11.2071068,3.79289322 C11.5976311,4.18341751 11.5976311,4.81658249 11.2071068,5.20710678 L8.20710678,8.20710678 C7.81658249,8.59763107 7.18341751,8.59763107 6.79289322,8.20710678 L3.79289322,5.20710678 C3.40236893,4.81658249 3.40236893,4.18341751 3.79289322,3.79289322 C4.18341751,3.40236893 4.81658249,3.40236893 5.20710678,3.79289322 L7.5,6.08578644 L9.79289322,3.79289322 Z" fill="#000000" fill-rule="nonzero" transform="translate(7.500000, 6.000000) rotate(-270.000000) translate(-7.500000, -6.000000) "/>
                //                             <rect fill="#000000" opacity="0.3" transform="translate(11.000000, 18.000000) scale(1, -1) rotate(90.000000) translate(-11.000000, -18.000000) " x="10" y="12" width="2" height="12" rx="1"/>
                //                             <path d="M18.7928932,15.7928932 C19.1834175,15.4023689 19.8165825,15.4023689 20.2071068,15.7928932 C20.5976311,16.1834175 20.5976311,16.8165825 20.2071068,17.2071068 L17.2071068,20.2071068 C16.8165825,20.5976311 16.1834175,20.5976311 15.7928932,20.2071068 L12.7928932,17.2071068 C12.4023689,16.8165825 12.4023689,16.1834175 12.7928932,15.7928932 C13.1834175,15.4023689 13.8165825,15.4023689 14.2071068,15.7928932 L16.5,18.0857864 L18.7928932,15.7928932 Z" fill="#000000" fill-rule="nonzero" transform="translate(16.500000, 18.000000) scale(1, -1) rotate(270.000000) translate(-16.500000, -18.000000) "/>
                //                         </g>
                //                     </svg><!--end::Svg Icon--></span>
                //</a>`};
                //             return btns
                //         }
                //     }
            ]
        })

        //$("#MarcarTodas").on("click", function (e) {
        //    toastr.success('Filtros aplicados y se han marcado los documentos vencidos', 'Éxito', toastrOptions)
        //    //datatable.setActiveAll(true)
        //    let todasLineas = datatable.rows()
        //    console.log()

        //    $.each(todasLineas, function (index, value) {
        //        console.log(value)
        //    })
        //})


        datatable.on('datatable-on-layout-updated', function (e) {
            $('.monto-pago').on('blur', function () {
                const { documento, proveedor } = $(this).data()
                const montoPago = Number($(this).val())

                let originalDataset = datatable.originalDataSet

                originalDataset = originalDataset.map(item => {
                    if (documento.toString() == item.DOCUMENTO && proveedor.toString() == item.PROVEEDOR) {
                        item.SALDO = montoPago
                    }
                    return item
                })
                datatable.originalDataSet = originalDataset

                lineas = lineas.map(item => {
                    if (documento.toString() == item.documento && proveedor.toString() == item.proveedor) {
                        return { documento: documento.toString(), proveedor: proveedor.toString(), montoPago, tef: item.tef }
                    } else {
                        return item
                    }
                })
                updateTotal()
            })
            $('.checkbox-single').on('change', function () {
                const { documento, proveedor } = $(this).data()
                $(`#row${documento}${proveedor}`).attr('disabled', !$(this).is(':checked'))
                let originalDataset = datatable.originalDataSet

                originalDataset = originalDataset.map(item => {
                    if (documento == item.DOCUMENTO && proveedor == item.PROVEEDOR) {
                        item.SELECCIONADO = $(this).is(':checked') ? 'S' : 'N'
                    }
                    return item
                })
                datatable.originalDataSet = originalDataset

                lineas = []
                for (const row of originalDataset) {
                    if (row.SELECCIONADO == 'S') {
                        lineas.push({
                            documento: row.DOCUMENTO,
                            proveedor: row.PROVEEDOR,
                            tef: row.TRANSFERENCIA,
                            montoPago: Number(isNaN($(`#row${row.DOCUMENTO}${row.PROVEEDOR}`).val()) ? row.SALDO : $(`#row${row.DOCUMENTO}${row.PROVEEDOR}`).val()),
                            aprobador: null

                        })
                    }
                }
                mostrarBotonTransferencia()

                updateTotal()
            })
           $('.checkbox-all').on('change', function () {
                $('.checkbox-single').prop('checked', $(this).is(':checked'))
                let originalDataset = datatable.originalDataSet
                originalDataset = originalDataset.map(item => {
                    item.SELECCIONADO = $(this).is(':checked') ? 'S' : 'N'
                    return item
                })
                datatable.originalDataSet = originalDataset

                lineas = []
                for (const row of originalDataset) {
                    $(`#row${row.DOCUMENTO}${row.PROVEEDOR}`).attr('disabled', !$(this).is(':checked'))
                    if (row.SELECCIONADO == 'S') {
                        lineas.push({
                            documento: row.DOCUMENTO,
                            proveedor: row.PROVEEDOR,
                            tef: row.TRANSFERENCIA,
                            montoPago: Number(isNaN($(`#row${row.DOCUMENTO}${row.PROVEEDOR}`).val()) ? row.SALDO : $(`#row${row.DOCUMENTO}${row.PROVEEDOR}`).val()),
                            aprobador: null

                        })
                    }
                }
                mostrarBotonTransferencia()

                updateTotal()
            })

        })

        datatable.on('datatable-on-check datatable-on-uncheck', function (e) {
            lineas = []
            let lineasAprobacion = []
            let checkedNodes = datatable.rows('.datatable-row-active').nodes()
            const rows = document.querySelectorAll('tbody .datatable-row')

            $.each(checkedNodes, function (index, value) {
                lineas.push({
                    documento: $(this).closest('tr').find("td:nth-child(3)").attr('aria-label'),
                    proveedor: $(this).closest('tr').find("td:nth-child(2)").attr('aria-label'),
                    tef: $(this).closest('tr').find("td:nth-child(9)").attr('aria-label'),
                    montoPago: $(this).closest('tr').find("td:nth-child(11)").find('input').val(),
                    aprobador: null

                })
            })

            //ActualizarUsuarioTefLineas()

            //console.log(lineas)

            for (const item of rows) {
                const active = item.classList.contains('datatable-row-active')
                const element = item.querySelectorAll('td')[10].querySelector('input')
                element.disabled = !active
                if (active) {
                    lineasAprobacion.push({
                        proveedor: item.querySelectorAll('td')[1].ariaLabel,
                        documento: item.querySelectorAll('td')[2].ariaLabel,
                        montoPago: element.value
                    })
                }
            }
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
        },
        getOriginalDataSet() {
            return datatable.originalDataSet
        }
    }
}()


function mostrarBotonTransferencia() {
    //SI HAY UN DOC CON UNA TEF ASOCIADA EL BOTON DE CREAR TEF DESAPARECE
    if (lineas.length > 0) {
        for (var i = 0; i < lineas.length; i++) {
            if (lineas[i].tef == '-') {
                $('#crearTranferenciaBatch').removeClass('d-none')
            } else {
                $('#crearTranferenciaBatch').addClass('d-none')
                i = lineas.length;
            }
        }
    } else {
        $('#crearTranferenciaBatch').addClass('d-none')
    }

}

function ObtenerProveedorAsignado(proveedor, aprobador) {
    const linea = lineas.find(item => item.proveedor === proveedor && item.aprobador !== null)
    if (!linea) {
        return aprobador
    } else {
        return linea.aprobador
    }
}

function ActualizarUsuarioTefLineas() {
    const usuarios = []
    const usuariosSelect = document.querySelectorAll('#usuariotef option')
    for (const usuario of usuariosSelect) {
        usuarios.push(usuario.value)
    }
    const aprobadores = usuarios.filter(item => item != '')

    if (lineas.length > 0) {
        for (const [index, linea] of lineas.entries()) {
            linea.aprobador = tefPorProveedor == 'S' ? ObtenerProveedorAsignado(linea.proveedor, aprobadores[index]) : aprobadores[0]
        }
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

function FechaVencida(fechaVence) {
    try {
        let dateV = fechaVence.split("/")
        let hoy = new Date()
        let vence = new Date(dateV[2], dateV[1] - 1, dateV[0])
        return hoy > vence
    } catch {
        //console.log(1)
        return false
    }
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

function InicilizarSelects() {
    $('#aprobadorfinanciero').select2({
        placeholder: "Seleccione un aprobador"
    })
    $('#usuariotef').select2({
        placeholder: "Seleccione un usuario"
    })
    $('#aprobadorgerencia').select2({
        placeholder: "Seleccione un aprobador"
    })
    $('#cuentaBanco').select2({
        placeholder: "Seleccionen una cuenta"
    })
    $('#FiltroProveedor').select2({
        placeholder: "Seleccione un proveedor"
    })
    $('#FiltroEstado').select2({
        placeholder: "Seleccione estado"
    })
    $('#filtromoneda').select2({
        placeholder: "Seleccione una cuenta"
    })
    $('#filtroTipo').select2({
        placeholder: "Seleccione un tipo"
    })
    $('#UsuarioTEF').select2({
        placeholder: "Seleccione un usuario"
    })
    $('#FiltroTEF').select2({
        placeholder: "Seleccione una TEF"
    })
    $('#cambiarTEF').select2({
        placeholder: "Seleccione una transferencia"
    })
    $('#cambiarTEFAnterior').select2({
        placeholder: "Seleccione una transferencia"
    })
}

function validarRechazar(element) {
    Swal.fire({
        text: "¿Desea rechazar este registro?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Rechazar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-danger",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

function validarEnviarSeleccionados() {
    Swal.fire({
        text: "¿Desea enviar los elementos seleccionados?",
        icon: "success",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-primary",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

function validarExcel() {
    Swal.fire({
        text: "¿Desea descargar el Excel?",
        icon: "success",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Descargar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-primary",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

function validarCargarSoftland() {
    Swal.fire({
        text: "¿Desea cargar a Softland?",
        icon: "success",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Cargar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-primary",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

function validarAprobarSeleccionados() {
    Swal.fire({
        text: "¿Desea aprobar los elementos seleccionados?",
        icon: "success",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Aprobar",
        cancelButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn font-weight-bold btn-primary",
            cancelButton: "btn font-weight-bold btn-default"
        }
    }).then(function (result) {
        if (result.value) {
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

function validarAceptar(element) {
    Swal.fire({
        text: "¿Desea aceptar este registro?",
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
            //_formEl.submit(); // Submit form
            //INSERTAR
            //window.location.href = `${RURL}`
        } else if (result.dismiss === 'cancel') {

        }
    });
}

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
        $('.fecha').datepicker({
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

function Calcmontos() {
    ////CON LA FECHA DEBE CONSULTAR LOS SALDOS EN BD
    ////SETEA EL SALDO VENCIDO EN COLONES
    //$("#textVencidasCRC").text(`Total de facturas a pagar en colones al ${fecha}`)
    //$("#montoVencidasCRC").text(`₡390,573,866.90`)

    ////SETEA EL SALDO VENCIDO EN DOLARES
    //$("#textVencidasUSD").text(`Total de facturas a pagar en dólares al ${fecha}`)
    //$("#montoVencidasUSD").text(`$144,511.33`)

    ////SETEA EL SALDO POR VENCER EN COLONES
    //$("#textPorVencerCRC").text(`Por vencer colones al ${fecha}`)
    //$("#montoPorVencerCRC").text(`₡345,566.90`)

    ////SETEA EL SALDO POR VENCER EN DOLARES
    //$("#textPorVencerUSD").text(`Por vencer dólares al ${fecha}`)
    //$("#montoPorVencerUSD").text(`$23,431.33`)
    $("#montoVencidasCRC").text(`₡0.00`)
    $("#montoVencidasUSD").text(`$0.00`)


    var formData = new FormData();
    var _fechaVenceParaText = $('#FechaLimite').val()
    var _fechaVence = $('#FechaLimite').val().split('/').reverse().join('-')
    var _fechaInicio = $('#FechaInicio').val().split('/').reverse().join('-')
    var _fechaFin = $('#FechaFinal').val().split('/').reverse().join('-')
    var _proveedor = $('#FiltroProveedor').val()

    formData.append('fechaVence', _fechaVence);
    formData.append('fechaInicio', _fechaInicio);
    formData.append('fechaFin', _fechaFin);
    formData.append('proveedor', _proveedor);

    $("#textVencidasCRC").text(`Total de facturas vencidas en colones al ${_fechaVenceParaText}`)
    $("#textVencidasUSD").text(`Total de facturas vencidas en dólares al ${_fechaVenceParaText}`)
    $("#textPorVencerCRC").text(`Total de facturas sin vencer en colones al ${_fechaVenceParaText}`)
    $("#textPorVencerUSD").text(`Total de facturas sin vencer en dólares al ${_fechaVenceParaText}`)


    const url = `${RURL}/ObtenerSaldosVencidos`
    fetch(url, {
        method: 'POST',
        body: formData    //JSON.stringify(fd)
    })
        .then(res => res.json())
        .then(data => {

            $("#montoVencidasCRC").text("₡" + data[0].MONTO_VENCIDO.toLocaleString('en-US'))
            $("#montoVencidasUSD").text("$" + data[1].MONTO_VENCIDO.toLocaleString('en-US'))

        })
        .catch(err => {
            //console.error(err)
            //toastr.error('Error en la petición! recargue e intente de nuevo', 'Error')//, options)
        })
    ObtenerSaldosSinVencer()
}

function ObtenerSaldosSinVencer() {
    ////CON LA FECHA DEBE CONSULTAR LOS SALDOS EN BD
    ////SETEA EL SALDO VENCIDO EN COLONES
    //$("#textVencidasCRC").text(`Total de facturas a pagar en colones al ${fecha}`)
    //$("#montoVencidasCRC").text(`₡390,573,866.90`)

    ////SETEA EL SALDO VENCIDO EN DOLARES
    //$("#textVencidasUSD").text(`Total de facturas a pagar en dólares al ${fecha}`)
    //$("#montoVencidasUSD").text(`$144,511.33`)

    ////SETEA EL SALDO POR VENCER EN COLONES
    //$("#textPorVencerCRC").text(`Por vencer colones al ${fecha}`)
    //$("#montoPorVencerCRC").text(`₡345,566.90`)

    ////SETEA EL SALDO POR VENCER EN DOLARES
    //$("#textPorVencerUSD").text(`Por vencer dólares al ${fecha}`)
    //$("#montoPorVencerUSD").text(`$23,431.33`)
    $("#montoPorVencerCRC").text(`₡0.00`)
    $("#montoPorVencerUSD").text(`$0.00`)


    var formData = new FormData();
    var _fechaVence = $('#FechaLimite').val().split('/').reverse().join('-')
    var _fechaInicio = $('#FechaInicio').val().split('/').reverse().join('-')
    var _fechaFin = $('#FechaFinal').val().split('/').reverse().join('-')
    var _proveedor = $('#FiltroProveedor').val()

    formData.append('fechaVence', _fechaVence);
    formData.append('fechaInicio', _fechaInicio);
    formData.append('fechaFin', _fechaFin);
    formData.append('proveedor', _proveedor);

    const url = `${RURL}/ObtenerSaldosSinVencer`
    fetch(url, {
        method: 'POST',
        body: formData    //JSON.stringify(fd)
    })
        .then(res => res.json())
        .then(data => {

            $("#montoPorVencerCRC").text("₡" + data[0].MONTO_VENCIDO.toLocaleString('en-US'))
            $("#montoPorVencerUSD").text("$" + data[1].MONTO_VENCIDO.toLocaleString('en-US'))

        })
        .catch(err => {
            //console.error(err)
            //toastr.error('Error en la petición! recargue e intente de nuevo', 'Error')//, options)
        })
}

function ObtenerProveedoresDistintos() {
    let dataLineas = lineas.map(item => {
        return {
            proveedor: item.proveedor
        }
    })
    const dataArr = new Set(dataLineas.map(JSON.stringify));
    let proveedores = Array.from(dataArr).map(JSON.parse).map(item => item.proveedor);

    lineas = lineas.map(item => {
        return {
            ...item,
            transferencia: `${$("#transferencia").val()}0${proveedores.indexOf(item.proveedor)}`
        }
    })
    //console.log(lineas) 
    //console.log(proveedores)

}

function verModalEnviar() {
    let fd = new FormData();
    fd.set('cuenta', $('#cuentaBanco').val())
    if (fd.get('cuenta') == '') {
        toastr.warning('Se debe seleccionar una cuenta a debitar', 'Alerta', toastrOptions)
    } else {
        //seleccion(2)
        //$("#unatef").click()
        $("#multitef").click()
        $("#ModalGenerarTef").modal("show")
    }
}
//function EnviarAAprobar() {
//    let fd = new FormData();
//    fd.set('lineas', lineasBatch)
//    const url = `${RURL}/EnviarAAprobar`
//    fetch(url, {
//        method: 'POST',
//        body: fd
//    })
//        .then(res => res.json())
//        .then(data => {
//            if (data == 1) {
//                toastr.success('Lineas enviadas para aprobación', 'Éxito', toastrOptions)
//                KTDataTable.reload()
//            } else {
//                toastr.warning('No se pudo enviar las líneas', 'Alerta', toastrOptions)
//            }
//        })
//        .catch(err => {
//            console.error(err)
//            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
//        })
//}


function Tefxproveedor() {
    toastr.success('Se han generado múltiples transferencias para aprobación', 'Éxito', toastrOptions)
    KTDataTable.reload()
}
function Tefgeneral() {
    toastr.success('Se ha generado una transferencia para aprobación', 'Éxito', toastrOptions)
    KTDataTable.reload()
}


function ModalCambiarTEF(TEF, documento) {
    $('#cambiarTEF').val(TEF).trigger('change')
    $('#cambiarTEFAnterior').val(TEF).trigger('change')
    $('#numDocumento').val(documento)
    $('#modalCambiarTEF').modal('show')
}

function CambiarTEF() {
    var formData = new FormData();
    var _tefAnterior = $('#cambiarTEFAnterior').val()
    var _tefNueva = $('#cambiarTEF').val()
    var _documento = $('#numDocumento').val()

    formData.append('tefAnterior', _tefAnterior);
    formData.append('tefNueva', _tefNueva);
    formData.append('documento', _documento);

    const url = `${RURL}/CambiarTEFaOtraTEF`
    fetch(url, {
        method: 'POST',
        body: formData    //JSON.stringify(fd)
    })
        .then(res => res.json())
        .then(data => {
            if (data == "1") {
                toastr.success('Se cambió la TEF', 'Éxito')//, toastr2Options)
                setTimeout(() => { window.location.reload(); }, 1500)
                $('#modalCambiarTEF').modal('hide')
            } else {
                toastr.warning('Ocurrio un error', 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}

function ManejarFiltros() {
    $('#MarcarTodas').on('click', () => {
        lineas = []
        KTDataTable.reset()
        Calcmontos()
        updateTotal()
    })
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function EditarLineaAprobacion(documento, proveedor, montoPago) {
    //console.log(lineas)
    lineas = lineas.map(item => {
        if (documento == item.documento && proveedor == item.proveedor) {
            return { documento, proveedor, montoPago, tef: item.tef }
        } else {
            return item
        }
    })
    //console.log(lineas)
}



function validarSiExisteLaTEF() {
    var formData = new FormData();
    var _tef = $('#transferencia').val()

    formData.append('tef', _tef);

    const url = `${RURL}/VerificarSiExisteLaTEF`
    fetch(url, {
        method: 'POST',
        body: formData    //JSON.stringify(fd)
    })
        .then(res => res.json())
        .then(data => {
            if (data.EXISTE == 0) {
                existeLaTEF = 'N'
            } else {
                existeLaTEF = 'S'
            }

            EditarLineasAprobacionBatch()
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}

async function EditarLineasAprobacionBatch() {

    if (existeLaTEF == 'S') {
        toastr.warning('Este número de transferencia ya existe', 'No se pudo crear la transferencia', toastrOptions)
        return
    }

    if (tefPorProveedor == 'S') {
        ObtenerProveedoresDistintos()
    }
    let fd = new FormData();
    fd.set('transferencia', $('#transferencia').val())
    fd.set('lineas', JSON.stringify(lineas))
    fd.set('cuenta', $('#cuentaBanco').val())
    fd.set('fechaProyectada', $('#FechaProyectada').val().split('/').reverse().join('-'))
    fd.set('aprobadorGerencia', $('#aprobadorgerencia').val())
    //fd.set('UsuarioTEF', $('#UsuarioTEF').val())
    fd.set('tefPorProveedor', tefPorProveedor)
    fd.set('aprobadorFinanciero', $('#aprobadorfinanciero').val())
    //fd.set('UsuarioTEF', $('#usuariotef').val())
    if (!validarLinea(fd)) {
        return
    }
    const bodyO = {
        transferencia: $('#transferencia').val(),
        lineas,
        cuenta: $('#cuentaBanco').val(),
        fechaProyectada: $('#FechaProyectada').val().split('/').reverse().join('-'),
        aprobadorGerencia: $('#aprobadorgerencia').val(),
        tefPorProveedor,
        aprobadorFinanciero: $('#aprobadorfinanciero').val()
        //UsuarioTEF: $('#usuariotef').val()


    }

    const url = `${RURL}/EditarLineasAprobacionBatch`
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
            if (tefPorProveedor == 'S') {
                toastr.success('Transferencias creadas correctamente', 'Éxito', toastrOptions)
            } else {
                toastr.success('Transferencia creada correctamente', 'Éxito', toastrOptions)
            }

            $('#ModalGenerarTef').modal('hide')
            setTimeout(() => { window.location.reload(); }, 1500)
        } else if (result == 2) {
            toastr.warning('Se debe elegir un proveedor', 'Alerta', toastrOptions)
        } else {
            toastr.warning('No se pudo guardar la línea', 'Alerta', toastrOptions)
        }

    } catch (err) {
        console.error(err)
        toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
    }

}

function validarLinea(fd) {
    if (fd.get('transferencia') == '') {
        toastr.warning('Se debe digitar una transferencia', 'Alerta', toastrOptions)
        return false
    } else if (fd.get('proveedor') == '' && fd.get('lineas') == '') {
        toastr.warning('Se debe seleccionar un proveedor', 'Alerta', toastrOptions)
        return false
    } else if (fd.get('cuenta') == '') {
        toastr.warning('Se debe seleccionar una cuenta', 'Alerta', toastrOptions)
        return false
    } else if (fd.get('aprobadorFinanciero') == '') {
        toastr.warning('Se debe seleccionar un aprobador finaciero', 'Alerta', toastrOptions)
        return false
    } else if (fd.get('aprobadorGerencia') == '') {
        toastr.warning('Se debe seleccionar un aprobador gerencial', 'Alerta', toastrOptions)
        return false
    }
    return true
}


var KTBootstrapTimepicker = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#kt_timepicker_1, #kt_timepicker_1_modal').timepicker({
            minuteStep: 5,
            defaultTime: '',
            showSeconds: true,
            showMeridian: false,
            snapToStep: true
        });

    }

    return {
        // public functions
        init: function () {
            demos();
        }
    };
}();

function seleccion(val) {
    if (val == '1') {
        $("#unatef").removeClass("btn-light-primary")
        $("#unatef").addClass("btn-primary")

        $("#multitef").removeClass("btn-primary")
        $("#multitef").addClass("btn-light-primary")

        tefPorProveedor = 'N'


    } else {
        $("#multitef").removeClass("btn-light-primary")
        $("#multitef").addClass("btn-primary")

        $("#unatef").removeClass("btn-primary")
        $("#unatef").addClass("btn-light-primary")

        tefPorProveedor = 'S'
    }

    //ActualizarUsuarioTefLineas()
}
function EnvioAprobar() {
    if ($("#unatef").hasClass("btn-primary")) {
        EnviarAAprobar()
    } else {
        // CREAR FUNCION QUE HAGA UNA TEF POR PROVEEDOR
    }
}
$(document).ready(() => {
    let doc = getUrlVars()["doc"]
    $('#kt_datatable_search_query_Recepcion').val(doc)
    KTDatepicker.init()
    KTDataTable.init()
    $('#cuentaBanco').on('change', () => {
        $('#tipo').val($('#cuentaBanco').children('option:selected').data('moneda'));
        let moneda = $('#cuentaBanco').children('option:selected').data('moneda')

        $('#filtromoneda').val(moneda).trigger('change')
        KTDataTable.reset()


        if (moneda == 'USD') {
            $("#textBancoUSD").text($('#cuentaBanco').val())
            $("#textBancoCRC").text('')
        } else {
            $("#textBancoCRC").text($('#cuentaBanco').val())
            $("#textBancoUSD").text('')
        }
    })
    //setTimeout(() => {
    //    $('#transferencia').focus()
    //}, 200)
    InicilizarSelects()
    KTBootstrapTimepicker.init()
    ManejarFiltros()
    $('.transferencia').mask('00000000000000000000')
    Calcmontos()
})