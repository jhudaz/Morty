const Provider = require('../../db/providers');
//get method
const getProviders = async (req, res) => {
  try {
    const providers = await Provider.find({});
    res.json(providers);
  } catch (err) {
    res.json(err);
  }
}
//post method
const postProviders = async (req, res) => {
  try {
    const newProvider = new Provider({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleName: req.body.middleName,
      email: req.body.email
    })
    await newProvider.save();
    res.json(newProvider);

  } catch (err) {
    res.json(err);
  }
}
//delete method
const deleteProviders = async (req, res) => {
  try {
    const deleteProviders = await Provider.findOneAndRemove(req.body.deleteBy);
    res.json(deleteProviders);
  } catch (err) {
    res.json(err);
  }
}
//put method
const putProviders = async (req, res) => {
  try {
    const updateProvider = await Provider.findOneAndUpdate(req.body.email,{
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleName: req.body.middleName,
      email: req.body.email
    });
    res.json(updateProvider);
  } catch (err) {
    res.json(err);
  }
}

module.exports = { getProviders, postProviders, deleteProviders, putProviders };
