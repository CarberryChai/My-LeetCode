const { expect } = require('chai')
const isPalindrome = require('../src/isPalindrome')

it('输入的整数应该是回文', () => {
  expect(isPalindrome(121)).to.equal(true)
  expect(isPalindrome(0)).to.equal(true)
  expect(isPalindrome(-121)).to.equal(false)
  expect(isPalindrome(1100)).to.equal(false)
})
