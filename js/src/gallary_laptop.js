//gallary_laptop.js
//제이쿼리 반영 재구성안
//laptop: 940px 이상

var laptop = function(){
	// jQuery 시작 
	// console.log('!!!!!!!')

var wrap = $('#wrap');
var headBox =  $('#headBox');

var win = $(window);
var winHeight;
var WinHeightSet = function(){
	winHeight = win.height();
	headBox.innerHeight( winHeight );
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


//스크롤시, headBox 변화
// var myScroll;
// win.on('scroll',function(e){
// 	e.preventDefault();
// 	myScroll = win.scrollTop();
// 	// console.log(myScroll, winHeight);
	
// 	//헤드박스 배경색상 변경
// 	if( myScroll+300 <  winHeight ){
// 		headBox.find('li').stop().animate({color:'#fff'});
// 		headBox.stop().animate({'backgroundColor':headBoxBg[0]});
// 		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(200, 200, 200, 0)'});
// 	} else {
// 		headBox.find('li').stop().animate({color:'#333'});
// 		headBox.stop().animate({'backgroundColor':headBoxBg[1]});
// 		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(200, 200, 200, 1)'});
// 	}
// });
	//헤드박스 배경색상 변경
		headBox.find('li').stop().animate({color:'#fff'});
		headBox.stop().animate({'backgroundColor':headBoxBg[1]});




//탑버튼 클릭시 최상단으로
var topBtn = $('.topBtn');
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});




// 페이지 개별 속섣============================

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


// var imgaaa = [
// 	{year: 2012, imgurl:'url', source: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']},
// 	{year: 2012, imgurl:'url', source: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']},
// 	{year: 2012, imgurl:'url', source: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']},
// 	{year: 2012, imgurl:'url', source: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']},
// 	{year: 2012, imgurl:'url', source: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg']},
// ]

// =============
var contBox = $('#contBox');
var dateList = contBox.find('.date_list');
var imageList = contBox.find('.image_list');
var imageUl = imageList.children('ul');
var i = 0;
var imageLi;
var imageLiLink;

// var textEl = function(i){
// 	var listEl = '<li><a href="#"></a></li>';
// 	return listEl;
// };



// //2015
// var fn2015 = function(){
// 	for(; i < imgArr.length ; i++ ){
// 		imageUl.append( textEl(i) );
// 		imageUl.children('li').eq(i).find('a').css({backgroundImage: 'url(' + imgUrl2015 + imgArr[i] + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
// 	}
// };


// //2014
// var fn2014 = function(){
// 	for(; i < imgArr.length ; i++ ){
// 		imageUl.append( textEl(i) );
// 		imageUl.children('li').eq(i).find('a').css({backgroundImage: 'url(' + imgUrl2014 + imgArr[i] + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
// 	}
// };


// //2013
// var fn2013 = function(){
// 	for(; i < imgArr.length ; i++ ){
// 		imageUl.append( textEl(i) );
// 		imageUl.children('li').eq(i).find('a').css({backgroundImage: 'url(' + imgUrl2013 + imgArr[i] + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
// 	}
// };


// //2012
// var fn2012 = function(){
// 	for(; i < imgArr.length ; i++ ){
// 		imageUl.append( textEl(i) );
// 		imageUl.children('li').eq(i).find('a').css({backgroundImage: 'url(' + imgUrl2012 + imgArr[i] + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 50%'});
// 	}
// };

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

// dateList.find('li').eq(0).find('button').on('click',function(e){
// 	e.preventDefault();
// 	fn2015();
// });
// dateList.find('li').eq(1).find('button').on('click',function(e){
// 	e.preventDefault();
// 	fn2014();
// });
// dateList.find('li').eq(2).find('button').on('click',function(e){
// 	e.preventDefault();
// 	fn2013();
// });
// dateList.find('li').eq(3).find('button').on('click',function(e){
// 	e.preventDefault();
// 	fn2012();
// });

dateList.find('li').find('button').on('click',function(e){
	e.preventDefault();
	var thisIndex = $(this).parent('li').index();
	FnYear(thisIndex);
});














// jQuery 종료
};