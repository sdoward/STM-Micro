const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../app/server')
const HttpCodes = require('../../app/httpcodes')

chai.use(chaiHttp)
chai.should()

describe('Create donations', () => {
  describe('Invalid POST /donations', () => {
    it('should return 400 when donation does not contain campaignId', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ userName: 'JohnDoe', meals: 1 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"campaignId" is required')
          done()
        })
    })
    it('should return 400 when donation does not contain userName', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, meals: 1 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"userName" is required')
          done()
        })
    })
    it('should return 400 when donation does not contain meals', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, userName: 'JohnDoe' })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"meals" is required')
          done()
        })
    })
    it('should return 400 when meals is below 1', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, userName: 'JohnDoe', meals: 0 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"meals" must be larger than or equal to 1')
          done()
        })
    })
    it('should return 400 when meals is above 10,000', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, userName: 'JohnDoe', meals: 10001 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.BAD_REQUEST)
          res.text.should.equal('"meals" must be less than or equal to 10000')
          done()
        })
    })
  })
  describe('Resource not found POST /donations', () => {
    it('should return 404 when user does not exist', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, userName: 'UnknownUserName', meals: 1 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.RESOURCE_NOT_FOUND)
          res.text.should.equal('User with Id: UnknownUserName does not exist')
          done()
        })
    })
    it('should return 404 when campaign does not exist', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 99, userName: 'JohnDoe', meals: 1 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.RESOURCE_NOT_FOUND)
          res.text.should.equal('Campaign with Id: 99 does not exist')
          done()
        })
    })
  })
  describe('Create POST /donations', () => {
    it('should return 200', (done) => {
      chai.request(server)
        .post('/donations')
        .send({ campaignId: 1, userName: 'JohnDoe', meals: 100 })
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          res.text.should.equal('Donation accepted')
          done()
        })
    })
  })
})
