import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js";
import * as glitch from "../assets/utils/glitch.js"

async function iniciar() {
  await write("> Accessing user...", ".p1", 50);
  await write("> Success!", ".p2", 50);
  await write("  - Independent Dev · Python · Luau · Defold", ".p3", 30);
  await write("I am VicentBytes, an independent developer who creates apps and tools. I’m still a bit of a beginner and learning along the way...", ".p4", 20);
  await write("If you want to see my projects, the links are below :D", ".p5", 20);
}

async function projectslinks() {
  await write("> GitLab link - FamilyDataBase", ".projectlink2", 50)
  await write("FamilyDataBase is a program that uses the TCP server system to transfer files from one computer to another...", ".projectdesc2", 20)
}

iniciar();
projectslinks();
