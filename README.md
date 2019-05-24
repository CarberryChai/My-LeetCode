## leetCode简单学习
### 1、[two sum](https://github.com/CarberryChai/My-LeetCode/blob/master/src/twosum.js)
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
给定一个整型数组，存在两个数加起来等于给定值，返回这两个数的索引。

[题目原链接](https://leetcode.com/problems/two-sum/)
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
### 7、[Reverse Integer](https://github.com/CarberryChai/My-LeetCode/blob/master/src/reverseInteger.js)
Given a 32-bit signed integer, reverse digits of an integer.
给定一个32位的有符号整数，翻转一下这个整数的数字

[题目原链接](https://leetcode.com/problems/reverse-integer/)

```
Input: 123
Output: 321

Input: -123
Output: -321

Input: 120
Output: 21
```
### 9、[Palindrome Number](https://github.com/CarberryChai/My-LeetCode/blob/master/src/isPalindrome.js)
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
判断一个整数是不是回文，当一个整数从左向右读和从右向左读是一样的就是回文。

[题目原链接](https://leetcode.com/problems/palindrome-number/)
```
Input: 121
Output: true

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```
#### follow up
Coud you solve it without converting the integer to a string?

golang 版本[链接](https://github.com/CarberryChai/My-LeetCode/blob/master/src/isPalindrome.go),是最符合题意得，没有用字符串。
### 13、[Roman to Integer](https://github.com/CarberryChai/My-LeetCode/blob/master/src/romanToInt.js)
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
罗马数字由七个字符表示

[题目原链接](https://leetcode.com/problems/roman-to-integer/)

```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```
### 14、[Longest Common Prefix](https://github.com/CarberryChai/My-LeetCode/blob/master/src/longestCommonPrefix.js)
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
查找字符串数组中最长的共同前缀，没有则返回空字符串

[题目原链接]([题目原链接](https://leetcode.com/problems/roman-to-integer/))

```
Input: ["flower","flow","flight"]
Output: "fl"
```