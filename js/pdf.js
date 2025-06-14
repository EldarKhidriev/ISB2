const openButtons = document.querySelectorAll('.btn-open-pdf');
  const downloadButtons = document.querySelectorAll('.btn-download-pdf');

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfUrl = btn.getAttribute('data-pdf');
      if (pdfUrl) {
        window.open(pdfUrl, '_blank');
      }
    });
  });

  downloadButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfUrl = btn.getAttribute('data-pdf');
      if (pdfUrl) {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '';  // Имя файла можно указать, например: 'link.download = "belts.pdf"'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });