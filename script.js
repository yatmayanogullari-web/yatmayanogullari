// Ferman animasyonunu reload'da düzgün tetikle + (istersek) kart reveal
document.addEventListener("DOMContentLoaded", () => {
  const ferman = document.getElementById("ferman");

  // Ferman giriş animasyonu reload'da takılmasın
  if (ferman) {
    ferman.style.animation = "none";
    void ferman.offsetHeight; // reflow
    ferman.style.animation = "";
  }

  // Kartları güvenli şekilde görünür yap (ne olursa olsun)
  document.querySelectorAll(".reveal").forEach(el => {
    el.classList.add("is-in");
  });
});
