window.onload = function() {

  // header
  // ======
  let mainMenu = document.querySelector('.main-left');
  let burger = document.querySelector('.header__burger');
  let blur = document.querySelector('.blur');

  if (mainMenu && burger && window.innerWidth <= 992) {

    function mainMenuAddActive() {
      mainMenu.classList.add('active');
      blur.classList.add('active');
    }

    function mainMenuRemoveActive() {
      mainMenu.classList.remove('active');
      blur.classList.remove('active');
    }

    burger.addEventListener('click', function() {

      mainMenuAddActive();
    });

    blur.addEventListener('click', function() {

      mainMenuRemoveActive();
    });
  }
  // header
  // ======

  // =======
  // content

  let header = document.querySelector('.header');
  let mainRight = document.querySelector('.main-right');
  let wrapperItemButton = document.querySelectorAll('.aside__tab-button');
  let wrapperItem = document.querySelectorAll('.wrapper__item');
  const mainRightPaddingTop = 40;

  if (header && mainRight) {

    mainRight.style.paddingTop = header.offsetHeight + mainRightPaddingTop + 'px';

    for (let i = 0; i < wrapperItemButton.length; i++) {

      wrapperItemButton[i].addEventListener('click', function() {

        for (let i = 0; i < wrapperItem.length; i++) {

          wrapperItem[i].classList.remove('active');
          wrapperItemButton[i].classList.remove('active');
        }

        wrapperItem[i].classList.add('active');
        wrapperItemButton[i].classList.add('active');
      });
    }
  }

  // content
  // =======
}