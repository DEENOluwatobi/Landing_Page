const bar = document.querySelector(".fa-bars");
const aside = document.querySelector("aside");
const close = document.querySelector(".fa-close");
const menu = document.querySelector('.responsive');

bar.addEventListener('click', () => {
    aside.classList.add("active");
});

close.addEventListener('click', () => {
    aside.classList.remove("active");
});