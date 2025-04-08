const form = document.getElementById('searchForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = document.getElementById('query').value;

  resultDiv.innerHTML = 'Chargement...';

  try {
    const response = await fetch(`/entreprise?q=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const company = data.results[0];
      resultDiv.innerHTML = `
        <h2>${company.nom_raison_sociale}</h2>
        <p><strong>SIREN :</strong> ${company.siren}</p>
        <p><strong>SIREN :</strong> ${company.nom_complet}</p>
        <p><strong>Nom raison social :</strong> ${company.nom_raison_sociale}</p>
      `;
    } else {
      resultDiv.innerHTML = "Aucune entreprise trouvée.";
    }
  } catch (error) {
    resultDiv.innerHTML = "Erreur lors de la récupération des données.";
    console.error(error);
  }
});
