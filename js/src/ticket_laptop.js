//ticket_laptop.js
//제이쿼리 반영 재구성안
//laptop: 940px 이상

var laptop = function(){
	// jQuery 시작 
	console.log('!!!!!!!')

var wrap = $('#wrap');
var headBox =  $('#headBox');
var viewBox =  $('#viewBox');

var headBoxW = headBox.innerWidth();
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
var myScroll;
win.on('scroll',function(e){
	e.preventDefault();
	myScroll = win.scrollTop();
	console.log(myScroll, winHeight);
	
	//헤드박스 배경색상 변경
	if( myScroll < winHeight ){
		headBox.find('li').stop().animate({color:'#fff'});
		headBox.stop().animate({'backgroundColor':headBoxBg[0]});
		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(0, 128, 118, 0)'});
	} else {
		headBox.find('li').stop().animate({color:'#333'});
		headBox.stop().animate({'backgroundColor':headBoxBg[1]});
		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(0, 128, 118, 1)'});
	}
});

	



//탑버튼 클릭시 최상단으로
var topBtn = $('.topBtn');
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