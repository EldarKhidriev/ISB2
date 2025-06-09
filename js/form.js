  const openBtn = document.getElementById('openSchoolModalBtn');
  const closeBtn = document.getElementById('closeSchoolModalBtn');
  const modalSchool = document.getElementById('modalSchool');
  const form = document.getElementById('schoolForm');

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalSchool.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modalSchool.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modalSchool) {
      modalSchool.style.display = 'none';
    }
  });

  const phoneMask = IMask(document.getElementById('phoneInput'), {
    mask: '+{7}(000)000-00-00'
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      alert('Форма успешно отправлена!');
      form.reset();
      modalSchool.style.display = 'none';
    } else {
      alert('Пожалуйста, заполните все поля корректно.');
    }
  });