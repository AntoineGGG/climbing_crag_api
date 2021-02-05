const loginRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { handleLogin } = require('../controllers/Login.js');

loginRouter.post('/', asyncHandler(handleLogin));

module.exports = { loginRouter };
