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
    await write("FamilyDataBase is a Windows and macOS application that allows file transfer over a LAN connection. It also works with Hamachi and other VPNs.", ".familyDesc1", 20)
    await write("Developed by VicentBytes and Rotrex_3", ".familyDesc2", 20)
    await write("> GitHub link - FamilyDataBase", ".familyLink1", 50)
    await write("> Project page - FamilyDataBase", ".familyLink2", 50)
}

async function InitUtilipy() {
    await boxOpacity(".utilipy", 1)
    await write(">>> UtiliPy", ".utilipyTitle", 50);
    await write("UtiliPy is an open-source Discord bot currently under development, created with Python. It is designed to provide various tools and utilities for servers, such as customizable and attractive announcements, automoderation features, and much more.", ".utilipyDesc1", 20)
    await write("Developed by VicentBytes", ".utilipyDesc2", 20)
    await write("> Release date: not scheduled yet.", ".utilipyDesc3", 50)
}

boxOpacity(".familydatabase", 0);
boxOpacity(".utilipy", 0);
InitTitles();
InitFamily()
InitUtilipy()