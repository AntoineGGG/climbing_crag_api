const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const {
  handleGetUsers,
  handleCreateUsers,
} = require('../controllers/users.js');

userRouter.get('/', asyncHandler(handleGetUsers));
userRouter.post('/', asyncHandler(handleCreateUsers));

module.exports = { userRouter };
