$(function(){
  rangeSlider();
  asideOpen();
  asideClose();

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
