document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('login-form');
  const windowElement = document.querySelector('.window');
  const strona1 = document.getElementById("strona1");
  const strona2 = document.getElementById("strona2");
  const text1 = document.getElementById("strona1").querySelector("#text");
  const text2 = document.getElementById("strona2").querySelector("#text");
  const limit = 10;
  let displayedOptions = 8;

  const tooltipTargetElements = document.querySelectorAll('.tooltip-target');
  const tooltipText = document.getElementById('tooltipText');
  
  tooltipTargetElements.forEach(element => {
    element.addEventListener('mouseover', () => {
      tooltipText.textContent = element.dataset.tooltip;
    });
  
    element.addEventListener('mouseout', () => {
      tooltipText.textContent = '';
    });
  });

  const tooltipTargets = document.querySelectorAll('.tooltip-target');

  tooltipTargets.forEach(target => {
    target.addEventListener('mouseover', () => {
      const tooltipText = target.getAttribute('data-tooltip');
      const formattedTooltipText = tooltipText.replace(/\n/g, '<br>');
      const tooltipElement = document.getElementById('tooltipText'); // Załóżmy, że masz element div z id="tooltipText" do wyświetlania tooltipa
      tooltipElement.innerHTML = formattedTooltipText;
    });
  });

  function ukryjOpcje() {
    const opcje = text1.querySelectorAll("div");
    for (let i = 0; i < opcje.length; i++) {
      if (i >= limit) {
        opcje[i].style.display = "none";
      } else {
        opcje[i].style.display = "block";
      }
    }
    if (!document.getElementById("limitDisplay")) {
      const limitDisplay = document.createElement("div");
      limitDisplay.id = "limitDisplay";
      limitDisplay.textContent = `Wyświetlonych opcji: ${displayedOptions}/${limit}`;
      strona1.insertBefore(limitDisplay, text1);
    }
  }
  window.onload = ukryjOpcje;

  text1.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV" && event.target !== text1) {
      text2.appendChild(event.target);
      displayedOptions--;
      document.getElementById("limitDisplay").textContent = `Wyświetlonych opcji: ${displayedOptions}/${limit}`;
    }
  });

  text2.addEventListener("click", function (event) {
    if (event.target.tagName === "DIV" && event.target !== text2) {
      if (displayedOptions < limit) {
        text1.appendChild(event.target);
        displayedOptions++;
        if (displayedOptions > limit) {
          const opcje = text1.querySelectorAll("div");
          opcje[opcje.length - 1].style.display = "none";
          displayedOptions--;
        }
        document.getElementById("limitDisplay").textContent = `Pojemność wspomnień: ${displayedOptions}/${limit}`;
      }
    }
  });
  const closeButton = document.querySelector(".close");

  closeButton.addEventListener("click", function () {
    if (confirm("Czy chcesz anulować działanie?")) {
      window.location.href = "../index2.html";
    }
  });

  const przeniesDaneButton = document.querySelector(".przeniesDane");

  przeniesDaneButton.addEventListener("click", function () {
    if (confirm("Czy chcesz przenieść dane?")) {
      window.location.href = "../End/index.html";
    }
  });

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.getElementById('password').value;

    if (password === 'Motylek' || password === 'motylek') {
      const h1Element = document.querySelector('h1');
      h1Element.remove();
      loginForm.remove();
      document.querySelector(".login-form").classList.remove("login-form");

      windowElement.style.display = 'block'; 

    } else {
      alert("Nieprawidłowe hasło!");
    }
  });
});