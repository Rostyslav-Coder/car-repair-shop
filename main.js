// =============== HEADER MOBILE ANIMATION ===============
const navigatinButton = document.querySelector('.navigator__button');
const navigator = document.querySelector('.header');

navigatinButton.addEventListener('click', () => {
  if (navigator.style.display === 'none') {
    navigator.style.display = 'block';
    navigatinButton.style.transform = 'rotate(45deg)';
  } else {
    navigator.style.display = 'none';
    navigatinButton.style.transform = 'rotate(0)';
  }
});

const navButtons = document.querySelectorAll('.nav__button');
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    navigator.style.display = 'none';
    navigatinButton.style.transform = 'rotate(0)';
  });
});

// =============== BANNER EMPLOYERS IMAGE ANIMATION ===============
window.addEventListener('load', () => {
  const employee = document.querySelector('.employers');
  setTimeout(() => {
    employee.style.transition = '2s';
    employee.style.transitionProperty = 'opacity, transform';
    employee.style.opacity = '1';
    employee.style.transformOrigin = 'bottom';
    employee.style.transform = 'scale(1.2)';
  }, 1500);
});

function checkScreenOrientation() {
  const screenOrientation = window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
  const imgSrc = screenOrientation === 'landscape' ? 'img/banner/employers.png' : 'img/banner/employee.png';
  document.querySelector('.employers').src = imgSrc;
}

// Calling a function when the page loads
window.addEventListener('load', checkScreenOrientation);

// Calling a function when the window size is changed
window.addEventListener('resize', checkScreenOrientation);

// =============== SERVICE EMPLOYEE IMAGE ANIMATION ===============
// eslint-disable-next-line no-shadow
const employeeObserver = new IntersectionObserver((entries, employeeObserver) => {
  entries.forEach((entry) => {
    // If the service element is 60% visible, start the animation
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      const employee = document.querySelector('.employee_girl');
      employee.style.transition = '2s';
      employee.style.transitionProperty = 'opacity, transform';
      employee.style.opacity = '1';
      employee.style.transformOrigin = 'bottom left';
      employee.style.transform = 'scale(1.2)';

      // Stopping observation after the animation starts
      employeeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 }); // Set the threshold to 60%

// Let's begin observing the service element
employeeObserver.observe(document.querySelector('.service'));

// =============== REVIEW CUSTOMER IMAGE ANIMATION ===============
// eslint-disable-next-line no-shadow
const customerObserver = new IntersectionObserver((entries, customerObserver) => {
  entries.forEach((entry) => {
    // If the service element is 60% visible, start the animation
    if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      const customer = document.querySelector('.customer');
      customer.style.transition = '2s';
      customer.style.transitionProperty = 'opacity, transform';
      customer.style.opacity = '1';
      customer.style.transformOrigin = 'bottom right';
      customer.style.transform = 'scale(1.2)';

      // Stopping observation after the animation starts
      customerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 }); // Set the threshold to 60%

// Let's begin observing the service element
customerObserver.observe(document.querySelector('.review'));
