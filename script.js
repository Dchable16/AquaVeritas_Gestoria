// Funcionalidad para abrir/colapsar preguntas frecuentes
const faqs = document.querySelectorAll('details');

faqs.forEach(faq => {
  faq.addEventListener('toggle', () => {
    faqs.forEach(other => {
      if (other !== faq) {
        other.removeAttribute('open');
      }
    });
  });
});
