// Miśki w tle
function spawnBears() {
  const container = document.getElementById('bears-bg');
  container.innerHTML = '';
  const bears = 28;
  for (let i = 0; i < bears; i++) {
    const span = document.createElement('span');
    span.textContent = "🧸";
    span.className = "bear-emoji";
    span.style.left = Math.random() * 98 + "vw";
    span.style.top = (75 + Math.random() * 24) + "vh";
    span.style.fontSize = (2 + Math.random()*2.5) + "rem";
    span.style.opacity = (0.6 + Math.random()*0.35).toFixed(2);
    span.style.animationDelay = (Math.random() * 7) + "s";
    container.appendChild(span);
  }
}
spawnBears();

// Main logic
const startBtn = document.getElementById('start-btn');
const bigHeart = document.getElementById('big-heart');
const ip = document.getElementById('ip');

function resetStates() {
  bigHeart.textContent = '';
  ip.textContent = '';
  bigHeart.classList.remove('fade-in');
  ip.classList.remove('fade-in');
}

startBtn.onclick = () => {
  resetStates();
  startBtn.style.display = 'none';
  bigHeart.textContent = "Kocham Cię! 🧸";
  bigHeart.classList.add('fade-in');
  setTimeout(() => {
    showIp();
  }, 4000);
};

function showIp() {
  bigHeart.textContent = "❤️";
  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      ip.textContent = data.ip;
      ip.classList.add('fade-in');
    })
    .catch(() => {
      ip.textContent = "Nie udało się pobrać IP";
    });
}
