burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".navlist"); // Corrected class name
searchBox = document.querySelector(".search-box");

burger.addEventListener('click', () => {
    searchBox.classList.toggle('v-h-resp'); // Corrected property name
    navList.classList.toggle('v-h-resp'); // Corrected property name
    navbar.classList.toggle('n-h-resp'); // Corrected property name
});
