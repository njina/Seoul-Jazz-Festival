//information_mobile.js
//제이쿼리 반영 재구성안
//laptop: 320~ 766px 

var mobile = function(){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');

var win = $(window);

var headBoxW = headBox.innerWidth();
headBox.innerWidth(win.width());

var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
};
WinHeightSet();

var wrapOffsetL;

win.on('resize',function(){
	//세로 길이 꽉차게
	WinHeightSet();

	//헤드박스 left제한
	wrapOffsetL = wrap.offset().left;
	headBox.css({'left':wrapOffsetL});
});

var headBoxBg = [];
headBoxBg[0] = 'rgba(30, 100, 80, 1)';
headBoxBg[1] = 'rgba(30, 100, 80, 0)';
// console.log(headBoxBg[0]);


//gnb ===================================
var navi = $('.navi');
navi.innerHeight(winHeight);

var menuBtn = $('.navi_menu_btn');
var exitBtn = $('.navi_exit_btn');

navi.css({'left':-100+'%'});

menuBtn.on('click',function(e){
	e.preventDefault();
	navi.show();
	navi.stop().animate( {left:0}, 500 );
});

exitBtn.on('click',function(e){
	e.preventDefault();
	navi.stop().animate({left:-100+'%'}, 500, function(){
		navi.hide();
	});
});



//스크롤시, headBox 변화 ===========================
var myScroll;
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();

});








//탑버튼 스크롤시 나타남 ===============================
var topBtn = $('.topBtn');
win.on('scroll',function(){
	if( winHeight < myScroll ){
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});

//탑버튼 클릭시 최상단으로
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});









// jQuery 종료
};