var videoList = {
	"suburbs": [[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734485/cbt_s_1_s2b8gq.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734484/cbt_s_1_zhhnco.webm" }
		],[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734491/cbt_s_2_pp2d2z.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734489/cbt_s_2_wwbpoy.webm" }
		],[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734490/cbt_s_3_avlob2.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734489/cbt_s_3_rdwz29.webm" }
		]
	],
	"neighbourhood": [[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734470/cbt_nc_1_rk7ztw.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734455/cbt_nc_1_qaaj7m.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734490/cbt_nc_2_bcpqjp.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734472/cbt_nc_2_lbvgiy.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734458/cbt_nc_3_zt6nri.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734472/cbt_nc_3_kymjb4.webm" }
		]
	],
	"downtown": [[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734451/cbt_dt_1_hfy9j3.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734450/cbt_dt_1_w0l2zn.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734471/cbt_dt_2_xfmhb4.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734456/cbt_dt_2_addrs3.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734449/cbt_dt_3_zmzdkj.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734451/cbt_dt_3_oma2vu.webm" }
		]
	],
	"corner": [[
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734485/cbt_nn_1_r2x9ky.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734478/cbt_nn_1_jc99eb.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734481/cbt_nn_2_mud1rx.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734477/cbt_nn_2_gsxua1.webm" }
		], [
			{ type: "video/mp4",  src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734486/cbt_nn_3_dpqegn.mp4" },
			{ type: "video/webm", src: "http://res.cloudinary.com/dsibfgci1/video/upload/v1458734480/cbt_nn_3_ifeukl.webm" }
		]
	],
};

var sectionItemBgList = {
	"suburbs": [
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734348/scene_2_blank_tyxt4k.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734349/scene_2_housing_xpjwrm.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734348/scene_2_transportation_lgb2cv.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734348/scene_2_ee_eikhje.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734392/Scene_3_S_eivsls.jpg'
	],
	"neighbourhood": [
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458733651/scene_2_blank_mue971.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458733648/scene_2_housing_v9kaxi.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458733646/scene_2_transportation_taw2yo.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458733649/scene_2_ee_mimrrf.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458733656/Scene_3_NN_kcgkbc.jpg'
	],
	"downtown": [
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734268/scene_2_blank_gbsawq.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734268/scene_2_housing_fqdlbx.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734268/scene_2_transportation_ejsovp.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734268/scene_2_ee_yhrw57.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734268/Scene_3_NN_qkxgny.jpg'
	],
	"corner": [
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734158/scene_2_blank_a8ecw0.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734158/scene_2_housing_huzvjl.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734158/scene_2_transportation_ymwlyt.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734158/scene_2_ee_znmbqb.jpg',
		'http://res.cloudinary.com/dsibfgci1/image/upload/v1458734158/Scene_3_NN_qd333s.jpg'
	]
};

var BV;

function FirstSection(){

	var skrollrItem;
	var skrollrInialized = false;
	var id;

	var $windowWidth = $(window).width();

	var attrsForSlides = {
		// first slide map
		"map": {
			10: "transform:translate3d(0%, 0, 0) scale(1); opacity: 1;",
			2000: "transform:translate3d(-20%, 0, 0) scale(3.5); opacity: 0;"
		},
		// second slide map
		"mapZoomed":{
			// 0: "opacity: 0;",
			2000: "opacity: 0;",
			3000: "opacity: 1; transform:translate3d(-20%, 0, 0)",
			4000: "opacity: 1; transform:translate3d(-20%, 0, 0)",
			5500: "transform:translate3d(-100%, 0, 0);"
		},
		// first slide text
		"mapText": {
			0: "opacity: 1;",
			1800: "opacity: 0;"
		},
		// second slide text
		"zoomedMapText": {
			// 0: "opacity: 0;",
			1900: "opacity: 0;",
			2100: "opacity: 1;",
			4700: "opacity: 1;",
			5000: "opacity: 0;"
		},
		// third slide text
		"carsText": {
			// 0: "opacity: 0;",
			5900: "opacity: 0;",
			6000: "opacity: 1;",
			7000: "opacity: 1;",
			7200: "opacity: 0"
		},
		// third slide cars
		"thirdFirstElements": {
			0: "transform:translate3d(1920px, 0, 0);",
			4000: "transform:translate3d(1920px, 0, 0);",
			5500: "transform:translate3d(320px, 0, 0);",
			// 5500: "transform:translate3d(320px, 0, 0);",
			7000: "transform:translate3d(320px, 0, 0);",
			7200: "transform:translate3d(-1920px, 0, 0);"
		},
		// third slide wires and house
		"thirdSlideElements": {
			// 0: "transform:translate3d(0, 100%, 0); opacity:0;",
			// 4500: "transform:translate3d(0, 100%, 0); opacity:0;",
			5900: "transform:translate3d(320px, 100%, 0); opacity:0;",
			6000: "transform:translate3d(320px, 0%, 0); opacity:1;",
			6500: "transform:translate3d(320px, 0%, 0); opacity:1;",
			7000: "transform:translate3d(320px, 0%, 0); opacity:1;",
			7200: "transform:translate3d(320px, 100%, 0); opacity:0;"
		},
		// third slide gas station
		"thirdGasStations": {
			0: "opacity: 0;",
			5500: "opacity: 0;",
			6000: "opacity: 1;",
			6500: "opacity: 1;",
			7000: "opacity: 1;",
			7200: "opacity: 0;"
		},
		// road slide third, forth, fifth, seventh
		"thirdRoad": {
			4000: "transform:translate3d(1920px, 0, 0); opacity: 1",
			5500: "transform:translate3d(0px, 0, 0); opacity: 1",
			14100: "transform:translate3d(0px, 0, 0); opacity: 1",
			14200: "transform:translate3d(-1920px, 0, 0); opacity: 0",

			// for eight
			18200: "transform:translate3d(-1920px, 0, 0); opacity: 0",
			18500: "transform:translate3d(0px, 0, 0); opacity: 1",
			20700: "transform:translate3d(0px, 0, 0); opacity: 1",
			20900: "transform:translate3d(-1920px, 0, 0); opacity: 0"
		},
		// fourth slide house
		"thirdHouseWithFlag": {
			6500: "transform:translate3d(1920px, 0, 0); opacity:0;",
			7200: "transform:translate3d(1920px, 0, 0); opacity:0;",
			8000: "transform:translate3d(-380px, 0, 0); opacity:1;",
			11200: "transform:translate3d(-380px, 0, 0); opacity:1;",
			11700: "transform:translate3d(-1920px, 0, 0); opacity:0;"
		},
		// fourth slide flag
		"flagText" :{
			8000: "transform:translate3d(0, 0px, 0);",
			8300: "transform:translate3d(0, -30px, 0); opacity: 1;",
			9800: "transform:translate3d(0, -30px, 0); opacity: 1;",
			10000: "transform:translate3d(0, 40px, 0); opacity: 0;"
		},
		// fourth slide text
		"houseText": {
			8000: "opacity: 0;",
			8300: "opacity: 1",
			9800: "opacity: 1",
			10000: "opacity: 0"
		},
		// fifth slide cloud
		"cloudPart": {
			10000: "transform:translate3d(0, -25px, 0); opacity: 0",
			10200: "transform:translate3d(0, -75px, 0); opacity: 1",
			11700: "transform:translate3d(0, -75px, 0); opacity: 1"
		},
		// fifth slide people
		"bigPeopleMove": {
			10200: "transform:translate3d(0px, 0, 0);",
			10400: "transform:translate3d(35px, 0, 0);"
		},
		// fifth slide hide people in house
		"peopleHide": {
			10200: "opacity: 1;",
			10400: "opacity: 0;"
		},
		// fifth slide text
		"peopleText": {
			10000: "opacity: 0;",
			10200: "opacity: 1;",
			11700: "opacity: 1;",
			11900: "opacity: 0;"
		},
		// six slide text
		"coText": {
			11900: "opacity: 0;",
			12100: "opacity: 1;",
			13600: "opacity: 1;",
			13800: "opacity: 0;"
		},
		// six slide cloud
		"coCloud": {
			11900: "transform: translate3d(1920px, -97px, 0);",
			12100: "transform: translate3d(-200px, -97px, 0);",
			13600: "transform: translate3d(-200px, -97px, 0);",
			13800: "transform: translate3d(-1920px, -97px, 0);"
		},
		// six slide percents
		"coCloudFade": {
			11900: "opacity: 0; transform: translate3d(-240px, -97px, 0);",
			12100: "opacity: 1; transform: translate3d(-240px, -97px, 0);",
			13600: "opacity: 1; transform: translate3d(-240px, -97px, 0);",
			13800: "opacity: 0; transform: translate3d(-240px, -97px, 0);"
		},
		// six slide cars
		"coCloudCars": {
			// 6200: "transform:translate3d(1920px, -97px, 0); opacity:0;",
			// 7000: "transform:translate3d(-240px, -97px, 0); opacity:0;",
			// 7700: "transform:translate3d(-240px, -97px, 0); opacity:0;",
			12200: "transform:translate3d(1920px, -37px, 0); opacity: 0;",
			// 9300: "transform:translate3d(-1080px, -37px, 0); opacity: 1;",
			12400: "transform:translate3d(-1080px, -37px, 0); opacity: 1;",
			13900: "transform:translate3d(-1080px, -37px, 0); opacity: 1;",
			14100: "transform:translate3d(-1920px, -37px, 0); opacity:0;",
		},
		// six slide house
		"coCloudHouse": {
			12250: "opacity: 0; transform: translate3d(-900px, 500px, 0);",
			12400: "opacity: 1; transform: translate3d(-900px, -37px, 0);",
			13900: "opacity: 1; transform: translate3d(-900px, -37px, 0);",
			14100: "opacity: 0; transform: translate3d(-900px, 500px, 0);"
		},
		// seventh slide text
		"fuelText": {
			13900: "opacity: 0; ",
			14100: "opacity: 1;",
			18000: "opacity: 1;",
			18200: "opacity: 0;"
		},
		// six, seventh slide cloud
		"fuelCloud": {
			12000: "opacity: 0; transform: translate3d(680px, -60px, 0);",
			12200: "opacity: 1; transform: translate3d(680px, -60px, 0);",
			// 10100: "opacity: 0; transform: translate3d(700px, -60px, 0);",
			// 10100: "opacity: 0; transform: translate3d(700px, -60px, 0);",
			// 10500: "opacity: 1;",
			15600: "opacity: 1;",
			// 13000: "opacity: 1;",
			18000: "opacity: 1;",
			18200: "opacity: 0;"
		},
		// seventh element gas, case
		"fuelCloudElems": {
			15800: "opacity: 0; transform: translate3d(700px, -60px, 0);",
			16000: "opacity: 1;",
			18000: "opacity: 1;",
			18200: "opacity: 0;"
		},
		// seventh case
		"moneyCase": {
			16000: "transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;",
			16300: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 1;",
			17000: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 1;",
			// 16200: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 0;"
		},
		// seventh case dol
		"leftDol": {
			16300: "opacity: 1; transform: translate3d(0px, 0px, 0);",
			16700: "opacity: 1; transform: translate3d(140px, 130px, 0);",
			17000: "opacity: 0; transform: translate3d(140px, 130px, 0);"
		},
		// seventh case dol
		"rightDol": {
			16300: "opacity: 1; transform: translate3d(0px, 0px, 0);",
			16700: "opacity: 1; transform: translate3d(-140px, 130px, 0);",
			17000: "opacity: 0; transform: translate3d(-140px, 130px, 0);"
		},
		// eighth slide house
		"eighthHouses": {
			// 11050: "transform:translate3d(0, 100%, 0); opacity: 0;",
			18400: "transform:translate3d(0, 100%, 0); opacity: 0;",
			18600: "transform:translate3d(0, 0%, 0); opacity: 1;",
			20100: "transform:translate3d(0, 0%, 0); opacity: 1;",
			20300: "transform:translate3d(0, 100%, 0); opacity: 0;"
		},
		// eighth slide man
		"constractionMan": {
			18400: "opacity: 0; transform:translate3d(0, 80px, 0);",
			18700: "opacity: 1; transform:translate3d(0, 80px, 0);",
			20100: "opacity: 1; transform:translate3d(0, 80px, 0);",
			20300: "opacity: 0; transform:translate3d(0, 80px, 0);"
		},
		// eighth slide
		"rightCar": {
			18700: "transform:translate3d(1920px, 0, 0); opacity: 0;",
			18900: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20500: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20700: "transform:translate3d(-1920px, 0, 0); opacity: 0;"
		},
		// eighth slide
		"cycle": {
			18700: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
			18900: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20500: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20700: "transform:translate3d(1920px, 0, 0); opacity: 1;"
		},
		// eighth slide
		"manRight": {
			18700: "transform:translate3d(1920px, 0, 0); opacity: 0;",
			18900: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20500: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20700: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
		},
		// eighth slide
		"manLeft": {
			18700: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
			18900: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20500: "transform:translate3d(0px, 0, 0); opacity: 1;",
			20700: "transform:translate3d(1920px, 0, 0); opacity: 1;"
		},
		// eighth slide text
		"constractionText": {
			18700: "opacity: 0;",
			18900: "opacity: 1;",
			20500: "opacity: 1;",
			20700: "opacity: 0;"
		},
		// nine slide
		"firstRow": {
			20800: "opacity: 0;",
			22000: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		"secondRow": {
			22000: "opacity: 0;",
			22200: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		"thirdRow": {
			22400: "opacity: 0;",
			22600: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		"fourthRow": {
			22600: "opacity: 0;",
			22800: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		"fifthRow": {
			22800: "opacity: 0;",
			23000: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		"sixRow": {
			23000: "opacity: 0;",
			23200: "opacity: 1",
			23900: "opacity: 1",
			25000: "opacity: 0"
		},
		// nine slide text
		"menText": {
			20800: "opacity: 0;",
			21000: "opacity: 1;",
			23900: "opacity: 1;",
			25000: "opacity: 0;"
		},
		"secondSectionWelcome": {
			25300: "opacity: 0; z-index: -1",
			26000: "opacity: 1; z-index: 14;"
		},
		// helpers
		"firstElem": {
			10: "opacity: 0;",
			2000: "opacity: 0;"
		},
		"secondElem": {
			2010: "opacity: 0;",
			4810: "opacity: 0;"
		},
		"thirdElem": {
			5000: "opacity: 0;",
			6800: "opacity: 0;"
		},
		"fourthElem": {
			7000: "opacity: 0;",
			9100: "opacity: 0;"
		},
		"fifthElem": {
			9500: "opacity: 0;",
			11000: "opacity: 0;"
		},
		"sixElem": {
			12000: "opacity: 0;",
			14580: "opacity: 0;"
		},
		"seventhElem": {
			15000: "opacity: 0;",
			17000: "opacity: 0;"
		},
		"eighthElem": {
			18000: "opacity: 0;",
			21000: "opacity: 0;"
		},
		"ninthElem": {
			22100: "opacity: 0;",
			23900: "opacity: 0;"
		},
		"tenthElem": {
			24000: "opacity: 0;",
			26000: "opacity: 0;"
		}
	};

	function addBreakPoints(){
		$('.slide').each(function(){
			var $this = $(this);

			for(dataAttr in attrsForSlides[$this.attr('data-slide-title')]){
				$this.attr('data-'+dataAttr, attrsForSlides[$this.attr('data-slide-title')][dataAttr]);
			}
		});
	}

	function addMenuButtonsHandlers(){
		$('.menus a').on('click', function(e){
			var $this = $(this);

			$('.menus a').removeClass('active');
			$this.addClass('active');
		});

		$('.prevButton').on('click', function(e){
			var $this = $(this);
			var curIndex = $('.menus a.active').closest('li').index(),
			elmCount = $('.menus li').length,
			nextElem = $('.menus li').eq((curIndex - 1) % elmCount),
			nextAnchor = nextElem.find('a');

			if(!$this.hasClass('disabled')){
				$this.addClass('disabled');

				if(id !== 'first'){
					$(this).attr({
						'href': nextAnchor.attr('href'),
						'data-menu-top': nextAnchor.attr('data-menu-top'),
						'data-anchor-target': nextAnchor.attr('data-anchor-target')
					});

					$('.menus a').removeClass('active');
					nextAnchor.addClass('active');
				}
			}else {
				e.preventDefault();
			}
		});

		$('.nextButton').on('click', function(e){
			var $this = $(this);
			var curIndex = $('.menus a.active').closest('li').index(),
				elmCount = $('.menus li').length,
				nextElem = $('.menus li').eq((curIndex + 1) % elmCount),
				nextAnchor = nextElem.find('a');

			if(!$this.hasClass('disabled')){
				$this.addClass('disabled');

				if(id !==  'tenth'){
					$(this).attr({
						'href': nextAnchor.attr('href'),
						'data-menu-top': nextAnchor.attr('data-menu-top'),
						'data-anchor-target': nextAnchor.attr('data-anchor-target')
					});

					$('.menus a').removeClass('active');
					nextAnchor.addClass('active');
				}
			}else {
				e.preventDefault();
			}
		});
	}

	this.init = function (){
		$('.wrap, .c-btns').show();
		setHash(undefined);

		var skrollInit = false,
		count = $('[data-emit-events]').length;

		skrollrItem = skrollr.init({
			keyframe: function(element, name, direction) {
					$el = $(element);
					id = $el.attr('id');
					$('.menus a').removeClass('active');
					$('.menus a[href=#'+id+']').addClass('active');
			}
		});

		skrollr.menu.init(skrollrItem, {
			change: function(hash, top) {

			},
			done: function(){
				$('.c-btns.disabled').removeClass('disabled');
			}
		});
		skrollrInialized = true;
	}

	this.stat = function(){
		return skrollrInialized;
	}

	this.destroy = function(){
		$('.wrap, .c-btns').hide();
		skrollrItem.destroy();
		skrollrInialized = false;

		$(window).off('scroll');
	}

	addBreakPoints();
	addMenuButtonsHandlers();

	$(window).on('scroll', function(){
		var $prevBtn = $('.prevButton');
		var $nextBtn = $('.nextButton');
		if(window.scrollY > 2800){
			$prevBtn.removeClass('hidden');
		}else {
			$prevBtn.addClass('hidden');
		}

		if(window.scrollY > 25200){
			$nextBtn.addClass('hidden');
		}else {
			$nextBtn.removeClass('hidden');
		}
	});

	$(window).resize(function(){
		var $windowH = $(window).height();
		var $windowHOffset = -(($windowH/2)-130);

		$(".svg-correct").css({"transform":"translate(0,"+$windowHOffset+"px)"});
		$('.slide-wrap').height($windowH);
	}).resize();
}

function SecondSection(){
	var $container = $('.second-section');

	this.init = function(hash){
		$container.addClass('visible');
		setSectionHash(hash);
	}

	this.destroy = function(){
		$container.children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');

		if(BV){
			BV.dispose();
		}

		$('.i-popup__close, .second-section-start .bott-text__bott__link,.first-section-start,.play-section-video, .second-section, .button-list__main, .t-title__main').off('click');
	}

	function updateSize(container, elem, mediaAspect) {
		var containerW = container.outerWidth() < $(window).width() ? container.outerWidth() : $(window).width(),
			containerH = container.outerHeight() < $(window).height() ? container.outerHeight() : $(window).height(),
			containerAspect = containerW/containerH;

		if (containerAspect < mediaAspect) {
			console.log("taller");
			// taller
			$(container)
				.css('top',0)
				.css('left',-(containerH*mediaAspect-containerW)/2)
				.css('height',containerH);

			$(elem)
				.css('width',containerH*mediaAspect)
				.css('height',containerH);
		} else {
			// wider
			console.log("wider");
			$(container)
				.css('top',-(containerW/mediaAspect-containerH)/2)
				.css('left',0)
				.css('height',containerW/mediaAspect);
			$(elem)
				.css('width',$(elem).parent().width()+"px")
				.css('height',containerW/mediaAspect);
		}
	}


	function changeBg(container, src){
		var $img = $('<img>');

		$img.on('load', function(){
			container.css('background-image', 'url('+src+')');
		}).attr('src', src);
	}

	function changeImgSrc(src, img){
		img.src = src;
	}

	$container.children('.second-section__choices').find('.button-list__drop__item .btn').on('mouseenter', function(){
		changeBg($container, $(this).attr('data-bgImg-src'));
	});

	$('.button-list__main').on('click', function(){
		var $buttonList = $(this).closest('.button-list');

		if($buttonList.hasClass('open')){
			$buttonList.removeClass('open');
		}else {
			$buttonList.addClass('open');
		}
	});

	$container.children('.second-section__choices').find('.button-list__drop__item .btn').on('mouseleave', function(){
		$container.attr('style', '');

	});

	$container.children('.second-section__choices').find('.button-list__drop__item .btn').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var popupId = $this.attr('href').slice(1);
		// $this.closest('.second-section__choices').find('.i-popup[id="'+popupId+'"]').addClass('visible');
	});

	$('.i-popup__close').on('click', function(){
		$(this).closest('.i-popup').removeClass('visible');
	});

	$('.second-section-start .back-to-section').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
		$parent = $this.closest('.second-section__item.visible');
		$parent.find('.button-list').removeClass('hidden');
		$parent.removeClass('visible');
		$parent.find('.second-section__item__image').removeClass('active show-titles');
		// $parent.find('.second-section__item__image[eq=0]').addClass('active');
		$parent.find('.second-section__item__bott-list__item').removeClass('active');
		$('.second-section__item[data-section-item-id="'+$this.attr('href').slice(1)+'"]').addClass('visible');

		if($('#big-video-wrap').length){
			$('#big-video-wrap').remove();
		}
	});

	$('.second-section-start .bott-text__bott__link').on('click', function(e){
		e.preventDefault();
		$('.button-list.open').removeClass('open');
		$('.second-section__item').removeClass('visible');
		$('.second-section__choices').fadeIn();
		$('.second-section__item__image-list').children().remove();
		$('.second-section__item__bott-list__item').removeClass('active');
		if(BV){
			BV.dispose();
		}
	});

	$('.second-section').on('click', function(e){
		var $target = $(e.target);

		if(!$target.closest('.button-list').length){
			$('.button-list').removeClass('open');
		}

		if(!$target.closest('.t-title').length){
			$('.t-title').removeClass('popup-active');
		}
	});

	function loadFirstSection(){
		$('.second-section').removeClass('visible');
		$('.second-section__item').removeClass('visible');
		$('.second-section__choices').fadeIn();
		$('.second-section__item__image-list').children().remove();

		loadSection("");
		$container.children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');
		$('.i-popup__close, .second-section-start, .first-section-start, .play-section-video, .button-list__main, .t-title__main, .next-step, secont-section').off('click');
	}

	$('.first-section-start').on('click', function(e){
		e.preventDefault();
		
		loadFirstSection();
	});

	$('.t-title__main').on('click', function(e){
		var $this = $(this),
			$parent = $this.closest('.t-title');

		if($parent.hasClass('popup-active')){
			$parent.removeClass('popup-active');
		}else {
			$parent.closest('.second-section__item__titles-list__item').find('.t-title').not($parent).removeClass('popup-active');
			$parent.addClass('popup-active');
		}
	});

	$('.next-step').on('click', function(e){
		e.preventDefault();
		if(BV){
			BV.dispose();
		}

		var $this = $(this);

		var sectionId = $this.attr('href').slice(1);
		var bgImgLink = sectionItemBgList[sectionId][0];
		var sectionName = $this.attr('data-section-name');
		var $sectionItem = $('.second-section__item[data-section-item-id="'+sectionId+'"] .second-section__item_i');
		BV = new $.BigVideo({useFlashForFirefox:false});

		BV.init();
		BV.show(
			videoList[sectionId][1]
		);

		BV.getPlayer().on('ended' , function(){
			$('.second-section__item__bott-list__item, .second-section__item__titles-list__item').removeClass('active');
			$this.closest('.second-section__item').find('.button-list').addClass('hidden');
			$('.second-section__item__bott-list__item[data-section-name="'+sectionName+'"]').addClass('active');
			$('#big-video-wrap').addClass('hidden');
			$container.find('.second-section__item__image[eq="'+4+'"]').addClass('active');

			setTimeout(function(){
				$(window).resize();
			}, 300);
		});
	});

	$('.play-section-video').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var sectionId = $this.attr('href').slice(1);
		var bgImgLink = sectionItemBgList[sectionId][0];
		var $sectionItem = $('.second-section__item[data-section-item-id="'+sectionId+'"] .second-section__item_i');

		$('.second-section__choices').fadeOut();
		$('#big-video-wrap').removeClass('hidden');

		BV = new $.BigVideo({useFlashForFirefox:false});
		BV.init();
		BV.show(
			videoList[sectionId][0]
		);

		BV.getPlayer().on('waiting' , function(){

			if(!$('#big-video-wrap .vjs-loading-spinner .loading-screen').length){
				$('.loading-screen').clone().appendTo($('#big-video-wrap .vjs-loading-spinner'));
			}
		});

		BV.getPlayer().on('ended' , function(){
			var $img;

			for(var i = 0; i < sectionItemBgList[sectionId].length; i++){
				$img = $('<img>');

				if(i === 0){
					$img.on('load', function(){
						$sectionItem.closest('.second-section__item').addClass('visible');
						$('#big-video-wrap').addClass('hidden');
						addEvents($img, $sectionItem.children('.second-section__item__image-list'));
						updateSize($sectionItem.closest('.second-section__item'), $sectionItem, 16/9);
						$(window).resize();
					});
				}
				$img.attr({'src': sectionItemBgList[sectionId][i], 'eq': [i]})
					.addClass('second-section__item__image')
					.appendTo($sectionItem.children('.second-section__item__image-list'));
			}

			$('.button-list').removeClass('hidden');

			function addEvents($el, $container){
				$el.closest('.second-section__item').find('.button-list__drop__item .btn').on('mouseenter', function(){
					var $sectionN = $(this).attr('href').slice(1);
					$container.find('.second-section__item__image[eq="'+$sectionN+'"]').addClass('active');
					$('.second-section__item__titles-list__item.active').addClass('hidden');

					// hide bottom text box
					$('.second-section__item__bott-list__item.active').addClass('hidden');
				}).closest('.second-section__item').find('.button-list__drop__item .btn').on('mouseleave', function(){
					$container.find('.second-section__item__image').removeClass('active');
					$('.second-section__item__titles-list__item.hidden').removeClass('hidden');

					// show text bottom box
					$('.second-section__item__bott-list__item.hidden').removeClass('hidden');
				}).closest('.second-section__item').find('.button-list__drop__item .btn').on('click', function(e){
					e.preventDefault();

					var $this = $(this);
					var $sectionN = $this.attr('href').slice(1);

					$this.closest('.button-list').removeClass('open');

					$('.button-list').removeClass('hidden');

					$container.find('.second-section__item__image').removeClass('show-titles');
					$container.find('.second-section__item__image[eq="'+$sectionN+'"]').addClass('show-titles').removeClass('active');
					$('.second-section__item__titles-list__item, .second-section__item__bott-list__item').removeClass('active');
					$('.second-section__item__titles-list__item#'+$this.attr('data-section-name')+'').addClass('active');
					$('.second-section__item__bott-list__item[data-section-name="'+$this.attr('data-section-name')+'"]').addClass('active');


				});
			}
		});

		$(window).on('resize', function(){

			if(this.resizeTO) clearTimeout(this.resizeTO);
			    this.resizeTO = setTimeout(function() {
			        updateSize($sectionItem.closest('.second-section__item'), $sectionItem, 16/9);
			    }, 500);
		});
	});
}

