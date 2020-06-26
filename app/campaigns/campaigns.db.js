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

async function campaignExists (campaignId) {
  const campaigns = await query(`SELECT * FROM stm_micro.campaigns WHERE id = ${campaignId}`)
  return campaigns.length > 0
}

const CampaignDAO = {
  getCampaigns,
  getActiveCampaigns,
  getCompleteCampaigns,
  campaignExists
}

module.exports = CampaignDAO
