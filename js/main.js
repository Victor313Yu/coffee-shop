/** @type {import('jquery')} */

$(function() {

    var spy = new Gumshoe('.navbar-nav .nav-link', {
        offset: 400,
    });

    var scroll = new SmoothScroll('.navbar-nav .nav-link', {
        speed: 1000,
        speedAsDuration: true
    });

    $('.navbar .nav-btn').on('click', function() {
        $('.navbar .navbar-nav').addClass('active');
    });
    $('.navbar a').on('click', function() {
        if($(this).is('.nav-link, .close-btn')){
            $('.navbar .navbar-nav').removeClass('active');
        }
    });

    $('.contact-form').on('submit', function(e) {
    e.preventDefault();

    const formData = $(this).serializeArray();
    
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    const alertMessage = `
        收到表單內容！
        ------------------
        姓名：${name}
        信箱：${email}
        訊息：${message}
    `;

    alert(alertMessage);
    
    console.log('Form data: ', formData);
});
    

})