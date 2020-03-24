// mobile menu
(function ($) {

  $(function () {
    var wrap = $('#wrap');
    var menu = $('.m-menu');
    var close = $('.m-close, .dim');

    // open
    menu.on('click', function(){
      wrap.addClass('active');
      return false
    });
    
    // close
    close.on('click', function(){
      wrap.removeClass('active');
      return false
    });

  });

})(jQuery);

// top button
(function ($) {

  $(function () {
    var top = $('.top');
    var body = $('html, body');

    top.on('click', function(){
      var $this = $(this);
      var $href = $this.attr('href');
      body.animate({
        scrollTop: $($href).position().top
      }, 450)
      return false
    });

  });

})(jQuery);