const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../app/server')
const HttpCodes = require('../../app/httpcodes')

chai.use(chaiHttp)
chai.should()

const bangladeshCampaign = {
  complete: 0,
  id: 1,
  title: 'Bangladesh',
  description: 'Help refugees',
  goal: 100
}

const syriaCampaign = {
  complete: 1,
  id: 2,
  title: 'Syria',
  description: 'Help in the middle east',
  goal: 50
}

const campaignResponseBody = {
  campaigns: [bangladeshCampaign, syriaCampaign]
}

describe('Campaign retrieval', () => {
  describe('GET /campaigns', () => {
    it('should get all campaigns', (done) => {
      chai.request(server)
        .get('/campaigns')
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          chai.expect(res.body).to.deep.equal(campaignResponseBody)
          done()
        })
    })
  })
  describe('GET /campaigns', () => {
    it('should get active campaigns', (done) => {
      chai.request(server)
        .get('/campaigns?status=active')
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          chai.expect(res.body.campaigns).to.deep.equal([bangladeshCampaign])
          done()
        })
    })
  })
  describe('GET /campaigns', () => {
    it('should get complete campaigns', (done) => {
      chai.request(server)
        .get('/campaigns?status=complete')
        .end((err, res) => {
          res.should.have.status(HttpCodes.OK)
          chai.expect(res.body.campaigns).to.deep.equal([syriaCampaign])
          done()
        })
    })
  })
})
