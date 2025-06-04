document.addEventListener("DOMContentLoaded", function () {
  // Подменю
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

  if (burgerBtn && mobileMenu && menuClose) {
    burgerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      mobileMenu.classList.add("open");
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });

    document.addEventListener("click", (e) => {
      if (
        mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !burgerBtn.contains(e.target)
      ) {
        mobileMenu.classList.remove("open");
      }
    });
  }
});
