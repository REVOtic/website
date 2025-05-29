$('.toast').css({
    'display': 'none'
});

$('.toast').find('.close').on('click', function(){
    $('.toast').css({
        'display': 'none'
    });
});

$('#ajax-form-2').submit(function(e){
    e.preventDefault();


    var form = $(this).ajaxSubmit();
    var xhr = form.data('jqxhr');

    xhr.done(function(result) {
        // console.log(result);
        var response_data = JSON.parse(result);
        if(response_data['response']){
            var toast = $('.toast.is-success');
            var message = toast.find('.toast-body');

            message.text(response_data['description']);
            toast.css({
                'display': ''
            });

        } else {
            var toast = $('.toast.is-error');
            var message = toast.find('.toast-body');

            message.text(response_data['description']);
            toast.css({
                'display': ''
            });

        }
    });
});
