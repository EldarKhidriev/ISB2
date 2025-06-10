  // Установка задержки для появления точек
  document.querySelectorAll('.location__r-point').forEach((btn) => {
    const leftPercent = parseFloat(btn.style.left);
    const delay = (leftPercent / 100) * 2;
    btn.style.animationDelay = `${delay}s`;
  });

  const modal = document.getElementById('modal');
  const modalSingle = document.getElementById('modal-single');
  const modalMulti = document.getElementById('modal-multi');
  const modalClose = document.getElementById('modal-close');
  const swiperWrapper = document.getElementById('swiper-wrapper');

  const modalLogo = document.getElementById('modal-logo');
  const modalTitle = document.getElementById('modal-title');
  const modalAddress = document.getElementById('modal-address');
  const modalLeader = document.getElementById('modal-leader');
  const modalGroup = document.getElementById('modal-group');
  const modalOpen = document.getElementById('modal-open');

  // Группировка школ по городам
  const multiSchoolData = {
    "Москва": [
      {
        title: "Школа в Москве 1",
        address: "Омск, улица 1",
        leader: "Руководитель 1",
        logo: "../assets/img/contacts/adress/moscov.png",
        groupUrl: "https://vk.com/group_omsk1",
        openUrl: "https://vk.com/open_omsk1"
      },
      {
        title: "Школа в Москве 2",
        address: "Омск, улица 2",
        leader: "Руководитель 2",
        logo: "../assets/img/contacts/adress/moscov.png",
        groupUrl: "https://vk.com/group_omsk2",
        openUrl: "https://vk.com/open_omsk2"
      }
    ],
    "Архангельск": [
      {
        title: "Школа в Архангельске 1",
        address: "Зеленогорск, улица А",
        leader: "Руководитель А",
        logo:"../assets/img/contacts/adress/moscov.png",

        groupUrl: "https://vk.com/group_z1",
        openUrl: "https://vk.com/open_z1"
      },
      {
        title: "Школа в Архангельске 2",
        address: "Зеленогорск, улица Б",
        leader: "Руководитель Б",
        logo: "../assets/img/contacts/adress/moscov.png",
        groupUrl: "https://vk.com/group_z2",
        openUrl: "https://vk.com/open_z2"
      }
    ]
  };

  // Обработчик клика на точку
  document.querySelectorAll('.location__r-point').forEach((btn) => {
    btn.addEventListener('click', () => {
      const city = btn.dataset.title;

      // Несколько школ
      if (multiSchoolData[city]) {
        modalSingle.style.display = 'none';
        modalMulti.style.display = 'block';
        swiperWrapper.innerHTML = ''; // Очистить старые слайды

        multiSchoolData[city].forEach((school) => {
          const slide = document.createElement('div');
          slide.className = 'swiper-slide';
          slide.innerHTML = `
            <div class="card">
              <img src="${school.logo}" alt="${school.title}" style="max-width: 100px;">
              <h2>${school.title}</h2>
              <p><strong>Адрес:</strong> ${school.address}</p>
              <a class="btn" href="${school.groupUrl}" target="_blank">Сообщество</a>
              <p><strong>Руководитель:</strong> ${school.leader}</p>
              <a class="btn" href="${school.openUrl}" target="_blank">Открыть</a>
            </div>
          `;
          swiperWrapper.appendChild(slide);
        });

        // Инициализировать Swiper
        if (window.modalSwiper) {
          window.modalSwiper.update();
        } else {
          window.modalSwiper = new Swiper('.swiper', {
            loop: false,
            // autoplay: { delay: 3000 },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            spaceBetween: 20,
            slidesPerView: 1.2,
            breakpoints: {
              768: { slidesPerView: 1.2 }
            }
          });
        }
      } else {
        // Одна школа
        modalSingle.style.display = 'flex';
        modalMulti.style.display = 'none';

        modalLogo.src = btn.dataset.logo;
        modalTitle.textContent = city;
        modalAddress.textContent = btn.dataset.address;
        modalLeader.textContent = btn.dataset.leader;
        modalGroup.href = btn.dataset.groupUrl;
        modalOpen.href = btn.dataset.openUrl;
      }

      modal.style.display = 'flex';
    });
  });

  // Закрытие модального окна
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });


  