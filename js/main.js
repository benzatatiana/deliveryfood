const cartButton = document.querySelector("#cart-button"),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');

cartButton.addEventListener("click", toggleModal);
modal.addEventListener("click", toggleModal);

function toggleModal () {
    modal.classList.toggle("is-open");
}

new WOW().init();