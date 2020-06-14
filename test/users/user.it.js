const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../app/server')
const HttpCodes = require('../../app/httpcodes')

chai.use(chaiHttp)
chai.should()

describe('User creation', () => {
  describe('POST /users', () => {
    it('should create user', (done) => {
      chai.request(server)
        .post('/users')
        .send({ userName: 'JohnDoe' })
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          res.text.should.equal('User created')
          done()
        })
    })
  })
  describe('POST /users', () => {
    it('should return 400 when user request is not valid', (done) => {
      chai.request(server)
        .post('/users')
        .send({ userName: 1 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"userName" must be a string')
          done()
        })
    })
  })
  describe('POST /users', () => {
    it('should return 409 when user exists', (done) => {
      chai.request(server)
        .post('/users')
        .send({ userName: 'JohnDoe' })
        .end((err, res) => {
          res.should.have.status(HttpCodes.CONFLICT)
          res.text.should.equal('User JohnDoe already exists')
          done()
        })
    })
  })
  describe('GET /users/count', () => {
    it('should return the amount of users', (done) => {
      chai.request(server)
        .get('/users/count')
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          res.text.should.equal('1')
          done()
        })
    })
  })
})
