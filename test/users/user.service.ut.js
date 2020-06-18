const { assert } = require('chai')
const UserService = require('../../app/users/user.service')

describe('User creation', () => {
  it('Should return success when creating a user', (done) => {
    const result = UserService.createUser('JohnDoe')
    console.log(result)
    assert.equal(result, UserService.UserResult.Success, 'Result is not success')
  })
})
