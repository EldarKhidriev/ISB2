const langButton = document.getElementById('lang-button');
  const dropdown = document.getElementById('lang-dropdown');
  const currentLang = document.getElementById('current-lang');
  const wrapper = document.querySelector('.language-selector');

  langButton.addEventListener('click', (e) => {
    e.stopPropagation();
    wrapper.classList.toggle('open');
  });

  dropdown.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const selectedLang = e.target.dataset.lang;
      currentLang.textContent = e.target.textContent;
      wrapper.classList.remove('open');

      // Здесь можно добавить переключение языка сайта, если нужно.
      console.log('Выбран язык:', selectedLang);
    }
  });

  document.addEventListener('click', () => {
    wrapper.classList.remove('open');
  });