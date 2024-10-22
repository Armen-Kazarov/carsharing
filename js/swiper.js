const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    clickable: true,
  },
});