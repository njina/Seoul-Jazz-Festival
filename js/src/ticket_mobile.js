//ticket_mobile.js
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



// footer 후원사 무한 슬라이드
var sponsorArr=[
	{logoImg: 'sponsor_edelweless.png', companyName: 'edelweless'},
	{logoImg: 'sponsor_interpark.png', companyName: '인터파크'},
	{logoImg: 'sponsor_KSPO.png', companyName: 'KSPO'},
	{logoImg: 'sponsor_privateCurve.png', companyName: 'privateCurve'},
	{logoImg: 'sponsor_sbs.png', companyName: 'sbs'},
	{logoImg: 'sponsor_sbsContentsHub.png', companyName: 'sbsContentsHub'},
	{logoImg: 'sponsor_songpagu.png', companyName: '송파구'},
	{logoImg: 'sponsor_theGlenlivet.png', companyName: '질레트'},
	{logoImg: 'sponsor_wemep.png', companyName: '위메프'}
];
var logoImgUrl = '../img/sponsor/';

var footBox = $('#footBox');
var sponsor = footBox.find('.sponsor');
sponsor.append('<ul class="clearfix hidden_wrap"></ul>');

var sponsorUl = sponsor.find('ul');
var sponsorLeng = sponsorArr.length;
var n = 0;
for(; n < sponsorLeng ; n++ ){
	sponsorUl.append('<li><span>'+ sponsorArr[n].companyName +'</span></li>');
	sponsorUl.find('li').eq(n).css({backgroundImage: 'url(' + logoImgUrl + sponsorArr[n].logoImg + ')', backgroundRepeat:'no-repeat', backgroundSize: '80% auto', backgroundPosition: '50% 50%'});
}
var sponsorLi = sponsorUl.children('li');

sponsorLiLast = sponsorLi.eq(-1).clone(true);
var sponLiFistSize =sponsorLi.eq(1).outerWidth(true);
sponsorUl.css({width:sponsorLeng+100+'%', position:'relative',top:0,left:0});

setInterval(function(){
	sponsorUl.animate({left:-sponLiFistSize + 'px'}, function(){
		sponsorLi.eq(1).prevAll('li').appendTo(sponsorUl);
		sponsorUl.css({left:0});
		sponsorLi = sponsorUl.find('li');
	});
},3000);










// jQuery 종료
};