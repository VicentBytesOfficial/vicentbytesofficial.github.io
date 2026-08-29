import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js"

async function boxOpacity(clase, opacityv) {
  const elementos = document.querySelectorAll(clase);
  elementos.forEach(el => el.style.opacity = opacityv);
}

async function InitTitle() {
  await write("FamilyDataBase", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitIntro() {
  await boxOpacity(".fdb-intro", 1);
  await write("FamilyDataBase is a lightweight program for Windows and macOS that transfers files over a local network (LAN), it works with Hamachi and other VPNs.", ".introDesc1", 15);
  await write("It's part of the Family Suite, a collection of LAN tools built with Python.", ".introDesc2", 15);
}

async function InitRest() {
  await boxOpacity(".fdb-features", 1);
  await boxOpacity(".fdb-tech", 1);
  await boxOpacity(".fdb-credits", 1);
}

async function Init() {
  await InitTitle();
  await InitIntro();
  await InitRest();
}

Init();