$('.container').scroll(function () {
    $('section').each(function () {
        if($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
            $(this).children('.animate').addClass('animated');
        }
    });
});