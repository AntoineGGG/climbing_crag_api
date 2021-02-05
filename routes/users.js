const userRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const {
  handleGetUsers,
  handleCreateUser,
  handleGetCurrentUser,
} = require('../controllers/users.js');
const extractCurrentUser = require('../middlewares/extractCurrentUser.js');

userRouter.get('/', asyncHandler(handleGetUsers));
userRouter.get('/me', extractCurrentUser, asyncHandler(handleGetCurrentUser));
userRouter.post('/', asyncHandler(handleCreateUser));

module.exports = { userRouter };
