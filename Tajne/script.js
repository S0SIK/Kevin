document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('login-form');
  const windowElement = document.querySelector('.window'); // Pobierz element .window
  const strona1 = document.getElementById("strona1");
  const strona2 = document.getElementById("strona2");
  const text1 = document.getElementById("strona1").querySelector("#text");
  const text2 = document.getElementById("strona2").querySelector("#text");
  const limit = 10; // Ustaw limit na 10 opcji
  let displayedOptions = 7; // Licznik wyświetlanych opcji na lewej stronie (zaczynamy od 6)

  // Funkcja do ukrycia nadmiarowych opcji
  function ukryjOpcje() {
    const opcje = text1.querySelectorAll("div");
    for (let i = 0; i < opcje.length; i++) {
      if (i >= limit) {
        opcje[i].style.display = "none";
      } else {
        opcje[i].style.display = "block";
      }
    }
    // Dodaj element do wyświetlania limitu tylko raz po załadowaniu
    if (!document.getElementById("limitDisplay")) { // Sprawdź, czy element już istnieje
      const limitDisplay = document.createElement("div");
      limitDisplay.id = "limitDisplay"; // Dodaj identyfikator
      limitDisplay.textContent = `Wyświetlonych opcji: ${displayedOptions}/${limit}`;
      strona1.insertBefore(limitDisplay, text1); // Dodaj przed #text1
    }
  }

  // Wywołaj funkcję po załadowaniu strony
  window.onload = ukryjOpcje;

  

  const closeButton = document.querySelector(".close");

  closeButton.addEventListener("click", function () {
    if (confirm("Czy chcesz anulować działanie?")) {
      window.location.href = "../index2.html";
    }
  });

  const przeniesDaneButton = document.querySelector(".przeniesDane");

  przeniesDaneButton.addEventListener("click", function () {
    if (confirm("Czy chcesz przenieść dane?")) {
      window.location.href = "../end/index.html";
    }
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === 'Brak') {
      // Usuń formularz logowania
      const h1Element = document.querySelector('h1');
      h1Element.remove();
      loginForm.remove();
      document.querySelector(".login-form").classList.remove("login-form");

      // Wyświetl okno z treścią
      windowElement.style.display = 'block'; 

    } else {
      alert("Nieprawidłowe hasło!");
    }
  });
});


