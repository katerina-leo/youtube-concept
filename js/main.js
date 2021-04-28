const channelSlider = new Swiper('.channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 6 
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
     slidesPerView: 4 
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  }
});

const recommendedSwiper = new Swiper('.recommended-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 3 
    },
    
    1300: {
     slidesPerView: 2
    },
    
    800: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  }
});
const recommendedchannelSlider = new Swiper('.recommended-channel-slider', {
  // Optional parameters
  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
     slidesPerView: 6 
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
     slidesPerView: 4 
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended-channel-button-next',
    prevEl: '.recommended-channel-button-prev',
  }
});

const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () =>  {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  recommendedSwiper.destroy();
  channelSlider.destroy();
  recommendedchannelSlider.destroy();

}