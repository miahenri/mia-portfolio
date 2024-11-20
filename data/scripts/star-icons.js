const hoverElement = document.getElementById("js-star-hover");
const popUpElement = document.getElementById("js-star-popup");


popUpElement.addEventListener('mouseenter', () => {
    document.getElementById("js-star-popup").classList.remove('hidden-icons');
});

popUpElement.addEventListener('mouseleave', () => {
    document.getElementById("js-star-popup").classList.add('hidden-icons');
});