const user = require('../api/users');
const todo = require('../api/todos');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const models = require('../models');

chai.use(chaiHttp);

const name = 'lorem'
const email = 'prueba@prueba.com';
const password = '12345';

before(async () => {
  await models.User.create({
    name,
    email,
    password
  })
});
after(async () => {
  await models.User.destroy({
    where: {
      email
    }
  })
});