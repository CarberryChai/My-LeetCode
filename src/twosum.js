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
module.exports = twoSum
