const loginForm = document.getElementById('login-form');
const iconsContainer = document.getElementById('icons');


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = document.getElementById('password').value;

  if (password === 'D3M0N1C4') {
    // Usuń formularz logowania
    const h1Element = document.querySelector('h1');
    h1Element.remove();
    loginForm.remove();
    document.querySelector(".login-form").classList.remove("login-form");
    // Dodaj ikony
    const icons = [
      {
        name: 'Lifeinvader',
        url: "Lifeinvader/index.html",
        icon: 'img/Lifeinvader.png'
      },
      {
        name: 'Tajne',
        url: "Tajne/index.html",
        icon: 'img/tajne.jpg'
      },
      {
        name: 'Kevin',
        url: "Kevin/index.html",
        icon: 'img/kojot.png'
      },
      {
        name: 'Notatki',
        url: "Notatnik/index.html",
        icon: 'img/notes.png'
      },
      {
        name: 'Galeria',
        url: "Galeria/index.html",
        icon: 'img/galeria.png'
      },
      {
        name: ' ',
        url: "Ciało/index.html",
        icon: 'img/góra.png'
      }
    ];

    icons.forEach((icon) => {
      const iconElement = document.createElement('div');
      iconElement.classList.add('icon');
      iconElement.setAttribute('onclick', `window.location.href='${icon.url}'`);

      const textElement = document.createElement('p');
      textElement.textContent = icon.name;
      textElement.classList.add('text');

      const iconImage = document.createElement('img');
      iconImage.setAttribute('src', icon.icon);
      iconImage.classList.add('png');

      iconElement.appendChild(textElement);
      iconElement.appendChild(iconImage);
      iconsContainer.appendChild(iconElement);
    });
  } else { 
    alert('Nieprawidłowe hasło!');
  }
});