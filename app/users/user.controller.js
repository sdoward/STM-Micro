const HttpCodes = require('../httpcodes')

const UserController = {
    createUser,
    getUserCount
}

const users = []

function createUser(request, response) {
    let userName = request.body.userName;
    if (users.includes(userName)) {
        response.status(HttpCodes.CONFLICT)
        response.send(`User ${userName} already exists`)
    } else {
        users.push(userName)
        response.send(`User created`)
    }
}

function getUserCount(response) {
    return response.send(`${users.length}`)
}

module.exports = UserController