document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');

if (menuButton && menu) {
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  };

  menuButton.addEventListener('click', () => setMenuOpen(!menu.classList.contains('open')));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a') && menu.classList.contains('open')) {
      setMenuOpen(false);
    }
  });
}
