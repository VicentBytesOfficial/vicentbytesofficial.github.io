export async function boxOpacity(classs, opacityv) {
  const elementos = document.querySelectorAll(classs);
  elementos.forEach(el => el.style.opacity = opacityv);
}