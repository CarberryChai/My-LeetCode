const {expect} = require('chai')
const {twoSum} = require('../src/twosum')
describe('two-sum test', function () {
  it('shoud return a array whose element is a number type', function () {
    expect(twoSum([2, 7, 11, 17], 9)).to.be.an('array').to.have.lengthOf(2).to.eql([0, 1])
    expect(twoSum([3, 5, 6, 3], 6)).to.be.an('array').to.have.lengthOf(2).to.eql([0, 3])
  })
})