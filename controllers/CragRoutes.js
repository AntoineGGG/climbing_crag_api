const {
  createRoutes,
  getAllRoutes,
  getUserRoutes,
  linkRouteToCragToUsers,
} = require('../models/CragRoutes.js');

module.exports.handleGetAllRoutes = async (req, res) => {
  const rawData = await getAllRoutes();
  return res.status(200).send(rawData);
};

module.exports.handleGetUserRoutes = async (req, res) => {
  let rawData;
  if (req.session.userId) {
    rawData = await getUserRoutes(req.session.userId);
  }
  return res.status(200).send(rawData);
};
module.exports.handleCreateRoutes = async (req, res) => {
  const picture = req.file ? req.file.path : null;
  const {
    name,
    multipitch,
    grade,
    done,
    Crag_id,
    length,
    comment,
  } = JSON.parse(req.body.data);
  const routesData = await createRoutes({
    name,
    multipitch,
    picture,
    grade,
    done,
    length,
    comment,
  });
  await linkRouteToCragToUsers(req.session.userId, routesData.id, Crag_id);

  if (!routesData) {
    return res.status(424).send('Failed to create your routes');
  }
  return res.status(201).send('Routes created');
};
