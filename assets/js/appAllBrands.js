(function ($) {
  var windowz = $(window);
  var windowWidth = window.innerWidth;

  windowz.load(function () {
    $(".page-loader").fadeOut("slow");
    checkWidth();
    sliderCarousel();
  });
  //chạy lib Carousel
  var sliderCarousel = function(){
    $("#gallery_01").carousel({
      visible: 4,
      itemMinWidth: 102,
      itemEqualHeight: 102,
      itemMargin: 5,
    });
  };

  var checkWidth = function(){
    if (windowWidth > 1199) {
      /* --- CUSTOMIZE ZOOM ELEVATE ----- */
      //Chạy lib elevateZoom
      $("#img1").elevateZoom({
        gallery: 'gallery_01',
        cursor: "-webkit-zoom-in",
        zoomType: 'window',
        galleryActiveClass: "active",
        imageCrossfade: false,
        zoomLens: true,
        lensZoom: true,
        zoomWindowWidth: 130,
        zoomWindowHeight: 130,
        responsive: true,
      });

      //pass the images to Fancybox
      $("#img1").bind("click", function (e) {
        var ez = $('#img1').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
      });
    }


    if(windowWidth < 992){
      //Remove class container và thay bằng fluid-container khi windowWidth
      //dưới 1199px
      $('.main-menu > div').removeClass('container').addClass('container-fuild');

      //Khi window width dưới 1199px thì hàm này mới hoạt động
      //add event onclick để xổ xuống(slideDown) các sidebar đã được ẩn
      $(".toggle-sidebar").click(function (e) {
        var o = $(this);
        var sidebar = o.next();
        //Nếu click ngoài vùng sidebar sẽ slideUp sidebar đang visible
        $(document).one('click',function(e){
          console.log($(e.target).closest('.col-left').length);
          if(!$(e.target).closest('.col-left').length){
            $('.sidebar:visible').slideUp('slow');
          }
          e.preventDefault();
          e.stopPropagation();
        });
        if(sidebar.is(':visible')){
          sidebar.slideUp();
          o.removeClass('active');
        }else{
          $('.sidebar:visible').slideUp('slow');
          $('.toggle-sidebar').removeClass('active');
          o.addClass('active');
          o.next().slideDown('slow');
        }
        e.preventDefault();
        e.stopPropagation();
      });
    }
  };
  if(windowWidth > 991){
    //Khi click vào control của carousel item sẽ thay image lớn của product
    $("#crsl-owl-control a").on("click",function(){
      setTimeout(function(){
        image = $('.crsl-item.crsl-active').find('a[data-image]').attr('data-image');
        $('#img1.image-zoom-elevate').attr('src', image);
      }, 300);
    });

    // titile menu onclick sẽ slideToggle List Menu Item xuống
    // và trước đó sẽ add event onclick với document khi khi outside
    // ListMenu thì sẽ slideUp
    $('.vertical-category-menu .title').click(function () {
      $(document).on('click',function(e){
        if(!$(e.target).closest('.vertical-category-menu').length){
          $('.category-menu-list-item:visible').slideUp('slow');
        }
      });
      $('.category-menu-list-item').slideToggle('slow');
    });
  }

  // $(document).on('click',function(e){
  //   var sidebar = $('.sidebar');
  //     if(sidebar.is(':visible')){
  //   if(!$(e.target).closest(".sidebar").length){
  //       $('.sidebar:visible').slideToggle('slow');
  //     }
  //   }
  //   e.preventDefault();
  //   e.stopPropagation();
  // });
  // $('.category-item .toggle-nav').click(function () {
  //     var o = $(this);
  //     var navList = o.next();
  //     navList.slideToggle('slow', function () {
  //         o.find('.show-nav').toggleClass('fa-chevron-down fa-times');
  //     });
  // });
} (jQuery));
