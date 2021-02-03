const cragRouter = require('express').Router();
const asyncHandler = require('express-async-handler');

const { handleGetCrags, handleCreateCrags } = require('../controllers/Crag.js');

cragRouter.get('/', asyncHandler(handleGetCrags));
cragRouter.post('/', asyncHandler(handleCreateCrags));

module.exports = { cragRouter };
