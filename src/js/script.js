let wrapper = document.querySelector('.wrapper');
let header = document.querySelector('.header');
let page = document.querySelector('.page');
let body = document.querySelector('body');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let forms = document.getElementsByTagName('form');
let loading = document.querySelector('.loading');
// ----------------------------------------------------------------------

let headerHeight;
function spaceForHeader() {
	headerHeight = header.offsetHeight;
	page.style.paddingTop = headerHeight + 'px';
}	
function spaceForMobileMenu() {
	if (wrapper.offsetWidth < 1220) {
		menu.style.paddingTop = headerHeight + 'px';
		menu.firstElementChild.classList.add('_container');
	}
	else {
		menu.style.paddingTop = '0px';
		menu.firstElementChild.classList.remove('_container');
	}

}

// ----------------------------------------------------------------------

@@include('functions/sendmail.js');
@@include('functions/isMobile.js');
@@include('functions/webp.js');
@@include('elements/burger.js');
@@include('elements/tabs.js');
@@include('elements/popups.js');
@@include('elements/sliders.js');
@@include('elements/gallery.js');
@@include('elements/scroll.js');
@@include('elements/spollers.js');

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

window.onresize = () => {
	spaceForHeader();
	spaceForMobileMenu();
  addTouchClassForMobile();
  closeBurger();
}

window.onload = () => {	
	spaceForHeader();
	spaceForMobileMenu();
}

// ----------------------------------------------------------------------
