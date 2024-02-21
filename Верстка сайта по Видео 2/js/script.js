(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    // !КОГДА ОКНО СКРОЛЛИТСЯ ЧТО-ТО ВЫПОЛНИТЬ
    if (window.pageYOffset > 50) {
      // !ЕСЛИ ПРОСКРОЛЛИЛИ ВЕРТИКАЛЬНО 50 ПИКСЕЛЕЙ ТО ДОБАВИТЬ КЛАСС
      header.classList.add("header_active");
    } else {
      // !иначе удалить
      header.classList.remove("header_active");
    }
  };
})();






// burger handler
(function() {
  const burgerItem = document.querySelector(".burger"); // !Для этого у бургера есть 2 класс
  const menu = document.querySelector(".header_nav");
  const menuCloseItem = document.querySelector(".header__nav_close")
  burgerItem.addEventListener('click', () => {
    menu.classList.add("header_nav_active");
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove("header_nav_active");
  });
}());






// Перекидывающий на следующий блок -
// Scroll to anchors
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight; //! .header - САМ БЛОК header , КОТОРЫЙ МОЖЕТ МЕШАТЬ И ЗАБИРАТЬ ВЫСОТУ И ТОГДА НЕ КОРРЕКТНО БУДЕТ ДО БЛОКОВ СКРОЛЛИТЬСЯ!!!
      let target = document.querySelector(targetEl); // !НО ЕСЛИ ХЕАДЕР НЕ БУДЕТ ЕЗДИТЬ ПО СТРАНИЦЕ ИЛИ ЕГО НЕТ, headerElHeight ПЕРЕМЕННУЮ НАДО БУДЕТ ВЕЗДЕ УДАЛИТЬ 
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll'); // !js-scroll класс добавляем к ссылкам
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());















