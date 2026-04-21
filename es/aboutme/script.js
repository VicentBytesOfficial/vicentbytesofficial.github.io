import {write, lineWrite} from "../utils/write.js"

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columnas = Math.floor(canvas.width / 20);
const gotas = Array(columnas).fill(1);

function dibujar() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = "15px 'Share Tech Mono'";

  gotas.forEach((y, i) => {
    const texto = Math.random() > 0.5 ? "1" : "0";
    ctx.fillStyle = Math.random() > 0.9 ? "#ffffff" : "#00ff99";
    ctx.fillText(texto, i * 20, y * 20);

    if (y * 20 > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }
    gotas[i]++;
  });
}

setInterval(dibujar, 50);