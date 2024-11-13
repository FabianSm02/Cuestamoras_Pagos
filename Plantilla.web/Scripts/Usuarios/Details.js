function tab(index) {
    switch (index) {
        case 1: {

            $("#personal").removeClass("d-none")
            $("#password").addClass("d-none")
            break;
        }
        case 2: {

            $("#password").removeClass("d-none")
            $("#personal").addClass("d-none")
            break;
        }
    }
}

function ActualizarContrasena() {
    var _contraVieja = $("#contraVieja").val()
    var _contraNueva = $("#contraNueva").val()
    var _contraNuevaIgual = $("#contraNuevaIgual").val()

    if (_contraNueva != _contraNuevaIgual) {
        toastr.warning("Las contraseñas no coinciden", "¡Advertencia!");
        return false;
    }
    
        $.ajax({
            url: `${Administrador}/ActualizarContrasena`,
            async: true,
            data: {
                contraVieja: _contraVieja,
                contraNueva: _contraNueva
            },
            type: "POST",
            success: function (data) {
                if (data == "1") {
                    console.log(data);
                    toastr.success('Contraseña actualizada correctamente', 'Éxito')
                } else {
                    toastr.warning("Las contraseña actual es incorrecta", "¡Advertencia!");
                    return false;
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