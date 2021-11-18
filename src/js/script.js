let wrapper = document.querySelector('.wrapper');
let header = document.querySelector('.header');
let page = document.querySelector('.page');
let body = document.querySelector('body');
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let loading = document.querySelector('.loading');
let forms = document.getElementsByTagName('form');
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

let icon = document.querySelector('a._icon-search');
let search = document.querySelector('.header__search');

document.addEventListener('click', (e) => {
	if(e.target === icon) {
		search.classList.add('_active');
		if(wrapper.offsetWidth>1219){
			_slideSide(search);
			_slideSideBack(icon);
		} else {
			_slideDown(search);
		}
	} 
	
	else if(!e.target.closest('.search__body') && search.classList.contains('_active')) {
		if(wrapper.offsetWidth>1219){
			_slideSideBack(search);
			_slideSide(icon);
		} else {
			_slideUp(search);
		}
		setTimeout(() => {			
			search.classList.remove('_active');
		}, 500);
	}
});

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
