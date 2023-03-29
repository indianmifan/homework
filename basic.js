
    // JavaScript Document
    var observeTargets = document.querySelectorAll('[data-name="inview"]');
    var options = {
      root: null,
    //  rootMargin: "-80px 0px",
      threshold: 0
    };
    function observeCallback(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-show')
        } else {
    //      entry.target.classList.remove('active')
        }
      })
    }
    var observer = new IntersectionObserver(observeCallback, options);
    observeTargets.forEach(function (observeTarget) {
      observer.observe(observeTarget);
    });
    
    
    
    /*  =====================
    // loaded
    ===================== */
    
    $(window).on('load', function() {
      $('body').addClass('is-loaded');
    });
    
    
    
    
    /*  =====================
    // smooth scroll
    ===================== */
    
    
    $(function(){
      $('a[href^="#"]').click(function() {
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var headerHeight = 100;
        var position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    });
    
    $(window).on('load', function() {
      var url = $(location).attr('href');
      setTimeout(function(){
        if(url.indexOf("?id=") != -1){
          var id = url.split("?id=");
          var $target = $('#' + id[id.length - 1]);
          if($target.length){
            var pos = $target.offset().top - 100;
            $('html, body').animate({scrollTop:pos}, 500);
          }
        }
      },10);
    });
    
    
    /*  =====================
    // pagetop
    ===================== */
    
    $(function () {
      var topBtn = $('.js-jumpTop');
      topBtn.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() < 100) {
          topBtn.fadeOut();
        } else {
          topBtn.fadeIn();
        }
      });
    });
    
    
    
    
    /*  =====================
    // fixed
    ===================== */
    
    
    $(function () {
      var $body = $('body');
      var windowWidth = $(window).width();
      var windowHeight = $(window).height() ;
      var windowHeight = windowHeight - 80;
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > windowHeight) {
          $body.addClass('is-fixed');
        } else {
          $body.removeClass('is-fixed');
        }
      });
      $(window).on('load', function () {
        if ($(this).scrollTop() > windowHeight) {
          $body.addClass('is-fixed');
        } else {
          $body.removeClass('is-fixed');
        }
      });
    });
    
    
    
    $(function() {
      var $slide = $('.js-mainVisual-slider')
        .slick({
          infinite: true,
          pauseOnHover: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          speed: 25000,
          autoplaySpeed: 7000,
          autoplay: true
        })
        .on({
          beforeChange: function(event, slick, currentSlide, nextSlide) {
            $('.slick-slide', this).eq(currentSlide).addClass('slick-prev-slide');
            $('.slick-slide', this).eq(nextSlide).addClass('slick-animation');
          },
          afterChange: function() {
            $('.slick-prev-slide', this).removeClass('slick-prev-slide slick-animation');
          }
        });
      $slide.find('.slick-slide').eq(0).addClass('slick-animation');
    });
    $(function() {
      var nav = $('.js-homeNavi');
      var navPosition = nav.offset().top;
      $(window).scroll(function () {
        var windowTop = $(this).scrollTop();
        if (windowTop >= navPosition) {
          $('body').addClass('is-naviFix')
        } else if (windowTop <= navPosition) {
          $('body').removeClass('is-naviFix')
        }
      });
    });

    

    function increaseQuantity(btn) {
        var input = btn.previousElementSibling;
        var currentValue = parseInt(input.value);
        input.value = currentValue + 1;
      }
      
      function decreaseQuantity(btn) {
        var input = btn.nextElementSibling;
        var currentValue = parseInt(input.value);
        if (currentValue > 1) {
          input.value = currentValue - 1;
        }
      }
      