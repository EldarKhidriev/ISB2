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
        address: "г. Москва, Автозаводская, Ул. Ленинская Слобода д.26",
        leader: "Мещерякова Анастасия",
        logo: "assets/img/contacts/adress/stav.png",
        groupUrl: "https://vk.com/hmbschoolmoscow",
        openUrl: "https://vk.com/id180668770"
      },
      {
        title: "Школа в Москве 2",
        address: "г. Москва, ул. Электрозаводская, дом 21, проходная 3 (Мраморная)",
        leader: "Уколов Сергей",
        logo: "assets/img/contacts/adress/stav.png",
        groupUrl: "https://vk.com/bayard_fencing_hall",
        openUrl: "https://vk.com/ukolovsv"
      }
    ],
    "Архангельск": [
      {
        title: "Школа в Архангельске 1",
        address: "г. Архангельск, пр. Троицкий, 94",
        leader: "Рыкалов Роман",
        logo:"assets/img/contacts/adress/stav.png",

        groupUrl: "https://vk.com/hmbarh",
        openUrl: "https://vk.com/rykalovroman"
      },
      {
        title: "Школа в Архангельске 2",
        address: "г. Архангельск, Гайдара, д.55, 3 этаж (ТЦ &quot;Мебельная империя&quot;",
        leader: "Яргина Оксана",
        logo: "assets/img/contacts/adress/stav.png",
        groupUrl: "https://vk.com/hmbschoolnorthenwolf",
        openUrl: "https://vk.com/barsyaksyu"
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


  