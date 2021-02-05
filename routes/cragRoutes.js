const cragRoutesRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const {
  handleGetAllRoutes,
  handleCreateRoutes,
  handleGetUserRoutes,
} = require('../controllers/CragRoutes.js');
const extractCurrentUser = require('../middlewares/extractCurrentUser.js');
const mainUploadImage = require('../middlewares/handleImageUpload.js');

cragRoutesRouter.get('/all', asyncHandler(handleGetAllRoutes));
cragRoutesRouter.get(
  '/',
  extractCurrentUser,
  asyncHandler(handleGetUserRoutes)
);

cragRoutesRouter.post('/', mainUploadImage, asyncHandler(handleCreateRoutes));

module.exports = { cragRoutesRouter };
