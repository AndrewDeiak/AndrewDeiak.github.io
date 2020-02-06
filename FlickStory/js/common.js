$(function () {

    setTimeout(function () {
        $('.header-wrapper .header-img-top-mobile').addClass('active')
    }, 150);

    $.fn.visible = function (partial) {
        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });


    if ($(window).width() >= 992 - 17) {
        // do some magic
        var controller = new ScrollMagic.Controller();
        // first

        var scene1 = new ScrollMagic.Scene({
            duration: "100%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1)).setPin(".header-wrapper").addTo(controller);

        var scene1 = new ScrollMagic.Scene({
            duration: "30%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-top", 1, {"left": "-100%"})).addTo(controller);

        var scene2 = new ScrollMagic.Scene({
            duration: "30%",
            offset: "110%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-more", 5, {"opacity": "0"})).addTo(controller);

        var scene3 = new ScrollMagic.Scene({
            duration: "40%",
            offset: "350%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-img-bottom", 5, {"left": "-100%"})).addTo(controller);

        // second
        var scene4 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-new-img", 5, {"top": "-900%"})).addTo(controller);

        var scene6 = new ScrollMagic.Scene({
            duration: "70%",
            offset: "300%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".digital-right-text", 5, {
            "top": "-380%"
        })).addTo(controller);

        var scene7 = new ScrollMagic.Scene({
            duration: "50%",
            offset: "200%",
            triggerElement: "#triger1",
            triggerHook: 'onLeave'
        }).setTween(TweenMax.to(".header-learn-text", 5, {
            "top": "-10%",
            "right": "0%",
            "opacity": "1"
        })).addTo(controller);


        var wipeAnimation = new TimelineMax()
            .fromTo(".stories", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".readers", 1, {
                y: "100%"
            }, {y: "0%", deley: 1, ease: Linear.easeNone})

            .fromTo(".work", 1, {
                x: "-100%"
            }, {x: "0%", ease: Linear.easeNone})

            .fromTo(".sofa", 1, {
                y: "100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".h2-sofa", 1, {
                y: "-100%"
            }, {y: "0%", ease: Linear.easeNone})

            .fromTo(".newsfeed", 1, {
                y: "100%"
            }, {y: "-65%", ease: Linear.easeNone})

            .fromTo(".archive", 1, {
                y: "100%", opacity: 0
            }, {y: "-65%", opacity: 1, delay: 1, ease: Linear.easeNone})

            .fromTo(".archive .h2", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})

            .fromTo(".archive .archive-readers", 1, {
                opacity: 0
            }, {opacity: 1, ease: Linear.easeNone})

            .fromTo(".archive .archive-bg-img", 1, {
                opacity: 1
            }, { opacity: 0,  delay: 1, ease: Linear.easeNone})

            .fromTo(".archive .h2", 1, {
                x: 0, y: "0"
            }, {x: "-25%", y: "-10%", scale: "0.7", ease: Linear.easeNone})

            .fromTo(".archive .archive-readers", 1, {
                x: 0, y: "0%"
            }, {x: "-20%", y: "-200%", scale: "0.9", ease: Linear.easeNone})

            .fromTo(".archive .archive-description", 1, {
                opacity: 0, y: "100%", x: "21%"
            }, {opacity: 1, y: "-70%", x: "21%", display: "block", ease: Linear.easeNone})

            .fromTo(".archive .more-right", 1, {
                opacity: 0, y: "100%"
            }, {opacity: 1, y: "-80%", ease: Linear.easeNone})

            .fromTo(".firstDesc", 1, {
                y: "100%"
            }, {y: "-165%", ease: Linear.easeNone});

        new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            duration: "1700%",
            triggerHook: 'onLeave',

        })
            .setPin("#pinContainer")
            .setTween(wipeAnimation)

            // .setClassToggle(".archive", "not-active")
            .addTo(controller)
            .on('enter', function (e) {
            });

        /*===================== arrow start ===================================*/
        var header_height = $(".header-wrapper").height();
        $(window).scroll(function () {
            var wintop = $(window).scrollTop();
            if (wintop >= header_height - 500) {
                $('.arrow').fadeOut()
            }
            else {
                $('.arrow').fadeIn()
            }
        });

        $('.arrow').click(function () {
            $('html,body').animate({scrollTop: header_height + 30}, 2000)
        })
        /*===================== arrow end===================================*/
    }
    else {
        setTimeout(function () {
            $('.header-wrapper .header-img-top-mobile').addClass('active')
        }, 150);
        setTimeout(function () {
            $('.header-wrapper .header-learn-more').addClass('active')
        }, 350);
        setTimeout(function () {
            $('.digital-new-img-mobile').addClass('come-in')
        }, 350);

        setTimeout(function () {
            $('.header-wrapper .header-right .digital-text-mobile ,.header-wrapper .header-right .header-learn-text').addClass('active')
        }, 500);
        setTimeout(function () {
            $('.header-wrapper .header-right .h1').addClass('active')
        }, 1000);


        $('.arrow').css({"display": "none"});
        $('.gif-1').attr('src', 'img/gif-15-opt.gif');
        $('.gif-2').attr('src', 'img/gif-16-opt.gif');
        $('.gif-3').attr('src', 'img/gif-17-opt.gif');

        var win = $(window);
        var come_in_2 = $(".digital-new-wrapper .touch-it");
        var come_in_3 = $(".pinContainer .full-width .h2");
        var come_in_4 = $(".pinContainer .stories .stories-left .h2");
        var come_in_5 = $(".pinContainer .stories .stories-left p");
        var come_in_6 = $(".pinContainer .readers .h2");
        var come_in_7 = $(".pinContainer .work .h2");
        var come_in_8 = $(".pinContainer .work .work-bottom-img");
        var come_in_9 = $(".pinContainer .sofa .mobile-text");
        var come_in_10 = $(".pinContainer .newsfeed .newsfeed-left .h3");
        var come_in_11 = $(".pinContainer .newsfeed .newsfeed-left .h2");
        var come_in_12 = $(".pinContainer .newsfeed .newsfeed-left p");
        var come_in_13 = $(".pinContainer .archive .h2");
        var come_in_14 = $(".pinContainer .archive .archive-readers");
        var come_in_15 = $(".pinContainer .archive .archive-description");
        var come_in_16 = $(".pinContainer .firstDesc .h2");
        var come_in_17 = $(".secondDesc .h2");
        var come_in_18 = $(".thirdDesc .h2");
        var come_in_19 = $(".fourDesc .h2");
        var come_in_20 = $(".publisher .h2");
        var come_in_21 = $(".publisher p");
        var come_in_22 = $(".madeIn .h2 ");

        win.scroll(function (event) {
            if (come_in_2.visible(true)) {
                setTimeout(function () {
                    come_in_2.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_3.visible(true)) {
                setTimeout(function () {
                    come_in_3.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_4.visible(true)) {
                setTimeout(function () {
                    come_in_4.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_5.visible(true)) {
                setTimeout(function () {
                    come_in_5.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_6.visible(true)) {
                setTimeout(function () {
                    come_in_6.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_7.visible(true)) {
                setTimeout(function () {
                    come_in_7.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_8.visible(true)) {
                setTimeout(function () {
                    come_in_8.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_9.visible(true)) {
                setTimeout(function () {
                    come_in_9.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_10.visible(true)) {
                setTimeout(function () {
                    come_in_10.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_11.visible(true)) {
                setTimeout(function () {
                    come_in_11.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_12.visible(true)) {
                setTimeout(function () {
                    come_in_12.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_13.visible(true)) {
                setTimeout(function () {
                    come_in_13.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_14.visible(true)) {
                setTimeout(function () {
                    come_in_14.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_15.visible(true)) {
                setTimeout(function () {
                    come_in_15.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_16.visible(true)) {
                setTimeout(function () {
                    come_in_16.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_17.visible(true)) {
                setTimeout(function () {
                    come_in_17.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_18.visible(true)) {
                setTimeout(function () {
                    come_in_18.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_19.visible(true)) {
                setTimeout(function () {
                    come_in_19.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_20.visible(true)) {
                setTimeout(function () {
                    come_in_20.addClass("come-in");
                }, 200);
            }
        });
        win.scroll(function (event) {
            if (come_in_21.visible(true)) {
                setTimeout(function () {
                    come_in_21.addClass("come-in");
                }, 200);
            }
        });

        win.scroll(function (event) {
            if (come_in_22.visible(true)) {
                setTimeout(function () {
                    come_in_22.addClass("come-in");
                }, 200);
            }
        });

    }

    var win = $(window);
    var membersList = $(".madeIn .members-inner");
    win.scroll(function (event) {
        membersList.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });

    });


});


