const express = require('express');
const { json } = require('express');
const { connect } = require('mongoose');
const { find } = require('./Etudiant');
const app = express();

// Connexion à MongoDB
connect('mongodb://localhost/ecole', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(json());

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

app.get('/api/etudiants', async (req, res) => {
  try {
    const etudiants = await find();
    res.json(etudiants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
