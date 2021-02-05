const db = require('../db');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

const getAllRoutes = async () => {
  return db.query(
    'Select UR.*, R.*, C.*, U.firstname, U.lastname from User_has_Routes as UR INNER JOIN routes AS R ON R.id=UR.routes_id INNER JOIN crags AS C ON C.id = UR.crag_id INNER JOIN users AS U ON U.id=UR.User_id'
  );
};

const getUserRoutes = async (id) => {
  return db.query(
    'Select UR.*, R.*, C.*, U.firstname, U.lastname from User_has_Routes as UR INNER JOIN routes AS R ON R.id=UR.routes_id INNER JOIN crags AS C ON C.id = UR.crag_id INNER JOIN users AS U ON U.id=UR.User_id where UR.User_id = ?',
    [id]
  );
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

module.exports = {
  getAllRoutes,
  createRoutes,
  linkRouteToCragToUsers,
  getUserRoutes,
};
