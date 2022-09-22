$(document).ready(function(){

  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    $('body').toggleClass("body-overflow");
    return false;
  });


  $(document).click(function(event) {
    if ($(event.target).is('.main-menu__items') || $(event.target).closest(".main-menu__items").length) return; /*Проверяем что мы не находим внутри главного меню */
    if ($(".main-menu").hasClass("open")) /*Если меню открыто то закрываем */
    {
     $('.main-menu').removeClass("open");
     $('body').removeClass("body-overflow");
    }
  });



  if (document.documentElement.clientWidth > 1201) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 120) {
        $('.header-small').addClass("header-fix");
        $('.header-small').css({"transform": "translate(0,0%)", "opacity": "1"});
        
      } else {
        $('.header-small').removeClass("header-fix");
        $('.header-small').css({"transform": "translate(0,-100%)", "opacity": "0"});
      }
    });
  }
  if (document.documentElement.clientWidth < 1200) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('.header-normal').addClass("header-fix");
      } else {
        $('.header-normal').removeClass("header-fix");
      }
    });
  }

  $('.main-menu__ul .have-submenu a').click(function() {
    $( this ).parent().toggleClass('open');
    return false;
  });

  $('.js-tab-link').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-link.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
    return false;
  });


  $('.tab-content .tab-content__link a').click(function() {
    //$( this ).toggleClass('open');
    $( this ).closest('.tab-content').toggleClass('open');
    return false;
  });
  

// пересмотреть код. при адаптиве работает неверно
  if (document.documentElement.clientWidth < 768) {
    $('.filter-tabs__nav ul li.active a').click(function() {
      $( this ).closest('.filter-tabs__nav').toggleClass('open');
      return false;
    });
  };
//


$('.search-b .search-link').click(function() {
  $( this ).parent().find('.search-content').toggleClass('open');
return false;
});

$('.search-close').click(function() {
  $( this ).closest('.search-content').toggleClass('open');
  return false;
});

$('.catalog-nav .catalog-nav__head > a').click(function() {
  $( this ).closest('.catalog-nav').toggleClass('open');
  return false;
});


$('.catalog-nav nav .have-submenu > a').click(function() {
  $( this ).parent().toggleClass('open');
  return false;
});

$('.filtr__more').click(function() {
  $(this).html() == 'Развернуть <i></i>' ? $(this).html('Скрыть <i></i>') : $(this).html('Развернуть <i></i>');
  $( this ).closest('.filtr').toggleClass('open');
  return false;
});

$('.product-content-btn .link-open').click(function() {
  $(this).html() == 'Подробнее<i></i>' ? $(this).html('Свернуть<i></i>') : $(this).html('Подробнее<i></i>');
  $( this ).closest('.product-content-b').toggleClass('open');
  return false;
});

$('.filtr__subhead > a').click(function() {
  $( this ).closest('.filtr__line').toggleClass('open');
  return false;
});


  $('.galery-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    //dots: true,
    arrows: true,
    appendArrows:'.galery-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });
  $('.sert-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //dots: true,
    arrows: true,
    appendArrows:'.sert-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });

  $('.news-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //dots: true,
    arrows: true,
    appendArrows:'.news-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });
  $('.experience-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //dots: true,
    arrows: true,
    appendArrows:'.experience-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });


  $('.services-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //dots: true,
    arrows: true,
    appendArrows:'.services-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
      },
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });


  $('.partner-slider').slick({
    rows: 2,
    slidesPerRow: 6, 
    slidesToScroll: 1,
    arrows: true,
    appendArrows:'.partner-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            rows: 3,
            slidesPerRow: 4, 
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
      },
      {
          breakpoint: 767,
          settings: {
            rows: 3,
            slidesPerRow: 3, 
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ]
  });


  $('.advantages-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendArrows:'.advantages-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',

    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
  ]
  });

var itemsLength = $('.history-slider > div').length - 1;
  $('.history-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
	
    appendArrows:'.history-slider-arrows',
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        }
    },
  ],
  });
  

  $('.product-pic__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-pic__nav'
  });
  $('.product-pic__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-pic__slider',
    //dots: true,
    prevArrow:'<span class="slider-arrow slider-arrow-prev"></span>',
    nextArrow:'<span class="slider-arrow slider-arrow-next"></span>',

    //centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          //dots: true,
          //arrows: false,
        }
      },
    ],

  });
 

  // progress bar
$(".history-item__progress").css("min-width", $('.history-item').width()+ (-20) +'px');
$(".history-item__line").css("min-width", $('.history-item').width()+ (-20) +'px');
$(".history-item__arr").css("left", $('.history-item').width()+ (-20) +'px');

// scroll
  var slider = $(".history-slider");
  if (document.documentElement.clientWidth > 1024) {
	  
  slider.on('wheel', (function(e) {
   // e.preventDefault();
    
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
    
  
  }));
  
   }
   
     slider.on('afterChange', function(event, slide, index){
	   console.log(index);
        if (index <= 0) {
      //alert("Первый слайд!");
    };
    if (itemsLength >= index) {
      //alert("Последний слайд!");
    };
      });
   
    if (document.documentElement.clientWidth < 1024) {
      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(nextSlide > currentSlide){
          console.log('Вперёд');
          var vlong = $('.history-slider').find('.slick-current').position().left+$('.history-item').width();
		  console.log(vlong);
          $(".history-item__progress").css("width", vlong + $('.history-item').width() + (-20) +'px');
          $(".history-item__line").css("width", vlong + $('.history-item').width() + (-20) +'px');
          $(".history-item__arr").css("left", vlong + $('.history-item').width() + (-20) +'px');
        }else{
          console.log('Назад')
        }
      })
      
    }

// открытие информации
if (document.documentElement.clientWidth > 1024) {

  $('.history-item__content').hover(
    function() {
      $( this ).closest('.history-items').find(".history-item__content").removeClass("opened");
      $( this ).addClass("opened");
    }, function() {
    },
  );
}  

if (document.documentElement.clientWidth > 1024) {
    $('.history-item__content').hover(function(){
    var left2 = $( this ).position().left;
    //console.log($(left2));
    
    $(".history-item__progress").css("width", left2 + $('.history-item').width() + (-20) +'px');
    $(".history-item__line").css("width", left2 + $('.history-item').width() + (-20) +'px');
    $(".history-item__arr").css("left", left2 + $('.history-item').width() + (-20) +'px');
    
    //$(".history-item__progress").css("width", left2 +'px');
    //$(".history-item__line").css("width", left2 +'px');

  });
}







  function height_r()
	{
		//$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.footer').outerHeight(true)+'px');
	}
	$(window).resize(function()
	{
    height_r();
	});
	height_r();
	$(window).on("load", function()
	{
		height_r();
	});




  (function($) {
    $(function() {

      $('input.styler, select.styler').styler({
        filePlaceholder:"Прикрепить файл"
      });

    });
  })(jQuery);



});
