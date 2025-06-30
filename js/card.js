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
  const modalLogo5 = document.getElementById('modal-logo5');
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
        address: "г. Москва, м. Автозаводская, Ул. Ленинская Слобода д.26, БЦ Омега, клуб единоборств 'Берн'",
        leader: "Мещерякова Анастасия",
        logo: "assets/img/contacts/emty/москва/1.svg",
        logo5: "assets/img/contacts/emty/москва/5.png",
        groupUrl: "https://vk.com/hmbschoolmoscow",
        openUrl: "https://vk.com/id180668770"
      },
      {
        title: "Школа в Москве 2",
        address: "г. Москва, м. Нагатинская, ул. Нагатинская, 16",
        leader: "Уколов Сергей",
        logo: "assets/img/contacts/emty/москва/2.svg",
        logo5: "assets/img/contacts/emty/москва/55.png",
        groupUrl: "https://vk.com/bayard_fencing_hall",
        openUrl: "https://vk.com/ukolovsv"
      }
    ],
    "Краснодар": [
      {
      title:"Краснодар",
      address:"г. Краснодар, ул. Тюляева 4/1",
      leader:"Басов Захар",
      logo:"assets/img/contacts/emty/краснодар/1.svg",
      logo5:"assets/img/contacts/emty/краснодар/5.png",
      groupUrl:"https://vk.com/hmbschoolkrd",
      openUrl:"https://vk.com/id209706471"
      },
      {
      title:"Ейск",
      address:"г. Ейск, ул. Коммунистическая, 83/4",
      leader:"Иванов Юрий",
      logo:"assets/img/contacts/emty/ейск/1.svg",
      logo5:"assets/img/contacts/emty/5.png",
      groupUrl:"https://vk.com/istfexyisk",
      openUrl:"https://vk.com/volhve"
      },
      {
      title:"Ленинградская",
      address:"ст. Ленинградская, ул. 417-й дивизии, 40",
      leader:"Трояков Евгений",
      logo:"assets/img/contacts/emty/ленинградская/1.svg",
      logo5:"assets/img/contacts/emty/5.png",
      groupUrl:"https://vk.com/club_plumbeum?from=search",
      openUrl:"https://vk.com/id675540526"
      },
      {
        title: "Геленджик",
        address: "г. Геленджик, ул. Мичурина, 14",
        leader: "Степанов Кирилл",
        logo: "assets/img/contacts/emty/геленджик/1.svg",
        logo5: "assets/img/contacts/emty/5.png",
        groupUrl: "https://vk.com/hmbschoolglk",
        openUrl: "https://vk.com/hmbstepanov"
      }
    ],

    "Красноярск": [
      {
        title: "Красноярск",
        address: "г. Красноярск, Новая Заря, 2В",
        leader: "Михайлов Антон",
        logo: "assets/img/contacts/emty/красноярск/1.svg",
        logo5: "assets/img/contacts/emty/красноярск/5.png",
        groupUrl: "https://vk.com/hmbschoolkrsk",
        openUrl: "https://vk.com/ant_mih"
      },
      {
        title: "Зеленогорск",
        address: "г. Зеленогорск, ул. Гагарина 18, МБУ 'Молодежный центр'",
        leader: "Неудачин Павел",
        logo: "assets/img/contacts/emty/зеленогорск/1.svg",
        logo5: "assets/img/contacts/emty/зеленогорск/5.png",
        groupUrl: "https://vk.com/hmbschoolzlk",
        openUrl: "https://vk.com/silarent"
      }
    ],

    "Казань": [
      {
        title: "Казань",
        address: "г. Казань, Ямашева пр. 115А, АК Барс Арена",
        leader: "Куртымов Артем",
        logo: "assets/img/contacts/emty/казань/1.svg",
        logo5: "assets/img/contacts/emty/казань/5.png",
        groupUrl: "https://vk.com/hmbschoolkazan",
        openUrl: "https://vk.com/kurtymov"
      },
      {
        title: "Зеленодольск",
        address: "г. Зеленодольск, ул. Малая Красная, 5",
        leader: "Мухаметгалиева Анжелика",
        logo: "assets/img/contacts/emty/зеленодольск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",
        groupUrl: "https://vk.com/hmb_tatarstan?from=search",
        openUrl: "https://vk.com/lika130406"
      }
    ],

    "Санкт-Петербург": [
      {
        title: "Высшая Школа Санкт-Петербург",
        address: "г. Санкт-Петербург, Кадетская лин. ВО, 5 корп. 2Д,, 'Вавилов лофт', зеленая лестница",
        leader: "Симонова Светлана",
        logo: "assets/img/contacts/emty/санкт-петербург/1.svg",
        logo5: "assets/img/contacts/emty/санкт-петербург/5.png",
        groupUrl: "https://vk.com/hmbschoolspb",
        openUrl: "https://vk.com/sim.lana"
      },
      {
        title: "Санкт-Петербург | Пересвет",
        address: "г. Санкт-Петербург, ул. Курская 28/32",
        leader: "Малюгин Илья",
        logo: "assets/img/contacts/emty/санкт-петербург/2.svg",
        logo5: "assets/img/contacts/emty/5.png",
        groupUrl: "https://vk.com/schoolperesvet?from=search",
        openUrl: "https://vk.com/malug"
      }
    ],

    "Новосибирск": [
      {
        title: "Новосибирск",
        address: "г. Новосибирск, Блюхера, 39",
        leader: "Бернгардт Константин",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/новосибирск/5.png",
        groupUrl: "https://vk.com/hmbschoolnsknovosibirsk",
        openUrl: "https://vk.com/elennor1984"
      },
      {
        title: "Новосибирск",
        address: "г. Новосибирск, ул. Крылова, 26",
        leader: "Строилов Алексей",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",
        groupUrl: "https://vk.com/hmb54?from=search",
        openUrl: "https://vk.com/ewdfsfwer"
      },
      {
        title: "Новосибирск | Стальной поток",
        address: "г. Новосибирск, Некрасова, 82, историко-культурный центр ГГПЦ 'Твоя история'",
        leader: "Васильев Сергей",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",
        groupUrl: "https://vk.com/spnso54?from=search",
        openUrl: "https://vk.com/id53376743"
      }
    ],

    "Архангельск": [
      {
        title: "Школа в Архангельске 1",
        address: "г. Архангельск, пр-т Обводный канал, 9к3",
        leader: "Верещагин Иван",
        logo:"assets/img/contacts/emty/архангельск/1.jpg",
        logo5:"assets/img/contacts/emty/архангельск/5.png",

        groupUrl: "https://vk.com/hmbarh",
        openUrl: "https://vk.com/ivereschagin2004"
      },
      {
        title: "Школа в Архангельске 2",
        address: "г. Архангельск, Гайдара, д.55, 3 этаж (ТЦ &quot;Мебельная империя&quot;",
        leader: "Яргина Оксана",
        logo: "assets/img/contacts/emty/архангельск/1.jpg",
        logo5: "assets/img/contacts/emty/архангельск/55.png",
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
              <img src="${school.logo5}" alt="${school.title}" style="max-width: 60px;">
              <img src="${school.logo}" alt="${school.title}" style="max-width: 120px;">
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
        modalLogo5.src = btn.dataset.logo5;
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


  