import {write, lineWrite} from "../assets/utils/write.js"
import {boxOpacity} from "../assets/utils/boxOpacity.js"

async function InitTitle() {
  await write("FamilyDataBase", ".mainTitle", 50);
  lineWrite(".mainTitle", 700);
}

async function InitIntro() {
  await boxOpacity(".fdb-intro", 1);
  await write("FamilyDataBase es un programa liviano para Windows y macOS que permite transferir archivos a través de una red local (LAN), funciona con Hamachi y otras VPNs.", ".introDesc1", 15);
  await write("Es parte de la Family Suite, una colección de herramientas LAN hechas en Python.", ".introDesc2", 15);
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