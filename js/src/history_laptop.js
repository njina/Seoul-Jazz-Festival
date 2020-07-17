//main_02_laptop.js
//제이쿼리 반영 재구성안
//laptop: 940px 이상

var laptop = function(){
	// jQuery 시작 
	console.log('!!!!!!!')

var wrap = $('#wrap');
var headBox =  $('#headBox');

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
var myScroll = win.scrollTop();
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
		headBox.stop().animate( {'backgroundColor':headBoxBg[1]} );





//탑버튼 클릭시 최상단으로
var topBtn = $('.topBtn');
topBtn.children('button').on('click',function(e){
	e.preventDefault();
	$('html,body').scrollTop(0);
});



//개별적인 페이지 속성 ====================
var textArr = [];
textArr[0] = '\
정재형 / 바우터 하멜(Wouter Hamel) with Special Guest 스윗소로우 / 에릭 베네(Eric Benét) / 디사운드(D\'Sound) / 매트 비앙코(Matt Bianco) / 세르지오 멘데스(Sergio Mendes) / 루시드폴 / 정성하';

textArr[1] = '\
박칼린 / 팻 메스니(Pat Metheny) / 게리 버튼(Gary Burton) / 스티브 스왈로우(Steve Swallow) / 안토니오 산체스(Antonio Sanchez) / 카산드라 윌슨';

textArr[2] = '\
어스 윈드 앤 파이어(Earth, Wind & Fire) / 조지 벤슨(George Benson) / 알 디 메올라(Al Di Meola) / 에릭 베네(Eric Benét) / 브라이언 블레이드와 펠로우쉽 밴드 (Brian Blade and The Fellowship Band) / 레디시(Ledisi) / 소노다밴드(Sonoda Band) / 리쌍(길&개리) / 정인 / 이하이 / 박주형 / 박지민 / 임주연 / 가을방학 / 더 버드(The Bird) / 고찬용 / 고상지 / 최고은 / 박주원 등 총 40개 팀 참여';

textArr[3] = '\
램지루이스 일렉트릭 밴드 위드 스페셜 게스트 필립 베일리 (Ramsey Lewis Electric Band with Special Guest Philip Bailey) / 데미안 라이스 (Damien Rice) / 미카 (MIKA) / 파로브 스텔라 밴드(Parov Stelar Band) / 킹스 오브 컨비니언스 (Kings of Convenience) /로이 하그로브 쿼텟 (Roy Hargrove Quintet) / 바우터 하멜 (Wouter Hamel) / 히로미 트리오 프로젝트 (Hiromi the trio project) / 로드리 고 이 가브리엘라 (Rodrigo Y Gabriela) / 테입 파이브 (Tape Five) / 로베르타 감바리니 (Roberta Gambarini) / 정성조 빅밴드 with 써니킴 / 최백호 & 박주원 / 막시밀리언 헤커 (Maximillian Hecker) / 제프 버넷 (Jeff Bernet) / 정원영 / 스윗소로우 / 라 벤타나(La Ventana) & 10cm / 푸디토리움 & 장윤주 / 고상지 & 최고은 / 데이비드 최 & 클라라 씨(David Choi & Clara C) / 조윤성 & 미니 심포니 오케스트 라 / 킹스턴 루디스카 / 몽구스 / 원펀치 / 소란';

textArr[4] = '\
스페셜오프닝 나이트 <br/>\
이승환, 미셸카밀로&토마티토(Michel Camillo&Tomatito), 크리스보티(Chris Botti)<br/>\
데미안 라이스(Damien Rice) / 제이미컬럼(Jamie Cullum) / 잭드조네트 트리오(Jack DeJohnette Trio) / 제럴드 앨브라이트(Gerald Albright) / 파울로 누티니(Paolo Nutini) / 얼렌드 오여(Erlendøye) / 에디 팔미에리(Eddie Palmieri) / 조슈아레드맨쿼텟(Joshua Redman Quartet) /  크렉데이빗(Craig David) / 바우터하멜(Wouter Hamel) / 닐스페터몰배르(Nils PetterMolvær) / 에릭 베네(Eric Benet) / 정엽&박주원 / 장기하와 얼굴들 / 송영주 쿼텟 / 비 더 보이스(Be the Voice) / 어반자카파 / 손드르레르케(SondreLerche) / 정준일 / 윤석철 트리오 / 윤한 / 가리온&쿠마파크 / 빈지노 / 불나방스타쏘세지클럽 / 이동우 / 선우정아 / 잠비나이 / 살롱 드 오수경 / 프롬 / 에릭남';

textArr[5] = '\
5/23(SAT)<br />\
Chick Corea And Herbie Hancock(칙 코리아&허비 행콕), Basement Jaxx (베이스먼트 잭스) / Robert Glasper Experiment(로버트 글래스퍼 익스페리먼트) / Jazzanova Live Feat. Paul Randolph(재자노바) / Caro Emerald(카로 에메랄드) / Owl City(아울 시티) / Jeff Bernat & Band (제프버넷 & 밴드- sat & sun) / Maximilian Hecker(막시밀리언 해커) / 언니네 이발관(Sister\'s Barbershop) /박주원 (Park Juwon) / 데이브레이크 (DAYBREAK) / 킹스턴 루디스카(Kingston Rudieska) / Dirty Loops(더티 룹스) / Vintage Trouble(빈티지 트러블-sat & sun) / 옥상달빛(OKDAL) / 술탄 오브 더 디스코(SULTAN OF THE DISCO) / 주윤하 & 재즈 페인터스(Juyoonha & Jazz Painters) / 로큰롤라디오(Rock N Roll Radio) / 혁오(Hyukoh) / 트램폴린(TRAMPAULINE)<br />\
5/24(SUN)<br />\
Sergio Mendes (세르지오 멘데스) / MIKA (미카) / John Scofield Uberjam (존 스코필드 우버잼) / Bebel Gilberto(베벨 질베르토) / The Bad Plus (배드 플러스) / Wouter Hamel(바우터 하멜) / Jeff Bernat & Band (제프버넷 & 밴드 - sat & sun) / 하동균 (Ha Dong Qn) / 십센치(10CM) / Vintage Trouble (빈티지 트러블-sat & sun) / 고상지(Koh Sangji) / 한승석&정재일(Han Seung Seok & Jung Jaeil) / 선우정아(Sunwoo Jung Ah) / 스탠딩 에그(Standing Egg) / 윤한(Yoonhan) / 윤덕원(Yoon Dukwon) / 쏜애플(Thornapple) / 로이킴(Roy Kim) / 송인섭트리오(Inseop Song Trio) / 타니모션(Tanemotion)<br />\
5/25(MON)<br />\
Arturo Sandoval(아투로 산도발) / Gregory Porter(그레고리 포터) / The Cardigans(카디건스) / Tamia(타미아) / Jose James (호세 제임스) / Nikki Yanofsky(니키 야노프스키) / 에픽하이(Epik High) / 어어부 프로젝트(Uhuhboo Project) / 페퍼톤스(Peppertones) / 장기하와 얼굴들(Kiha & The Faces) / 빈지노(재지팩트) Beenzino(Jazzyfact) / H ZETTRIO (에이치 젯트리오) / 재주소년(Jaejoo Boys) / 제이래빗(J Rabbit) / 최고은(Gonne Choi) / 어쿠스틱 콜라보(ACOUSTIC COLLABO) / 지소울(G.SOUL) / 구본암 밴드(Koo Bonam Band) / 김사월X김해원 (Kim SawolXKim Haewon)';

textArr[6] = '\
5.27 SJF Royal Night Out 2016<br />\
Jamie Cullum, Damien Rice, Kings of Convenience, Wouter Hamel\
5.28 (Sat)<br />\
PAT METHENY w/ Antonio Sanchez, Gwilym Simcock & Linda OH(팻 메시니 위드 안토니오 산체스, 그윌림 심콕 & 린다 오) / MARK RONSON DJ SET(마크 론슨 디제이 셋) / ESPERANZA SPALDING presents: EMILY\'S D+EVOLUTION(에스페란자 스팔딩 프리젠트: 에밀리스 디+에볼루션) / KURT ELLING(커트 엘링) / FLYING LOTUS(플라잉 로터스) / RUFUS WAINWRIGHT(루퍼스 웨인라이트) / REBIRTH BRASS BAND(리버스 브라스 밴드) *토, 일 출연 / GOGO PENGUIN(고고 펭귄) / VINTAGE TROUBLE(빈티지 트러블) *토, 일 출연 / 빈지노(JAZZYFACT) (BEENZINO-JAZZYFACT) / 페퍼톤스(PEPPERTONES) / 혁오(hyukoh) / 에피톤 프로젝트(EPITONE PROJECT) / 유준상(J n joy 20 BAND) (YU JUN SANG J n joy 20 BAND) / 고상지(KOH SANGJI) / 스탠딩 에그(STANDING EGG) / 성민제&조윤성 듀오(Sung Min Je & Cho Yoon Seung Duo) / 나희경(HEE KYUNG NA) / 에디킴(EDDY KIM) / DEAN(딘) / 에이퍼즈(A-FUZZ)\
5.29 (Sun)<br />\
Straighten Up & Fly Right THE NAT KING COLE TRIBUTE feat. RAMSEY LEWIS and JOHN PIZZARELLI(스트레이튼 업 & 플라이 라이트 - 더 냇 킹 콜 트리뷰트 피쳐링 램지 루이스 & 존 피자렐리) / CORINNE BAILEY RAE(코린 베일리 래) / JASON DERULO(제이슨 데룰로) / TERENCE BLANCHARD /featuring THE E-COLLECTIVE(테렌스 블랜차드 피처링 디 이-콜렉티브) / WOUTER HAMEL(바우터 하멜) / REBIRTH BRASS BAND(리버스 브라스 밴드) *토, 일 출연 / REDFOO(레드푸) / VINTAGE TROUBLE(빈티지 트러블) *토, 일 출연 / DIRTY LOOPS(더티 룹스) / 장범준(JANG BEOM JUNE) / 정준일(JUNG JOONIL) / 정준영밴드(JUNG JOON YOUNG BAND) / 에릭남(ERIC NAM) / 방백(BAHNGBEK) / 문정희 with SALSA SWINGOZA (MOON JEONGHEE with SALSA SWINGOZA) / 푸디토리움(PUDDITORIUM) / MOT(못) / 디어클라우드(DEAR CLOUD) / 윤석철 트리오-자유리듬(YUN SEOK CHEOL TRIO - JAYU RHYTHM) / 박재정&조형우(JAEJUNG PARC&HYUNGWOO CHO) / 이채언루트(ECHAE EN ROUTE)';

textArr[7] = '\
5/27 (SAT)<br />\
Dianne Reeves(다이안 리브스) / Honne(혼네) / The Stanley Clarke Band(스탠리 클락 밴드) / Lianne La Havas(리앤 라 하바스) / Arturo O\'farrill & The Afro Latin Jazz Ensemble(아르투로 오패릴 & 더 아프로 라틴 재즈 앙상블) / Wouter Hamel(바우터 하멜) / Avishai Cohen Quartet(아비샤이 코헨 쿼텟) / 지용(Ji)/ 루시드폴 퀸텟(Lucid Fall Quintet) / 지코(Zico) / 크러쉬(Crush) / 비와이(BewhY) / 두번째달(2nd Moon) / 스탠딩 에그(Standing Egg) / 에릭남(Eric Nam) / Christopher(크리스토퍼) / 정승환 X 샘김(Jung Seung-Hwan X Sam Kim) / JSFA(즈스파) / 강이채(Echae Kang) / 베이빌론(Babylon)\
5/28 (SUN)<br />\
Tower Of Power(타워 오브 파워) / Honne(혼네) / Pat Martino Trio(팻 마티노 트리오) / Cecile McLorin Salvant(세실 맥로린 살반트) / Squirrel Nut Zippers(스쿼럴 넛 지퍼스) / 에픽하이(Epik High) / 넬(NELL) / 자이언티(Zion.T) / 십센치(10cm) / Mamas Gun(마마스건) / 존박(John Park) / 로이킴(Roy Kim) / 곽진언(Kwak JinEon) / Kneebody(니바디) / 고상지 TANGO X MUVAQ ORQUESTA(Koh SangJi) / 유준상’S JNJOY20 BAND(Yu JunSang) / 선우정아(Sunwoojung-A) / 윤석철트리오 X 백예린(Yun SeokCheol Trio X Baek Yerin) / 홍대광(Hong DaeKwang) / 밀릭 X 오프온오프 X 펀치넬로(Millic X Offonoff X Punchnello)';

textArr[8] = '\
5/19 (SAT)<br />\
Ms. Lauryn Hill(로린 힐) / Maceo Parker(마세오 파커) / Chris Botti(크리스 보티) / Iron & Wine(아이언&와인) / Gretchen Parlato(그레첸 팔라토) / Loyle Carner(로이 카너) / Khruangbin(크루앙빈) / The Soul Rebels(더 소울 레벨스) / 에픽하이(Epik High) / 루시트폴 with 조윤성 & 황호규(Lucid Fall Trio) / 크러쉬(Crush) / 존박(John Park) / 이하이(Lee Hi) / J n Joy 20(제이엔조이) / 장윤주 & 주윤하(Jang yoonju & Ju yoonha) / 정세운(Jeong Sewoon) / 디어 재즈 오케스트라(Dear Jazz Orchestra)\
5/20 (SUN)<br />\
Brandford Marsalis Quartet(브랜포드 마셀러스 쿼텟) / Jessie J(제이제이) / Arturo Sandoval & His All-Star Band(아투로 산도발 & 그의 올스타 밴드) / Children of the Light : Danilo Perez, John Patitucci, Brian Blade(칠드런 오브 더 라이트 : 다닐로 페레즈, 존 파티투치, 브라이언 블레이드) / Kehlani with Marteen(켈라니 위드 마틴) / Rhye(라이) / Mamas Gun(마마스건) / The Duke Ellington Orchestra(더 듀크 엘링턴 오케스트라) / PREP(프렙) / 넬(Nell) / 로이킴(Roy Kim) / 혁오(Hyukoh) / 두번째달 with 김준수(2nd Moon with Kim Junsoo) / 윤석철 트리오 x 백예린(Yun Seok Cheol Trio x Baek Yerin) / 고상지(Koh Sangji_Tango x Jazz) / 커먼그라운드(Common Ground) / 헤이즈(Heize) / 데이식스(Day6) / 리차드파커스(Richard Parkers) / 강이채(Echae Kang)';

textArr[9] = '\
5. 25 (SAT)<br />\
Omara Portuondo – Omara Es Cuba (오마라 포르투온도 – 오마라 에스 쿠바) / John Scofield ’s “Combo 66" (존 스코필드 “콤보 66”) featuring Vicente Archer, Gerald Clayton & Bill Stewart / Christian McBride And Tip City (크리스찬 맥브라이드 앤드 팁 시티) / Clean Bandit (클린 밴딧) / 에픽하이 (EPIK HIGH) / Aloe Blacc (알로에 블라크) / 루시드폴 모르폴린 앙상블 (Lucid Fall morpholine ensemble) / The Puppini Sisters (더 퍼피니 시스터즈) / 송영주 쿼텟 (Youngjoo Song Quartet) / 규현 (Kyuhyun) / 장범준(Jang Beom June) / Wouter Hamel (바우터 하멜) / Bahamas (바하마스) / 박원 with 윤석철&권영찬 (Park Won) / 김필 (Feel Kim) / 딘 (DEAN) / 라비 (Ravi) / 카더가든 (Car, the Garden) / 강이채 (Echae Kang) / 적재 (Jukjae) / 김사월 (Kim Sawol) / KATIE (케이티) / 1415 / 콕배스 (Cokebath)\
5. 26 (SUN)<br />\
Wynton Marsalis (윈튼 마살리스) / Brad Mehldau Trio (브레드 멜다우 트리오) / Pink Martini (핑크 마티니) / Tommy Emmanuel (토미 엠마뉴엘)/ Andy McKee (앤디 맥키)/ Rudimental Live Set (루디멘탈 라이브셋) / Fitz and the Tantrums (피츠 앤드 더 탠트럼스) / 크러쉬 (Crush) / Lauv (라우브) / Leon Bridges (리온 브릿지스) / 정재형 AVEC PIANO (Jung Jaeyung AVEC PIANO) / 선우정아 (sunwoojunga) / Julia Michaels (줄리아 마이클스) / Nick Hakim (닉 하킴) / 이하이 (LEEHI) / 정승환 (Jung Seung Hwan) / 이진아 트리오 (Lee Jin Ah Trio) / 최고은 (GONNE CHOI) / 고상지 밴드 (SANGJI KOH BAND) / 정세운 (Jeong Sewoon) / 하성운 (HA SUNGWOON) / Bulow (뷜로우) / 황소윤 (So!YoOn!) / 황호규 쿼텟 (Hogyu Hwang Quartet)';


var historyArr = [
	{year:'2019', count: '13th', img: '2019.jpg', text: textArr[9] },
	{year:'2018', count: '12th', img: '2018.jpg', text: textArr[8] },
	{year:'2017', count: '11th', img: '2017.jpg', text: textArr[7] },
	{year:'2016', count: '10th', img: '2016.jpg', text: textArr[6] },
	{year:'2015', count: '9th', img: '2015.jpg', text: textArr[5] },
	{year:'2014', count: '8th', img: '2014.jpg', text: textArr[4] },
	{year:'2013', count: '7th', img: '2013.jpg', text: textArr[3] },
	{year:'2012', count: '6th', img: '2012.jpg', text: textArr[2] },
	{year:'2011', count: '5th', img: '2011.jpg', text: textArr[1] },
	{year:'2010', count: '4th', img: '2010.jpg', text: textArr[0] }
];
var imgUrl = '../img/poster/';


var contBox = $('#contBox');
contBox.append('<ul class="history_list"></ul>');

var historyUl = contBox.find('.history_list');
var i=0;
for(; i < historyArr.length ; i++ ){
	historyUl.append('<li><div class="year_count"></div> <div class="img_poster"></div> <div class="cont_text"></div></li>');
	historyUl.find('.year_count').eq(i).html('<h3><span class="year">' + historyArr[i].year + '</span> <span class="count">' + historyArr[i].count + '</span></h3>');
	historyUl.find('li').find('.img_poster').eq(i).css({backgroundImage:'url(' + imgUrl+ historyArr[i].img + ')'});
	historyUl.find('li').find('.cont_text').eq(i).html('<p>' + historyArr[i].text + '</p>');
}

var historyLi = historyUl.find('li');
var historyLiOffset = historyLi.offset().top;


// ====스크롤 시 위로 두둥실
win.on('scroll',function(e){
	historyLi.eq(0).css({opacity:1,top:'50px'},800);
	historyLi.eq(1).css({opacity:1,top:'50px'},800);

});






// jQuery 종료
};