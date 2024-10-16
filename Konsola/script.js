const closeButton = document.querySelector('.close');
const windowElement = document.querySelector('.window');

closeButton.addEventListener('click', () => {
  windowElement.style.display = 'none'; 
});

windowElement.style.display = 'block'; 

const textElement = document.getElementById('text');
const text1 = "Witaj jestem Kevin.\nMoim zadaniem jest dbać o parametry mojego Pana.\nNiestety utraciłem z nim kontakt :/\n...\nPróba połączenia\n10%\n20%\n30%\n41%\n45%\n55%\n68%\n77%\n85%\n99%\n99%\n99%\n...\nBrak połączenia.";
const text2 = "Witaj jestem Kevin.\nMoim zadaniem jest dbać o parametry mojego Pana.\nNiestety utraciłem z nim kontakt :/\n...\nPróba połączenia\n10%\n33%\n66%\n100%\nNawiązanoa kontakt, ale Pan nie reaguje.\nZ moich danych wynika, że jego świadomość jest w Tym dysku.\nNiestety potrzebny jest obiekt fizyczny, aby go przywrócić.\nJeśli masz dostę do jakiegoś to zabierz je do biura na górze po lewej jest mały pokój w, którym znajdują się potrzebne rzeczy jeśli je podłączysz ja powim Ci co dalej.";
const text = "Witaj Iris już prawie wszystko gotowe,\ngdzieś na tym laptopie znajduje się ukryty plik zatytułowany ''Góra''.\n Wiem, że jes zabezpieczony jakimś hasłem, które nie zostało mi podane.\n Podpowiedź do hasła: Słowo bezpieczeństwa mojej córki.\n\nNiestety nie posiadam, więcej danych.";
let i = 0;

function typeText() {
  if (i < text.length) {
    const char = text.charAt(i);
    if (char === '\n') { // Jeśli napotkamy znak nowej linii
      textElement.innerHTML += '<br>'; // Dodaj tag <br>
    } else {
      textElement.innerHTML += char; // Dodaj znak
    }
    i++;
    setTimeout(typeText, 50); // Opóźnienie 50 milisekund
  }
}

typeText();