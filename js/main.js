jQuery(document).ready(function($) {
    var btn_menu=jQuery('.btn-mb-menu');
    if(btn_menu.length>0) {
        btn_menu.on('click',function() {
            jQuery('.header-menu').toggleClass('show');
            if(jQuery('.header-menu').hasClass('show')) {
                jQuery(this).find('i').removeClass('fa-bars');
                jQuery(this).find('i').addClass('fa-times');
            } else {
                jQuery(this).find('i').addClass('fa-bars');
                jQuery(this).find('i').removeClass('fa-times');
            }
        });
    }
    $(window).on('scroll',function() {
        if($(this).scrollTop()>100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });
    // topo

    let $wrapper=$(".scrollLoop");
    $wrapper.each(function() {
        let $list=$(this).find('.loop-item');
        $list.append($list.html());

        let speed=5000;
        let left=0;
        let listWidth=$list.width()/2;

        function loop() {
            left-=1;
            if(Math.abs(left)>=listWidth) {
                left=0;
            }
            $list.css("transform",`translateX(${left}px)`);
        }

        let timer=setInterval(loop,1000/speed);

        $list.on("mouseenter",function() {
            clearInterval(timer);
        });

        $list.on("mouseleave",function() {
            timer=setInterval(loop,1000/speed);
        });
    });

    var list_slide=$('.list-feedback'),
        item=$('.list-feedback .inner');
    if(list_slide.length>0&&item.length>1) {
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
        const from=parseInt(element.getAttribute("data-from-value"))||0;
        const to=parseInt(element.getAttribute("data-to-value"))||0;
        const duration=parseInt(element.getAttribute("data-duration"))||2000;

        let startTime=null;

        function updateCounter(currentTime) {
            if(!startTime) startTime=currentTime;
            const progress=Math.min((currentTime-startTime)/duration,1);
            let value=Math.floor(progress*(to-from)+from);
            value=value.toLocaleString('en-US')
            element.textContent=value;

            if(progress<1) {
                requestAnimationFrame(updateCounter);
            }
        }

        requestAnimationFrame(updateCounter);
    }
    const observer=new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },{threshold: 0.5});
    document.querySelectorAll(".counter-number").forEach(el => {
        observer.observe(el);
    });
    const observerAnimation=new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Nếu chỉ muốn chạy 1 lần:
                observer.unobserve(entry.target);
            }
        });
    },{threshold: 0.3});

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
    jQuery('.header .nav-item').on('show.bs.dropdown',function() {
        if(jQuery(window).width()<768) {
            jQuery('.header .navbar-nav').css({transform: 'translateX(-100%)'})
        }
    })
    jQuery('.mobie-menu-back').on('click',function() {
        jQuery('.header .navbar-nav').css({transform: 'translateX(0)'})
    })
    jQuery('.btn-mb-menu').on('click',function() {
        jQuery('.header').addClass('is-active');
    })
    jQuery('.mobile-menu-close').on('click',function() {
        jQuery('.header').removeClass('is-active');
        jQuery('.header-menu').removeClass('show');
        jQuery('.header .navbar-nav').css({transform: 'translateX(0)'});
        jQuery('.btn-mb-menu i').addClass('fa-bars').removeClass('fa-times')
    })
    jQuery('.img-overlay').on('click',function() {
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
    jQuery('.dialog-close-button').on('click',function(e) {
        console.log('cccc');
        e.preventDefault();
        jQuery('.dialog-light-box').fadeOut("slow")
    })
    jQuery('.footer-title').on('click',function() {
        jQuery(this).toggleClass('show');
        var sub=jQuery(this).parent().find('.footer-menu').toggleClass('show')
    })
});

var slide_function={
    init: function() {
        slide_function.gallery_slide();
    },
    gallery_slide: function() {
        var slide=jQuery('.list-gallery .gallery-gird-slide');
        var item_slide=jQuery('.list-gallery .gallery-gird-slide .item');

        var slide2=jQuery('.list-gallery .gallery-gird-slide2');
        var item_slide2=jQuery('.list-gallery .gallery-gird-slide2 .item');
        if(slide2.length>0&&item_slide2.length>1) {
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
        if(slide.length>0&&item_slide.length>3) {
            function updateSecond() {
                slide.find('.is-second').removeClass('is-second');
                var w=jQuery(window).width();
                if(w>1024) {
                    var actives=slide.find('.slick-active');
                    if(actives.length>1) {
                        actives.eq(1).addClass('is-second');
                    }
                }
            }
            slide.on('init reInit afterChange',function(event,slick,currentSlide) {
                updateSecond();
            });
            slide.slick({
                dots: false,
                arrow: true,
                speed: 1000,
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 3,
                //centerMode: true,
                //centerPadding: '8px',
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
}
jQuery(document).ready(function() {
    slide_function.init();
});

