///////////////////////// 1: TWO SUM /////////////////////////
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// }

// var twoSum2 = function(nums, target) {
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++) {
//         console.log(map)
//         const hunted = target - nums[i];
//         if(map.get(hunted) !== undefined) {
//             return [map.get(hunted), i];
//         }
//         map.set(nums[i], i);
//     };
//     return [];
// }

// let nums = [3,2,4]
// let target = 6
// console.log(twoSum2(nums, target))


///////////////////////// 35: SEARCH INSERTION POINT /////////////////////////
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        };
    };
    return start;
    // let first = 0;
    // let second = 1;
    // if(nums[first] === target || nums[first] >= target) {
    //     return first;
    // };
    // while(nums[second] !== undefined) {
    //     console.log('nums[first] = ' + nums[first]);
    //     console.log('nums[second] = ' + nums[second]);
    //     if(nums[second] === target) {
    //         return second;
    //     } else if(target >= nums[first] && target < nums[second]) {
    //         return second;
    //     };
    //     first++;
    //     second++;
    // }
    // return second;
}

nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 7));


///////////////////////// 58: LENGTH OF LAST WORD /////////////////////////
// var lengthOfLastWord = function(s) {
//     let count = 0;
//     for(let i = s.length-1; i >= 0; i--) {
//         if(s[i] == " ") {
//             continue;
//         }
//         while(s[i] != " " && i >= 0) {
//             console.log('s[i] = '+s[i]);
//             count++;
//             i--;
//         };
//         return count;
//     }
//     return count;
// }

// const s = 'a';
// console.log(lengthOfLastWord(s));


///////////////////////// 66: PLUS ONE /////////////////////////
// var plusOne = function(digits) {
//     let curr = digits.length - 1;
//     while(curr >= 0) {
//         digits[curr]++;
//         if(digits[curr] == 10) {
//             digits[curr] = 0;
//             if(curr == 0) {
//                 digits = [1].concat(digits);
//                 console.log('last digit was a 9: ' + digits);
//                 return;
//             }
//             console.log('end digit was a 9: ' + digits);
//             curr--;
//         } else {
//             console.log('last digit was not a 9: ' + digits);
//             return;
//         }
//     }
// }

// let digits = [2,3,7,9,9];
// plusOne(digits);


///////////////////////// 70: CLIMBING STAIRS /////////////////////////
// var climbingStairs = function(n) {
//     if(n == 1) {
//         return 1
//     };
//     if(n == 2) {
//         return 2
//     } else {
//         return climbingStairs(n-1) + climbingStairs(n-2);
//     }
// }

// climbingStairs2 = function(n) {
//     if(n == 1) {
//         return 1
//     };
//     if(n == 2) {
//         return 2
//     } else {
//         map = {};
//         map[1] = 1;
//         map[2] = 2;
//         for(let i = 3; i <= n; i++) {
//             map[i] = map[i-1] + map[i-2];
//         };
//         return map[n];
//     }    
// }

// climbingStairs2(7)