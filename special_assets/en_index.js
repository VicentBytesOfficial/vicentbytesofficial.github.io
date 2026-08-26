import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js";
import * as glitch from "../assets/utils/glitch.js"

async function iniciar() {
  await write("> Accessing user...", ".p1", 50);
  await write("> Success!", ".p2", 50);
  await write("  - Independent Dev · Python · Luau · Defold · Godot", ".p3", 30);
  await write("I am VicentBytes, an independent developer who creates apps and tools. I’m still a bit of a beginner and learning along the way...", ".p4", 20);
  await write("If you want to see my projects, the links are below :D", ".p5", 20);
}

async function projectslinks() {
  await write("> Github link - FamilyDataBase", ".projectlink2", 50)
  await write("FamilyDataBase is a program that uses the TCP server system to transfer files from one computer to another...", ".projectdesc2", 20)
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