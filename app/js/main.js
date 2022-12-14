      // HEADER BURGER-BTN-MENU
let burgerBtn = document.querySelector('.header__burger');
let headerSidebar = document.querySelector('.header__sidebar')
burgerBtn.addEventListener('click', function(){
  burgerBtn.classList.toggle('header__burger--active');
  headerSidebar.classList.toggle('header__sidebar--active');
});

      // HEADER-SLIDER
const swiper = new Swiper(".header__swiper", {
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});

      // PRODUCT-TAB
const tabItems = document.querySelectorAll('.products__cards-top__item');
const tabContents = document.querySelectorAll('.products__cards-content__item');

tabItems.forEach(tabItem => {
    tabItem.addEventListener("click", function(e){
    e.preventDefault();
    let activeTabAttr = e.target.getAttribute("data-path");

    for (let j = 0; j < tabItems.length; j++) {
      let contentAttr = tabContents[j].getAttribute("data-target");

      if (activeTabAttr === contentAttr) {
        tabItems[j].classList.add("products__cards-top__item--active");
        tabContents[j].classList.add("products__cards-content__item--active"); 
      } else {
        tabItems[j].classList.remove("products__cards-top__item--active");
        tabContents[j].classList.remove("products__cards-content__item--active");
      }
    };
  });
});


        // FAVORITE ICON
const cardItems = document.querySelectorAll('.products__card-item__menu')
cardItems.forEach(el => {
  const linkFavorite = el.querySelector('.products__card-item__link-favorite');
  linkFavorite.addEventListener('click', function(){
    linkFavorite.classList.toggle('products__card-item__link-favorite--active')
  })
});


        // POPUP
document.addEventListener("DOMContentLoaded", function() {
  let overlay = document.querySelector('.overlay');
  document.querySelectorAll('.popup-item').forEach(item  => {
    const popup = item.querySelector('.popup');
    const openPopup = item.querySelector('.popup__open');
        
    openPopup.addEventListener('click', function(e){
      openModal(popup)
      e.preventDefault();
    })
          
    const closePopup = item.querySelector('.popup__close');
    closePopup.addEventListener('click', function(e){
      closeModal(popup)
      e.preventDefault();
    })
        
  });
    
  function openModal(popup) {
    popup.classList.add('popup--active')
    overlay.classList.add('overlay--active')
  }

  function closeModal(popup) {
    popup.classList.remove('popup--active')
    overlay.classList.remove('overlay--active')
  }
})

      // POPUP-SLIDER
const swiperPopap = new Swiper(".popup__swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

