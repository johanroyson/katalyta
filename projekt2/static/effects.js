$(function() {
    var sticky_navigation_offset_top = $('.navbar').offset().top;
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); 
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.navbar').css({ 'position': 'fixed', 'top':0, 'left':0 });
            $('.navbar').css({'background-color': 'rgba(255,255,255, 0.9)'})
            //$('.fader').fadeIn(300);
        } else {
            $('.navbar').css({ 'position': 'relative' });
            $('.navbar').css({'background-color': 'rgba(255,255,255, 0.6)'})
            //$('.fader').fadeOut(300);
            //$('.fader').css({'display': 'none'});
        }
    };
    sticky_navigation();
    $(window).scroll(function() {
         sticky_navigation();

    });
 
});