export async function boxOpacity(clase, opacityv) {
  const elementos = document.querySelectorAll(clase);
  elementos.forEach(el => el.style.opacity = opacityv);
}