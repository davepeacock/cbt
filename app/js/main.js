var videoList = {
	"suburbs": [
		{ type: "video/mp4",  src: "videos/1920x1080/cbt_s_1.mp4" },
		{ type: "video/webm", src: "videos/1920x1080/cbt_s_1.webm" }
	],
	"neighbourhood": [
		{ type: "video/mp4",  src: "videos/1920x1080/cbt_nn_1.mp4" },
		{ type: "video/webm", src: "videos/1920x1080/cbt_nn_1.webm" }
	],
	"downtown": [
		{ type: "video/mp4",  src: "videos/1920x1080/cbt_dt_1.mp4" },
		{ type: "video/webm", src: "videos/1920x1080/cbt_dt_1.webm" }
	],
	"corner": [
		{ type: "video/mp4",  src: "videos/1920x1080/cbt_nc_1.mp4" },
		{ type: "video/webm", src: "videos/1920x1080/cbt_nc_1.webm" }
	]
}

var sectionItemBgList = {
	"suburbs": [
		'img/suburbs/scene_2_blank.jpg',
		'img/suburbs/scene_2_housing.jpg',
		'img/suburbs/scene_2_ee.jpg',
		'img/suburbs/scene_2_transportation.jpg'
	]
}

function FirstSection(){

	var skrollrItem;
	var skrollrInialized = false;

	var $windowWidth = $(window).width();

	var attrsForSlides = {
		"map": {
			10: "transform:translate3d(0%, 0, 0) scale(1); opacity: 1;",
			2000: "transform:translate3d(-20%, 0, 0) scale(3.5); opacity: 0;"
		},
		"mapZoomed":{
			// 0: "opacity: 0;",
			2000: "opacity: 0;",
			3000: "opacity: 1; transform:translate3d(-20%, 0, 0)",
			5000: "transform:translate3d(-100%, 0, 0);"
		},
		"mapText": {
			0: "opacity: 1;",
			1800: "opacity: 0;"
		},
		"zoomedMapText": {
			// 0: "opacity: 0;",
			1900: "opacity: 0;",
			3000: "opacity: 1;",
			3500: "opacity: 0;"
		},
		"carsSlide": {
			// 0: "transform:translate3d(100%, 0, 0);",
			3000: "transform:translate3d(100%, 0, 0);",
			4500: "transform:translate3d(0, 0, 0);"
		},
		"carsText": {
			// 0: "opacity: 0;",
			4900: "opacity: 0;",
			5000: "opacity: 1;",
			6400: "opacity: 1;",
			6500: "opacity: 0"
		},
		"thirdFirstElements": {
			0: "transform:translate3d(1920px, 0, 0);",
			3000: "transform:translate3d(1920px, 0, 0);",
			4500: "transform:translate3d(320px, 0, 0);",
			5500: "transform:translate3d(320px, 0, 0);",
			6100: "transform:translate3d(-1920px, 0, 0);"
		},
		"thirdSlideElements": {
			// 0: "transform:translate3d(0, 100%, 0); opacity:0;",
			// 4500: "transform:translate3d(0, 100%, 0); opacity:0;",
			4900: "transform:translate3d(320px, 100%, 0); opacity:0;",
			5000: "transform:translate3d(320px, 0%, 0); opacity:1;",
			5500: "transform:translate3d(320px, 0%, 0); opacity:1;",
			6000: "transform:translate3d(320px, 100%, 0); opacity:0;"
		},
		"thirdGasStations": {
			0: "opacity: 0;",
			4500: "opacity: 0;",
			5000: "opacity: 1;",
			5500: "opacity: 1;",
			6000: "opacity: 0;"
		},
		"thirdRoad": {
			3000: "transform:translate3d(1920px, 0, 0); opacity: 1",
			4500: "transform:translate3d(0px, 0, 0); opacity: 1",
			9800: "transform:translate3d(0px, 0, 0); opacity: 1",
			10000: "transform:translate3d(-1920px, 0, 0); opacity: 1",
			10001: "transform:translate3d(1920px, 0, 0); opacity: 0",
			12800: "transform:translate3d(1920px, 0, 0); opacity: 0",
			13000: "transform:translate3d(0px, 0, 0); opacity: 1",
			14000: "transform:translate3d(0px, 0, 0); opacity: 1",
			14800: "transform:translate3d(0px, 0, 0); opacity: 1",
			15200: "transform:translate3d(-1920px, 0, 0); opacity: 0"
		},
		"thirdHouseWithFlag": {
			// 5500: "transform:translate3d(1920px, 0, 0); opacity:0;",
			6200: "transform:translate3d(1920px, 0, 0); opacity:0;",
			7000: "transform:translate3d(-380px, 0, 0); opacity:1;",
			7700: "transform:translate3d(-380px, 0, 0); opacity:1;",
			// 7900: "transform:translate3d(-1920px, 0, 0); opacity:0;"
			8800: "transform:translate3d(-380px, 0, 0); opacity:1;",
			9100: "transform:translate3d(-1920px, 0, 0); opacity:0;"
		},
		"flagText" :{
			7000: "transform:translate3d(0, 0px, 0);",
			7300: "transform:translate3d(0, -30px, 0);",
			7700: "transform:translate3d(0, -30px, 0); opacity: 1;",
			7900: "transform:translate3d(0, 40px, 0); opacity: 0;"
		},
		"houseText": {
			7000: "opacity: 0;",
			7300: "opacity: 1",
			8000: "opacity: 1",
			8200: "opacity: 0"
		},
		"cloudPart": {
			7900: "transform:translate3d(0, -25px, 0); opacity: 0",
			8100: "transform:translate3d(0, -75px, 0); opacity: 1"
		},
		"bigPeopleMove": {
			8100: "transform:translate3d(0px, 0, 0);",
			8400: "transform:translate3d(35px, 0, 0);"
		},
		"peopleHide": {
			8100: "opacity: 1;",
			8400: "opacity: 0;"
		},
		"peopleText": {
			8100: "opacity: 0;",
			8400: "opacity: 1;",
			9000: "opacity: 1;",
			9200: "opacity: 0;"
		},
		"coText": {
			9100: "opacity: 0;",
			9300: "opacity: 1;",
			10000: "opacity: 1;",
			10100: "opacity: 0;"
		},
		"coCloud": {
			8800: "transform: translate3d(1920px, -97px, 0);",
			9300: "transform: translate3d(-200px, -97px, 0);",
			9800: "transform: translate3d(-200px, -97px, 0);",
			10000: "transform: translate3d(-1920px, -97px, 0);"
		},
		"coCloudFade": {
			9100: "opacity: 0; transform: translate3d(-240px, -97px, 0);",
			9300: "opacity: 1; transform: translate3d(-240px, -97px, 0);",
			9800: "opacity: 1; transform: translate3d(-240px, -97px, 0);",
			10000: "opacity: 0; transform: translate3d(-240px, -97px, 0);"
		},
		"coCloudCars": {
			// 6200: "transform:translate3d(1920px, -97px, 0); opacity:0;",
			// 7000: "transform:translate3d(-240px, -97px, 0); opacity:0;",
			// 7700: "transform:translate3d(-240px, -97px, 0); opacity:0;",
			8800: "transform:translate3d(1920px, -97px, 0); opacity: 0;",
			9300: "transform:translate3d(-240px, -97px, 0); opacity: 1;",
			9800: "transform:translate3d(-240px, -97px, 0); opacity: 1;",
			10000: "transform:translate3d(-1920px, -97px, 0); opacity:0;",
		},
		"coCloudHouse": {
			9300: "opacity: 0; transform: translate3d(-239px, 500px, 0);",
			9500: "opacity: 1; transform: translate3d(-239px, -97px, 0);",
			9800: "opacity: 1; transform: translate3d(-239px, -97px, 0);",
			10000: "opacity: 0; transform: translate3d(-239px, 500px, 0);"
		},
		"fuelText": {
			10500: "opacity: 0; transform: translate3d(-239px, 0, 0);",
			10700: "opacity: 1;",
			11800: "opacity: 1;",
			12000: "opacity: 0;"
		},
		"fuelCloud": {
			10100: "opacity: 0; transform: translate3d(700px, -60px, 0);",
			10500: "opacity: 1;",
			11200: "opacity: 1;",
			11500: "opacity: 0;"
		},
		"fuelCloudElems": {
			10100: "opacity: 0; transform: translate3d(700px, -60px, 0);",
			10500: "opacity: 1;",
			11700: "opacity: 1;",
			11900: "opacity: 0;"
		},
		"moneyCase": {
			10700: "transform: matrix(1, 0, 0, 1, 0, 0); opacity: 1;",
			11000: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 1;",
			11200: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 1;",
			11500: "transform: matrix(2, 0, 0, 2, -230, -348); opacity: 0;"
		},
		"leftDol": {
			10700: "opacity: 1; transform: translate3d(0px, 0px, 0);",
			11000: "opacity: 1; transform: translate3d(140px, 130px, 0);",
			11050: "opacity: 0; transform: translate3d(140px, 130px, 0);"
		},
		"rightDol": {
			10700: "opacity: 1; transform: translate3d(0px, 0px, 0);",
			11000: "opacity: 1; transform: translate3d(-140px, 130px, 0);",
			11050: "opacity: 0; transform: translate3d(-140px, 130px, 0);"
		},
		"eighthHouses": {
			// 11050: "transform:translate3d(0, 100%, 0); opacity: 0;",
			13500: "transform:translate3d(0, 100%, 0); opacity: 0;",
			13800: "transform:translate3d(0, 0%, 0); opacity: 1;",
			14300: "transform:translate3d(0, 0%, 0); opacity: 1;",
			14800: "transform:translate3d(0, 100%, 0); opacity: 0;"
		},
		"constractionMan": {
			12500: "opacity: 0; transform:translate3d(0, 80px, 0);",
			13200: "opacity: 1; transform:translate3d(0, 80px, 0);",
			14000: "opacity: 1; transform:translate3d(0, 80px, 0);",
			14500: "opacity: 0; transform:translate3d(0, 80px, 0);"
		},
		"rightCar": {
			12500: "transform:translate3d(1920px, 0, 0); opacity: 0;",
			13000: "transform:translate3d(0px, 0, 0); opacity: 1;",
			14600: "transform:translate3d(0px, 0, 0); opacity: 1;",
			15000: "transform:translate3d(-1920px, 0, 0); opacity: 0;"
		},
		"cycle": {
			12500: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
			13000: "transform:translate3d(0px, 0, 0); opacity: 1;",
			14600: "transform:translate3d(0px, 0, 0); opacity: 1;",
			15000: "transform:translate3d(1920px, 0, 0); opacity: 1;"
		},
		"manRight": {
			12500: "transform:translate3d(1920px, 0, 0); opacity: 0;",
			13000: "transform:translate3d(0px, 0, 0); opacity: 1;",
			14600: "transform:translate3d(0px, 0, 0); opacity: 1;",
			15000: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
		},
		"manLeft": {
			12500: "transform:translate3d(-1920px, 0, 0); opacity: 0;",
			13000: "transform:translate3d(0px, 0, 0); opacity: 1;",
			14600: "transform:translate3d(0px, 0, 0); opacity: 1;",
			15000: "transform:translate3d(1920px, 0, 0); opacity: 1;"
		},
		"firstRow": {
			15000: "opacity: 0;",
			15500: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"secondRow": {
			15500: "opacity: 0;",
			15600: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"thirdRow": {
			15600: "opacity: 0;",
			15700: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"fourthRow": {
			15700: "opacity: 0;",
			15800: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"fifthRow": {
			15800: "opacity: 0;",
			15900: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"sixRow": {
			15900: "opacity: 0;",
			16000: "opacity: 1",
			16500: "opacity: 1",
			16700: "opacity: 0"
		},
		"menText": {
			15000: "opacity: 0;",
			15300: "opacity: 1"	,
			17200: "opacity: 1",
			17400: "opacity: 0"
		},
		"secondSectionWelcome": {
			17500: "opacity: 0;",
			17600: "opacity: 1"
		},
		"constractionText": {
			12500: "opacity: 0;",
			13200: "opacity: 1;",
			14000: "opacity: 1;",
			14500: "opacity: 0;"
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
			$('.menus a').removeClass('active');
			$(this).addClass('active');
		});

		$('.prevButton').on('click', function(e){
			var curIndex = $('.menus a.active').closest('li').index(),
			elmCount = $('.menus li').length,
			nextElem = $('.menus li').eq((curIndex - 1) % elmCount),
			nextAnchor = nextElem.find('a');

			$(this).attr({
				'href': nextAnchor.attr('href'),
				'data-menu-top': nextAnchor.attr('data-menu-top'),
				'data-anchor-target': nextAnchor.attr('data-anchor-target')
			});

			$('.menus a').removeClass('active');
			nextAnchor.addClass('active');
		});

		$('.nextButton').on('click', function(e){
			var curIndex = $('.menus a.active').closest('li').index(),
			elmCount = $('.menus li').length,
			nextElem = $('.menus li').eq((curIndex + 1) % elmCount),
			nextAnchor = nextElem.find('a');

			$(this).attr({
				'href': nextAnchor.attr('href'),
				'data-menu-top': nextAnchor.attr('data-menu-top'),
				'data-anchor-target': nextAnchor.attr('data-anchor-target')
			});

			$('.menus a').removeClass('active');
			nextAnchor.addClass('active');
		});
	}

	this.init = function (){
		$('.wrap, .c-btns').show();
		setHash(undefined);

		var skrollInit = false,
		count = $('[data-emit-events]').length;

		skrollrItem = skrollr.init({
			keyframe: function(element, name, direction) {
				if(!skrollInit && count !== 0){
					skrollInit = !skrollInit;
					count--;
					skrollInit = count !== 0 ? false : true;
				}else {
					$el = $(element);
					if(($el.attr('id') === undefined) || ($el.attr('id') === '')){
						id = $el.closest('.slide-wrap').attr('id');
					}else {
						id = $el.attr('id')
					}
					$('.menus a').removeClass('active');
					$('.menus a[href=#'+id+']').addClass('active');
				}
			}
		});

		skrollr.menu.init(skrollrItem, {
			change: function(hash, top) {
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
	}

	addBreakPoints();
	addMenuButtonsHandlers();

	$(window).resize(function(){
		var $windowH = $(window).height();
		var $windowHOffset = -(($windowH/2)-130);

		$(".svg-correct").css({"transform":"translate(0,"+$windowHOffset+"px)"});
		$('.slide-wrap').height($windowH);
	}).resize();
}

function SecondSection(){
	var $container = $('.second-section');
	var BV;

	this.init = function(hash){
		$container.addClass('visible');
		setHash(hash);
	}

	this.destroy = function(){

		$container.children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');

		$('.i-popup__close,.second-section-start,.first-section-start,.play-section-video').off('click');
	}

	function updateSize(container, elem, mediaAspect) {
		var containerW = container.outerWidth() < $(window).width() ? container.outerWidth() : $(window).width(),
			containerH = container.outerHeight() < $(window).height() ? container.outerHeight() : $(window).height(),
			// containerH = container.outerHeight() < $(window).height() ? $(window).height() : container.outerHeight(),
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
				.css('height','auto');
		}
	}

	function changeBg(container, src){
		var $img = $('<img>');

		$img.on('load', function(){
			container.css('background-image', 'url('+src+')');
		}).attr('src', src);
	}

	function changeImgSrc(src, img){
		// console.log(src);
		img.src = src;
		// console.log(img);
	}

	$container.children('.second-section__choices').find('.button-list__drop__item .btn').on('mouseenter', function(){
		changeBg($container, $(this).attr('data-bgImg-src'));
	});

	$('.button-list__main').on('click', function(){
		console.log("S");
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
		$this.closest('.second-section__choices').find('.i-popup[id="'+popupId+'"]').addClass('visible');
	});

	$('.i-popup__close').on('click', function(){
		$(this).closest('.i-popup').removeClass('visible');
	});

	$('.second-section-start').on('click', function(e){
		e.preventDefault();
		$('.second-section__item').removeClass('visible');
		$('.second-section__choices').fadeIn();
		$('.second-section__item__image-list').children().remove();
		BV.dispose();
	});

	$('.first-section-start').on('click', function(e){
		e.preventDefault();
		$('.second-section').removeClass('visible');
		$('.second-section__item').removeClass('visible');
		$('.second-section__choices').fadeIn();
		$('.second-section__item__image-list').children().remove();
		if(BV){
			BV.dispose();
		}
		loadSection("");
		$container.children('.second-section__choices').find('.button-list__drop__item .btn').off('mouseenter mouseleave click');
		$('.i-popup__close, .second-section-start, .first-section-start, .play-section-video, .button-list__main').off('click');
	});

	$('.play-section-video').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var sectionId = $this.attr('href').slice(1);
		var bgImgLink = sectionItemBgList[sectionId][0];
		var $sectionItem = $('.second-section__item[data-section-item-id="'+sectionId+'"] .second-section__item_i');
		BV = new $.BigVideo({useFlashForFirefox:false});
		
		$('.second-section__choices').fadeOut();
		$('#big-video-wrap').removeClass('hidden');
		
		BV.init();
		BV.show(
			videoList[sectionId]
		);
		BV.getPlayer().on('ended' , function(){
			var $img;

			for(var i = 0; i < sectionItemBgList[sectionId].length; i++){
				$img = $('<img>');

				if(i === 0){
					$img.on('load', function(){
						$sectionItem.closest('.second-section__item').addClass('visible');
						$('#big-video-wrap').addClass('hidden');
						updateSize($sectionItem.closest('.second-section__item'), $sectionItem, 16/9);
						addEvents($img, $sectionItem.children('.second-section__item__image-list'));
					});
				}
				$img.attr({'src': sectionItemBgList[sectionId][i], 'eq': [i]})
					.addClass('second-section__item__image')
					.appendTo($sectionItem.children('.second-section__item__image-list'));
			}

			function addEvents($el, $container){
				if (!$el.data('c-event') === true){
					$el.data('c-event', true);

					$el.closest('.second-section__item').find('.button-list__drop__item .btn').on('mouseenter', function(){
						var $sectionN = $(this).attr('href').slice(1);
						$container.find('.second-section__item__image[eq="'+$sectionN+'"]').addClass('active');

					}).closest('.second-section__item').find('.button-list__drop__item .btn').on('mouseleave', function(){
						$container.find('.second-section__item__image').removeClass('active');
					}).closest('.second-section__item').find('.button-list__drop__item .btn').on('click', function(e){
						e.preventDefault();
						var $this = $(this);
						var $sectionN = $this.attr('href').slice(1);

						$this.closest('.button-list').removeClass('open');
						
						$container.find('.second-section__item__image').removeClass('show-titles');
						$container.find('.second-section__item__image[eq="'+$sectionN+'"]').addClass('show-titles');

						$('.second-section__item__titles-list__item#'+$this.attr('data-section-name')+'').addClass('active');
					})
				}
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

function loadSection(location){
	var hash = location;
	var firstSection;
	var secondSection;

	if(hash === 'secondSection'){
		secondSection = new SecondSection();
		secondSection.init(hash);
	}else {
		firstSection = new FirstSection();
		firstSection.init();
	}

	// help handlers
	$('.btnSecondSection').off("click").on('click', function(e){
		e.preventDefault();
		firstSection.destroy();

		secondSection = new SecondSection();
		secondSection.init($(this).attr('href'));
	});
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

jQuery(window).load(function(){
	loadSection(getHash());

	setTimeout(function(){
		$('body').addClass('content-loaded');
	}, 1500);
});























