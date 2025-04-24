// Importa a aplicação configurada no arquivo app.js
const app = require('./app');
const PORT = 3000;// Define a porta onde o servidor vai rodar

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); // Inicia o servidor e exibe uma mensagem no terminal
