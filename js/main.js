var slide_function = {
    init: function () {
        slide_function.gallery_slide();
        slide_function.list_box_service();
        slide_function.tours_releated();
        slide_function.city_slide();
    },
    gallery_slide: function () {
        var slide = jQuery('.list-gallery .gallery-gird-slide');
        var item_slide = jQuery('.list-gallery .gallery-gird-slide .item');

        var slide2 = jQuery('.list-gallery .gallery-gird-slide2');
        var item_slide2 = jQuery('.list-gallery .gallery-gird-slide2 .item');

        if (slide2.length > 0 && item_slide2.length > 1) {
            slide2.slick({
                dots: false,
                arrow: true,
                speed: 1000,
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: true,
                        },
                    },
                ],
            });
        }
        if (slide.length > 0 && item_slide.length > 3) {
            function updateSecond() {
                slide.find('.is-second').removeClass('is-second');
                var w = jQuery(window).width();
                if (w > 1024) {
                    var actives = slide.find('.slick-active');
                    if (actives.length > 1) {
                        actives.eq(1).addClass('is-second');
                    }
                }
            }
            slide.on('init reInit afterChange', function (event, slick, currentSlide) {
                updateSecond();
            });
            slide.slick({
                dots: false,
                arrow: true,
                speed: 1000,
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: true,
                        },
                    },
                ],
            });
        }
    },
    city_slide: function () {
        var slide = jQuery('#city-slide');
        if(slide.length == 0) return;
        slide.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            draggable: true,       // cho phép kéo chuột trên desktop
            swipe: true,           // cho phép vuốt trên di động
            swipeToSlide: true,    // vuốt đến slide bất kỳ
            touchMove: true,
            adaptiveHeight: false,
            responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
            ]
        });
    },
    list_box_service: function () {
        var slide = jQuery('.list-box-service .list-service');
        var item_slide = jQuery('.list-box-service .list-service .item');
        if (slide.length > 0 && item_slide.length > 4) {
            slide.slick({
                dots: false,
                arrow: true,
                speed: 1000,
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: true,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: true,
                        },
                    },
                ],
            });
        }
    },
    tours_releated: function () {
        var slide = jQuery('.tours-releated .list-tours');
        var item_slide = jQuery('.tours-releated .list-tours .post');
        if (slide.length > 0 && item_slide.length > 4) {
            slide.slick({
                dots: false,
                arrow: false,
                speed: 1000,
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 967,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            centerMode: false,
                            arrows: true,
                        },
                    },
                ],
            });
        }
    }
}
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
    $wrapper.each(function () {
        let $list = $(this).find('.loop-item');
        $list.append($list.html());

        let speed = 5000;
        let left = 0;
        let listWidth = $list.width() / 2;

        function loop() {
            left -= 1;
            if (Math.abs(left) >= listWidth) {
                left = 0;
            }
            $list.css("transform", `translateX(${left}px)`);
        }

        let timer = setInterval(loop, 1000 / speed);

        $list.on("mouseenter", function () {
            clearInterval(timer);
        });

        $list.on("mouseleave", function () {
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
    function animateCounter(element) {
        const from = parseInt(element.getAttribute("data-from-value")) || 0;
        const to = parseInt(element.getAttribute("data-to-value")) || 0;
        const duration = parseInt(element.getAttribute("data-duration")) || 2000;

        let startTime = null;

        function updateCounter(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            let value = Math.floor(progress * (to - from) + from);
            value = value.toLocaleString('en-US')
            element.textContent = value;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll(".counter-number").forEach(el => {
        observer.observe(el);
    });
    const observerAnimation = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Nếu chỉ muốn chạy 1 lần:
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.togo-fade-in-left').forEach(el => {
        observerAnimation.observe(el);
    });
    document.querySelectorAll('.togo-fade-in-right').forEach(el => {
        observerAnimation.observe(el);
    });
    document.querySelectorAll('.togo-fade-in-up').forEach(el => {
        observerAnimation.observe(el);
    });
    document.querySelectorAll('.togo-fade-in-down').forEach(el => {
        observerAnimation.observe(el);
    });
    jQuery('.header .nav-item').on('show.bs.dropdown', function () {
        if (jQuery(window).width() < 768) {
            jQuery('.header .navbar-nav').css({ transform: 'translateX(-100%)' })
        }
    })
    jQuery('.mobie-menu-back').on('click', function () {
        jQuery('.header .navbar-nav').css({ transform: 'translateX(0)' })
    })
    jQuery('.btn-mb-menu').on('click', function () {
        jQuery('.header').addClass('is-active');
    })
    jQuery('.mobile-menu-close').on('click', function () {
        jQuery('.header').removeClass('is-active');
        jQuery('.header-menu').removeClass('show');
        jQuery('.header .navbar-nav').css({ transform: 'translateX(0)' });
        jQuery('.btn-mb-menu i').addClass('fa-bars').removeClass('fa-times')
    })
    jQuery('.img-overlay').on('click', function () {
        jQuery('.dialog-light-box').fadeIn("slow")
        jQuery('#video-intro').html(`
            <iframe
        src="https://www.youtube.com/embed/XHOmBV4js_E?feature=oembed&start&end&wmode=opaque&loop=0&controls=0&mute=0&rel=0&cc_load_policy=0"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>`)
    });
    jQuery('.dialog-close-button').on('click', function (e) {
        console.log('cccc');
        e.preventDefault();
        jQuery('.dialog-light-box').fadeOut("slow")
    })
    jQuery('.footer-title').on('click', function () {
        jQuery(this).toggleClass('show');
        var sub = jQuery(this).parent().find('.footer-menu').toggleClass('show')
    });
    jQuery('.filter-item__top').on('click', function(){
        var parent = jQuery(this).parents('.filter-item');
        parent.toggleClass('active');
        var content = parent.find('.filter-item__content');
        content.stop(true, true).slideToggle(800);
    });
    jQuery('.show-more').on('click', function(e){
        e.preventDefault();
        var parent = jQuery(this).parents('.filter-item');
        console.log(parent)
        console.log(parent.find('.filter-checkbox'));
        parent.find('.filter-checkbox.hide').toggleClass('show')
    });
    let tours_content = jQuery('.tours-content').length;
    if(tours_content > 0){
        const rangeSlider = document.querySelector('.range-slider');
        const minInput = rangeSlider.querySelector('input[name="min_price"]');
        const maxInput = rangeSlider.querySelector('input[name="max_price"]');
        const inclRange = rangeSlider.querySelector('.incl-range');

        function updateRange() {
            let min = parseInt(jQuery('input[name="min_price"]').val());
            let max = parseInt(jQuery('input[name="max_price"]').val());
            let rangeMin = parseInt(jQuery('input[name="min_price"]').attr("min"));
            let rangeMax = parseInt(jQuery('input[name="min_price"]').attr("max"));
            console.log("min", min);
            console.log("max", max);
            let left = ((min - rangeMin) / (rangeMax - rangeMin)) * 100;
            let right = ((max - rangeMin) / (rangeMax - rangeMin)) * 100;

            inclRange.style.left = left + "%";
            inclRange.style.width = (right - left) + "%";
            jQuery('.incl-range').css({
                left: left + "%",
                width: (right - left) + "%"
            })
        }
        jQuery('input[name="min_price"]').on('change', function(){
            var val = jQuery(this).val();
            jQuery('input[name="min_price"]').val(val);
            updateRange();
        })
        jQuery('input[name="max_price"]').on('change', function(){
            var val = jQuery(this).val();
            jQuery('input[name="max_price"]').val(val);
            updateRange();
        })
        // [minInput, maxInput].forEach(input => {
        //     input.addEventListener("input", updateRange);
        // });

        updateRange();
    }
    jQuery('.togo-select').on('click', function(){
        jQuery('.togo-select__content').toggle();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.togo-select').length) {
            $('.togo-select__content').hide();
        }
    });
    $('.trip-video').hover(
        function() {
            $(this).addClass('playing');
            $(this).find('video').get(0).play();
        },
        function() {
            $(this).removeClass('playing');
            $(this).find('video').get(0).pause();
        }
    );
    jQuery('.open-filter-canvas').on('click', function(){
        jQuery('.filter-canvas-wrapper').addClass('open');
        jQuery('.layout-canvas').addClass('open')
    });
    jQuery('.filter-canvas-overlay').on('click', function(){
        jQuery('.filter-canvas-wrapper').removeClass('open');
        jQuery('.layout-canvas').removeClass('open')
    });
    if(slide_function){
        slide_function.init();
    }
    
    const boxReadMore= document.querySelector('.box-readmore');
    if(boxReadMore){
        boxReadMore.addEventListener('click', function (e) {
            e.preventDefault();
            const box = document.querySelector('.box-content');
            box.classList.toggle('expanded');
            this.textContent = box.classList.contains('expanded') ? "Read less" : "Read more";
        });
    }
    $('.openCalendar').each(function (index) {
        var $input = $(this);
        var $hiddenInput = $input.siblings('.hiddenDate');
        var $displayText = $input.find('.selectedDateText');
        var isMobile = $(window).width() < 768;
        new Litepicker({
            element: this,
            singleMode: true,
            numberOfMonths: isMobile ? 1 : 2,
            numberOfColumns: isMobile ? 1 : 2,
            format: 'YYYY-MM-DD',
            position: 'center',
            minDate: new Date(),
            setup: function (picker) {
                picker.on('render', function () {
                    $('.litepicker .day-item').each(function () {
                        var $day = $(this);
                        if (!$day.find('.price').length && !$day.hasClass('is-empty')) {
                            $('<span class="price">$50</span>').appendTo($day);
                        }
                    });
                });

                picker.on('selected', function (date) {
                    
                    var value = date.format('MMM DD, YYYY');
                    $hiddenInput.val(value);
                    $displayText.text(value);
                });
            }
        });
    });
    $('.form-input').each(function () {
        var $form = $(this);
        var $input = $form.find('input[type=number]');
        var $plus = $form.find('.plus');
        var $minus = $form.find('.minus');

        $plus.on('click', function (e) {
            e.stopPropagation();
            var value = parseInt($input.val()) || 0;
            value++;
            $input.val(value);
        });

        $minus.on('click', function (e) {
            var value = parseInt($input.val()) || 0;
            e.stopPropagation();
            if (value > 0) {
                value--;
                $input.val(value);
            }
        });
    });
    const lightbox=GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        autoplayVideos: true
    });
    $('.scroll-link').on('click',function(e) {
        e.preventDefault();
        const target=$(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top - 150
        },600);
    });
    jQuery(document).on('click','.show-cart',function(){
        jQuery('.box-content-cart').toggleClass('show');
        return false;
    });
});
if(jQuery('.formguest').length>0){
    document.querySelectorAll('.formguest').forEach(function(el, index) {
        const box = el.parentElement.querySelector('.box-formguest');
        el.addEventListener('click', function(e) {
            e.stopPropagation();
            let box = el.parentElement.querySelector('.box-formguest');
            console.log('ccccc')
            box.classList.toggle('show-gues');
        });
        box.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    document.addEventListener('click', function() {
        document.querySelectorAll('.box-formguest.show-gues').forEach(function(box) {
            box.classList.remove('show-gues');
        });
    });
}

