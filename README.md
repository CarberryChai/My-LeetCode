## leetCode简单学习
### 1、[two sum](https://github.com/CarberryChai/My-LeetCode/blob/master/src/twosum.js)
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

给定一个整型数组，存在两个数加起来等于给定值，返回这两个数的索引。
eg:
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
### 2、[Reverse Integer](https://github.com/CarberryChai/My-LeetCode/blob/master/src/reverseInteger.js)
Given a 32-bit signed integer, reverse digits of an integer.
给定一个32位的有符号整数，翻转一下这个整数的数字
#### Note
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
```
  Input: 123
  Output: 321

  Input: -123
  Output: -321

  Input: 120
  Output: 21
```