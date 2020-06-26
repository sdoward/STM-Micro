const HttpCodes = require('../httpcodes')
const UserService = require('./user.service')

const UserController = {
  createUser,
  getUserCount
}

async function createUser (request, response) {
  const userName = request.body.userName
  const result = await UserService.createUser(userName)
  switch (result) {
    case UserService.UserResult.Success:
      response.send('User created')
      return
    case UserService.UserResult.UserExists:
      response.status(HttpCodes.CONFLICT)
      response.send(`User ${userName} already exists`)
      return
    default:
      throw `Unknown UserResult ${result}`
  }
}

async function getUserCount (response) {
  const userCount = await UserService.userCount()
  response.send(`${userCount}`)
}

module.exports = UserController
