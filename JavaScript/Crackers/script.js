const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let celebrationRunning = false;

document.getElementById("celebrateBtn").addEventListener("click", () => {
  if (!celebrationRunning) startCelebration();
});

function startCelebration() {
  celebrationRunning = true;
  const startTime = Date.now();

  const interval = setInterval(() => {
    createFirework();

    if (Date.now() - startTime > 2000) {
      clearInterval(interval);
      celebrationRunning = false;
    }
  }, 250); // new blast every 250ms
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.6;

  for (let i = 0; i < 80; i++) {
    particles.push({
      x,
      y,
      radius: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 10 + 2,
      life: 100
    });
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) particles.splice(index, 1);
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
