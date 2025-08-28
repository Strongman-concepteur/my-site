// Afficher/masquer les sections
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Navigation entre formulaires
function nextForm(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function prevForm(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Validation inscription
function validerInscription() {
  alert("Votre inscription est effectuée avec succès !");
  showSection('liste');

  // Ajouter élève fictif
  const elevesList = document.getElementById('elevesList');
  let li = document.createElement('li');
  li.textContent = "Nouvel élève inscrit";
  elevesList.appendChild(li);
}
