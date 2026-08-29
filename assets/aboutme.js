window.addEventListener('load', () => {
if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    }
}
});