SecondSection.loadFirst = function () {
	$('.second-section').removeClass('visible');
	$('.second-section__item').removeClass('visible');
	$('.second-section__choices').fadeIn();
	$('.second-section__item__image-list').children().remove();

	$('.second-section').children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');
	$('.i-popup__close, .second-section-start, .first-section-start, .play-section-video, .button-list__main, .t-title__main, .next-step, secont-section').off('click');

	$('.third-section').removeClass('visible');
	$('.third-section__item').removeClass('visible');

	$('#big-video-wrap').remove();
};

function ThirdSection(){
	var $container = $('#thirdSection'),
		$section,
		swiperInst,
		checkArrIndex = [],
		checkedCount = 0;

	this.init = function(hash, itemId){

		var $checkBoxList,
			 $checkBoxListItem;

	 	$container.addClass('visible');
 		setSectionHash(hash);
		$section = $container.children('[data-prevSection="'+itemId+'"]').addClass('visible');

		changeBg($section, itemId);

		$checkBoxList = $section.find('.check-box-list');
		$checkBoxListItem = $section.find('.check-box');

		$section.find('.check-step').on('click', function(e){
			e.preventDefault();
			var $this = $(this),
				$parent = $this.closest('.third-section__item__step'),
				$nextStep = $parent.next('.third-section__item__step');

			if($nextStep.hasClass('swiper-box')){
				$parent.removeClass('visible');
				$nextStep.addClass('visible');

				if(swiperInst === undefined){
					initSwiper($nextStep);
				}
			}else {
				$parent.removeClass('visible');
				$nextStep.addClass('visible');
			}
		});

		$section.find('.next-slide-step').on('click', function(e){
			e.preventDefault();
			var arrOfElements = [];

			var $list = $(this).closest('.third-section__item__step').find('.swiper-slides-list');

			for(i = 0; i < checkArrIndex.length; i++){
				arrOfElements.push($list.find('.swiper-slide[data-input-id="'+checkArrIndex[i]+'"]').clone());
			}

			arrOfElements.push($list.find('.swiper-slide[data-input-id="last-slide"]').clone());

			swiperInst.appendSlide(arrOfElements);
			swiperInst.slideNext(true);
		});

		$checkBoxListItem.find('input').on('change', function(){
			var $this = $(this),
				thisIndex = $this.closest('.check-box').index(),
				thisId = $this.attr('id');

			if(checkArrIndex.indexOf(thisId) === -1 && $this.prop('checked', true)){
				if(checkArrIndex.length >= 3 ){
					checkedCount = checkedCount % checkArrIndex.length;
					$checkBoxListItem.find('input#'+checkArrIndex[checkedCount]).prop('checked', false);
					checkArrIndex[checkedCount] = thisId;
					checkedCount++;
				}else {
					checkArrIndex.push(thisId);
					checkedCount++;
				}
			}else {
				checkArrIndex.splice(checkArrIndex.indexOf(thisId), 1);
			}

			if(checkArrIndex.length < 3){
				$checkBoxList.next('.r-text').addClass('hidden');
			}else {
				$checkBoxList.next('.r-text').removeClass('hidden');
			}
		});

		$section.on('click', '.pr-start', function(e){
			e.preventDefault();

			$(this).closest('.third-section__item.visible').find('.third-section__item__step').removeClass('visible').first().addClass('visible');
			setTimeout(function(){
				swiperInst.slideTo(0, 0, true);
			}, 400);
		});
	};

	function changeBg($container, itemName){
		$container.find('.third-section__item__img').css('background-image', 'url('+sectionItemBgList[itemName][4]+')');
		$container.find('.third-section__item__step').eq(0).addClass('visible');
	}

	function initSwiper($container){
		var $swContainer = $section.find('.swiper-container'),
			$pagination = $section.find('.swiper-pagination'),
			$nextBtn = $section.find('.swiper-next'),
			$prevBtn = $section.find('.swiper-prev');

		swiperInst = new Swiper($swContainer, {
			pagination: $pagination,
			effect: 'cube',
			grabCursor: true,
			noSwiping: true,
			nextButton: $nextBtn,
        	prevButton: $prevBtn,
			paginationClickable: true,
			onSlideChangeEnd: function(swiper){
				if(swiper.activeIndex !== 0 && swiper.activeIndex <= swiper.slides.length - 2){
					swiper.container.find('.swiper-pagination').removeClass('hidden');
				}else {
					swiper.container.find('.swiper-pagination').addClass('hidden');
				}

				if(swiper.activeIndex === swiper.slides.length - 1){
					$nextBtn.addClass('hidden');
				}else if(swiper.activeIndex === 0) {
					$prevBtn.addClass('hidden');
					$nextBtn.addClass('hidden');
				}else {
					$nextBtn.removeClass('hidden');
					$prevBtn.removeClass('hidden');
				}

				if(swiper.activeIndex === 0){
					swiperInst.removeSlide([1, 2, 3, 4]);
				}
			},
			onInit: function(swiper){
				if(swiper.activeIndex === 0){
					$nextBtn.addClass('hidden');
					$prevBtn.addClass('hidden');
					swiper.container.find('.swiper-pagination').addClass('hidden');
				}
			},
			cube: {
				shadow: false,
				slideShadows: false,
				shadowOffset: 0,
				shadowScale: 0.94
			}
		});
	}

	this.destroy = function() {
		$container.children('div').removeClass('visible').find('.third-section__item__img').removeClass('visible');
		$container.find('.third-section__item__step').removeClass('visible');

		if(swiperInst !== undefined){
			swiperInst.destroy(true, true);
			swiperInst = undefined;
		}

		checkedCount = 0;
		checkArrIndex = [];

		$section.find('.next-slide-step').off('click');

		$('.pr-start').off('click');

		$section.find('.check-step').off('click');
		$section.find('.check-box').find('input').off('change').prop('checked', false);
	}
}

