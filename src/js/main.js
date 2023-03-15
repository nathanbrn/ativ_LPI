const btnLeft = document.getElementById("btn_left").addEventListener("click", () => {
    const main = document.querySelector("main");
    main.scrollBy(-200, 0);
});

const btnRight = document.getElementById("btn_right").addEventListener("click", () => {
    const main = document.querySelector("main");
    main.scrollBy(200, 0);
});