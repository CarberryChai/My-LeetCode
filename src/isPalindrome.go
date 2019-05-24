package main

import (
	"fmt"
)

func main()  {
	fmt.Println(isPalindrome(1221))
}

func isPalindrome(x int) bool {
    if (x < 0) || (x%10 == 0 && x != 0) {
		return false
	}
	reversalNumber := 0
	for x > reversalNumber {
		reversalNumber = reversalNumber*10 + x%10
		x /= 10
	}
	return x == reversalNumber || x == reversalNumber/10
}