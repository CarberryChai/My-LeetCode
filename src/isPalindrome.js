function isPalindrome(x) {
  const r = [...String(x)].reverse().join('')
  return x === Number(r)
}
module.exports = isPalindrome
