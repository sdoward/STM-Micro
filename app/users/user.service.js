const UserResult = Object.freeze({"Success": 0, "UserExists": 1})

const users = []

UserService = {
    createUser,
    userCount,
    UserResult
}

function createUser(userName) {
    if (users.includes(userName)) {
        return UserResult.UserExists
    } else {
        users.push(userName)
        return UserResult.Success
    }
}

function userCount() {
    return users.length
}

module.exports = UserService