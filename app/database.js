const mysql = require('mysql')
const util = require('util')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dataIsGreat1!',
  database: 'stm_micro'
})

connection.connect()
const query = util.promisify(connection.query).bind(connection)

module.exports = query
