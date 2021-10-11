

(function ($) {
    $('.nav-tabs').responsiveTabs();
})(jQuery);


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
});


var swiper = new Swiper('.americans-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    touchRatio: 0,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev2'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            touchRatio: 1
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
            touchRatio: 1,

        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            touchRatio: 1
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }

});


var swiper = new Swiper('.taking-swiper', {
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
    touchRatio: 0,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev4'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            touchRatio: 1
        },
        // when window width is >= 480px
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
            touchRatio: 1
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            touchRatio: 1
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }

});





var mySwiper = new Swiper('.leading-swiper', {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    touchRatio: 0,
    slidesPerGroup: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
            touchRatio: 1,
            slidesPerGroup: 1,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
            touchRatio: 1,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            touchRatio: 1,
            slidesPerGroup: 1,
        },
    }
})




$(".navigation .nav-link").mouseover(function () {
    $(this).addClass("active");
});
$(".submenu").mouseover(function () {
    $(".navigation .nav-link").addClass("active");
});
$(".navigation .nav-link").mouseout(function () {
    $(this).removeClass("active");
});
$(".submenu").mouseout(function () {
    $(".navigation .nav-link").removeClass("active");
});

$(".request-demo-btn").click(function () {
    $(".request-demo-modal").addClass("active");

});
$(".close-icon a").click(function () {
    $(".request-demo-modal").removeClass("active");

});


$(".navbar-toggler-icon").click(function () {
    $(".mobile-menu").addClass("active");
});
$(".close-iocn").click(function () {
    $(".mobile-menu").removeClass("active");

});

$(".menu-nav ul li a").click(function () {
    $(this).next().toggleClass("active");
    $(this).toggleClass("active");
});


$(".long-text-inner .nav-tabs .nav-item a").on('click', function (e) {
    $(".long-text-inner .nav-tabs .nav-item a.active").removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
});
$("#tab1-top").on('click', function (e) {
    $("#tabs-1").addClass('show active');
    $("#tabs-2").removeClass('show active');
    $("#tabs-3").removeClass('show active');
    $("#tabs-4").removeClass('show active');
    e.preventDefault();
});
$("#tab2-top").on('click', function (e) {
    $("#tabs-1").removeClass('show active');
    $("#tabs-2").addClass('show active');
    $("#tabs-3").removeClass('show active');
    $("#tabs-4").removeClass('show active');
    e.preventDefault();
});
$("#tab3-top").on('click', function (e) {
    $("#tabs-1").removeClass('show active');
    $("#tabs-2").removeClass('show active');
    $("#tabs-3").addClass('show active');
    $("#tabs-4").removeClass('show active');
    e.preventDefault();
});
$("#tab4-top").on('click', function (e) {
    $("#tabs-1").removeClass('show active');
    $("#tabs-2").removeClass('show active');
    $("#tabs-3").removeClass('show active');
    $("#tabs-4").addClass('show active');
    e.preventDefault();
});


$(function () {
    $('.long-text-inner .nav-tabs').StickySidebar({
        // Settings
        additionalMarginTop: 100
    });
});


