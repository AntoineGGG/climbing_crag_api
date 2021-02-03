/* eslint-disable no-unused-vars */
const argon2 = require('argon2');

const db = require('../db');

const definedAttributesToSqlSet = require('../helpers/definedAttributesToSqlSet');

const { RecordNotFoundError, ValidationError } = require('../error-types');

const hashPassword = async (user) => argon2.hash(user.password);
const verifyPassword = async (user, plainPassword) => {
  return argon2.verify(user.password, plainPassword);
};

const getUsers = async () => {
  return db.query('SELECT * FROM users');
};

const findByEmail = async (email, failIfNotFound = true) => {
  const rows = await db.query(`SELECT * FROM users WHERE email = ?`, [email]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const createUser = async (newAttributes) => {
  const { email } = newAttributes;
  const password = await hashPassword(newAttributes);
  const newObj = { ...newAttributes, password };
  const res = await db
    .query(`INSERT INTO users SET ${definedAttributesToSqlSet(newObj)}`, newObj)
    .catch((err) => {
      console.log(err);
      return false;
    });
  if (!res) {
    return false;
  }
  return { email, id: res.insertId };
};

module.exports = { getUsers, findByEmail, createUser, verifyPassword };
