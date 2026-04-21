import {write, lineWrite} from "../../utils/write.js"

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columnas = Math.floor(canvas.width / 20);
const gotas = Array(columnas).fill(1);

function dibujar() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff99";
  ctx.font = "15px 'Share Tech Mono'";

  gotas.forEach((y, i) => {
    const texto = Math.random() > 0.5 ? "1" : "0";
    ctx.fillStyle = Math.random() > 0.9 ? "#ffffff" : "#00ff99";
    ctx.fillText(texto, i * 20, y * 20);

    if (y * 20 > canvas.height && Math.random() > 0.975) {
      gotas[i] = 0;
    }
    gotas[i]++;
  });
}

setInterval(dibujar, 50);

async function iniciarMenta() {
    await write("M3nt4 (@meentart en Instagram) es una artista visual independiente que ofrece comisiones personalizadas y comparte su trabajo en plataformas digitales. Su estilo combina estética contemporánea con un enfoque narrativo, creando piezas que dialogan con la cultura gamer y el arte digital. En el desarrollo de secret_console.exe, M3nt4 aportó dirección visual y diseño conceptual, enriqueciendo la atmósfera del videojuego con un lenguaje gráfico distintivo que potencia la inmersión del jugador. Su participación no solo aportó identidad estética, sino también coherencia en la construcción del universo del juego.", ".mentaDesc", 10)
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
}

iniciarAcero()
iniciarMenta()
iniciarRotrex()