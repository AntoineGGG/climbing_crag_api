const {
  createRoutes,
  getRoutes,
  linkRouteToCragToUsers,
} = require('../models/CragRoutes.js');

module.exports.handleGetRoutes = async (req, res) => {
  const rawData = await getRoutes();
  return res.status(200).send(rawData);
};
module.exports.handleCreateRoutes = async (req, res) => {
  const {
    id,
    name,
    multipitch,
    grade,
    done,
    picture,
    Crag_id,
    length,
    comment,
  } = req.body;
  const routesData = await createRoutes({
    id,
    name,
    multipitch,
    grade,
    done,
    picture,
    length,
    comment,
  });
  await linkRouteToCragToUsers(req.session.userId, routesData.id, Crag_id);

  if (!routesData) {
    return res.status(424).send('Failed to create your routes');
  }
  return res.status(201).send('Routes created');
};
