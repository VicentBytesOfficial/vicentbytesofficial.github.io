const ventanas = [
    { win: document.querySelector(".familydatabase"), close: document.querySelector(".btn1"), restore: document.querySelector(".btn3") },
    { win: document.querySelector(".utilipy"),         close: document.querySelector(".btn2"), restore: document.querySelector(".btn4") },
];

ventanas.forEach(({ win, close, restore }) => {
    close.addEventListener("click", () => {
        win.style.opacity = 0;
        win.style.pointerEvents = "none";

        restore.style.opacity = 1;
        restore.style.pointerEvents = "auto";
    });

    restore.addEventListener("click", () => {
        win.style.opacity = 1;
        win.style.pointerEvents = "auto";

        restore.style.opacity = 0;
        restore.style.pointerEvents = "none";
    });
});