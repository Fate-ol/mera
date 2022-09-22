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


  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header').addClass("header-fix");
    } else {
      $('.header').removeClass("header-fix");
    }
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

  $('.main-menu__ul .have-submenu a').click(function() {
    //$( this ).toggleClass('open');
    $( this ).parent().toggleClass('open');
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
  ]
  });

  // progress bar
$(".history-item__progress").css("min-width", $('.history-item').width()+ (-20) +'px');
$(".history-item__line").css("min-width", $('.history-item').width()+ (-20) +'px');
$(".history-item__arr").css("left", $('.history-item').width()+ (-20) +'px');

// scroll
  var slider = $(".history-slider");
  
  slider.on('wheel', (function(e) {
    e.preventDefault();
    if (document.documentElement.clientWidth > 1024) {
      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
    }  
    if (document.documentElement.clientWidth < 1024) {
      slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(nextSlide > currentSlide){
          console.log('Вперёд');
          //var long = $('.history-slider').find('.slick-current').position().left;
          //$(".history-item__progress").css("width", long + $('.history-item').width() + (-20) +'px');
          //$(".history-item__line").css("width", long + $('.history-item').width() + (-20) +'px');
          //$(".history-item__arr").css("left", long + $('.history-item').width() + (-20) +'px');
        }else{
          console.log('Назад')
        }
      })
      
    }
  }));

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
