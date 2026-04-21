import {write, lineWrite} from "../utils/write.js"

async function iniciar() {
  await write("> Accediendo al usuario...", ".p1", 50);
  await write("> Exito!", ".p2", 50);
  await write("  - Dev independiente · Python · Luau · Defold", ".p3", 30);
  await write("Soy VicentBytes, un Dev independiente que desarrolla apps y herramientas, pero soy un poco novato y estoy aprendiendo...", ".p4", 20);
  await write("Si quieres ver mi proyectos, los links estan abajo :D", ".p5", 20);
}

async function projectslinks() {
  await write("> GameJolt link - secret_console.exe", ".projectlink1", 50)
  await write("secret_console.exe es un juego basado de texto que saldrá pronto gratis en gamejolt para pc. Se trata de una consola interactiva con comandos personalizados y un lore oculto", ".projectdesc1", 20)
  await write("> Gitlab link - FamilyDataBase", ".projectlink2", 50)
  await write("FamilyDataBase es un programa que usa el sistema de servidores TCP para mover archivos de una computadora a otra...", ".projectdesc2", 20)
}

iniciar();
projectslinks();

const staticCanvas = document.getElementById("static");
const sctx = staticCanvas.getContext("2d");
staticCanvas.width = window.innerWidth;
staticCanvas.height = window.innerHeight;

let staticActivo = false;

function dibujarEstatica() {
  if (!staticActivo) return;

  const imageData = sctx.createImageData(staticCanvas.width, staticCanvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const valor = Math.random() > 0.5 ? 255 : 0;
    data[i] = valor;      
    data[i + 1] = 0;      
    data[i + 2] = 0;       
    data[i + 3] = 255;     
  }

  sctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(dibujarEstatica);
}

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

const glitch = document.getElementById("glitch");

async function hacerGlitch() {
  document.body.classList.add("glitch-rojo");
  staticCanvas.classList.add("activo");
  staticActivo = true;
  dibujarEstatica();

  for (let i = 0; i < 3; i++) {
    glitch.classList.add("activo");
    await new Promise(r => setTimeout(r, 80));
    glitch.classList.remove("activo");
    await new Promise(r => setTimeout(r, 60));
  }

  glitch.classList.add("activo");
  await new Promise(r => setTimeout(r, 300));
  glitch.classList.remove("activo");

  staticActivo = false;
  staticCanvas.classList.remove("activo");
  document.body.classList.remove("glitch-rojo");
}

function cicloGlitch() {
  const delay = Math.random() * 7000 + 8000;
  setTimeout(async () => {
    await hacerGlitch();
    cicloGlitch();
  }, delay);
}

cicloGlitch();
