const db = require('../db');

const getUsers = async () => {
  return db.query('SELECT * FROM users');
};

module.exports = { getUsers };
