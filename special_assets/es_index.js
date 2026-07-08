import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js"
import * as glitch from "../assets/utils/glitch.js"

async function iniciar() {
  await write("> Accediendo al usuario...", ".p1", 50);
  await write("> Exito!", ".p2", 50);
  await write("  - Dev independiente · Python · Luau · Defold", ".p3", 30);
  await write("Soy VicentBytes, un Dev independiente que desarrolla apps y herramientas, pero soy un poco novato y estoy aprendiendo...", ".p4", 20);
  await write("Si quieres ver mi proyectos, los links estan abajo :D", ".p5", 20);
}

async function projectslinks() {
  await write("> Gitlab link - FamilyDataBase", ".projectlink2", 50)
  await write("FamilyDataBase es un programa que usa el sistema de servidores TCP para mover archivos de una computadora a otra...", ".projectdesc2", 20)
}

async function youtubeSector() {
  await write("> Youtube link - @VicentBytes, ", ".youtubelink1", 50)
  await write("This is my primary channel, where I upload content about OpenComputers, various gameplays, and general content. Don't forget to stop by and subscribe.", ".youtubedesc1", 20)
  await write("> Youtube link - @VicentBytesCoding, ", ".youtubelink2", 50)
  await write("This is my secondary channel dedicated to advanced programming: step-by-step tutorials, practical projects, and resources for those who want to take their skills to the next level.", ".youtubedesc2", 20)
}

iniciar();
projectslinks();
youtubeSector();