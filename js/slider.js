// window.onload = function() {
//     const swiper = new Swiper('.swiper-container', {
//         slidesPerView: 'auto',
//         spaceBetween: 10,
//         centeredSlides: true,
//         loop: false,
//         grabCursor: true,
//         slideToClickedSlide: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         initialSlide: 0, /* Устанавливаем первый слайд как активный */
//     });
// };



//   const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 3000,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     slidesPerView: 2.5, // можно поставить 2, 3 и т.д.
//     spaceBetween: 20, // отступ между слайдами
//     centeredSlides: true,
//   });



//   document.querySelectorAll('.has-submenu > button').forEach(btn => {
//   btn.addEventListener('click', () => {
//     const dropdown = btn.nextElementSibling;
//     const isOpen = btn.getAttribute('aria-expanded') === 'true';

//     btn.setAttribute('aria-expanded', String(!isOpen));
//     dropdown.hidden = isOpen;
//   });
// });

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  spaceBetween: 20,

  // начальное значение
  slidesPerView: 1.2,

  // адаптивные значения
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    
  }
});
