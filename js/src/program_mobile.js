//program_mobile.js
//제이쿼리 반영 재구성안
//laptop: 320~ 766px 

var mobile = function(){
	// jQuery 시작 
	console.log('m test');


	var wrap = $('#wrap');
	var headBox =  $('#headBox');
	var viewBox =  $('#viewBox');
	var ticketBox = $('#ticketBox');
	var timetableBox = $('#timetableBox');
	var locationBox = $('#locationBox');
	
	var win = $(window);
	
	var headBoxW = headBox.innerWidth();
	headBox.innerWidth(win.width());
	
	var winHeight;
	var WinHeightSet = function(){
		winHeight = win.height();
		// headBox.innerHeight( winHeight );
		viewBox.innerHeight( winHeight );
		ticketBox.innerHeight( winHeight );
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
	var timetableBoxList = timetableBox.find('li');
	var locationBoxList = locationBox.find('li');
	win.on('scroll',function(e){
		e.preventDefault();
		myScroll = win.scrollTop();
		// console.log(myScroll, winHeight);
	
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
sponsorUl.css({width:sponsorLeng*100+'%', position:'relative',top:0,left:0});

setInterval(function(){
	sponsorUl.animate({left:-sponLiFistSize + 'px'}, function(){
		sponsorLi.eq(1).prevAll('li').appendTo(sponsorUl);
		sponsorUl.css({left:0});
		sponsorLi = sponsorUl.find('li');
	});
},3000);
// ==========

	





	// 페이지 개별적인 속성=====================
	var lineUpBox = $('#lineUpBox');
	var lineUpArea = $('.lineUp_area');
	
	var lineUpContent = [
		{artistImg: 'artist_01.png', artistName: 'Whiplash in Concert : Conducted by Justin Hurwitz'},
		{artistImg: 'artist_02.png', artistName: 'Sergio Mendes'},
		{artistImg: 'artist_03.png', artistName: 'Marcus Miller'},
		{artistImg: 'artist_04.png', artistName: 'Honne'},
		{artistImg: 'artist_05.jpg', artistName: 'Lianne La Havas'},
		{artistImg: 'artist_06.png', artistName: 'Lean On Me: José James Celebrates Bill Withers'},
		{artistImg: 'artist_07.png', artistName: 'Sigrid'},
		{artistImg: 'artist_08.png', artistName: 'Crush'},
		{artistImg: 'artist_09.png', artistName: '백예린'},
		{artistImg: 'artist_10.png', artistName: 'PREP'},
		{artistImg: 'artist_11.png', artistName: 'Moonchild'},
		{artistImg: 'artist_12.png', artistName: 'Conor Maynard'},
		{artistImg: 'artist_13.jpg', artistName: 'Wouter Hamel'},
		{artistImg: 'artist_14.jpg', artistName: 'Peter Cincotti'},
		{artistImg: 'artist_15.jpg', artistName: 'Etham'},
		{artistImg: 'artist_16.jpg', artistName: '루시드폴 쿼텟'},
		{artistImg: 'artist_17.jpg', artistName: '송영주 쿼텟'},
		{artistImg: 'artist_18.jpg', artistName: '선우정아'},
		{artistImg: 'artist_19.jpg', artistName: '김필'},
		{artistImg: 'artist_20.jpg', artistName: '카더가든'},
		{artistImg: 'artist_21.jpg', artistName: '적재'},
		{artistImg: 'artist_22.jpg', artistName: '새소년'},
		{artistImg: 'artist_23.jpg', artistName: '정세운'},
		{artistImg: 'artist_24.jpg', artistName: '조윤성 미들이스 턴 앙상블'},
		{artistImg: 'artist_25.jpg', artistName: '하림과 블라카멜 앙상블'},
		{artistImg: 'artist_26.jpg', artistName: '림킴'},
		{artistImg: 'artist_27.jpg', artistName: '까데호'},
		{artistImg: 'artist_28.jpg', artistName: '민수'}
	];
	
	var imgUrl = '../img/lineup/';
	
	lineUpBox.children('.lineUp_area').append('<ul class="clearfix"></ul>');
	var artistUl = lineUpBox.find('ul');
	
	var textEl = function(i){
		var listEl = '<li><a href="#"><div class="artist_img"></div><p class="artist_name"><span>'+ lineUpContent[i].artistName +'</span></p></a></li>';
		return listEl;
	};
	
	
	var i = 0;
	for(; i < lineUpContent.length ; i++ ){
		artistUl.append( textEl(i) );
		artistUl.children('li').eq(i).find('.artist_img').css({backgroundImage: 'url(' + imgUrl + lineUpContent[i].artistImg + ')', backgroundRepeat:'no-repeat', backgroundPosition:'50% 0'});
	}
	
	var artistLi = artistUl.find('li');
	var artistLiLink = artistLi.find('a');
	var artistName = $('.artist_name');

	//mouseenter 하면 이미지 크게
	artistLiLink.on('mouseenter',function(){
		var thisParenti = $(this).parentsUntil('ul').index();
		console.log(thisParenti);
		artistLi.eq(thisParenti).addClass('active');
		artistLi.eq(thisParenti).siblings('li').removeClass('active');
	});
	artistLiLink.on('mouseleave',function(){
		artistLi.removeClass('active');
	});


	
	//스크롤 할 때 아티스트 사진 하나씩 위로 두둥실
	// var artistListOffset = artistLi.eq(i).offset().top;
	// if( myScroll-50 > artistListOffset ){
	// 	artistLi.eq(i).css({transform:'translateY(100px)'});
	// 	artistLi.eq(i).animate({transform:'translateY(0px)'},300);
	// }








// jQuery 종료
};