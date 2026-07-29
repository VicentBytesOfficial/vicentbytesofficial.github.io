import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js"

async function boxOpacity(clase, opacityv) {
  const element = document.querySelector(clase)
  element.style.opacity = opacityv
}

async function InitTitles() {
  await write("Mis Proyectos...", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitFamily() {
  await boxOpacity(".familydatabase", 1)
  await write("FamilyDataBase", ".familyTitle", 50);
  await write("FamilyDataBase es un programa para windows y macOS que permite la transmision de archivos a partir de una connexion LAN, funciona con hamachi y otras VPNs.", ".familyDesc1", 20)
  await write("Desarollador por VicentBytes y Rotrex_3", ".familyDesc2", 20)
  await write("> Github link - FamilyDataBase", ".familyLink", 50)
}

boxOpacity(".secret_console", 0);
boxOpacity(".familydatabase", 0);
InitTitles();
InitFamily()