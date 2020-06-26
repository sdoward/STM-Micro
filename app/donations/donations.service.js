const DonationResult = Object.freeze({ UserNotFound: 0, Success: 1, CampaignNotFound: 2 })
const UserDAO = require('./../users/user.db')
const CampaignsDAO = require('./../campaigns/campaigns.db')
const DonationsDAO = require('./donations.db')

async function createDonation (userName, campaignId, meals) {
  const hasUser = await UserDAO.hasUser(userName)
  const campaignExists = await CampaignsDAO.campaignExists(campaignId)
  if (!campaignExists) {
    return DonationResult.CampaignNotFound
  } else if (!hasUser) {
    return DonationResult.UserNotFound
  } else {
    await DonationsDAO.addDonation(userName, campaignId, meals)
    return DonationResult.Success
  }
}

const DonationsService = {
  createDonation,
  DonationResult
}

module.exports = DonationsService
