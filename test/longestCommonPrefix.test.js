const { expect } = require('chai')
const longestCommonPrefix = require('../src/longestCommonPrefix')

it('找出最长的共同前缀', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl')
  expect(longestCommonPrefix([])).to.equal('')
  expect(longestCommonPrefix(['', 'a'])).to.equal('')
  expect(longestCommonPrefix(['', '', ''])).to.equal('')
  expect(longestCommonPrefix(['hello', 'hello', 'hello'])).to.equal('hello')
})
