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
address: "Moscow, metro Avtozavodskaya, Leninskaya Sloboda St., bld. 26, Omega Business Center, martial arts club 'Bern'",
        leader: "Meshcheryakova Anastasia",
        logo: "assets/img/contacts/emty/москва/1.svg",
        logo5: "assets/img/contacts/emty/москва/5.png",

        groupUrl: "https://vk.com/hmbschoolmoscow",
        openUrl: "https://vk.com/id180668770"
      },
      {
        title: "Школа в Москве 2",
address: "Moscow, metro Nagatinskaya, Nagatinskaya St., 16",
        leader: "Ukolov Sergey",
        logo: "assets/img/contacts/emty/москва/2.svg",
        logo5: "assets/img/contacts/emty/москва/55.png",

        groupUrl: "https://vk.com/bayard_fencing_hall",
        openUrl: "https://vk.com/ukolovsv"
      }
    ],
    "Краснодар": [
      {
      title:"Краснодар",
address: "Krasnodar, Tyulyaeva St., 4/1",
      leader:"Basov Zakhar",
      logo:"assets/img/contacts/emty/краснодар/1.svg",
      logo5:"assets/img/contacts/emty/краснодар/5.png",

      groupUrl:"https://vk.com/hmbschoolkrd",
      openUrl:"https://vk.com/id209706471"
      },
      {
      title:"Ейск",
address: "Yeysk, Kommunisticheskaya St., 83/4",
      leader:"Ivanov Yuri",
      logo:"assets/img/contacts/emty/ейск/1.svg",
      logo5:"assets/img/contacts/emty/5.png",

      groupUrl:"https://vk.com/istfexyisk",
      openUrl:"https://vk.com/volhve"
      },
      {
      title:"Ленинградская",
address: "Leningradskaya stanitsa, 417th Division St., 40",
      leader:"Troyakov Evgeny",
      logo:"assets/img/contacts/emty/ленинградская/1.svg",
      logo5:"assets/img/contacts/emty/5.png",

      
      groupUrl:"https://vk.com/club_plumbeum?from=search",
      openUrl:"https://vk.com/id675540526"
      },
      {
        title: "Геленджик",
address: "Gelendzhik, Michurina St., 14",
        leader: "Stepanov Kirill",
        logo: "assets/img/contacts/emty/геленджик/1.svg",
        logo5: "assets/img/contacts/emty/5.png",

        groupUrl: "https://vk.com/hmbschoolglk",
        openUrl: "https://vk.com/hmbstepanov"
      }
    ],

    "Красноярск": [
      {
        title: "Красноярск",
address: "Krasnoyarsk, Novaya Zarya, 2V",
        leader: "Mikhailov Anton",
        logo: "assets/img/contacts/emty/красноярск/1.svg",
        logo5: "assets/img/contacts/emty/красноярск/5.png",

        groupUrl: "https://vk.com/hmbschoolkrsk",
        openUrl: "https://vk.com/ant_mih"
      },
      {
        title: "Зеленогорск",
address: "Zelenogorsk, Gagarina St., 18, Municipal Budgetary Institution 'Youth Center'",
        leader: "Neudachin Pavel",
        logo: "assets/img/contacts/emty/зеленогорск/1.svg",
        logo5: "assets/img/contacts/emty/зеленогорск/5.png",

        groupUrl: "https://vk.com/hmbschoolzlk",
        openUrl: "https://vk.com/silarent"
      }
    ],

    "Казань": [
      {
        title: "Казань",
address: "Kazan, Yamashева Ave., 115A, Ak Bars Arena",
        leader: "Kurtymov Artem",
        logo: "assets/img/contacts/emty/казань/1.svg",
        logo5: "assets/img/contacts/emty/казань/5.png",

        groupUrl: "https://vk.com/hmbschoolkazan",
        openUrl: "https://vk.com/kurtymov"
      },
      {
        title: "Зеленодольск",
address: "Zelenodolsk, Malaya Krasnaya St., 5",
        leader: "Mukhametgalieva Anzhelika",
        logo: "assets/img/contacts/emty/зеленогорск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",

        groupUrl: "https://vk.com/hmb_tatarstan?from=search",
        openUrl: "https://vk.com/lika130406"
      }
    ],

    "Санкт-Петербург": [
      {
        title: "Высшая Школа Санкт-Петербург",
address: "Saint Petersburg, Kadetskaya liniya VO, 5 bldg. 2D, 'Vavilov Loft', green staircase",
        leader: "Simonova Svetlana",
        logo5: "assets/img/contacts/emty/санкт-петербург/5.png",
        logo: "assets/img/contacts/emty/санкт-петербург/1.svg",
        groupUrl: "https://vk.com/hmbschoolspb",
        openUrl: "https://vk.com/sim.lana"
      },
      {
        title: "Санкт-Петербург | Пересвет",
address: "Saint Petersburg, Kurskaya St., 28/32",
        leader: "Malyugin Ilya",
        logo5: "assets/img/contacts/emty/5.png",
        logo: "assets/img/contacts/emty/санкт-петербург/2.svg",
        groupUrl: "https://vk.com/schoolperesvet?from=search",
        openUrl: "https://vk.com/malug"
      }
    ],

    "Новосибирск": [
      {
        title: "Новосибирск",
address: "Novosibirsk, Blyukhera St., 39",
        leader: "Bernhardt Konstantin",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/новосибирск/5.png",

        groupUrl: "https://vk.com/hmbschoolnsknovosibirsk",
        openUrl: "https://vk.com/elennor1984"
      },
      {
        title: "Новосибирск",
address: "Novosibirsk, Krylovа St., 26",
        leader: "Stroilov Alexey",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",

        groupUrl: "https://vk.com/hmb54?from=search",
        openUrl: "https://vk.com/ewdfsfwer"
      },
      {
        title: "Новосибирск | Стальной поток",
address: "Novosibirsk, Nekrasova St., 82, historical and cultural center GGPC 'Your History'",
        leader: "Vasiliev Sergey",
        logo: "assets/img/contacts/emty/новосибирск/1.svg",
        logo5: "assets/img/contacts/emty/5.png",

        groupUrl: "https://vk.com/spnso54?from=search",
        openUrl: "https://vk.com/id53376743"
      }
    ],

    "Архангельск": [
      {
        title: "Школа в Архангельске 1",
address: "Arkhangelsk, Obvodny Kanal Ave., 9 bldg. 3",
        leader: "Vereshchagin Ivan",
        logo:"assets/img/contacts/emty/архангельск/1.jpg",
        logo5:"assets/img/contacts/emty/архангельск/5.png",


        groupUrl: "https://vk.com/hmbarh",
        openUrl: "https://vk.com/ivereschagin2004"
      },
      {
        title: "Школа в Архангельске 2",
address: "Arkhangelsk, Gaydara St., bld. 55, 3rd floor (Shopping Center \"Furniture Empire\"",
        leader: "Yargina Oksana",
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
                  <p><strong>Address:</strong><br> ${school.address}</p>
                  <a class="btn" href="${school.groupUrl}" target="_blank">Community</a>
                  <p><strong>Leader:</strong><br> ${school.leader}</p>
                  <a class="btn" href="${school.openUrl}" target="_blank">Open</a>
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


  