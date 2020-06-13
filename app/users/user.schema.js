const Joi = require('@hapi/joi')

const schema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .required()
})

module.exports = schema