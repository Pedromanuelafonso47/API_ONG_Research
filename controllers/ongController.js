// Importa o model que contém os dados e funções de manipulação das ONGs
const ongModel = require('../models/ongModel');
// Controlador para retornar TODAS as ONGs
exports.getAllOngs = (req, res) => {
  const ongs = ongModel.getOngs();
  // Envia a lista de ONGs como resposta em formato JSON                     
  res.json(ongs);
};
// Controlador para retornar ONGs por categoria
exports.getOngsByCategory = (req, res) => {
  const categoria = req.params.categoria;
  // Filtra as ONGs pela categoria usando o model
  const ongs = ongModel.getOngsByCategory(categoria);
  res.json(ongs);//retorna a lista filtrada
};
//Controlador para retornar uma ONG aliatoria
exports.getRandomOng = (req, res) => {
  const ong = ongModel.getRandomOng();
  res.json(ong);
};
