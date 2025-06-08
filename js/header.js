document.addEventListener("DOMContentLoaded", function () {
  // Подменю (десктоп)
  const submenuButtons = document.querySelectorAll(".has-submenu > button");

  submenuButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const dropdown = btn.nextElementSibling;
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      // Закрыть все подменю
      submenuButtons.forEach((otherBtn) => {
        otherBtn.setAttribute("aria-expanded", "false");
        const otherDropdown = otherBtn.nextElementSibling;
        if (otherDropdown) otherDropdown.hidden = true;
      });

      // Открыть текущее
      btn.setAttribute("aria-expanded", String(!isOpen));
      dropdown.hidden = isOpen;
    });
  });

  // Мобильное меню
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuClose = document.getElementById("menuClose");

  const detailsElements = document.querySelectorAll('.mobile-menu__list details');
  const langBtnMobile = document.getElementById('lang-button-mobile');
  const langDropdownMobile = document.getElementById('lang-dropdown-mobile');

  // Функция закрытия всех <details>
  function closeAllDetails(except = null) {
    detailsElements.forEach((detail) => {
      if (detail !== except) {
        detail.open = false;
      }
    });
  }

  // Функция закрытия языка
  function closeLangDropdownMobile() {
    langDropdownMobile?.classList.remove('open');
  }

  if (burgerBtn && mobileMenu && menuClose) {
    burgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.add("open");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      closeLangDropdownMobile();
      closeAllDetails();
    });

    document.addEventListener("click", (e) => {
      if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !burgerBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove("open");
        closeLangDropdownMobile();
        closeAllDetails();
      }
    });
  }

  // Обработка <details> в мобильном меню
  detailsElements.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        closeAllDetails(details);
        closeLangDropdownMobile();
      }
    });
  });

  // Обработка языка
  if (langBtnMobile && langDropdownMobile) {
    langBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllDetails();
      langDropdownMobile.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (
        langDropdownMobile.classList.contains("open") &&
        !langDropdownMobile.contains(e.target) &&
        !langBtnMobile.contains(e.target)
      ) {
        langDropdownMobile.classList.remove("open");
      }
    });
  }
}); // ← здесь закрываем весь DOMContentLoaded
