let usersData = [];
let id = 1;

function createUser(request, response) {
  const newUser = request.body;

  const userWithID = { id, ...newUser };
  id++;
  usersData.push(userWithID);

  response.status(201).json({ message: "Sucesso, usuário criado" });
}

function getUser(request, response) {
  const { name } = request.query;

  if (name) {
    const findedUser = usersData.find((user) => user.name == name);
    console.log(findedUser)
  }
  response.status(200).json(usersData);
}

function getUserById(request, response) {
  const { id } = request.params;

  const findedUser = usersData.find(
    // (user) => user.id == id pode usar 2 iguais para comparar
    (user) => user.id === Number(id)
  );

  if (!findedUser) {
    response.status(404).json({ message: "Usuário não encontrado" });
  }

  response.status(200).json(findedUser);
}

module.exports = { createUser, getUser, getUserById };
