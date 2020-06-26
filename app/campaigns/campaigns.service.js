const CampaignDAO = require('./campaigns.db')

const CampaignService = {
  getCampaigns,
  getActiveCampaigns,
  getCompleteCampaigns
}

async function getCampaigns () {
  const campaigns = await CampaignDAO.getCampaigns()
  return {
    campaigns: campaigns
  }
}

async function getActiveCampaigns () {
  const campaigns = await CampaignDAO.getActiveCampaigns()
  return {
    campaigns: campaigns
  }
}

async function getCompleteCampaigns () {
  const campaigns = await CampaignDAO.getCompleteCampaigns()
  return {
    campaigns: campaigns
  }
}

module.exports = CampaignService
