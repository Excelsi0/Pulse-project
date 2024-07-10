const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
});
  
document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
  slider.goTo('next');
};

(function($) {
$(function() {
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
    
  function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.card').eq(i).toggleClass('card_active');
            })
        });
    };

    toggleSlide('.card__link');
    toggleSlide('.card__link_back');
// });
});
})(jQuery);