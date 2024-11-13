var ProveedoresIndex = [];
"use strict";
// Class definition

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



var pagos = [

	{
		"ID": 1, "PAGO": "505052332", "APROBADOR": "Leonardo Solis", "ESTADO": "Aprobado", "BANCO": "Varios", "PROVEEDOR": "Varios", "SCOTIAREF": "98732", "APLICACION": "10/02/2022", "FECHA": "09/02/2022", "CUENTA_ORIGEN": "CR012344432100012349", "MONEDA": "CRC", "MONTO": "2586265.0", "ORIGEN": "CB",
		"PROVEEDORES": [
			{ "COD_PROVEEDOR": "S-0070", "NOMBRE": "Asociación Comunidad de Empresas de Comunicación Comercial de Costa Rica", "BANCO": "BAC", "CUENTA_DESTINO": "CR10200009069020931", "MONTO": "170625", "MONEDA": "CRC", "FACTURA": "00100001010000003396", "CORREO": "kbrenes@gmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0403", "NOMBRE": "Distribuidora Comercial Tres Ases Sociedad Anónima", "CUENTA_DESTINO": "CR10200009002136792", "BANCO": "BAC", "MONTO": "27357.3", "MONEDA": "CRC", "FACTURA": "00100003010000088089", "CORREO": "ltorres@gmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0403", "NOMBRE": "Distribuidora Comercial Tres Ases Sociedad Anónima", "CUENTA_DESTINO": "CR10200009002136792", "BANCO": "BAC", "MONTO": "60558.7", "MONEDA": "CRC", "FACTURA": "00100003010000088207", "CORREO": " yzuñiga@gmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0574", "NOMBRE": "Xtreme Clean S.A.", "CUENTA_DESTINO": "CR10200009069025343", "MONTO": "650000", "BANCO": "BAC", "MONEDA": "CRC", "FACTURA": "00100001010000002530", "CORREO": " robtr@hotmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0580", "NOMBRE": "Nuria Fabiola Chacón Aguilar", "CUENTA_DESTINO": "CR10200009069098765", "BANCO": "BNCR", "MONTO": "253924", "MONEDA": "CRC", "FACTURA": "00100001010000000019", "CORREO": " yzuñiga@hotmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0674", "NOMBRE": "Humberto Quirós Valverde", "CUENTA_DESTINO": "CR10200009069020123", "BANCO": "BAC", "MONTO": "1169550", "MONEDA": "CRC", "FACTURA": "00100001010000000138", "CORREO": "achavez@hotmail.com", "ESTADO": "Aprobado" },
			{ "COD_PROVEEDOR": "S-0696", "NOMBRE": "Giannina María Carpio Aguilar", "CUENTA_DESTINO": "CR102000069024453", "BANCO": "BNCR", "MONTO": "254250", "MONEDA": "CRC", "FACTURA": "00100001010000000003", "CORREO": " svargas@hotmail.com", "ESTADO": "Aprobado" },

		]
	},
	{
		"ID": 2, "PAGO": "505054554", "APROBADOR": "Leonardo Solis", "ESTADO": "Rechazado", "BANCO": "BAC", "PROVEEDOR": "Xtreme Clean S.A", "SCOTIAREF": "", "APLICACION": "12/02/2022", "FECHA": "09/02/2022", "CUENTA_ORIGEN": "CR010091532177789628", "MONEDA": "CRC", "MONTO": "352452.0", "ORIGEN": "CB",
		"PROVEEDORES": [
			{ "COD_PROVEEDOR": "S-0574", "NOMBRE": "Xtreme Clean S.A.", "CUENTA_DESTINO": "CR10200009069025343", "MONTO": "352452.0", "BANCO": "BAC", "MONEDA": "CRC", "FACTURA": "00100001010000003112, 00100001010000003210", "CORREO": " robtr@hotmail.com", "ESTADO": "Rechazado" },]
	},
	{
		"ID": 3, "PAGO": "505052328", "APROBADOR": "", "ESTADO": "Pendiente", "BANCO": "BAC", "PROVEEDOR": "Varios", "SCOTIAREF": "", "APLICACION": "28/01/2022", "FECHA": "26/01/2022", "CUENTA_ORIGEN": "CR012344432100012349", "MONEDA": "CRC", "MONTO": "2944420.5", "ORIGEN": "CB",
		"PROVEEDORES": [
			{ "COD_PROVEEDOR": "P-0416", "NOMBRE": "Lito Siac S.A.", "CUENTA_DESTINO": "CR10200009051149639", "BANCO": "BAC", "MONTO": "2182000", "MONEDA": "CRC", "FACTURA": "00100001010000005414", "CORREO": "katherine@litosiac.com", "ESTADO": "" },
			{ "COD_PROVEEDOR": "S-0070", "NOMBRE": "Asociación Comunidad de Empresas de Comunicación Comercial de Costa Rica", "BANCO": "BAC", "CUENTA_DESTINO": "CR10200009069020931", "MONTO": "170625", "MONEDA": "CRC", "FACTURA": "00100001010000003362", "CORREO": "dvega@gmail.com", "ESTADO": "" },
			{ "COD_PROVEEDOR": "S-0329", "NOMBRE": "Mensajería Precisa MPGK", "CUENTA_DESTINO": "CR44011610100013024419", "MONTO": "297995.5", "BANCO": "BAC", "MONEDA": "CRC", "FACTURA": "00100001010000001913", "CORREO": "melissa_cubero@mensajeriaprecisa.com", "ESTADO": "" },
			{ "COD_PROVEEDOR": "S-0373", "NOMBRE": "Argenarc S.A", "CUENTA_DESTINO": "CR43010200009273206635", "MONTO": "39550", "BANCO": "BAC", "MONEDA": "CRC", "FACTURA": "00100001010000001550", "CORREO": " maka.sol@hotmail.com", "ESTADO": "" },
			{ "COD_PROVEEDOR": "S-0696", "NOMBRE": "Giannina María Carpio Aguilar", "CUENTA_DESTINO": "CR68010200009419570455", "BANCO": "BAC", "MONTO": "254250", "MONEDA": "CRC", "FACTURA": "00100001010000000002", "CORREO": " lsolano@hotmail.com", "ESTADO": "" },

		]
	},
	{
		"ID": 4, "PAGO": "505056724", "APROBADOR": "Leonardo Solis", "ESTADO": "Con errores", "BANCO": "BNCR", "PROVEEDOR": "Varios", "SCOTIAREF": "", "APLICACION": "14/02/2022", "FECHA": "03/02/2022", "CUENTA_ORIGEN": "CR010091532177789628", "MONEDA": "CRC", "MONTO": "1275604.0", "ORIGEN": "CB",
		"PROVEEDORES": [
			{ "COD_PROVEEDOR": "S-0696", "NOMBRE": "Giannina María Carpio Aguilar", "CUENTA_DESTINO": "CR102000069024453", "BANCO": "BNCR", "MONTO": "352280", "MONEDA": "CRC", "FACTURA": "00100001010000001542", "CORREO": " svargas@hotmail.com", "ESTADO": "Error" },
			{ "COD_PROVEEDOR": "S-0580", "NOMBRE": "Nuria Fabiola Chacón Aguilar", "CUENTA_DESTINO": "CR10200009069098765", "BANCO": "BNCR", "MONTO": "923324", "MONEDA": "CRC", "FACTURA": "00100001010000001552, 00100001010000001598, 00100001010000001624", "CORREO": " yzuñiga@hotmail.com", "ESTADO": "Aprobado" },
		]
	},
	{
		"ID": 5, "PAGO": "505068125", "APROBADOR": "", "ESTADO": "Cancelado", "BANCO": "BNCR", "PROVEEDOR": "Argenarc S.A", "SCOTIAREF": "", "APLICACION": "18/02/2022", "FECHA": "20/02/2022", "CUENTA_ORIGEN": "CR012344432100012349", "MONEDA": "CRC", "MONTO": "450980.0", "ORIGEN": "CB",
		"PROVEEDORES": [
			{ "COD_PROVEEDOR": "S-0373", "NOMBRE": "Argenarc S.A", "CUENTA_DESTINO": "CR43010200009273206635", "MONTO": "450980", "BANCO": "BNCR", "MONEDA": "CRC", "FACTURA": "00100001010000001550", "CORREO": " maka.sol@hotmail.com", "ESTADO": "" },
		]
	},
]

