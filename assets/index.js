const ventanas = [
    { win: document.querySelector(".hero"),     close: document.querySelector(".btn1"), restore: document.querySelector(".btn5") },
    { win: document.querySelector(".projects"), close: document.querySelector(".btn2"), restore: document.querySelector(".btn6") },
    { win: document.querySelector(".youtube"),  close: document.querySelector(".btn3"), restore: document.querySelector(".btn7") },
    { win: document.querySelector(".cta"),      close: document.querySelector(".btn4"), restore: document.querySelector(".btn8") },
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