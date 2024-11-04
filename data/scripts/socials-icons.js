const hoverElement = document.getElementById("js-socials-hover");
const popUpElement = document.getElementById("js-socials-popup");
let isVisible = false;

hoverElement.addEventListener('mouseenter', () => {
    if (!isVisible) {
        popUpElement.classList.add('show-icons');
        popUpElement.classList.remove('hidden-icons');
        isVisible = true;
    }
    else if (isVisible) {
        popUpElement.classList.remove('show-icons');
        popUpElement.classList.add('hidden-icons');
        isVisible = false;
    }
});

hoverElement.addEventListener('click', () => {
    
});