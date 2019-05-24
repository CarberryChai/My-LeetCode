function romanToInt(s) {
  const arr = [
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ]
  const map = new Map(arr)
  let temp = ''
  const total = [...s].reduce((t, c, i) => {
    if (map.has(temp + c) && i !== 0) {
      t = t + map.get(temp + c) - map.get(temp)
      temp = c
      return t
    }
    t += map.get(c)
    temp = c
    return t
  }, 0)
  return total
}
module.exports = romanToInt
