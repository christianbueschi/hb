(function () {

    var $body = $('body');
    var onScrollBody = function() {
        if(window.pageYOffset > 100) {
            $body.addClass('header-background');
        }  else {
            $body.removeClass('header-background');
        }
    };

    $(window).on('scroll', onScrollBody)

})();
