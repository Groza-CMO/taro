const canvas = document.getElementById("dreamCanvas");
const ctx = canvas.getContext("2d");

// Заглушки, потом подгрузим реальные изображения
const assets = {
  rings: ["ring1.png", "ring2.png", "ring3.png"],
  webs: ["web1.png", "web2.png", "web3.png"],
  beads: ["bead1.png", "bead2.png", "bead3.png"],
  feathers: ["feather1.png", "feather2.png", "feather3.png"]
};

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}

async function renderDreamCatcher() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const ringIndex = document.getElementById("ringSelect").value - 1;
  const webIndex = document.getElementById("webSelect").value - 1;
  const beadIndex = document.getElementById("beadSelect").value - 1;
  const featherIndex = document.getElementById("featherSelect").value - 1;

  const images = await Promise.all([
    loadImage(`img/rings/${assets.rings[ringIndex]}`),
    loadImage(`img/webs/${assets.webs[webIndex]}`),
    loadImage(`img/beads/${assets.beads[beadIndex]}`),
    loadImage(`img/feathers/${assets.feathers[featherIndex]}`)
  ]);

  images.forEach(img => ctx.drawImage(img, 0, 0, canvas.width, canvas.height));
}

document.querySelectorAll("select").forEach(sel => {
  sel.addEventListener("change", renderDreamCatcher);
});

document.getElementById("saveDreamBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "dreamcatcher.png";
  link.href = canvas.toDataURL();
  link.click();
});

document.getElementById("backToMenuBtn").addEventListener("click", () => {
  showSection("choiceGame");
});

renderDreamCatcher(); // инициализация
