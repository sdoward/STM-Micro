const { Router } = require('express')
const Joi = require('@hapi/joi')
const routes = Router()
const ValidationMiddleware = require('./validation_middleware')
const UserController = require('./users/user.controller')
const CampaignController = require('./campaigns/campaigns.controller')

const userSchema = Joi.object({
  userName: Joi.string()
    .alphanum()
    .required()
})

routes.post('/users', ValidationMiddleware(userSchema), UserController.createUser)

routes.get('/users/count', UserController.getUserCount)

routes.get('/campaigns', CampaignController.getCampaigns)

module.exports = routes
