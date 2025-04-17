// models/ongModel.js

const ongs = [
  {
    nome: 'Instituto Terra',
    categoria: 'meio-ambiente',
    site: 'https://institutoterra.org',
    localizacao: 'Minas Gerais, Brasil'
  },
  {
    nome: 'Cruz Vermelha Brasileira',
    categoria: 'direitos-humanos',
    site: 'https://cruzvermelha.org.br',
    localizacao: 'Nacional'
  },
  {
    nome: 'Ampara Animal',
    categoria: 'protecao-animal',
    site: 'https://amparanimal.org.br',
    localizacao: 'São Paulo, Brasil'
  },
  {
    nome: 'Ação da Cidadania',
    categoria: 'combate-a-fome',
    site: 'https://acaodacidadania.org.br',
    localizacao: 'Rio de Janeiro, Brasil'
  },
  {
    nome: 'Fundação Lemann',
    categoria: 'educacao',
    site: 'https://fundacaolemann.org.br',
    localizacao: 'São Paulo, Brasil'
  }
];

exports.getOngs = () => ongs;

exports.getOngsByCategory = (categoria) =>
  ongs.filter(ong => ong.categoria === categoria.toLowerCase());

exports.getRandomOng = () => {
  const index = Math.floor(Math.random() * ongs.length);
  return ongs[index];
};
