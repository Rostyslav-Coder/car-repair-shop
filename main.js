window.addEventListener('load', () => {
  const employee = document.querySelector('.employers');
  setTimeout(() => {
    employee.style.transition = '2s';
    employee.style.transitionProperty = 'opacity, transform';
    employee.style.opacity = '1';
    employee.style.transformOrigin = 'bottom';
    employee.style.transform = 'scale(1.2)';
  }, 2500);
});

function checkScreenOrientation() {
  const screenOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  const imgSrc = screenOrientation === 'landscape' ? 'img/banner/employers.png' : 'img/banner/employee.png';
  document.querySelector('.employers').src = imgSrc;
}

// Вызов функции при загрузке страницы
window.addEventListener('load', checkScreenOrientation);

// Вызов функции при изменении размера окна
window.addEventListener('resize', checkScreenOrientation);

// Создаем наблюдателя
// eslint-disable-next-line no-shadow
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Если элемент service виден на 60%, начинаем анимацию
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      const employee = document.querySelector('.employee_girl');
      employee.style.transition = '2s';
      employee.style.transitionProperty = 'opacity, transform';
      employee.style.opacity = '1';
      employee.style.transformOrigin = 'bottom left';
      employee.style.transform = 'scale(1.2)';

      // Останавливаем наблюдение после начала анимации
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 }); // Устанавливаем порог в 60%

// Начинаем наблюдение за элементом service
observer.observe(document.querySelector('.service'));

// Создаем наблюдателя
// eslint-disable-next-line no-shadow
const customerObserver = new IntersectionObserver((entries, customerObserver) => {
  entries.forEach((entry) => {
    // Если элемент service виден на 60%, начинаем анимацию
    if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
      const customer = document.querySelector('.customer');
      customer.style.transition = '2s';
      customer.style.transitionProperty = 'opacity, transform';
      customer.style.opacity = '1';
      customer.style.transformOrigin = 'bottom right';
      customer.style.transform = 'scale(1.2)';

      // Останавливаем наблюдение после начала анимации
      customerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.8 }); // Устанавливаем порог в 80%

// Начинаем наблюдение за элементом service
customerObserver.observe(document.querySelector('.review'));
