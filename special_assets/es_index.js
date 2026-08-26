import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js"
import * as glitch from "../assets/utils/glitch.js"

async function iniciar() {
  await write("> Accediendo al usuario...", ".p1", 50);
  await write("> Exito!", ".p2", 50);
  await write("  - Dev independiente · Python · Luau · Defold · Godot", ".p3", 30);
  await write("Soy VicentBytes, un Dev independiente que desarrolla apps y herramientas, pero soy un poco novato y estoy aprendiendo...", ".p4", 20);
  await write("Si quieres ver mi proyectos, los links estan abajo :D", ".p5", 20);
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

iniciar();
projectslinks();
youtubeSector();