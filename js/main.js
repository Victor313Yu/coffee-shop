/** @type {import('jquery')} */

$(function() {

    var spy = new Gumshoe('.navbar-nav .nav-link', {
        offset: 400,
    });

    var scroll = new SmoothScroll('.navbar-nav .nav-link', {
        speed: 1000,
        speedAsDuration: true
    });

    $('.navbar a').on('click', function() {
        $('.navbar .navbar-nav').toggleClass('active');
    });

})