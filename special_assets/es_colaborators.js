import {write, lineWrite} from "../assets/utils/write.js"

async function initRotrex() {
    await write("Rodrigo Castilla (Rotrex_3) es un desarrollador en formación con un enfoque principal en Python, donde experimenta con proyectos personales y ejercicios que fortalecen su lógica y sus habilidades técnicas. Aunque mantiene un sitio web en construcción, su actividad se refleja principalmente en GitHub, donde documenta su progreso y aprendizaje continuo. Su presencia digital muestra a alguien curioso, en crecimiento y comprometido con mejorar cada día en el mundo del desarrollo.", ".rotrexDesc", 10)
    await write("LinkedIn - Rodrigo Castilla", ".link2", 20)
    await write("GitHub - Rodrigo Castilla", ".link3", 20)
}

async function initAcero() {
    await write("Daniel Aracena (Acero) es un promotor del aprendizaje tecnológico y la creatividad digital, reconocido por su trabajo en Codeando Futuro, una comunidad dedicada a acercar la programación a las nuevas generaciones. Su trabajo destaca por combinar pedagogía, entusiasmo y un enfoque práctico que motiva a más personas a descubrir el mundo del desarrollo, la tecnología y la innovación. Con una presencia activa en iniciativas educativas, Acero se ha convertido en una figura clave para quienes buscan iniciarse en la programación en un entorno amigable y colaborativo.", ".aceroDesc", 10)
    await write("Codeando Futuro - Página oficial", ".link4", 20)
    await write("Acero93 - GitHub CV", ".link5", 20)
}

initAcero()
initRotrex()