const btnGotoTop = document.querySelector('#btn-goto-top');
btnGotoTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
