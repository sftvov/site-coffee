@@include('libs/swiper.min.js');

let slider_about = new Swiper('.banner__swiper', {
	/*
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	effect: 'fade',
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	// autoHeight: true,
	speed: 800,
	touchRatio: 1,
	//simulateTouch: false,
	grabCursor: true,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.next-round',
	// 	prevEl: '.prev-round',
	// },
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});



let slider_category = new Swiper('.categories__container', {	
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	touchRatio: 3,
	breakpoints: {
		1220: {
			slidesPerView: 4,
			simulateTouch: false,
		},
	},
});



