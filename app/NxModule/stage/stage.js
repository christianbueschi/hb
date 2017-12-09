(function() {

    $(document).ready(function () {

        var startIndex = 0;

        if($('.siema').length > 0) {

            var siema = new Siema({
                selector: '.siema',
                duration: 200,
                easing: 'ease-out',
                perPage: 1,
                startIndex: startIndex,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: false,
                onInit: function() {},
                onChange: function() {}
            });

            var loop = function() {
                setTimeout(function() {
                    if(startIndex < 3) {
                        startIndex++;
                        siema.goTo(startIndex);
                    } else {
                        startIndex = 0;
                        siema.goTo(startIndex);
                    }

                    loop();

                }, 6000);
            };

            loop();

            $('.js-prev').on('click', function() {
                siema.prev();
            });

            $('.js-next').on('click', function() {
                siema.next();
            });

            $('.js-down').on('click', function() {
                var aTag = $('#start');
                $('html,body').animate({scrollTop: aTag.offset().top},'slow');
            });


        }
    })

})();