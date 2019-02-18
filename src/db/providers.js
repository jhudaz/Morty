const mongoose = require('mongoose');
mongoose.connect('mongodb://jvelez:jvelez1@ds155634.mlab.com:55634/evercheck-test-9');
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