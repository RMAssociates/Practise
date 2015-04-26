
// Angular way to do this is create this as a module and inject these

    /* set equal height thumbnail images*/
    $('.thumbnail').css({
        'height': $('.thumbnail').height()
    });

    /* Navigation bar to toggle on mouse over*/
    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
    });



