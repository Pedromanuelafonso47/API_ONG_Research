// routes/ongRoutes.js
const express = require('express');
const router = express.Router();
const ongController = require('../controllers/ongController');

// Rotas
router.get('/', ongController.getAllOngs); // /ongs
router.get('/categoria/:categoria', ongController.getOngsByCategory); // /ongs/categoria/educacao
router.get('/random', ongController.getRandomOng); // /ongs/random

module.exports = router;
