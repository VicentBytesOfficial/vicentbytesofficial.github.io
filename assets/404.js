document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage; 

  if (userLang.startsWith("es")) {
    window.location.href = "/es/404.html";
  } else if (userLang.startsWith("en")) {
    window.location.href = "/en/404.html";
  } else {
    window.location.href = "/en.html";
  }
});