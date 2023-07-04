var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Default parameters   
  slidesPerView: 4,   
  spaceBetween: 40,   
  // Responsive breakpoints   
  breakpoints: {  
  
     // when window width is <= 320px     
     480: {       
        slidesPerView: 1,
        spaceBetween: 10     
     },     
     // when window width is <= 480px     
     640: {       
        slidesPerView: 2,       
        spaceBetween: 20     
     },   
 
     // when window width is <= 640px     
     720: {       
        slidesPerView: 3,       
        spaceBetween: 30     
     } 
 
  } 
});