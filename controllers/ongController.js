// controllers/ongController.js
const ongModel = require('../models/ongModel');

exports.getAllOngs = (req, res) => {
  const ongs = ongModel.getOngs();
  res.json(ongs);
};

exports.getOngsByCategory = (req, res) => {
  const categoria = req.params.categoria;
  const ongs = ongModel.getOngsByCategory(categoria);
  res.json(ongs);
};

exports.getRandomOng = (req, res) => {
  const ong = ongModel.getRandomOng();
  res.json(ong);
};
