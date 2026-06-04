document.addEventListener("DOMContentLoaded", () => {
  const userLang = navigator.language || navigator.userLanguage; 

  if (userLang.startsWith("es")) {
    window.location.href = "/es";
  } else if (userLang.startsWith("en")) {
    window.location.href = "/en";
  } else {
    window.location.href = "/en";
  }
});
