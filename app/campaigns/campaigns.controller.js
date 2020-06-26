const CampaignsService = require('./campaigns.service')

const CampaignsController = {
  getCampaigns
}

async function getCampaigns (request, response) {
  const status = request.query.status
  var campaigns = null
  switch (status) {
    case 'active':
      campaigns = await CampaignsService.getActiveCampaigns()
      break
    case 'complete':
      campaigns = await CampaignsService.getCompleteCampaigns()
      break
    default:
      campaigns = await CampaignsService.getCampaigns()
  }
  response.json(campaigns)
}

module.exports = CampaignsController
