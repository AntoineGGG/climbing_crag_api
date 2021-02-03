const cragRoutesRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const {
  handleGetRoutes,
  handleCreateRoutes,
} = require('../controllers/CragRoutes.js');
const extractCurrentUser = require('../middlewares/extractCurrentUser.js');

cragRoutesRouter.get('/', extractCurrentUser, asyncHandler(handleGetRoutes));
cragRoutesRouter.post('/', asyncHandler(handleCreateRoutes));

module.exports = { cragRoutesRouter };
