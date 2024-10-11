// Funkcja do wyświetlania modalnego okna z treścią notatki
function openNoteModal(title, content) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalContent").textContent = content;
}

// Dodaj obsługę kliknięcia do każdego diva
const notatki = document.querySelectorAll('.notatka');
notatki.forEach(notatka => {
  notatka.addEventListener('click', () => {
    const title = notatka.getAttribute('data-title');
    const content = notatka.getAttribute('data-content');
    openNoteModal(title, content);
  });
});

// Funkcja do zamykania modalnego okna
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

const notatka = document.querySelector('.notatka2[data-title="DJH.89867C5.77 Iris"]');
const notatka2 = document.querySelector('.notatka2[data-title="DJH.8634738.34 Ochrona"]');

notatka.addEventListener('click', () => {
  alert('Nie można otworzyć pliku. Plik jest uszkodzony.');
});
notatka2.addEventListener('click', () => {
  alert('Nie można otworzyć pliku. Plik jest uszkodzony.');
});