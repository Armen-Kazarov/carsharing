"use strict"

document.addEventListener("DOMContentLoaded", function() {
  function burgerMenu() {
    const iconMenu = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.menu__body');
    const menuButtonClose = document.querySelector('.menu__button-close-wrapper');
    const menuItems = document.querySelectorAll('.header-nav-menu-list-item');
    
    // Burger menu
    if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
      });
    }
  
    for (let item of menuItems) {
      if (item) {
        item.addEventListener("click", function (e) {
          document.body.classList.toggle('_lock');
          iconMenu.classList.toggle('_active');
          menuBody.classList.toggle('_active');
        });
      }
    }

    if (menuButtonClose) {
      menuButtonClose.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
      })
    }
  }
  
  burgerMenu();
  
  const details = document.querySelectorAll('details');

  details.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      const openItem = document.querySelector('details[open]');
        
      if (openItem) openItem.open = false;
      
      if (openItem !== item) item.open = true 
    })
  })

  const selectElement = document.getElementById('select');
  let lastSelectedValue = "";

  selectElement.value = "1";
  updateSelect();

  selectElement.addEventListener('change', updateSelect);

  function updateSelect() {
      const selectedValue = selectElement.value;

      Array.from(selectElement.options).forEach(option => {
          option.style.display = 'block';
      });

      if (selectedValue) {
          const selectedOption = selectElement.querySelector(`option[value="${selectedValue}"]`);
          if (selectedOption) {
              selectedOption.style.display = 'none';
          }
      }

      lastSelectedValue = selectedValue;
  }
});

