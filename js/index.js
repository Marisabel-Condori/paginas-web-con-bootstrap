$(function(){
    $("[data-togle = 'tooltip']").tooltip();
    $("[data-togle = 'popover']").popover();
    $('.carousel').carousel({
        interval:1500
    })
    $('#contacto').on('show.bs.modal', function(e){
        console.log('el modal se esta mostrando');
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function(e){
        console.log('el modal se esta mostro');
    });
    $('#contacto').on('hide.bs.modal', function(e){
        console.log('el modal se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function(e){
        console.log('el modal se oculto');
        $('#contactoBtn').prop('disabled', false);
    });
});