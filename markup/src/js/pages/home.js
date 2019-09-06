$(function(){
  rangeSlider();
  asideOpen();
  asideClose();
  dialogInit();

  $('#tabs-block_holder').tabs({
    activate: function (event, ui) {
      ui.oldTab.removeClass('active');
      ui.newTab.addClass('active');
    },
  });
});

function rangeSlider() {
  console.log(13415);

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

function dialogInit() {
  console.log(1);

	$("#dialog").dialog({
    minWidth: 730,
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
   
	$("#opener").on("click", function() {
    console.log(2);
		$("#dialog").dialog("open");
	});
}
