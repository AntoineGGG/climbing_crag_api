const db = require('../db');
const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

/* const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet'); */

const getCrags = async () => {
  return db.query('SELECT * FROM crags');
};

const createCrags = async (newAttributes) => {
  return db.query(
    `INSERT INTO crags SET ${definedAttributesToSqlSet(newAttributes)}`,
    newAttributes
  );
};

module.exports = { getCrags, createCrags };
