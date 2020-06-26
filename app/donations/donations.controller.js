const HttpCodes = require('../httpcodes')
const DonationsService = require('./donations.service')

async function createDonation (request, response) {
  const userName = request.body.userName
  const campaignId = request.body.campaignId
  const meals = request.body.meals
  const result = await DonationsService.createDonation(userName, campaignId, meals)
  switch (result) {
    case DonationsService.DonationResult.UserNotFound:
      response.status(HttpCodes.RESOURCE_NOT_FOUND)
      response.send(`User with Id: ${userName} does not exist`)
      return
    case DonationsService.DonationResult.CampaignNotFound:
      response.status(HttpCodes.RESOURCE_NOT_FOUND)
      response.send(`Campaign with Id: ${campaignId} does not exist`)
      return
    default:
      response.send('Donation accepted')
  }
}

const DonationsController = {
  createDonation
}

module.exports = DonationsController
