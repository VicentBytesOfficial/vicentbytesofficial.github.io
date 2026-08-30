import {write, lineWrite} from "../assets/utils/write.js"

async function iniciar() {
  await write("Soy VicentBytes, un Dev independiente que desarrolla apps y herramientas, pero soy un poco novato y estoy aprendiendo...", ".p1", 20);
  await write("Estoy disponible para tomar cualquiera de tus ideas y convertirlo a una realidad", ".p2", 20);
}

async function projectslinks() {
  await write("> Github link - FamilyDataBase", ".projectlink2", 50)
  await write("FamilyDataBase es un programa que usa el sistema de servidores TCP para mover archivos de una computadora a otra...", ".projectdesc2", 20)
}

async function youtubeSector() {
  await write("> Youtube link - @VicentBytes", ".youtubelink1", 50)
  await write("Este es mi canal primario, donde subo contenido sobre OpenComputers, gameplays varios y contenido general. No olvides pasar por ahí y suscribirte.", ".youtubedesc1", 20)
  await write("> Youtube link - @VicentBytesCoding, ", ".youtubelink2", 50)
  await write("Este es mi canal secundario dedicado a la programación avanzada: tutoriales paso a paso, proyectos prácticos y recursos para quienes quieren llevar sus habilidades al siguiente nivel.", ".youtubedesc2", 20)
}

async function ctaSection() {
  await write("Estoy disponible para tomar proyectos freelance: apps de escritorio, bots, servidores y más.", ".ctaDesc", 20)
}

let topZ = 1;

document.querySelectorAll(".win").forEach(win => {
  win.addEventListener("click", () => {
    topZ++;
    win.style.zIndex = topZ;
    document.querySelectorAll(".win").forEach(w => w.classList.remove("front"));
    win.classList.add("front");
  });
});

iniciar();
projectslinks();
youtubeSector();
ctaSection()