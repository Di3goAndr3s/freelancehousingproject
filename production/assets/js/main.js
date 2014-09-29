
$(document).ready(function() {
    $(".chosen").chosen()

        $('#inmuebles').click(function(event) {
        $.scrollTo('#inmuebles-anchor', 600, {
            easing: 'easeOutCirc',
            offset: 40
        });
    });
    $('#proyectos').click(function(event) {
        $.scrollTo('#proyectos-anchor', 600, {
            easing: 'easeOutCirc',
            offset: -10
        });
    });
        $('#contacto').click(function(event) {
        $.scrollTo('#contacto-anchor', 600, {
            easing: 'easeOutCirc',
            offset: -10
        });
    });


});





