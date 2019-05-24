const { expect } = require('chai')
const romanToInt = require('../src/romanToInt')

it('罗马数字转换为整数', () => {
  expect(romanToInt('III')).to.equal(3)
  expect(romanToInt('IV')).to.equal(4)
  expect(romanToInt('IX')).to.equal(9)
  expect(romanToInt('LVIII')).to.equal(58)
  expect(romanToInt('MCMXCIV')).to.equal(1994)
})
