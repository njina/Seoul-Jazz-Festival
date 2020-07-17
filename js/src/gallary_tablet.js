//gallary_tablet.js
//제이쿼리 반영 재구성안
//laptop: 767~ 939px 

var tablet = function(){
	// jQuery 시작 

var wrap = $('#wrap');
var headBox =  $('#headBox');

var headBoxW = headBox.innerWidth();
var win = $(window);
var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
	// headBox.innerHeight( winHeight );
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


//스크롤시, headBox 변화 ===========================
var myScroll;
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();

});


//gnb ===================================
var navi = $('.navi');
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



//페이지 개별 속성

var imgArr = [
	'01.jpg',
	'02.jpg',
	'03.jpg',
	'04.jpg',
	'05.jpg',
	'06.jpg',
	'07.jpg',
	'08.jpg',
	'09.jpg',
	'10.jpg'
];

var imgUrl2012 = '../img/gallary/2012/2012_';
var imgUrl2013 = '../img/gallary/2013/2013_';
var imgUrl2014 = '../img/gallary/2014/2014_';
var imgUrl2015 = '../img/gallary/2015/2015_';
var imgBaseUrl = '../img/gallary/';
var imgUrlYear = [
	'2012/2012_',
	'2013/2013_',
	'2014/2014_',
	'2015/2015_'
];

// =============
var contBox = $('#contBox');
var dateList = contBox.find('.date_list');
var imageList = contBox.find('.image_list');
var imageUl = imageList.children('ul');
var i = 0;
var imageLi;
var imageLiLink;


var FnYear = function(n){
	imageUl.empty();
	var listEl = '<li><a href="#"></a></li>';
	for(i=0; i < imgArr.length ; i++ ){
		// imageUl.append( textEl(i) );
		imageUl.append( listEl );
		imageUl.children('li').eq(i).find('a').css({backgroundImage: 'url(' + imgBaseUrl + 	imgUrlYear[n] + imgArr[i] + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
	}
	
	imageLi = $(document).find(imageUl).children('li');
	imageLiLink = $(document).find(imageUl).children('li').find('a');
	
	//mouseenter 하면 이미지 크게
	imageLiLink.on('mouseenter',function(){
		var thisParenti = $(this).parentsUntil('ul').index();
		console.log(thisParenti);
		imageLi.eq(thisParenti).addClass('active');
		imageLi.eq(thisParenti).siblings('li').removeClass('active');
	});

	imageLiLink.on('mouseleave',function(){
		imageLi.removeClass('active');
	});

};

FnYear(0);

dateList.find('li').find('button').on('click',function(e){
	e.preventDefault();
	var thisIndex = $(this).parent('li').index();
	FnYear(thisIndex);
});



// jQuery 종료
};