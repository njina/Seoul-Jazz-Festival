//common_layout.js
//header, footer 공통영역 

(function($){
var wrap = $('#wrap');

wrap.append('<div class="headBox_wrap"></div>');
wrap.append('<div class="footBox_wrap"></div>');

var headWrap = wrap.find('.headBox_wrap');
var footWrap = wrap.find('.footBox_wrap');

headWrap.load('./common/header.html', function(){
		var headBox = $('#headBox');
});

footWrap.load('./common/footer.html', function(){
	var footBox = $('#footBox');
});



})(jQuery);