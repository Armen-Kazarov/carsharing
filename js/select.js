document.addEventListener('DOMContentLoaded', function () {
  const selected = document.querySelector('.select-selected');
  const items = document.querySelector('.select-items');
  const arrow = document.querySelector('.select-btn');
  const options = items.querySelectorAll('div');

  let selectedOption = options[0].textContent;

  options[1].style.display = 'none';

  selected.addEventListener('click', function () {
      if (items.style.maxHeight) {
          items.style.maxHeight = null;
          arrow.style.transform = 'rotate(0deg)';
          arrow.classList.remove('up');
      } else {
          items.style.maxHeight = items.scrollHeight + "px";
          arrow.style.transform = 'rotate(180deg)';
          arrow.classList.add('up');
      }
  });

  options.forEach(option => {
      option.addEventListener('click', function () {
          selectedOption = this.textContent;
          selected.childNodes[0].nodeValue = selectedOption;
          items.style.maxHeight = null;
          arrow.style.transform = 'rotate(0deg)';
          arrow.classList.remove('up');
          updateOptions();
      });
  });

  function updateOptions() {
      options.forEach(option => {
          if (option.textContent === selectedOption) {
              option.style.display = 'none';
          } else {
              option.style.display = 'flex';
              arrow.classList.remove('up');
          }
      });
  }

  document.addEventListener('click', function (event) {
      if (!selected.contains(event.target)) {
          items.style.maxHeight = null;
          arrow.classList.remove('up');
          arrow.style.transform = 'rotate(0deg)';
      }
  });

  updateOptions();
});