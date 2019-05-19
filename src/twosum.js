function twoSum(nums, target) {
  const arr = []
  for (let i = 0, l = nums.length; i < l; i++) {
    const diff = target - nums[i]
    if (arr.includes(diff)) {
      return [arr.indexOf(diff), i]
    }
    arr.push(nums[i])
  }
}
function two_sum(nums, target) {
  const map = new Map()
  for (let i = 0, l = nums.length; i < l; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
   map.set(nums[i], i)
  }
}
module.exports = {
  twoSum,
  two_sum
}
