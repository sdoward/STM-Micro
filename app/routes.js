const {Router} = require('express')
const Joi = require('@hapi/joi')
const routes = Router()
const UserController = require('./users/user.controller')
const HttpCodes = require('./httpcodes')

const userSchema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .required()
})

routes.post('/users', (request, response) => {
    let {value, error} = userSchema.validate(request.body)
    if (error != null) {
        response.status(HttpCodes.BAD_REQUEST)
        response.send(error.details.map(i => i.message).join(','))
    } else {
        UserController.createUser(request, response)
    }
});

routes.get('/users/count', (request, response) => {
    UserController.getUserCount(response)
})

module.exports = routes
