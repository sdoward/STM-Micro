const query = require('./../database')

async function addDonation (userName, campaigId, meals) {
  await query(`INSERT INTO donations(user_name, campaignId, meals) VALUES('${userName}', ${campaigId}, ${meals})`)
}

const DonationsDAO = {
  addDonation
}

module.exports = DonationsDAO
