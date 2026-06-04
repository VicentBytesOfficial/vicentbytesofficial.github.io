export function write(text, clase, time) {
  return new Promise((resolve) => {
    const elemento = document.querySelector(clase);
    let i = 0;

    function loop() {
      if (i < text.length) {
        elemento.textContent += text[i];
        i++;
        setTimeout(loop, time);
      } else {
        resolve(); 
      }
    }

    loop();
  });
}

export async function lineWrite(clase, interval) {
  const cursor = document.querySelector(".cursor");
  while (true) {
    cursor.style.visibility = "hidden";
    await new Promise(r => setTimeout(r, interval));
    cursor.style.visibility = "visible";
    await new Promise(r => setTimeout(r, interval));
  }
}