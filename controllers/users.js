const { getUsers, createUser, getOneUser } = require('../models/users.js');

module.exports.handleGetUsers = async (req, res) => {
  const rawData = await getUsers();
  return res.status(200).send(rawData);
};

module.exports.handleGetCurrentUser = async (req, res) => {
  const rawData = await getOneUser(req.session.userId);
  return res.status(200).send(rawData);
};

module.exports.handleCreateUser = async (req, res) => {
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
