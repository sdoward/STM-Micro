const mysql = require('mysql')
const Promise = require('bluebird')
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbSchema
})

connection.connect()
Promise.promisifyAll(connection)

async function hasUser (userName) {
  return connection.queryAsync(`SELECT * FROM users WHERE user_name = '${userName}'`)
    .then(function (rows) {
      return rows.length > 0
    })
}

async function addUser (userName) {
  return connection.queryAsync(`INSERT INTO users(user_name) VALUES ('${userName}')`)
}

async function getUserCount () {
  return connection.queryAsync('SELECT COUNT(*) AS userCount FROM users')
    .then(function (rows) {
      return rows[0].userCount
    })
}

const UserDAO = {
  getUserCount,
  addUser,
  hasUser
}

module.exports = UserDAO
