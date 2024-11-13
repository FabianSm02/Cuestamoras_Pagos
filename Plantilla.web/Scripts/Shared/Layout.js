// Date picker en español
; (function ($) {
    $.fn.datepicker.dates['es'] = {
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
        daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy"
    };
}(jQuery));

const select2esp = {
    noResults: function () {
        return 'No hay resultados'
    },
    searching: function () {
        return 'Buscando...'
    },
    inputTooShort: function () {
        return 'Ingrese al menos 2 caracteres'
    }
}

const toastrOptions = {
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


function scrollToTableRight() {
    const table = document.querySelector('.datatable-body')
    console.log(table.scrollWidth)
    if (table) {
        //table.scrollTo(table.scrollWidth, 0)
        table.scrollTo({
            left: 2500
        })
    }
}

function scrollToTableLeft() {
    const table = document.querySelector('.datatable-body')
    if (table) {
        //table.scrollTo(0, table.scrollWidth)
        table.scrollTo({
            left: 0
        })
    }
}

function Volver() {
    if (window.history.length == 1) {
        window.close()
    } else {
        window.history.back()
    }
}


function llamaCargaCias() {
    if (ciasTemp != "" && ciasTemp != undefined)
        ciasTemp.forEach(cargaCIAS)
}

function CambiarCIA() {
    let fd = new FormData()
    fd.set('cia', $('#CIA').val())
    fetch(`${HOME_URL}/CambiarCIA`,
        {
            method: 'POST',
            body: fd
        })
        .then(res => res.json())
        .then(data => {
            if (data == 1) {
                window.location.reload()
            } else {
                toastr.warning('Compañía no válida', 'Alerta', toastrOptions)
            }
        })
        .catch(err => {
            console.error(err)
            toastr.error('Error en la petición! recargue e intente de nuevo', 'Error', toastrOptions)
        })
}

var cargaCias = function () {
    if (ciasTemp != null && ciasTemp != undefined) {
        var array = ciasTemp;
        var ItemSeleccionado = "";
        let indexSelected = null;
        $("select[name='CIA']").empty();
        for (var i = 0; i < array.length; i++) {
            if (array[i].CIA == Esquema) {
                ItemSeleccionado = array[i].CIA;
                indexSelected = i;
                $("select[name='CIA']").append('<option value="' + array[i].CIA + '" selected>' + array[i].DESCRIPCION + '</option>');
                $("#CIA_TAG").html(array[i].DESCRIPCION);
            } else {
                $("select[name='CIA']").append('<option value="' + array[i].CIA + '">' + array[i].DESCRIPCION + '</option>');
            }
        }
        $("select[name='CIA']").val(ItemSeleccionado).trigger("change");
    }
};




$(document).ready(() => {
    cargaCias()

    $('#CIA').select2({
        placeholder: "Seleccione una compañía",
    });
    $('#CIA').on('change', () => {
        CambiarCIA()
    })
})