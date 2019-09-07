$(function () {
  $('#tabs-block_holder').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active');
      ui.newTab.addClass('active');
    },
  });
});

$(function () {
  console.log(15845);
  $('.quote-slide .slider .slider-content').slick({
     dots:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    responsive:[
      {
        breakpoint:1151,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint:921,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:580,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   });
 });

$(function(){
  rangeSlider();
  asideOpen();
  asideClose();
  dialogInit();
});

function rangeSlider() {

  if ($('#price-range').length) {
    $('#price-range').ionRangeSlider({
      type: 'double',
      grid: false,
      min: 0,
      max: 1000,
      from: 0,
      to: 600,
      prefix: "$",
      hide_min_max: true
    });
  }
}

function asideOpen() {
  console.log(15845);
  $('.aside-opener').on('click', function(){
    if($('body').hasClass('active-aside')){
      $('body').removeClass('active-aside');
    } else {
      $('body').addClass('active-aside');
    }
  });
}

function asideClose() {
  console.log(15845);
$('.aside-close').on('click', function(){
  if($('body').hasClass('active-aside')){
    $('body').removeClass('active-aside');
  } else {
    $('body').addClass('active-aside');
  }
});
}

function dialogInit() {
  $( "#dialog" ).dialog({
    width:730,
    autoOpen: false,
    show: {
      effect: "fade",
      duration: 300
    },
    hide: {
      effect: "fade",
      duration: 300
    }
  });

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
}