(function ($) {
    $.fn.StickySidebar = function (options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern'
        };
        options = $.extend(defaults, options);

        // Validate options
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;

        tryInitOrHookIntoEvents(options, this);

        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.
        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);

            if (!success) {
                console.log('TST: Body width smaller than options.minWidth. Init is delayed.');

                $(document).scroll(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that));
                $(window).resize(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that))
            }
        }

        // Try doing init if proper conditions are met.
        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true;
            }

            if ($('body').width() < options.minWidth) {
                return false;
            }

            init(options, $that);

            return true;
        }

        // Init the sticky sidebar(s).
        function init(options, $that) {
            options.initialized = true;

            // Add CSS
            $('head').append($('<style>.StickySidebar:after {content: ""; display: table; clear: both;}</style>'));

            $that.each(function () {
                var o = {};

                o.sidebar = $(this);

                // Save options
                o.options = options || {};

                // Get container
                o.container = $(o.options.containerSelector);
                if (o.container.length == 0) {
                    o.container = o.sidebar.parent();
                }

                // Create sticky sidebar
                o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
                o.sidebar.css({
                    'position': 'relative',
                    'overflow': 'visible',
                    // The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });

                // Get the sticky sidebar element. If none has been found, then create one.
                o.stickySidebar = o.sidebar.find('.StickySidebar');
                if (o.stickySidebar.length == 0) {
                    o.sidebar.find('script').remove(); // Remove <script> tags, otherwise they will be run again on the next line.
                    o.stickySidebar = $('<div>').addClass('StickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar);
                }

                // Get existing top and bottom margins and paddings
                o.marginTop = parseInt(o.sidebar.css('margin-top'));
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

                // Add a temporary padding rule to check for collapsable margins.
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0;
                } else {
                    o.stickySidebarPaddingTop = 1;
                }

                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0;
                } else {
                    o.stickySidebarPaddingBottom = 1;
                }

                // We use this to know whether the user is scrolling up or down.
                o.previousScrollTop = null;

                // Scroll top (value) when the sidebar has fixed position.
                o.fixedScrollTop = 0;

                // Set sidebar to default values.
                resetSidebar();

                o.onScroll = function (o) {
                    // Stop if the sidebar isn't visible.
                    if (!o.stickySidebar.is(":visible")) {
                        return;
                    }

                    // Stop if the window is too small.
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return;
                    }

                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
                    if (o.options.disableOnResponsiveLayouts) {
                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');

                        if (sidebarWidth + 50 > o.container.width()) {
                            resetSidebar();
                            return;
                        }
                    }

                    var scrollTop = $(document).scrollTop();
                    var position = 'static';

                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
                    if (scrollTop >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
                        // The top and bottom offsets, used in various calculations.
                        var offsetTop = o.paddingTop + o.marginTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

                        // All top and bottom positions are relative to the window, not to the parent elemnts.
                        var containerTop = o.container.offset().top;
                        var containerBottom = o.container.offset().top + getClearedHeight(o.container);

                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;

                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
                        } else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
                        }

                        var staticLimitTop = containerTop - scrollTop + o.paddingTop + o.marginTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;

                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff;
                            }
                        }

                        if (o.options.sidebarBehavior == 'stick-to-top') {
                            top = options.additionalMarginTop;
                        }

                        if (o.options.sidebarBehavior == 'stick-to-bottom') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight();
                        }

                        if (scrollTopDiff > 0) { // If the user is scrolling up.
                            top = Math.min(top, windowOffsetTop);
                        } else { // If the user is scrolling down.
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }

                        top = Math.max(top, staticLimitTop);

                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());

                        // If the sidebar is the same height as the container, we won't use fixed positioning.
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();

                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed';
                        } else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed';
                        } else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            // Stuck to the top of the page. No special behavior.
                            position = 'static';
                        } else {
                            // Stuck to the bottom of the page.
                            position = 'absolute';
                        }
                    }

                    /*
                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
                     * It's way slower to first check if the values have changed.
                     */
                    if (position == 'fixed') {
                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': o.sidebar.width(),
                            'top': top,
                            'left': o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left'))
                        });
                    } else if (position == 'absolute') {
                        var css = {};

                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.top = scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom;
                        }

                        css.width = o.sidebar.width();
                        css.left = '';

                        o.stickySidebar.css(css);
                    } else if (position == 'static') {
                        resetSidebar();
                    }

                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            });
                        }
                    }

                    o.previousScrollTop = scrollTop;
                };

                // Initialize the sidebar's position.
                o.onScroll(o);

                // Recalculate the sidebar's position on every scroll and resize.
                $(document).scroll(function (o) {
                    return function () {
                        o.onScroll(o);
                    };
                }(o));
                $(window).resize(function (o) {
                    return function () {
                        o.stickySidebar.css({'position': 'static'});
                        o.onScroll(o);
                    };
                }(o));

                // Reset the sidebar to its default state
                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': ''
                    });
                }

                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
                function getClearedHeight(e) {
                    var height = e.height();

                    e.children().each(function () {
                        height = Math.max(height, $(this).height());
                    });

                    return height;
                }
            });
        }
    }
})(jQuery);





//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = (now * 50) + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                'transform': 'scale(' + scale + ')',
                'position': 'absolute'
            });
            next_fs.css({'left': left, 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".previous").click(function () {
    if (animating)
        return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = ((1 - now) * 50) + "%";
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({'left': left});
            previous_fs.css({'transform': 'scale(' + scale + ')', 'opacity': opacity});
        },
        duration: 800,
        complete: function () {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(".submit").click(function () {
    return false;
})
