/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (!Array.isArray(strs) || !strs.length) return ''
  const lastStr = strs.pop()
  const lastStrArr = lastStr === '' ? [''] : lastStr.split('')
  let str = lastStrArr[0]
  for (let index = 0; index < lastStrArr.length; index++) {
    if (!strs.every(s => s.startsWith(str))) {
      str = str.substring(0, str.length - 1)
      break
    }
    lastStrArr[index + 1] && (str += lastStrArr[index + 1])
  }
  return str
}
module.exports = longestCommonPrefix