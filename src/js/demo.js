$(function(){

    $('body').scrollspy({ target: '.j-sideNav' });

    $('.j-sideNav').affix({
        offset: {
            top: 0
        }
    })

});