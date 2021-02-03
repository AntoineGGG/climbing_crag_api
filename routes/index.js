// const thingsRoutes = require('./things');
const { userRouter } = require('./users.js');
const { loginRouter } = require('./login.js');
const { cragRouter } = require('./crag.js'); // eslint-disable-next-line
const { cragRoutesRouter } = require('./cragRoutes.js');
module.exports = (app) => {
  // app.use('/things', thingsRoutes);
  app.use('/users', userRouter);
  app.use('/login', loginRouter);
  app.use('/crags', cragRouter);
  app.use('/routes', cragRoutesRouter);
};
