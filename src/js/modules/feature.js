import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function feature() {
  // <-----------Arow Swiper----------->

  const pagBtn = document.querySelectorAll('.controls__pagination-btn')

  pagBtn.forEach(button => {
    button.addEventListener('click', () => {
        pagBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

  //<-------------Swiper--------------->
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 400,

    // breakpoints: {
    //   578: {
    //     slidesPerView: 2,
    //     spaceBetween: 22,
    //   },
    //   600: {
    //     slidesPerView: 3,
    //     spaceBetween: 22,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 22,
    //   },
    //   1230: {
    //     slidesPerView: 3,
    //     spaceBetween: 32,
    //   },
    //   1440: {
    //     slidesPerView: 3,
    //     spaceBetween: 42,
    //   },
    // },
  
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


