let width = 10;
let height = 10;
let totalCells = width * height;
const grid = document.getElementById("grid");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const gameOverEl = document.getElementById("gameOver");
const finalScoreEl = document.getElementById("finalScore");
const matchSound = document.getElementById("matchSound");
const targetProgress = document.getElementById("targetProgress");
const restartBtn = document.getElementById("restartBtn");
const backBtn = document.getElementById("backBtn");
const targetFill = document.getElementById("targetFill");
const targetIcon = document.querySelector(".target-icon");
const targetCountEl = document.getElementById("targetCount");
const targetTotalEl = document.getElementById("targetTotal");

const crystalImages = [
  "https://i.postimg.cc/brFSnk9z/Group-2131328192.png", // туфелька
  "https://i.postimg.cc/h4CdNRWH/Group-2131328193.png", // сердечко
  "https://i.postimg.cc/c4rnSkd6/Group-2131328194.png", // пёрышко
  "https://i.postimg.cc/t46n11Zj/Group-2131328195.png", // полумесяц
  "https://i.postimg.cc/rpL058xt/white-glass-crystal-in-the-form-of-a-crescent-tran.png", // магшар
  "https://i.postimg.cc/4NqhNv3P/white-glass-crystal-in-the-shape-of-a-magic-ball-t-1-1.png" // бриллиант
];

let cells = [];
let score = 0;
let timeLeft = 120;
let timerInterval;
let firstSelected = null;
let isAnimating = false;

let collectedTypes = Array(crystalImages.length).fill(0);
let targetType = Math.floor(Math.random() * crystalImages.length);
const targetAmount = Math.floor(Math.random() * 61) + 40; // 40–100

function updateTargetProgress() {
  const count = collectedTypes[targetType];
  const fillPercent = Math.min((count / targetAmount) * 100, 100);
  if (targetIcon) targetIcon.style.backgroundImage = `url(${crystalImages[targetType]})`;
  if (targetCountEl) targetCountEl.textContent = count;
  if (targetTotalEl) targetTotalEl.textContent = targetAmount;
  if (targetFill) {
    targetFill.style.width = `${fillPercent}%`;
    if (fillPercent >= 100) targetFill.style.opacity = 0.8;
  }
}

function createCell(index) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  const type = Math.floor(Math.random() * crystalImages.length);
  cell.dataset.type = type;
  cell.style.backgroundImage = `url(${crystalImages[type]})`;
  cell.dataset.index = index;
  cell.addEventListener("click", () => handleClick(cell));
  return cell;
}

function fillGrid() {
  grid.innerHTML = "";
  cells = [];
  totalCells = width * height;
  for (let i = 0; i < totalCells; i++) {
    const cell = createCell(i);
    grid.appendChild(cell);
    cells.push(cell);
  }
  updateTargetProgress();
}

function updateTimer() {
  if (collectedTypes[targetType] >= targetAmount) {
    return; // цель достигнута — не продолжаем таймер
  }

  if (timeLeft <= 0) {
    endGame(false);
    return;
  }
  timeLeft--;
  const m = Math.floor(timeLeft / 60);
  const s = (timeLeft % 60).toString().padStart(2, '0');
  timerEl.textContent = `${m}:${s}`;
}

function handleClick(cell) {
  if (isAnimating) return;

  if (!firstSelected) {
    firstSelected = cell;
    cell.style.outline = "2px solid var(--accent, #fff)";
    return;
  }

  const i1 = parseInt(firstSelected.dataset.index);
  const i2 = parseInt(cell.dataset.index);

  if (areAdjacent(i1, i2)) {
    swapCells(i1, i2);
    if (hasMatch()) {
      animateMatches();
    } else {
      setTimeout(() => {
        swapCells(i1, i2);
      }, 200);
    }
  }

  firstSelected.style.outline = "none";
  firstSelected = null;
}

function areAdjacent(i1, i2) {
  const x1 = i1 % width;
  const y1 = Math.floor(i1 / width);
  const x2 = i2 % width;
  const y2 = Math.floor(i2 / width);
  return (Math.abs(x1 - x2) + Math.abs(y1 - y2)) === 1;
}

function swapCells(i1, i2) {
  const tempType = cells[i1].dataset.type;
  cells[i1].dataset.type = cells[i2].dataset.type;
  cells[i2].dataset.type = tempType;

  cells[i1].style.backgroundImage = `url(${crystalImages[cells[i1].dataset.type]})`;
  cells[i2].style.backgroundImage = `url(${crystalImages[cells[i2].dataset.type]})`;
}

function hasMatch() {
  return findMatches().length > 0;
}

function findMatches() {
  let matched = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width - 2; x++) {
      let i = y * width + x;
      const t = cells[i].dataset.type;
      if (t === cells[i+1].dataset.type && t === cells[i+2].dataset.type) {
        matched.push(i, i+1, i+2);
        if (t == targetType) collectedTypes[t] += 3;
      }
    }
  }

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height - 2; y++) {
      let i = y * width + x;
      const t = cells[i].dataset.type;
      if (t === cells[i+width].dataset.type && t === cells[i+2*width].dataset.type) {
        matched.push(i, i+width, i+2*width);
        if (t == targetType) collectedTypes[t] += 3;
      }
    }
  }

  return [...new Set(matched)];
}

function animateMatches() {
  isAnimating = true;
  const matched = findMatches();

  if (matched.length === 0) {
    isAnimating = false;
    return;
  }

  matched.forEach(i => {
    cells[i].classList.add("matched");
  });

  matchSound.currentTime = 0;
  matchSound.play();
  score += matched.length * 10;
  scoreEl.textContent = score;
  updateTargetProgress();

  if (collectedTypes[targetType] >= targetAmount) {
    endGame(true);
    return;
  }

  setTimeout(() => {
    dropCrystals(matched);
    setTimeout(() => {
      animateMatches();
    }, 300);
  }, 300);
}

function dropCrystals(matchedIndices) {
  matchedIndices.sort((a, b) => b - a);

  matchedIndices.forEach(index => {
    const col = index % width;
    const row = Math.floor(index / width);

    for (let r = row; r > 0; r--) {
      const from = (r - 1) * width + col;
      const to = r * width + col;
      cells[to].dataset.type = cells[from].dataset.type;
      cells[to].style.backgroundImage = `url(${crystalImages[cells[to].dataset.type]})`;
    }

    const newType = Math.floor(Math.random() * crystalImages.length);
    cells[col].dataset.type = newType;
    cells[col].style.backgroundImage = `url(${crystalImages[newType]})`;
  });

  document.querySelectorAll('.matched').forEach(cell => {
    cell.classList.remove('matched');
  });
}

function endGame(success) {
  clearInterval(timerInterval);
  gameOverEl.classList.remove("hidden");
  grid.style.display = "none";
  const collected = collectedTypes[targetType];
  finalScoreEl.textContent = score;

  gameOverEl.innerHTML = success
    ? ` Ура, цель уровня достигнута! Все нужные кристаллы собраны!\nТы набрала очков: ${score}`
    : ` Время вышло!<br>Ты набрала очков: ${score}<br> Собрано ${collected} из ${targetAmount}`;
}

restartBtn?.addEventListener("click", () => {
  location.reload();
});

backBtn?.addEventListener("click", () => {
  window.location.href = "index.html";
});

fillGrid();
timerInterval = setInterval(updateTimer, 1000);
setInterval(() => {
  if (!isAnimating) animateMatches();
}, 500);
