const db = require('../db');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

const getRoutes = async () => {
  return db.query('Select * FROM routes');
};

const createRoutes = async (newAttributes) => {
  const res = await db.query(
    `INSERT INTO routes SET ${definedAttributesToSqlSet(newAttributes)}`,
    newAttributes
  );
  if (!res) {
    return false;
  }
  return { id: res.insertId };
};

const linkRouteToCragToUsers = async (user_id, routes_id, crags_id) => {
  await db.query('INSERT INTO User_has_Routes VALUES (?, ?, ?)', [
    user_id,
    routes_id,
    crags_id,
  ]);
};

module.exports = { getRoutes, createRoutes, linkRouteToCragToUsers };
