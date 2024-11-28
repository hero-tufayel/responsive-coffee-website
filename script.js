const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle the mobile menu visibility when open button is clicked
    document.body.classList.toggle("show-mobile-menu");
});

// Close the mobile menu when close button is clicked
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});
// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true, // Enable looping
    grabCursor:true,
    spaceBetween:25,
  
    // Pagination configuration
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Make pagination clickable

      dynamicBullets:true,
    },
  
    // Navigation arrows configuration
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Default options
    slidesPerView: 1, // Display 1 slide at a time
    spaceBetween: 10, // Space between slides in pixels
  
    // Responsive breakpoints
    breakpoints: {
      0: { 
        slidesPerView: 1, // 1 slide on small screens
        spaceBetween: 10 
      },
      768: { 
        slidesPerView: 2, // 2 slides on medium screens
        spaceBetween: 20 
      },
      1024: { 
        slidesPerView: 3, // 3 slides on larger screens
        spaceBetween: 30 
      }
    }
  });
  
  
  