// Ferman açılış kontrolü
document.addEventListener("DOMContentLoaded", () => {
  const ferman = document.getElementById("ferman");
  if (!ferman) return;

  // Yeniden yüklemede animasyonun düzgün çalışması için
  ferman.style.animation = "none";
  // reflow tetikle
  void ferman.offsetHeight;
  ferman.style.animation = "";
});

// Gelecekte animasyon veya ek davranışlar buraya eklenebilir
