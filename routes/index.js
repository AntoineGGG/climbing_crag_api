// const thingsRoutes = require('./things');
const { userRouter } = require('./users.js');
// eslint-disable-next-line
module.exports = (app) => {
  // app.use('/things', thingsRoutes);
  app.use('/users', userRouter);
};
