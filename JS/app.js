document.addEventListener('DOMContentLoaded', (event) => {
  //navbar
  const toggleButton = document.getElementsByClassName('toggle-button')[0];
  const navbarLinks = document.getElementsByClassName('navbar-links')[0];

  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  const about = document.getElementById('navbar_about');

  about.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
});