function loadSection(location){
	var hash = location;
	this.firstSection;
	this.secondSection;
	this.thirdSection;

	if(hash === 'simulation'){
		this.secondSection = new SecondSection();
		this.secondSection.init(hash);
	}else if(hash == 'priorities'){
		this.thirdSection = new ThirdSection();
		this.thirdSection.init(hash, 'downtown');
	}else {
		SecondSection.loadFirst();
		this.firstSection = new FirstSection();
		this.firstSection.init();
	}

	// help handlers
	$('.btnSecondSection').off("click").on('click', function(e){
		e.preventDefault();
		firstSection.destroy();

		secondSection = new SecondSection();
		secondSection.init($(this).attr('href'));
	});

	$('.loadThirdSection').off('click').on('click', function(e){
		e.preventDefault();
		$('.second-section').removeClass('visible');

		if(secondSection){
			secondSection.destroy();
		}

		thirdSection = new ThirdSection();
		thirdSection.init('priorities', $(this).attr('href').slice(1));
	});

	$('.prev-link').off('click').on('click', function(e){
		e.preventDefault();

		loadSection.loadSecondSection();
		loadSection("");
	});
}

loadSection.loadSecondSection = function(){
	$('.button-list.open').removeClass('open');
	$('.second-section__item').removeClass('visible');
	$('.second-section__choices').fadeIn();
	$('.second-section__item__image-list').children().remove();
	$('.second-section__item__bott-list__item').removeClass('active');
	$('.second-section').removeClass('visible');
	$('.third-section__item').removeClass('visible');
	$('.third-section__item__step').removeClass('visible');
	$('#thirdSection').removeClass('visible');
	$('.t-title__main').off('click');

	$('.button-list').off('click');
	$('.button-list__main').off('click');
	$('.second-section').children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');

	$('.i-popup__close, .second-section-start .bott-text__bott__link,.first-section-start,.play-section-video').off('click');

	$('#big-video-wrap').remove();

	$('.button-list.open').removeClass('open');
	$('.second-section__item').removeClass('visible');
	$('.second-section__choices').fadeIn();
	$('.second-section__item__image-list').children().remove();
	$('.second-section__item__bott-list__item').removeClass('active');

	$('.next-slide-step').find('.r-text').addClass('hidden');

	if(thirdSection.hasOwnProperty('destroy')){
		thirdSection.destroy();
	}

	secondSection = new SecondSection();
	secondSection.init('simulation');
}

