const query = require('./../database')

async function hasUser (userName) {
  const rows = await query(`SELECT * FROM users WHERE user_name = '${userName}'`)
  return rows.length > 0
}

async function addUser (userName) {
  await query(`INSERT INTO users(user_name) VALUES ('${userName}')`)
}

async function getUserCount () {
  const rows = await query('SELECT COUNT(*) AS userCount FROM users')
  return rows[0].userCount()
}

const UserDAO = {
  getUserCount,
  addUser,
  hasUser
}

module.exports = UserDAO
