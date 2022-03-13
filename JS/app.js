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

  const skills = document.getElementById('navbar_skills');

  skills.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  const projects = document.getElementById('navbar_projects');

  projects.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });

  const contact = document.getElementById('navbar_contact');

  contact.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
  });
});
