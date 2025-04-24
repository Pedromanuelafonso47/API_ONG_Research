// Lista de ONGs simulando um "banco de dados"
const ongs = [
  {
    nome: 'Programadores Do Amanhã',
    categoria: 'educacao',
    site: 'https://programadoresdoamanha.org.br/pt',
    localizacao: 'Belo Horizonte, Brasil'
  },
  {
    nome: 'Fraternidade – Missões Humanitárias Internacionais (FMHI)',
    categoria: 'direitos-humanos',
    site: 'https://www.missoeshumanitarias.org/quem-somos/',
    localizacao: 'Luanda, Angola'
  },
  {
    nome: 'Fundação lwini',
    categoria: 'direitos humanos',
    site: 'https://amparanimal.org.br',
    localizacao: 'Luanda, Angola'
  },
  {
    nome: 'Fundação Bornito de Sousa',
    categoria: 'combate-a-fome',
    site: 'https://www.fbs.ao/',
    localizacao: 'Luanda, Angola'
  },
  {
    nome: 'Pulse Mais',
    categoria: 'educacao',
    site: 'https://pulsemais.org.br/',
    localizacao: 'São Paulo, Brasil'
  }
];

// Retorna todas as ONGs
exports.getOngs = () => ongs;

// Retorna ONGs filtradas pela categoria

exports.getOngsByCategory = (categoria) =>
  ongs.filter(ong => ong.categoria === categoria.toLowerCase());
// Retorna uma ONG aleatória

exports.getRandomOng = () => {
  const index = Math.floor(Math.random() * ongs.length);
  return ongs[index];
};
