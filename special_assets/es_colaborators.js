import {write, lineWrite} from "../assets/utils/write.js"
import * as matrix from "../assets/utils/matrix.js";

async function iniciarMenta() {
    await write("M3nt4 (@meentart en Instagram) es una artista visual independiente que ofrece comisiones personalizadas y comparte su trabajo en plataformas digitales. Su estilo combina estética contemporánea con un enfoque narrativo, creando piezas que dialogan con la cultura gamer y el arte digital. En el desarrollo de secret_console.exe [actualmente abandonado], M3nt4 aportó dirección visual y diseño conceptual, enriqueciendo la atmósfera del videojuego con un lenguaje gráfico distintivo que potencia la inmersión del jugador. Su participación no solo aportó identidad estética, sino también coherencia en la construcción del universo del juego.", ".mentaDesc", 10)
    await write("Instagram - @meentart", ".link1", 20)
}

async function iniciarRotrex() {
    await write("Rodrigo Castilla (Rotrex_3) es un desarrollador en formación con un enfoque principal en Python, donde experimenta con proyectos personales y ejercicios que fortalecen su lógica y habilidades técnicas. Aunque mantiene una página web en construcción, su actividad se refleja sobre todo en GitHub, donde documenta su progreso y aprendizaje continuo. Su presencia digital muestra a alguien curioso, en crecimiento y comprometido con mejorar cada día dentro del mundo del desarrollo.", ".rotrexDesc", 10)
    await write("Linkedin - Rodrigo Castilla", ".link2", 20)
    await write("Github - Rodrigo Castilla", ".link3", 20)
}

async function iniciarAcero() {
    await write("Daniel Aracena (Acero) es un impulsor del aprendizaje tecnológico y la creatividad digital, reconocido por su labor en Codeando Futuro, una comunidad dedicada a acercar la programación a nuevas generaciones. Su trabajo destaca por combinar pedagogía, entusiasmo y un enfoque práctico que motiva a más personas a descubrir el mundo del desarrollo, la tecnología y la innovación. Con una presencia activa en iniciativas educativas, Acero se ha convertido en una figura clave para quienes buscan iniciarse en el código desde un entorno cercano y colaborativo.", ".aceroDesc", 10)
    await write("Codeando Futuro - Pagina oficial", ".link4", 20)
    await write("Acero93 - CV de GitHub", ".link5", 20)
}

iniciarAcero()
iniciarMenta()
iniciarRotrex()