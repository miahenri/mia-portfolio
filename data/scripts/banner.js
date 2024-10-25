const banner = document.querySelector(".banner");
const bannerContent = document.createElement("div");
bannerContent.classList.add("banner-content");

// Füge die Liste zweimal hinzu, um einen nahtlosen Übergang zu erzeugen
bannerContent.innerHTML = banner.innerHTML + banner.innerHTML;
banner.innerHTML = "";
banner.appendChild(bannerContent);

// Berechne die Gesamtlänge und setze die Animationsdauer dynamisch
const totalWidth = bannerContent.offsetWidth;
bannerContent.style.animationDuration = `${totalWidth / 100}px`;
