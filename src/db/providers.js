const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const schema = mongoose.Schema;

//collection schema
const providers = new schema({
  firstName: String,
  lastName: String,
  middleName: String,
  email: String
});

const Provider = mongoose.model('Provider', providers);

module.exports = Provider;