/**
 *清除数字末尾的0，eg:120000 => 12
 *
 * @param {*} arr
 * @returns
 */
function clearZero(arr) {
  const length = arr.length
  if (arr[length - 1] === 0) {
    arr.pop()
    clearZero(arr)
  }
  return arr
}
function reverse(x) {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)
  if (x === 0 || x > max || x < min) return 0
  const digit = Number(
    clearZero([...String(x).replace(/\D/, '')].map(Number))
      .reverse()
      .join('')
  )
  return x > 0 ? (digit > max ? 0 : digit) : -digit < min ? 0 : -digit
}

module.exports = reverse
