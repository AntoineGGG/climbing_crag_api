const login = require('express').Router();
const asyncHandler = require('express-async-handler');

const { handleLogin } = require('../controllers/Login.js');

login.post('/', asyncHandler(handleLogin));

module.exports = { login };
