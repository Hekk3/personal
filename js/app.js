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
  const mainRightPaddingTop = 40;

  if (header && mainRight) {

    mainRight.style.paddingTop = header.offsetHeight + mainRightPaddingTop + 'px';
  }

  // content
  // =======

  const copyText = document.querySelector('.ref__heading-link-text');

  if (copyText) {

    copyText.addEventListener('click', function() {
      copyText.select();
      document.execCommand("copy");
    });
  }


  // swipers
  // =======

  let lumitySlider1 = new Swiper('.slider-1 .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: '.slider-1 .lumity__slider-next',
      prevEl: '.slider-1 .lumity__slider-prev',
    },

    breakpoints: {

      320: {
        spaceBetween: 15
      },

      768: {
        spaceBetween: 30
      },
    }
  });

  let lumitySlider2 = new Swiper('.slider-2 .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: '.slider-2 .lumity__slider-next',
      prevEl: '.slider-2 .lumity__slider-prev',
    },

    breakpoints: {

      320: {
        spaceBetween: 15
      },

      768: {
        spaceBetween: 30
      },
    }
  });

  let lumitySlider3 = new Swiper('.slider-3 .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30,

    navigation: {
      nextEl: '.slider-3 .lumity__slider-next',
      prevEl: '.slider-3 .lumity__slider-prev',
    },

    breakpoints: {

      320: {
        spaceBetween: 15
      },

      768: {
        spaceBetween: 30
      },
    }
  });
}