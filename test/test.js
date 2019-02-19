const server = require('../src/index');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

//Testing GET endpoint
describe('Get all the providers data', () => {
  it('should return an array of objects', (done) => {
    chai.request(server)
      .get('/providers/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
//Testing POST endpoint
describe('Save in the db', () => {
  it('should return an object with the data that was stored in the db', (done) => {
    let newProvider = {
      firstName: "Jaime",
      lastName: "Velez",
      middleName: "D.",
      email: "jandres.vr@hotmail.com"
    }
    chai.request(server)
      .post('/providers/')
      .send(newProvider)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
//Testing PUT endpoint
describe('Update a row in the db by a field(email)', () => {
  it('should return an object that was updated in the db', (done) => {
    let updateProvider = {
      updateBy: {
        email: "jandres.vr@hotmail.com"
      },
      firstName: "Andres",
      lastName: "Rojas",
      middleName: "F.",
      email: "jandres.vr@hotmail.com"
    }
    chai.request(server)
      .put('/providers/')
      .send(updateProvider)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
//Testing DELETE endpoint
describe('Delete a row in the db', () => {
  it('should return the object that was deleted in the db by a field(email)', (done) => {
    let deleteProvider = {
      deleteBy: {
        email: "jandres.vr@hotmail.com"
      }
    }
    chai.request(server)
      .delete('/providers/')
      .send(deleteProvider)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
