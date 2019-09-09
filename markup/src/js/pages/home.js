$(function(){
  rangeSlider();
  asideOpen();
  asideClose();

  $( "#opener" ).on( "click", function() {
    $( "#dialog" ).dialog( "open" );
  });
});

$(function () {
  rangeSlider();
  $('#tabs-block_holder').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active');
      ui.newTab.addClass('active');
    },
  });
});


function rangeSlider() {  
  console.log(15845);

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
	$('.aside-opener').on('click', function(){
		if($('body').hasClass('active-aside')){
			$('body').removeClass('active-aside');
		} else {
			$('body').addClass('active-aside');
		}
	});
}

function asideClose() {
	$('.aside-close').on('click', function(){
		if($('body').hasClass('active-aside')){
			$('body').removeClass('active-aside');
		} else {
			$('body').addClass('active-aside');
		}
	});
}

$( function() {
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
} );