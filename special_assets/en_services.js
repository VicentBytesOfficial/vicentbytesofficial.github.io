import {write, lineWrite} from "../assets/utils/write.js"
import { boxOpacity } from "../assets/utils/boxOpacity.js";

async function InitTitle() {
  await write("Services I offer", ".title", 50);
  lineWrite(".title, 700");
}

async function showButtons() {
    boxOpacity(".services", 1)
}

async function Init() {
    await InitTitle()
    await showButtons()
}

Init()