// ticket.js
// ticket 페이지 반응형 언급

(function($){
	// jQuery 시작
	
	
	
	var deviceName = ["mobile","tablet","laptop"];
	var deviceWidth = [
		{ 'size' : 640 ,  'title'  : deviceName[0]},
		{ 'size' : 768 , 'title'  : deviceName[1]},
		{ 'size' : 940 , 'title'  : deviceName[2]},
		{ 'size' : 941 , 'title'  : deviceName[3]}
	];
	
	var win = $(window);
	var ww = win.innerWidth();
	// console.log(ww)
	
	var sizeCheck = function(ww){
		var sizeDevice;
		if(ww < deviceWidth[0].size){
			sizeDevice = deviceName[0];
		}else if(ww < deviceWidth[1].size){
			sizeDevice = deviceName[1];
		}else if(ww < deviceWidth[2].size){
			sizeDevice = deviceName[2];
		}else{
			sizeDevice = deviceName[3];
		}
		// console.log(sizeDevice);
		return sizeDevice;
	};
	var beforeD = sizeCheck(ww);
	
	var winWDevice = function(){
		if( $(window).innerWidth() <= deviceWidth[0].size ){
			mobile();
		} else if ( $(window).innerWidth() <= deviceWidth[1].size ){
			tablet();
		} else if ( $(window).innerWidth() <= deviceWidth[2].size ){
			tablet();
		} else{
			laptop();
		}
	};
	winWDevice();
	
	
	
	var activeRwd = 
	$(window).on('resize',function(){
		var nw = win.innerWidth();
		var afterD = sizeCheck(nw);
		console.log(afterD)
		if(afterD !== beforeD){
			location.reload();
		}
		winWDevice();
	});
	
	
	
	// jQuery 종료
	})(jQuery);