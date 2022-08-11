/* Menu section*/
let openBtn = document.querySelector('.nav-open-btn');
let closeBtn = document.querySelector('.nav-close-btn');
let navbar = document.querySelector('.navbar');
let overlay = document.querySelector('.overlay');
let header = document.querySelector('header');


openBtn.onclick = () => {
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');

}

closeBtn.onclick = () => {
  navbar.classList.remove('active');
  overlay.classList.remove('active');

}


/*    Home Section   */
var home = new Swiper(".home-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },  
  pagination: {
    el: ".banner-bullet",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">'+'</span>';
    },
  },
});


/* Mini banner 2 swiper */
var bannerBar = new Swiper(".mini-banner-2-swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  grabCursor: true,
  scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
  },
  breakpoints: {
    420: {
      slidesPerView: 3
    },
    575: {
        slidesPerView: 4
    },
    768: {
      slidesPerView: 5
    }
  }
});


/* Bact to top  &  hide side menu*/
let backToTopBtn = document.querySelector('#back-to-top');
window.onscroll = () =>{

  navbar.classList.remove('active');
  overlay.classList.remove('active');
  header.classList.toggle('window-scroll', window.scrollY > 0);

  if(window.scrollY > 100){
    backToTopBtn.classList.add("show");
  }else{
    backToTopBtn.classList.remove("show");
  }
}

backToTopBtn.onclick = () => {
  window.scrollTo(0,0);
};
