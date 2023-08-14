// Importamos o framework express
const express = require("express");

// Importar o userController
const userController = require("./controllers/userController.js");

// Iniciamos o express
const app = express();

// Definir o uso do json como padrão
app.use(express.json());

// Criar usuário
app.post("/user", userController.createUser);

// Listar usuários
app.get("/user", userController.getUser);

//Listar um usuário por id
app.get('/user/:id', userController.getUserById )

// Definimos a porta onde ele vai rodar
const PORT = 3333;

// Ficamos ouvindo na porta definida e trazemos um status do servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
