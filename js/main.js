




  //preloader

  let preloader = document.getElementById('preloader');
window.addEventListener('load', function() {
    preloader.style.opacity = "0";
    setTimeout(function() {
        preloader.style.display = "none";
    }, 500);
});











  //Link Active

  document.querySelectorAll('li').forEach((el) => {
    el.addEventListener('click', function() {
      document.querySelectorAll('.active').forEach((activeEl) => {
        activeEl.classList.remove('active');
      });
      el.classList.add('active');
    });
  });





