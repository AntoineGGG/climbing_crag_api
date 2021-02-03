const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { handleGetUsers, handleCreateUser } = require('../controllers/users.js');

userRouter.get('/', asyncHandler(handleGetUsers));
userRouter.post('/', asyncHandler(handleCreateUser));

module.exports = { userRouter };
