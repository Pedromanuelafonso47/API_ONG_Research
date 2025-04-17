// app.js
const express = require('express');
const app = express();

// Importar as rotas
const ongRoutes = require('./routes/ongRoutes');

// Middleware para aceitar JSON
app.use(express.json());

// Usar as rotas
app.use('/ongs', ongRoutes);

module.exports = app;
