const HttpCodes = require('./httpcodes')

const validationMiddleware = (schema) => {
  return (request, response, next) => {
    const { error } = schema.validate(request.body)
    if (error != null) {
      response.status(HttpCodes.BAD_REQUEST)
      response.send(error.details.map(i => i.message).join(','))
    } else {
      next()
    }
  }
}

module.exports = validationMiddleware
