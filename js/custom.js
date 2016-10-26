$(document).ready(function(){
	$(window).load(function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
			$('body').addClass('ios');
		};
		$('body').removeClass('loaded'); 
	});/* viewport width */

	$('<a href="#" class="open-menu"><span></span>Open Menu</a>').appendTo('header');
	$('<span class="fader"/>').appendTo('header');
	$('.img-to-bg').each(function() {
		if ($(this).find('> img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')').find('> img').hide();
		};
	});//img-to-background

	$('.fader').click(function(){
		$('body').removeClass('menu-opened');
	});

	$('.open-menu').click(function(){
		$('body').toggleClass('menu-opened');
		return false;
	});//btn-open-manu
//
    var handler = function(){
    	var height_footer = $('footer').outerHeight();
    	$('.content').css({'padding-bottom':height_footer});
    };
    $(window).bind('load', handler);
    $(window).bind('resize', handler);
    $(window).bind('scroll', handler);

    if($('.js-main-slider').length){
        $('.js-main-slider').slick({
            dots:true,
            fade:true,
            infinite:false,
            slide: '.slide',
            responsive: [
                {
                breakpoint: 767,
                settings: {
                	dots: false
                    }
                }
            ]
        });
    };
    
    if($('.js-mobile-slider').length){
        function mobileSlider(){
        	if( $(window).width() <= 991 && $('.js-mobile-slider').hasClass('slick-initialized') != true ){
        		$('.js-mobile-slider').slick({
        			autoplay: true,
        			autoplaySpeed: 4000,
        			slidesToShow: 3,
        			responsive: [
        			{
        				breakpoint: 768,
        				settings: {
        					slidesToShow: 1
        				}
        			}
        			]
        		});
        	}
        	else if( $(window).width() > 991 && $('.js-mobile-slider').hasClass('slick-initialized') ){
        		$('.js-mobile-slider').slick('unslick');
        		window.location.reload();
        	}
        }
        mobileSlider();
        $(window).resize(function(){
            mobileSlider();
        });
    };
	/*function mainNav(){

		$(".main-nav li").css({

			paddingLeft: 0,

			paddingRight: 0

		})

		var freeWidth = $(".main-nav").outerWidth();

		$(".main-nav li").each(function(){

			freeWidth-=$(this).outerWidth() 

		})

		var paddingWidth = freeWidth / ( $(".main-nav li").size() * 2 - 2);



		$(".main-nav li").css({

			paddingLeft: paddingWidth,

			paddingRight: paddingWidth

		})



	}*/

	/*mobileSlider();
	$(window).resize(function(){
		mobileSlider();
	});*/
    
   //Scroll block    
    if($('.js-category-wrap').length){
        var leftTop = $('.js-category-wrap');
        var scrollBlock = $('.js-category-nav');
        var asideHeight = $('.js-category-nav').outerHeight(); //Для условия если контент большого блока меньше по высоте чем сайдбар
        var asideCont = $('.content-asside').outerHeight();

        function stikyLeftSide(rightSide, leftCol) {
            var scrollPos = $(window).scrollTop();
            var leftTop =  leftCol.offset().top;
            var width = $('.category-asside').width();

            if (scrollPos > leftTop && scrollPos < (leftTop + leftCol.height() - rightSide.outerHeight())) {
                rightSide.addClass('fixed').css('width', width);
                $('.category-asside').removeClass('relative');
                rightSide.removeClass('bottom');
                //rightSide.removeClass('top');
            } else if (scrollPos < leftTop) {
                rightSide.removeClass('fixed');
                rightSide.removeClass('fixed').css('width', '100%');
                $('.category-asside').addClass('relative');
            } else if (scrollPos > leftTop && scrollPos > (leftTop + leftCol.height() - rightSide.outerHeight()) && asideHeight <= asideCont) {
                rightSide.removeClass('fixed');
                rightSide.addClass('bottom');
            }
        }
        stikyLeftSide(scrollBlock,leftTop);
        $(window).on('scroll', function () {
            stikyLeftSide(scrollBlock, leftTop);
        });
        $(window).resize(function(){
    		stikyLeftSide(scrollBlock, leftTop);
    	});
    };
    
    //Tabs
    $('.tabs li a').click(function(){
    	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
    	$(this).parent().siblings().removeClass('active');
    	var id = $(this).attr('href');
    	$(id).removeClass('hide');
    	$(this).parent().addClass('active');
     return false;
    });
    
    //Fancybox
    if($('.js-fancy').length){
    	$('.js-fancy').fancybox({
            padding: 0,
            //maxWidth: 483,
            //minWidth: 290,
            //'autoSize':false,
            helpers: {
                overlay:{
                    locked: false
                }
            }
    	});
    };
    
    /* Placeholder for IE */
    (jQuery)('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur();
});