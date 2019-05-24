package main

import (
	"fmt"
)

func main()  {
	fmt.Println(isPalindrome(1221))
}

func isPalindrome(x int) bool {
		// 负数肯定不是回文，以0结尾的整数只有0是回文
    if (x < 0) || (x%10 == 0 && x != 0) {
		return false
	}
	reversalNumber := 0
	// 整个思路是截取数字的后半部分，eg:1221截取后半部分组成12，让它等于前半部分就行
	for x > reversalNumber {
		reversalNumber = reversalNumber*10 + x%10
		x /= 10
	}
	return x == reversalNumber || x == reversalNumber/10
}