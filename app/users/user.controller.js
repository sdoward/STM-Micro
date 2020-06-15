const HttpCodes = require('../httpcodes')
const UserService = require('./user.service')

const UserController = {
    createUser,
    getUserCount
}

function createUser(request, response) {
    let userName = request.body.userName
    let result = UserService.createUser(userName)
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
            return
    }
}

function getUserCount(response) {
    return response.send(`${UserService.userCount()}`)
}

module.exports = UserController
