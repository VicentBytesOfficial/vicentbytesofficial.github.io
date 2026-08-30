import {write, lineWrite} from "../assets/utils/write.js"

async function start() {
    await write("I'm VicentBytes, an independent developer who creates apps and tools. I'm still relatively new to development and constantly learning...", ".p1", 20);
    await write("I'm available to take your ideas and turn them into reality.", ".p2", 20);
}

async function projectsLinks() {
    await write("> GitHub link - FamilyDataBase", ".projectlink2", 50)
    await write("FamilyDataBase is an application that uses TCP server technology to transfer files from one computer to another...", ".projectdesc2", 20)
}

async function youtubeSector() {
    await write("> YouTube link - @VicentBytes", ".youtubelink1", 50)
    await write("This is my main channel, where I upload OpenComputers content, various gameplay videos, and general content. Don't forget to check it out and subscribe!", ".youtubedesc1", 20)
    await write("> YouTube link - @VicentBytesCoding", ".youtubelink2", 50)
    await write("This is my secondary channel dedicated to advanced programming: step-by-step tutorials, practical projects, and resources for those who want to take their skills to the next level.", ".youtubedesc2", 20)
}

async function ctaSection() {
    await write("I'm available for freelance projects: desktop apps, bots, servers, and more.", ".ctaDesc", 20)
}

let topZ = 1;

document.querySelectorAll(".win").forEach(win => {
    win.addEventListener("click", () => {
        topZ++;
        win.style.zIndex = topZ;
        document.querySelectorAll(".win").forEach(w => w.classList.remove("front"));
        win.classList.add("front");
    });
});

start();
projectsLinks();
youtubeSector();
ctaSection()