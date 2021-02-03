const { verifyPassword, findByEmail } = require('../models/users.js');
// const { SESSION_COOKIE_NAME } = require('../env');

module.exports.handleLogin = async (req, res) => {
  const user = await findByEmail(req.body.email, false);
  const checkedPassword = await verifyPassword(user, req.body.password);

  if (!user) {
    return res.sendStatus(401);
  }

  if (checkedPassword && user) {
    if (req.body.stayConnected) {
      req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
    }
    req.session.userId = user.id;
    req.session.save(() => {
      res.status(200).send(req.session);
    });
    return null;
  }
  return res.status(401).send('Invalid Credentials');
};