function getHash(){
	return document.location.hash.slice(1).split('/')[0]
}

function setHash(hashStr){
	if("#"+hashStr !== document.location.hash){
		if(hashStr !== undefined){
			document.location.hash += hashStr;
		}else{
			document.location.hash = "";
		}
	}
}

function setSectionHash(hashStr){
	if(hashStr !== undefined){
		document.location.hash = hashStr;
	}else{
		document.location.hash = "";
	}
}

jQuery(window).load(function(){
	loadSection(getHash());
	var fancyInit = false;

	$('.loadSection').on('click', function(){
		var $this = $(this),
			$thisSectionHash = $this.attr('data-location');

		$('.menu-visible').removeClass('menu-visible');

		if(document.location.hash !== $thisSectionHash){
			loadSection($thisSectionHash);	

			if($thisSectionHash === 'simulation'){
				loadSection.loadSecondSection();
			}
		}

		
	});

	function fancyPopup(){
		fancyInit = true;
		var swiper;
		$('.fancy-popup').fancybox({
			beforeShow: function(){
				var $item = $('.third-section__item.visible');
				$('.f-overlay').addClass('visible');

				if($item.length){
					$item.find('.third-section__item__step').addClass('hidden');
				}
			},
			afterShow: function(){
				var $pagination = $(this.inner).find('.swiper-pagination'),
					$nextBtn = $(this.inner).find('.swiper-next'),
					$prevBtn = $(this.inner).find('.swiper-prev');

				if($(this.inner).find('.swiper-container').length){
					swiper = new Swiper($(this.inner).find('.swiper-container'), {
						pagination: $pagination,
						nextButton: $nextBtn,
						prevButton: $prevBtn,
						paginationClickable: true,
						loop: true,
						onDestroy: function(){
						}
					});
				}
			},
			beforeClose: function(){
				var $item = $('.third-section__item.visible');

				if($item.length){
					$item.find('.third-section__item__step').removeClass('hidden');
				}
			},
			afterClose: function(){
				if(swiper !== undefined){
					swiper.destroy(true, true);
				}
				
				$('.f-overlay').removeClass('visible');
			},
			width: 'auto',
			height: 'auto',
			autoSize: true,
			autoHeight: true,
			autoWidth: true,
			autoResize: true,
			padding: [20, 0],
			margin: 0,
			tpl: {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><svg width="41px" height="47px" viewBox="0 0 41 47" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Corner-Retail" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Corner-Retail-:-Walkability-Active-:-pop-up-3" sketch:type="MSArtboardGroup" transform="translate(-1104.000000, -208.000000)"><g id="Group-2" sketch:type="MSLayerGroup" transform="translate(1101.000000, 207.000000)"><g id="Rectangle-1-+-Rectangle-1" transform="translate(10.000000, 0.000000)" stroke="#000000" sketch:type="MSShapeGroup"><rect id="Rectangle-1" transform="translate(13.500000, 14.000000) rotate(-315.000000) translate(-13.500000, -14.000000) " x="-4" y="13" width="35" height="2"></rect><rect id="Rectangle-1" transform="translate(13.500000, 14.000000) rotate(-225.000000) translate(-13.500000, -14.000000) " x="-4" y="13" width="35" height="2"></rect></g><text id="CLOSE" sketch:type="MSTextLayer" font-family="Open Sans" font-size="14" font-weight="260" sketch:alignment="middle" fill="#000000"><tspan x="3.17431641" y="47">CLOSE</tspan></text></g></g></g></svg></a>'
			}
		});
	}

	if(!fancyInit){
		fancyPopup();
	}

	$('.menu-btn').on('click', function(){
		$('body').toggleClass('menu-visible');
	});

	$('.menu-controls__item').on('click', function(){
		var $this = $(this);

		if(!$this.hasClass('active')){
			$('.menu-controls__item').removeClass('active');

			$this.addClass('active');

			$('.menu-content__item').removeClass('active');
			$('.menu-content__item[id="'+$this.attr('data-menu-id')+'"]').addClass('active');
		}
	});

	$('.about-box-acc__title').on('click', function(){
		var $this = $(this);

		if($this.closest('.about-box-acc').hasClass('open')){
			$this.next('.about-box-acc__item').slideUp(function(){
				$this.closest('.about-box-acc').removeClass('open');
			});
		}else {
			$this.next('.about-box-acc__item').slideDown(function(){
				$this.closest('.about-box-acc').addClass('open');
			});

		}
	});

	setTimeout(function(){
		$('body').addClass('content-loaded');
	}, 1500);
});
