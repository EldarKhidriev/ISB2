function updateTime() {
    const nowUTC = new Date();

    const utcString = nowUTC.toISOString().slice(0, 19).replace("T", " ");
    document.getElementById("utc-time").textContent = utcString.replace(/-/g, ".");

    // МСК = UTC + 3 часа
    const nowMSK = new Date(nowUTC.getTime() + 3 * 60 * 60 * 1000);
    const mskString = nowMSK.toISOString().slice(0, 19).replace("T", " ");
    document.getElementById("msk-time").textContent = mskString.replace(/-/g, ".");
  }

  updateTime();
  setInterval(updateTime, 1000);


  document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById('lang-button-mobile');
    const langMarker = langButton.querySelector('.lang-marker');

    langButton.addEventListener('click', () => {
      langMarker.classList.toggle('rotate');
    });
  });
