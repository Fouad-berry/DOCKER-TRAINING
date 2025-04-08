const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.get('/entreprise', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: 'Veuillez fournir un paramètre de requête "q" pour la recherche.' });
    }

    try {
        const response = await axios.get(`https://recherche-entreprises.api.gouv.fr/search`, {
            params: { q, page: 1, per_page: 1 }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    }
});
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
