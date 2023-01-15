
const swiper = new Swiper('.swiper', {

	slidesPerView: 1,
	slidesPerGroup: 1,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }

});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn){
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    tabsItem.forEach(function (element) {
      element.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__item');
let links = menu.querySelectorAll('.header__items');
let index1 = document.querySelector('.swiper');
let index2 = document.querySelector('.product');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger-active');
  menu.classList.toggle('header__item-active');
  document.body.classList.toggle('stop-scroll');
  index1.classList.toggle('swiper-index');
  index2.classList.toggle('swiper-index');
});

links.forEach(function(element) {
  element.addEventListener('click', function() {
    burger.classList.remove('burger-active');
    menu.classList.remove('header__item-active');
    document.body.classList.remove('stop-scroll');
  })
});

let search = document.querySelector('.header__search');
let searching = document.querySelector('.header__search_input');

search.addEventListener('click', function() {
  searching.classList.toggle('header__search_input-active');
});
