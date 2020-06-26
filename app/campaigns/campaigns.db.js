const query = require('./../database')

async function getCampaigns () {
  const campaigns = await query('SELECT * FROM campaigns')
  return campaigns
}

async function getActiveCampaigns () {
  const campaigns = await query('SELECT * FROM stm_micro.campaigns WHERE complete = FALSE')
  return campaigns
}

async function getCompleteCampaigns () {
  const campaigns = await query('SELECT * FROM stm_micro.campaigns WHERE complete = TRUE')
  return campaigns
}

const CampaignDAO = {
  getCampaigns,
  getActiveCampaigns,
  getCompleteCampaigns
}

module.exports = CampaignDAO
