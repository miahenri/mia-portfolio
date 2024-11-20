document.querySelectorAll('.js-star-hover').forEach(hoverElement => {
    const popUpElement = hoverElement.querySelector('.js-star-popup');
  
    hoverElement.addEventListener('mouseenter', () => {
      popUpElement.classList.remove('hidden-icons');
    });
  
    hoverElement.addEventListener('mouseleave', () => {
      popUpElement.classList.add('hidden-icons');
    });
  });