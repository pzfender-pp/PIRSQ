"use strict";
/*

1. Task: Implement a JavaScript function that, given an array of integers and a target integer,
    returns whether any two integers in the array sum up to the target number.
    Example:
    Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
    Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
    Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
    Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true.
    Input: [12, 17, 14, 11, 19, 8], Target: 30 Output: false.
    Evaluation Criteria: Efficient search algorithms, possibly the use of hash maps (objects in
    JavaScript) for quicker lookup, and understanding of array operations.

*/
function findTargetSum(nums, target) {
    const numMap = {};
    for (let num of nums) {
        const validNum = target - num;
        if (numMap[validNum]) {
            return true;
        }
        numMap[num] = true;
    }
    return false;
}
/*

2. Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places
    all odd numbers before even numbers.
    Example:
    Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
    Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].
    Evaluation Criteria: Ability to customize sorting logic, understanding of array methods, and
    algorithm efficiency.

*/
function sortingNumber(nums) {
    const odds = nums.filter((n) => n % 2 > 0).sort((a, b) => a - b);
    const evens = nums.filter((n) => n % 2 === 0).sort((a, b) => a - b);
    return [...odds, ...evens];
}
/*

3. Task: Given a list of non-negative integers, arrange them such that they form the largest
    possible number.
    Example
    Input: [10, 2, 13, 7], Output: "721310".
    Input: [21, 36, 8, 45], Output: “8453621”
    Evaluation Criteria: Understanding of sorting algorithms, custom comparators, and string
    manipulation.

*/
function findMaxPossibleValue(nums) {
    return nums
        .sort((a, b) => {
        const str1 = a.toString();
        const str2 = b.toString();
        const num1 = str1 + str2;
        const num2 = str2 + str1;
        if (num1 > num2) {
            return -1;
        }
        else if (num1 < num2) {
            return 1;
        }
        else {
            return 0;
        }
    })
        .join("");
}
/*

4. Task: Write a JavaScript function that takes a number n and returns the sum of all prime
    numbers up to and including n.
    Example:
    Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
    Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7..... To 59).
    Evaluation Criteria: Understanding of prime number generation and optimization techniques.

*/
function findSumOfPrimeNumber(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let k = 2; k <= Math.sqrt(i); k++) {
            if (i % k === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sum += i;
        }
    }
    return sum;
}
