const hoverElement = document.getElementById("js-socials-hover");
const popUpElement = document.getElementById("js-socials-popup");
let isVisible = false;

hoverElement.addEventListener('mouseenter', () => {
    if (!isVisible) {
        popUpElement.classList.add('show');
        popUpElement.classList.remove('hidden');
        isVisible = true;
    }
    else if (isVisible) {
        popUpElement.classList.remove('show');
        popUpElement.classList.add('hidden');
        isVisible = false;
    }
});

hoverElement.addEventListener('click', () => {
    
});