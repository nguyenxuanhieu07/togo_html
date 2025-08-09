jQuery(document).ready(function ($) {
    var btn_menu = jQuery('.btn-mb-menu');
    if (btn_menu.length > 0) {
        btn_menu.on('click', function () {
            jQuery('.header-menu').toggleClass('show');
            if (jQuery('.header-menu').hasClass('show')) {
                jQuery(this).find('i').removeClass('fa-bars');
                jQuery(this).find('i').addClass('fa-times');
            } else {
                jQuery(this).find('i').addClass('fa-bars');
                jQuery(this).find('i').removeClass('fa-times');
            }
        });
    }
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    // topo

    let $wrapper = $(".scrollLoop");
    // Nhân đôi nội dung để tạo hiệu ứng chạy liên tục
    $wrapper.each(function () {
        let $list = $(this).find('.loop-item');
        $list.append($list.html());

        let speed = 50; // px/giây
        let left = 0;
        let listWidth = $list.width() / 2; // chỉ 1 nửa vì đã nhân đôi
    
        function loop() {
            left -= 1; // mỗi bước dịch 1px
            if (Math.abs(left) >= listWidth) {
                left = 0; // reset lại khi hết 1 vòng
            }
            $list.css("transform", `translateX(${left}px)`);
        }
    
        let timer = setInterval(loop, 1000 / speed);
    
        // Dừng khi hover
        $wrapper.on("mouseenter", function () {
            clearInterval(timer);
        });
    
        // Chạy lại khi rời chuột
        $wrapper.on("mouseleave", function () {
            timer = setInterval(loop, 1000 / speed);
        });
    });

    var list_slide = $('.list-feedback'),
        item = $('.list-feedback .inner');
    if (list_slide.length > 0 && item.length > 1) {
        list_slide.slick({
            dots: false,
            arrow: true,
            speed: 1000,
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        centerMode: false,
                        arrows: false,
                    },
                },
            ],
        });
    }
});