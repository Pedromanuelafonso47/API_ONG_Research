# 🌍 API de ONGs - Projeto Node.js

Esta API permite acessar informações de ONGs (Organizações Não Governamentais) por categoria, listagem completa ou de forma aleatória. É ideal para conectar pessoas com instituições que fazem a diferença.



## 🚀 Tecnologias utilizadas

- Node.js  
- Express  
- Nodemon  


## 🧑‍💻 Como rodar o projeto

1. **Clone o repositório**
```bash
git clone https://github.com/seuusuario/api-ongs.git
```

2. **Entre na pasta do projeto**
```bash
cd api-ongs
```

3. **Instale as dependências**
```bash
npm install
```

4. **Execute o servidor**

👉 Usando **nodemon**:
```bash
npm run dev
```

👉 Usando **node**:
```bash
npm start
```

O servidor será iniciado em: [http://localhost:3000](http://localhost:3000)

---

## 📌 Estrutura de pastas

```
.
├── controllers
│   └── ongController.js
├── models
│   └── ongModel.js
├── routes
│   └── ongRoutes.js
├── app.js
├── server.js
├── package.json
```

---

## 📋 Endpoints da API

### 🔹 GET `/ongs`

Retorna **todas as ONGs** cadastradas.

---

### 🔹 GET `/ongs/categoria/:categoria`

Retorna todas as ONGs de uma **categoria específica**.

**Exemplo:**
```
/ongs/categoria/educacao
```

---

### 🔹 GET `/ongs/random`

Retorna uma **ONG aleatória** do banco de dados mockado.

---

## 🧠 Dados simulados

As ONGs estão cadastradas de forma estática em um array no arquivo `models/ongModel.js`.

Cada ONG contém os seguintes dados:

- `nome`
- `categoria`
- `site`
- `localizacao`

---

## 💡 Objetivo do Projeto

Este projeto foi criado com o objetivo de praticar conceitos fundamentais de APIs com Node.js e Express, ao mesmo tempo que promove o trabalho de organizações que atuam em áreas como:

- Educação  
- Direitos humanos  
- Combate à fome  

