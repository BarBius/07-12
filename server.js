const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/ecole', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
console.log(`Serveur démarré sur le port ${PORT}`);
});
