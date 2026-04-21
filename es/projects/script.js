import {write, lineWrite} from "../../utils/write.js"

async function boxOpacity(clase, opacityv) {
  const element = document.querySelector(clase)
  element.style.opacity = opacityv
}

async function InitTitles() {
  await write("Mis Proyectos...", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitFamily() {
  await boxOpacity(".secret_console", 1)
  await write("secret_console.exe", ".consoleTitle", 50);
  await write("Una consola interactiva llena de archivos que no deberían existir. Escribe comandos, descubre mensajes encriptados y desvela los misterios que oculta esta extraña terminal. Algo sabe que estás ahí.", ".consoleDesc1", 20)
  await write("Desarollador por VicentBytes (codigo del juego) y m3nt4 (arte de la pagina de Gamejolt)", ".consoleDesc2", 20)
  await write("> GameJolt link - secret_console.exe", ".consoleLink", 50)
}

async function InitConsole() {
  await boxOpacity(".familydatabase", 1)
  await write("FamilyDataBase", ".familyTitle", 50);
  await write("FamilyDataBase es un programa para windows y macOS que permite la transmision de archivos a partir de una connexion LAN, funciona con hamachi y otras VPNs.", ".familyDesc1", 20)
  await write("Desarollador por VicentBytes y Rotrex_3", ".familyDesc2", 20)
  await write("> GitLab link - FamilyDataBase", ".familyLink", 50)
}

boxOpacity(".secret_console", 0);
boxOpacity(".familydatabase", 0);
InitTitles();
InitConsole()
InitFamily()


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