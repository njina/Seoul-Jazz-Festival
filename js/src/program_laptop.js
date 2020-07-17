//program_laptop.js
//제이쿼리 반영 재구성안
//laptop: 940px 이상


var laptop = function(){
	
	var wrap = $('#wrap');
	var headBox =  $('#headBox');
	var viewBox =  $('#viewBox');
	var lineUpBox = $('#lineUpBox');
	var lineUpArea = $('.lineUp_area');

	var headBoxW = headBox.innerWidth();
	var win = $(window);
	var winHeight;
	var WinHeightSet = function(){
		winHeight = win.height();
		headBox.innerHeight( winHeight );
		viewBox.innerHeight( winHeight );
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
	
	
	//처음 헤드박스 색상
	headBox.find('li').stop().animate({color:'#fff'});
	headBox.stop().animate({'backgroundColor':headBoxBg[1]});
	headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(0, 128, 118, 1)'});
	
	//스크롤시, headBox 변화
	var myScroll;
	win.on('scroll',function(e){
		e.preventDefault();
		myScroll = win.scrollTop();
		// console.log(myScroll, winHeight);
			//헤드박스 배경색상 변경
	if( myScroll+350 <  lineUpBox.height() ){
		headBox.find('li').stop().animate({color:'#fff'});
		headBox.stop().animate({'backgroundColor':headBoxBg[1]});
		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(0, 128, 118, 0)'});
	} else {
		headBox.find('li').stop().animate({color:'#333'});
		// headBox.stop().animate({'backgroundColor':headBoxBg[0]});
		headBox.find('.sns_zone').find('ul').stop().animate({'backgroundColor':'rgba(0, 128, 118, 1)'});
	}
});

		
	
	//탑버튼 클릭시 최상단으로
	var topBtn = $('.topBtn');
	topBtn.children('button').on('click',function(e){
		e.preventDefault();
		$('html,body').scrollTop(0);
	});


	
	

	// 페이지 개별적인 속성=====================

	
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
		var listEl = '<li><a href="#"><div class="artist_img"></div><p class="artist_name"><span>'+ lineUpContent[i].artistName +'<span></p></a></li>';
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