const { getUsers, createUser } = require('../models/users.js');

module.exports.handleGetUsers = async (req, res) => {
  const rawData = await getUsers();
  return res.status(200).send(rawData);
};

module.exports.handleCreateUser = async (req, res) => {
  console.log(req.body);
  const { id, firstname, lastname, mail, password } = req.body;
  const userData = await createUser({
    id,
    firstname,
    lastname,
    mail,
    password,
  });

  if (!userData) {
    return res.status(424).send('failed to create user');
  }
  return res.status(201).send('User added');
};
