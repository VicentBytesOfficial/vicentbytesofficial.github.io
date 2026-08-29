import {write, lineWrite} from "../assets/utils/write.js"

async function boxOpacity(clase, opacityv) {
  const element = document.querySelector(clase)
  element.style.opacity = opacityv
}

async function InitTitles() {
  await write("My Projects...", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitFamily() {
  await boxOpacity(".familydatabase", 1)
  await write(">>> FamilyDataBase", ".familyTitle", 50);
  await write("FamilyDataBase is a program for Windows and macOS that allows file transfer over a LAN connection, it works with Hamachi and other VPNs.", ".familyDesc1", 20)
  await write("Developed by VicentBytes and Rotrex_3", ".familyDesc2", 20)
  await write("> Github link - FamilyDataBase", ".familyLink1", 50)
  await write("> Project page - FamilyDataBase", ".familyLink2", 50)
}

boxOpacity(".familydatabase", 0);
InitTitles();
InitFamily()