function openModal(imageSrc) {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalImage").src = imageSrc;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}