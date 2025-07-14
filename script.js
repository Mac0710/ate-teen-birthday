const birthdayDate = new Date("July 17, 2025 00:00:00").getTime();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

// Countdown logic
setInterval(() => {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);

// Button click actions
yesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

noBtn.addEventListener("click", () => {
  window.location.href = "birthday.html";
});
function shootConfetti() {
  confetti({
    particleCount: 20,             // More confetti
    spread: 120,                   // Covers more area
    startVelocity: 70,             // Falls faster
    origin: { y: 0 },
    gravity: 1.0,                  // Makes it fall to the bottom
    ticks: 300,                    // Stays visible longer
    colors: [
      '#ff0a54', '#ff477e', '#ff7096',
      '#fff200', '#38b000', '#3a0ca3',
      '#4cc9f0', '#f15bb5'
    ],
    scalar: 1.4                    // Slightly larger
  });
}

// Confetti loop every 400ms for constant action
setInterval(shootConfetti, 400);
