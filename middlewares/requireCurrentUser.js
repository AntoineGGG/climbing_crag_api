const { UnauthorizedError } = require('../error-types');
const { getOneUser } = require('../models/users');

module.exports = async (req, res, next) => {
  req.currentUser = await getOneUser(req.session.userId, false);
  console.log(req.currentUser);

  if (!req.currentUser || req.currentUser.length === 0) {
    return next(new UnauthorizedError());
  }

  return next();
};
