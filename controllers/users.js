const { getUsers } = require('../models/users.js');

module.exports.handleGetUsers = async (req, res) => {
  const rawData = await getUsers();
  return res.status(200).send(rawData);
};