var DatatableProveedoresIndex = function () {
	// Private functions

	var subTableInit = function (e) {
		$('<div/>').attr('id', 'child_data_local_' + e.data.REF_SOFTLAND).appendTo(e.detailCell).KTDatatable({
			data: {
				type: 'remote',
				source: {
					read: {
						url: `${eurl}/ObtenerLineasProveedores?numeroOrigen=${e.data.REF_SOFTLAND}`,
						method: 'GET',
					},


				},
				pageSize: 10,
				saveState: false,
				scroll: true
			},

			// layout definition
			layout: {
				scroll: true,
				footer: false,
			},

			sortable: true,

			// columns definition
			columns: [

				{
					field: 'CODIGO_NOMBRE',
					title: 'PROVEEDOR',
					width: 400,
				},
				{
					field: 'CUENTA_DESTINO',
					title: 'CUENTA DESTINO',
					width: 180,
				},
				{
					field: 'SALDO',
					title: 'SALDO',
					width: 150,
				},
				{
					field: 'MONTO_A_PAGAR',
					title: 'MONTO A PAGAR',
					width: 150,
				},
				{
					field: 'CONCEPTO',
					title: 'CONCEPTO',
					width: 200,
				},
			],
		});
	};
	let datatable
	// demo initializer
	var mainTableInit = function () {

		datatable = $('.datatable').KTDatatable({
			// datasource definition
			data: {
				type: 'remote',
				source: {
					read: {
						url: `${ProveedoresURL}/ObtenerTransferenciaH2HProveedor`,
						method: 'POST',
						//async: false,
						params: {
							'start': $("#FechaInicio").val().split('/').reverse().join('-'),
							'end': $("#FechaFin").val().split('/').reverse().join('-'),
							//'estado': $("#estado").val() != "" ? $("#estado").val() : 0,
							//'estado': 0,
							//'aprobador': $("#aprobador").val() != "" ? $("#aprobador").val() : 0,
							//'aprobador': 0,
							//'envia': $("#envia").val() == "" ? $("#envia").val() : 0,
							//'envia': 0,
							'proveedor': $("#proveedor").val() != "" ? $("#proveedor").val() : 0,
							'cuenta': $("#cuenta").val() != "" ? $("#cuenta").val() : 0

						}
					}
				},
				pageSize: 10, // display 20 records per page
			},
			rows: {
				autoHide: false,
			},
			// layout definition
			layout: {
				scroll: true,
				height: null,
				footer: false,
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

			sortable: true,

			filterable: false,

			pagination: true,

			search: {
				input: $('#kt_datatable_search_query'),
				key: 'generalSearch'
			},

			detail: {
				title: 'Ver proveedores',
				content: subTableInit,
			},


			// columns definition
			columns: [{
				field: 'REF_SOFTLAND_STR',
				title: '',
				width: 10
			},
			//{
			//	field: 'checkbox',
			//	title: '',
			//	template: '{{ID}}',
			//	sortable: false,
			//	width: 10,
			//	textAlign: 'center',
			//	selector: { class: 'kt-checkbox--solid' },
			//},
			{
				field: 'REF_SOFTLAND',
				title: 'Ref Softland',
				width: 110,
			}, {
				field: 'REFERENCIA_BANCO',
				title: 'Ref Banco',
				width: 320,
			},
			//{
			//	field: 'ESTADO_PRODUSOFT',
			//	title: 'Estado',
			//	width: 90,
			//	template: function (row) {
			//		var status = {
			//			"Pendiente": { 'title': 'Pendiente', 'class': ' label-light-warning' },
			//			"Cancelado": { 'title': 'Cancelado', 'class': ' label-light-danger' },
			//			"Rechazado": { 'title': 'Rechazado', 'class': ' label-light-danger' },
			//			"Aprobado": { 'title': 'Aprobado', 'class': ' label-light-success' },
			//			"Enviado": { 'title': 'Enviado', 'class': ' label-light-success' },
			//			"Con errores": { 'title': 'Con errores', 'class': ' label-light-danger' },
			//		};
			//		return '<span class="label font-weight-bold label-lg ' + status[row.ESTADO_PRODUSOFT].class + ' label-inline">' + status[row.ESTADO_PRODUSOFT].title + '</span>';
			//		},
			//	},
			{
				field: 'FECHA_STR',
				title: 'Fecha',
				width: 85,
			},
			//{
			//	field: 'APLICACION_STR',
			//	title: 'Aplicación',
			//	width: 90,
			//}, 
			{
				field: 'PROVEEDOR',
				title: 'Proveedor',
				width: 150,
			},
			//{
			//	field: 'DESTINO',
			//	title: 'Destino',
			//	width: 65,

			//},
			{
				field: 'CUENTA_BANCO_DESC',
				title: 'Cuenta origen',
				//template: function (row) {
				//	return `${row.CONTENIDO} x ${row.CANTIDAD}`
				//},
				width: 150
			},
			{
				field: 'MONEDA',
				title: 'Moneda',
				width: 70
			},
			{
				field: 'MONTO_STR',
				title: 'Monto',
				width: 120,
				//template: function (row) {
				//	return formatDollar(row.MONTO, row.MONEDA == 'CRC' ? '₡' : '$')
				//}
			},
			{
				field: 'TXT_ENVIADO',
				title: 'ENVIADO',
				width: 70,
				template: function (row) {
					var status = {
						"NO": { 'title': 'NO', 'class': ' label-light-danger' },
						"SI": { 'title': 'SI', 'class': ' label-light-success' },
					};
					return '<span class="label font-weight-bold label-lg ' + status[row.TXT_ENVIADO].class + ' label-inline">' + status[row.TXT_ENVIADO].title + '</span>';
				},
			},
			//{
			//	field: 'APROBADOR',
			//	title: 'Administrativo',
			//	width: 120
			//	},
			//{
			//	field: 'ENVIO',
			//	title: 'Envió',
			//},
			{
				field: 'Actions',
				title: PAGO_PROVEEDORES ? 'Acciones' : '',
				width: PAGO_PROVEEDORES ? 75 : 5,
				sortable: false,
				autoHide: false,
				template: function (row) {
					if (!PAGO_PROVEEDORES) {
						return ''
					}
					let btns = ``
						btns += `
	                        <a onclick="ReenviarTXT('${row.REF_SOFTLAND}')" class="btn btn-sm btn-clean btn-icon mr-2" title="Reenviar archivo">
	                         <span class="svg-icon svg-icon-primary svg-icon-2x"><!--begin::Svg Icon | path:/var/www/preview.keenthemes.com/metronic/releases/2021-05-14-112058/theme/html/demo1/dist/../src/media/svg/icons/General/Update.svg--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<rect x="0" y="0" width="24" height="24"/>
									<path d="M8.43296491,7.17429118 L9.40782327,7.85689436 C9.49616631,7.91875282 9.56214077,8.00751728 9.5959027,8.10994332 C9.68235021,8.37220548 9.53982427,8.65489052 9.27756211,8.74133803 L5.89079566,9.85769242 C5.84469033,9.87288977 5.79661753,9.8812917 5.74809064,9.88263369 C5.4720538,9.8902674 5.24209339,9.67268366 5.23445968,9.39664682 L5.13610134,5.83998177 C5.13313425,5.73269078 5.16477113,5.62729274 5.22633424,5.53937151 C5.384723,5.31316892 5.69649589,5.25819495 5.92269848,5.4165837 L6.72910242,5.98123382 C8.16546398,4.72182424 10.0239806,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 L6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C10.6885336,6 9.44767246,6.42282109 8.43296491,7.17429118 Z" fill="#000000" fill-rule="nonzero"/>
								</g>
							</svg><!--end::Svg Icon--></span>
	                        </a>`;
					return btns;
				},
			}],
		});
		$('#estado').on('change', function () {
			const val = $(this).val().toLowerCase() == "0" ? "" : $(this).val().toLowerCase()
			datatable.search(val, 'ESTADO');
		});

		$('#destinatario').on('change', function () {
			const val = $(this).val().toLowerCase() == "0" ? "" : $(this).val().toLowerCase()
			datatable.search(val, 'APROBADOR');
		});
		$('#responsable').on('change', function () {
			const val = $(this).val().toLowerCase() == "0" ? "" : $(this).val().toLowerCase()
			/*datatable.search(val, 'APROBADOR');*/
		});
		$('#prioridad').on('change', function () {
			const val = $(this).val().toLowerCase() == "0" ? "" : $(this).val().toLowerCase()
			datatable.search(val, 'CUENTA_ORIGEN');
		});
		$('#responsable').on('change', function () {
			const val = $(this).val().toLowerCase() == "0" ? "" : $(this).val().toLowerCase()
			datatable.search(val, 'PROVEEDOR');
		});
		datatable.on('datatable-on-check datatable-on-uncheck datatable-on-layout-updated', function (e) {

			let checkedNodes = datatable.rows('.datatable-row-active').nodes();
			var count = checkedNodes.length;
			if (count > 0) {
				$("#accionmultiple").removeClass('d-none')
				$("#aprobarenbatch").removeClass('d-none')
				$("#enviarbatch").removeClass('d-none')

			} else {

				$("#accionmultiple").addClass('d-none')
				$("#aprobarenbatch").addClass('d-none')
				$("#enviarbatch").addClass('d-none')
			}
		});

	};

	return {
		// Public functions
		init: function () {
			// init dmeo
			mainTableInit();
		},
		reload: function () {
			datatable.reload()
		},
		reset: function () {
			datatable.destroy()
			mainTableInit()
		}
	};
}();

function ReenviarTXT(numero) {
	Swal.fire({
		text: `¿Desea que el pago número ${numero} se reenvíe al banco?, tenga en cuenta que esta acción podria duplicar el pago.`,
		icon: "warning",
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

			$.ajax({
				url: `${ProveedoresURL}/ActualizarEstadoParaReenviar`,
				data: {
					referencia_softland: numero
				},
				async: true,
				type: "POST",
				success: function (data) {
					if (data == "1") {
						toastr.success("Se actualizó el estado del pago para que sea reenviado", "Éxito", toastrOptions)
						setTimeout(() => { window.location.reload(); }, 3000)
					} else {
						toastr.error("No se pudo cambiar el estado del pago", "¡Error!");
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
	});
}

function Buscar() {
	DatatableProveedoresIndex.reset()
}

function formatDollar(num, symbol) {
	var p = num.split(".");
	return symbol + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
		return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
	}, "") + (p[1] == undefined || p[1] == null ? "" : "." + p[1]);
}

function GeneraArchivo(numOrigen, nomBanco) {
	$.ajax({
		url: `${ProveedoresURL}/GenerarArchivo`,
		data: {
			numeroOrigen: numOrigen,
			nombreBanco: nomBanco
		},
		async: true,
		type: "POST",
		success: function (data) {
			if (data.Data.TieneErrores == "0") {
				toastr.success(`Archivo generado y descargado con éxito`, "Éxito", toastrOptions)
				window.location = `${ProveedoresURL}` + "/DownloadTXT?fileGuid=" + data.Data.FileGuid
					+ '&filename=' + data.Data.FileName;
			} else {
				toastr.error("No se pudo descargar el archivo", "¡Error!");
			}
		},
		error: function (error) {
			console.log(error);
		}
	});
}
//function GeneraArchivo(numOrigen, nomBanco) {
//	$.ajax({
//		url: `${ProveedoresURL}/GenerarArchivo`,
//		data: {
//			numeroOrigen: numOrigen,
//			nombreBanco: nomBanco
//		},
//		async: true,
//		type: "POST",
//		success: function (data) {
//			if (data != null) {
//				window.location.href = `${URL_FILE}/${data}`
//			} else {
//				toastr.error("No se pudo descargar el archivo", "¡Error!");
//			}
//		},
//		error: function (error) {
//			console.log(error);
//		}
//	});
//}

function editar(dato,) {
	window.location.href = `${eurl}/Details?paquete=` + dato;
}

function EnviarProveedor(proveedor, refSoftland) {
	Swal.fire({
		text: proveedor == "" ? `¿Desea enviar el pago de los proveedores seleccionados?` : `¿Desea hacer el envío del proveedor ${proveedor}?`,
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

			$.ajax({
				url: `${eurl}/ActualizarEstadoEnviador`,
				data: {
					referencia_softland: refSoftland,
					estado: "Enviado"
				},
				async: true,
				type: "POST",
				success: function (data) {
					if (data == "1") {
						toastr.success(`Proveedor enviado con éxito`, "Éxito", toastrOptions)
						setTimeout(() => { window.location.reload(); }, 3000)
					} else {
						toastr.error("No se pudo enviar el proveedor", "¡Error!");
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
	});
}

function AprobarProveedor(proveedor, refSoftland) {
	Swal.fire({
		text: proveedor == "" ? `¿Desea aprobar el pago de los proveedores seleccionados?` : `¿Desea aprobar el pago del proveedor? ${proveedor}?`,
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

			$.ajax({
				url: `${eurl}/ActualizarEstadoAprobador`,
				data: {
					referencia_softland: refSoftland,
					estado: "Aprobado"
				},
				async: true,
				type: "POST",
				success: function (data) {
					if (data == "1") {
						toastr.success(`Pago de proveedor aprobado con éxito`, "Éxito", toastrOptions)
						setTimeout(() => { window.location.reload(); }, 3000)
					} else {
						toastr.error("No se pudo aprobar el proveedor", "¡Error!");
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
	});
}

function RechazarProveedor(proveedor, refSoftland) {
	Swal.fire({
		text: proveedor == "" ? `¿Desea rechazar el pago de los proveedores seleccionados?` : `¿Desea rechazar el pago del proveedor ${proveedor}?`,
		icon: "warning",
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
			$.ajax({
				url: `${eurl}/ActualizarEstadoAprobador`,
				data: {
					referencia_softland: refSoftland,
					estado: "Rechazado"
				},
				async: true,
				type: "POST",
				success: function (data) {
					if (data == "1") {
						toastr.success(`Pago de proveedor rechazado con éxito`, "Éxito", toastrOptions)
						setTimeout(() => { window.location.reload(); }, 3000)
					} else {
						toastr.error("No se pudo rechazar el proveedor", "¡Error!");
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
	});
}

function IngresarAMailroom(paquete) {
	$("#estadocambiar").select2({
		placeholder: "Seleccione el nuevo estado"
	})
	$("#quienentrega").select2({
		placeholder: "Seleccione el usuario que entrega"
	})
	$("#depa").select2({
		placeholder: "Seleccione el departamento"
	})
	$("#resguardo").select2({
		placeholder: "Seleccione el sitio de resguardo"
	})
	$("#bodega").select2({
		placeholder: "Seleccione la bodega"
	})

	$("#ingresomail").text(`Ingreso a Mailroom del paquete ${paquete}`)

	$("#ingresomailrrom").modal("show")

}

function modalAccion(paquete, responsable, ubicacion, estado, remitente, destinatario, vendor) {
	$('#hpaquete').val(paquete)
	$('#hresponsable').val(responsable)
	$('#hubicacion').val(ubicacion)
	$('#hestado').val(estado)
	$('#hremitente').val(remitente)
	$('#hdestinatario').val(destinatario)
	$('#hvendor').val(vendor)
	$("#accion").select2({
		placeholder: "Seleccione la acción"
	})
	$("#usuario").select2({
		placeholder: "Seleccione el usuario"
	})
	if (paquete == '') {
		$("#acciontitulo").text(`Acción para múltiples paquetes`)
	} else {
		$("#acciontitulo").text(`Acción del paquete ${paquete}`)
	}


	$("#haceraccion").modal("show")
}

function save() {
	$("#haceraccion").modal("hide")
	toastr.success('Acción realizada con éxito', 'Éxito', options)
	setTimeout(() => { window.location.reload(); }, 3000)
}

function Entregar(paquete) {

	$("#entregotitulo").text(`Salida del paquete ${paquete}`)
	$("#entregar").modal("show")
}

function showDeleteModal(estado) {
	$("#estadocambiar").val(estado)
	$("#estadocambiar").select2({
		placeholder: "Seleccione el nuevo estado"
	})

	$("#deleteModal").modal("show")
}

function showresponsablemodal(responsable) {
	$("#responsablecambiar").val(responsable)
	$("#responsablecambiar").select2({
		placeholder: "Seleccione el nuevo responsable"
	})

	$("#responsablemodal").modal("show")
}

function showubimodal(ubi) {
	$("#ubicacioncambiar").val(ubi)
	$("#ubicacioncambiar").select2({
		placeholder: "Seleccione la nueva ubicación"
	})

	$("#ubicacionmodal").modal("show")
}

function eliminar(paquete) {
	Swal.fire({
		text: `¿Desea eliminar el paquete ${paquete}?`,
		icon: "warning",
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
			toastr.success(`Paquete eliminado con éxito`, "Éxito", toastrOptions)
			setTimeout(() => { window.location.reload(); }, 3000)


		}
	});
}

function Edit(name, passport) {
	window.location.href = "Client/Details?name=" + name + "&passport=" + passport;
}

function deleteRegistro() {
	$("#deleteModal").modal("hide")
	toastr.success('Estado cambiado con éxito', 'Éxito', options)
	setTimeout(() => { window.location.reload(); }, 3000)
}

function guardarRes() {
	$("#responsablemodal").modal("hide")
	toastr.success('Resposable cambiado con éxito', 'Éxito', options)
	setTimeout(() => { window.location.reload(); }, 3000)
}

function guardarUbi() {
	$("#ingresomailrrom").modal("hide")
	toastr.success('Se ha ingresado el paquete a Mailroom con éxito', 'Éxito', options)
	setTimeout(() => { window.location.reload(); }, 3000)
}

function guardarEntrega() {
	$("#entregar").modal("hide")
	toastr.success('Se ha entregado el paquete con éxito', 'Éxito', options)
	setTimeout(() => { window.location.reload(); }, 3000)
}

function formatState(state) {
	if (!state.id) { return state.text; }
	var $state = ``
	switch (state.element.value) {
		case "Pendiente":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-primary label-inline">Pendiente</span>`)
			break;
		case "Rechazado":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-danger label-inline">Rechazado</span>`)
			break;
		case "Con errores":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-danger label-inline">Con errores</span>`)
			break;
		case "Aprobado":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-success label-inline">Aprobado</span>`)
			break;
		case "Enviado":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-success label-inline">Enviado</span>`)
			break;
		case "Cancelado":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-danger label-inline">Cancelado</span>`)
			break;
		case "0":
			//$state = state.element.value
			$state = $(`<span class="label font-weight-bold label-lg label-light-info label-inline">Todos</span>`)
			break;
	}
	return $state;
};

function InicializarSelects() {
	$("#estado").select2({
		placeholder: "Filtrar por estado",
		templateResult: formatState
	})
	$("#aprobador").select2({
		placeholder: "Filtrar por proveedor"
	})
	$("#cuenta").select2({
		placeholder: "Filtrar por ubicación"
	})
	$("#proveedor").select2({
		placeholder: "Filtrar por remitente"
	})
	$("#envia").select2({
		placeholder: "Filtrar por aprobador"
	})
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
		$('#kt_datepicker').datepicker({
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
}();

jQuery(document).ready(function () {
	InicializarSelects();
	KTDatepicker.init();
	DatatableProveedoresIndex.init()
});
