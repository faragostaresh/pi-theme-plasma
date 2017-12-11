(function ($) {
    $(document).ready(function () {
        //Fix navbar multiple level
        var navbar = $('.pi-navbar-nav');
        var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
        navbar.find('>li').each(function () {
            var $this = $(this);
            var caretStr = '<span class="pi-navbar-caret"></span>';
            caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
            if ($this.find('li').length) {
                $this.append(caretStr);
            }
        });
        navbar.find('ul').addClass('dropdown-menu');

        if (!hasBrand) {
            navbar.css('marginLeft', '-15px');
        }
    });

    $(document).ready(function ($) {
        $('.recent-event-list .owl-carousel').owlCarousel({
            //loop:true,
            //lazyLoad:true,
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 15000,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
            responsive: {
                0: {items: 1},
                600: {items: 2},
                1000: {items: 4}
            }
        })
    });
})(jQuery)

