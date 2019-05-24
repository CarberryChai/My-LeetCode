const { expect } = require('chai')
const reverse = require('../src/reverseInteger')

it('input digit should return reverse digit', () => {
  expect(reverse(123)).to.equal(321)
  expect(reverse(12000)).to.equal(21)
  expect(reverse(-56789)).to.equal(-98765)
  expect(reverse(-2500)).to.equal(-52)
  expect(reverse(1234567899)).to.equal(0)
})
