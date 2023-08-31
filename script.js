// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});
const contentElement = document.querySelector('.content');

function adjustHeight() {
  const windowHeight = window.innerHeight;
  contentElement.style.height = windowHeight + 'px';
}


  