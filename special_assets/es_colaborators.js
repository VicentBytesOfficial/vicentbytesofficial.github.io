import {write, lineWrite} from "../assets/utils/write.js"

async function iniciarRotrex() {
    await write("Rodrigo Castilla (Rotrex_3) is a developer in training with a primary focus on Python, where he experiments with personal projects and exercises that strengthen his logic and technical skills. Although he maintains a website under construction, his activity is mainly reflected on GitHub, where he documents his progress and continuous learning. His digital presence shows someone curious, growing, and committed to improving every day in the world of development.", ".rotrexDesc", 10)
    await write("LinkedIn - Rodrigo Castilla", ".link2", 20)
    await write("GitHub - Rodrigo Castilla", ".link3", 20)
}

async function iniciarAcero() {
    await write("Daniel Aracena (Acero) is a promoter of technological learning and digital creativity, recognized for his work in Codeando Futuro, a community dedicated to bringing programming closer to new generations. His work stands out for combining pedagogy, enthusiasm, and a practical approach that motivates more people to discover the world of development, technology, and innovation. With an active presence in educational initiatives, Acero has become a key figure for those seeking to start coding in a friendly and collaborative environment.", ".aceroDesc", 10)
    await write("Codeando Futuro - Official page", ".link4", 20)
    await write("Acero93 - GitHub CV", ".link5", 20)
}

iniciarAcero()
iniciarRotrex()