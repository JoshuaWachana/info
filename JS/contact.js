document.addEventListener('DOMContentLoaded', (event) => {
  //go back
  const back_btn = document.getElementById('back-btn');

  back_btn.addEventListener('click', () => {
    location.href = 'index.html';
  });
});
