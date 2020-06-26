const UserResult = Object.freeze({ Success: 0, UserExists: 1 })
const UserDAO = require('./user.db')

const UserService = {
  createUser,
  userCount,
  UserResult
}

async function createUser (userName) {
  const hasUser = await UserDAO.hasUser(userName)
  if (hasUser) {
    return UserResult.UserExists
  } else {
    await UserDAO.addUser(userName)
    return UserResult.Success
  }
}

async function userCount () {
  return UserDAO.getUserCount()
}

module.exports = UserService
