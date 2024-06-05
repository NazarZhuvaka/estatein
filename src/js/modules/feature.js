import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function feature() {
  // <-----------Arow Swiper----------->
  const pagBtn = document.querySelectorAll('.controls__pagination-btn')
  for (let btn of pagBtn) {
    btn.addEventListener("click", function () {
      // btn.classList.add('active')
    });
  }
  //<-------------Swiper--------------->
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 200,
  
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               ' of ' +
               '<span class="' + totalClass + '"></span>';
      },
    },

  
    navigation: {
      nextEl: '.swiper-arrow-next',
      prevEl: '.swiper-arrow-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

export default feature;


