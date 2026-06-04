const glitch = document.getElementById("glitch");

async function hacerGlitch() {
  document.body.classList.add("glitch-rojo");
  staticCanvas.classList.add("activo");
  staticActivo = true;
  dibujarEstatica();

  for (let i = 0; i < 3; i++) {
    glitch.classList.add("activo");
    await new Promise(r => setTimeout(r, 80));
    glitch.classList.remove("activo");
    await new Promise(r => setTimeout(r, 60));
  }

  glitch.classList.add("activo");
  await new Promise(r => setTimeout(r, 300));
  glitch.classList.remove("activo");

  staticActivo = false;
  staticCanvas.classList.remove("activo");
  document.body.classList.remove("glitch-rojo");
}

function cicloGlitch() {
  const delay = Math.random() * 7000 + 8000;
  setTimeout(async () => {
    await hacerGlitch();
    cicloGlitch();
  }, delay);
}

cicloGlitch();
