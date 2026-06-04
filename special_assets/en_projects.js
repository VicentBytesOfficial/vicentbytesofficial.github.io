import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js";

async function boxOpacity(className, opacityValue) {
  const element = document.querySelector(className)
  element.style.opacity = opacityValue
}

async function InitTitles() {
  await write("My Projects...", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitFamily() {
  await boxOpacity(".familydatabase", 1)
  await write("FamilyDataBase", ".familyTitle", 50);
  await write("FamilyDataBase is a program for Windows and macOS that allows file transmission through a LAN connection. It works with Hamachi and other VPNs.", ".familyDesc1", 20)
  await write("Developed by VicentBytes and Rotrex_3", ".familyDesc2", 20)
  await write("> GitLab link - FamilyDataBase", ".familyLink", 50)
}

boxOpacity(".secret_console", 0);
boxOpacity(".familydatabase", 0);
InitTitles();
InitFamily();
