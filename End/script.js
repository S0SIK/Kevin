const progressBar = document.querySelector('.progress-bar');
const message = document.querySelector('.message');

// Symulacja ładowania (zmienić czas na potrzeby rzeczywistego ładowania)
let progress = 0;
const interval = setInterval(() => {
  progress += 2; // Zwiększ pasek o 5%
  progressBar.style.width = `${progress}%`;

  if (progress >= 200) {
    clearInterval(interval); // Zatrzymaj animację
    message.textContent = "...Udane..."; // Zmień treść na "Pomyślne"
  }
}, 100); // Czas trwania jednego kroku animacji (w milisekundach)
