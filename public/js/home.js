(function(){
  var mainViews = $('.main-content');
  var headerBar = $('.fix-header-bar');
  var windowz = $(window);
  var windowWidth = window.innerWidth;
  var navbarItem = $('.navbar-item');
  var navbarWidth =$(".navbar-width");
  /*Check the size of window when load */
  $(window).on('load',function () {
    $(".page-loader").fadeOut("slow");
    checkWidth();
    sliderCarousel();
    toggleContentButton();
    console.log("HOHO");
  });

  $("a[href='#most-views']").one('click', function () {
    setTimeout(function () {
      $('.most-views-slider').carousel({
        visible: 4,
        itemMinWidth: 250,
        itemEqualHeight: 400
      });
      $('.tab-loader').fadeOut('slow');
    }, 500);
  });

  /*Check the size of window when it resize */
  windowz.on('resize', function () {
    windowWidth = window.innerWidth;
    checkWidth();
  });


  /*  */
  var checkWidth = function () {
    if (windowWidth > 1199) {
      hoverItemNavbar();
      mainViews.css("padding-top", headerBar.height());
      headerBar.css('position', 'fixed');
      onScrollEventHeader();
      if(navbarWidth.hasClass("container-fuild")){
        navbarWidth.removeClass("container-fuild").addClass("container");
      }
    } else {
      navbarItem.unbind('mouseenter mouseleave');
      mainViews.css("padding-top", 0);
      headerBar.css('position', 'relative');
      navbarWidth.removeClass("container").addClass("container-fuild");
    }
  };

  hoverItemNavbar = function () {
    navbarItem.on('mouseenter', function (e) {
      e.preventDefault();
      $(this).find('.dropdown-submenu').slideDown('fast');
    }).on('mouseleave', function (e) {
      e.preventDefault();
      $(this).find('.dropdown-submenu').slideUp('fast');
    });
  };

  onScrollEventHeader = function () {
    windowz.on("scroll", function () {
      if (windowz.scrollTop() > 27) {
        headerBar.css("background-color", "rgba(251, 251, 251, 0.75)");
      } else {
        headerBar.css("background-color", "#fbfbfb");
      }
    });
  };


  toggleContentButton = function () {
    $(".navbar-title").click(function (e) {
      e.preventDefault();
      var o = $(this).siblings(".navbar-list-items");
      o.slideToggle('slow', function () {
        $(".toggle-nav-title").toggleClass("fa-chevron-down fa-times");
      });
    });
    $(".toggle-nav").click(function (e) {
      e.preventDefault();
      var o = $(this);
      o.next().slideToggle('slow', function () {
        o.find('.show-nav').toggleClass('fa-chevron-down fa-times');
      });
    });
  };

  sliderCarousel = function () {
    $('.main-slider').carousel({
      visible: 1,
      itemMargin: 0,
      autoRotate: 6000
    });

    $('.hotnews-slider').carousel({
      visible: 4,
      itemMinWidth: 250,
      itemEqualHeight: 400
    });
    $('.audio-brands-slider').carousel({
      visible: 6,
      itemMinWidth: 96.92,
      itemEqualHeight: 65,
      itemMargin: 0,
    });
    $('.audio-product-slider').carousel({
      visible: 3,
      itemMinWidth: 250,
      itemEqualHeight: 400
    });
    $('.speaker-brands-slider').carousel({
      visible: 6,
      itemMinWidth: 96.92,
      itemEqualHeight: 65,
      itemMargin: 0,
    });
    $('.speaker-product-slider').carousel({
      visible: 3,
      itemMinWidth: 250,
      itemEqualHeight: 400
    });
    $('.computer-brands-slider').carousel({
      visible: 6,
      itemMinWidth: 96.92,
      itemEqualHeight: 65,
      itemMargin: 0,
    });
    $('.computer-product-slider').carousel({
      visible: 3,
      itemMinWidth: 250,
      itemEqualHeight: 400
    });
    $('.gear-brands-slider').carousel({
      visible: 6,
      itemMinWidth: 96.92,
      itemEqualHeight: 65,
      itemMargin: 0,
    });
    $('.gear-product-slider').carousel({
      visible: 3,
      itemMinWidth: 250,
      itemEqualHeight: 400
    });
    $('.news-slider').carousel({
      visible: 1,
    });
    $('.brands-sliderz').carousel({
      visible: 3,
    });
  };
}());
