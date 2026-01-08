// Ge// Ferman açılış kontrolü
document.addEventListener("DOMContentLoaded", () => {
  const ferman = document.getElementById("ferman");

  if (!ferman) return;

  // Yeniden yüklemede animasyonun düzgün çalışması için
  ferman.style.animation = "none";
  ferman.offsetHeight; // reflow tetikle
  ferman.style.animation = "";
});
lecekte animasyon veya ek davranışlar buraya eklenebilir
