const { getCrags, createCrags } = require('../models/crag');

module.exports.handleGetCrags = async (req, res) => {
  const rawData = await getCrags();
  return res.status(200).send(rawData);
};

module.exports.handleCreateCrags = async (req, res) => {
  const { id, name, exposition, rocks, city, picture, comment } = req.body;
  const cragsData = await createCrags({
    id,
    name,
    exposition,
    rocks,
    city,
    picture,
    comment,
  });
  if (!cragsData) {
    return res.status(424).send('Failed to create the crag');
  }
  return res.status(201).send('Crag Created');
};
