const toastrOptions3 = {
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

const Login = (fd, btn) => {
    const url = `${RURL}/Index`
    btn.addClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', true);
    fetch(url, {
        method: 'POST',
        body: fd
    })
        .then(res => res.json())
        .then(data => {
            if (data === 1) {
                toastr.success('Acceso exitoso', 'Bienvenido', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
            } else if (data === 2) {
                toastr.warning('Usuario o contraseña invalido', 'Alerta', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            } else if (data === 3) {
                toastr.warning('El usuario no tiene permisos', 'Alerta', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            } else if (data === 4) {
                toastr.warning('El usuario no tiene permisos ', 'Alerta', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            } else if (data === 5) {
                toastr.error('No existe la licencia ', 'Error', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            } else if (data === 6) {
                toastr.error('Error al leer la licencia ', 'Error', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            } else if (data === 7) {
                toastr.warning('La licencia ha caducado ', 'Alerta', toastrOptions3)
                btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            }
        }).catch(err => {
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions3)
            btn.removeClass('spinner spinner-right pr-12 spinner-sm spinner-white').attr('disabled', false)
            console.error(err)
        })
}

function cargaCIAS(item, index, arr) {
    let option = document.createElement("OPTION");
    option.value = item.CIA;    // SE CAMBIA DEL NIT
    option.innerHTML = item.DESCRIPCION;
    $("#CIA").append(option);
}

function buscaCIAS() {

    var _usuario = $("input[name='usuario']").val()

    $.ajax({
        url: `${RURL}/ObtenerCiasUsuario`,
        data: { usuario: _usuario },
        async: true,
        type: "POST",
        success: function (response) {
            $("#CIA").empty();
                if (response) {
                    response.forEach(cargaCIAS)

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
        
function registrar() {

    $('#login-signin').hide()
    $('#register-confirm').hide()
    $('#login-signup').show()
    $('#tipoide').select2({
        placeholder: "Seleccione un tipo",
    })
};

function forgot() {

    $('#login-signin').hide()
    $('#login-signup').hide()
    $('#register-confirm').show()
};

function reg() {
    toastr.success(`Usuario registrado con éxito`, "Éxito", toastrOptions3)
    setTimeout(() => { window.location.reload(); }, 3000)
};

function send() {
    toastr.success(`Se ha enviado el correo con éxito`, "Éxito", toastrOptions3)
    setTimeout(() => { window.location.reload(); }, 3000)
};

const HandleFormSubmits = () => {
    $('#kt_login_signin_submit').click((e) => {
        e.preventDefault()
        const btn = $('#kt_login_signin_submit')
        const form = document.querySelector('#login-form')
        let fd = new FormData(form)
        if (fd.get('usuarioNoADA') == '') {
            toastr.warning('Debe ingresar su usuario', 'Alerta', toastrOptions3)
        } else if (fd.get('passwordNoADA') == '') {
            toastr.warning('Debe ingresar su contraseña', 'Alerta', toastrOptions3)
        } else if (fd.get('esquemaNoADA') == '') {
            toastr.warning('Debe seleccionar una compañía', 'Alerta', toastrOptions3)
        } else {
            Login(fd, btn)
        }
    })
}

$(document).ready(() => {
    $('#CIANoADA').select2({
        placeholder: "Seleccione una compañía",
    })
    HandleFormSubmits();
    var _usuario = $("input[name='usuario']").val() 
    if (_usuario != "" && _usuario != undefined)
        buscaCIAS();
})