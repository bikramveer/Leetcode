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


///////////////////////// 27: REMOVE ELEMENT /////////////////////////
// var removeElement = function(nums, val) {
//     let swapped = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== val) {
//             nums[swapped] = nums[i];
//             swapped++;
//         };
//     };
//     return swapped;
// };

// nums = [0,1,2,2,3,0,4,2];
// console.log(removeElement(nums, 2));


///////////////////////// 28: FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING /////////////////////////
// var strStr = function(haystack, needle) {
//     let range = haystack.length - needle.length + 1
//     if(needle.length > haystack.length) {
//         return -1;
//     };
//     for(let i = 0; i <= range; i++) {
//         if (haystack[i] == needle[0]) {
//             let temp = i;
//             let curr = i;
//             let y = 0;
//             let equal = true;
//             while (y < needle.length) {
//                 if(curr == haystack.length) {
//                     return -1;
//                 } else if(haystack[curr] != needle[y]) {
//                     equal = false;
//                     break;
//                 } else {
//                     y++;
//                     curr++;
//                 };
//             };
//             if(equal === true) {
//                 return temp;
//             };
//         };
//     };
//     return -1;
// };

// let haystack = 'dasbutsad'
// let needle = 'sad'
// console.log(strStr2(haystack, needle));


///////////////////////// 35: SEARCH INSERTION POINT /////////////////////////
// var searchInsert = function(nums, target) {
// 2 pointer split solution
    // let start = 0;
    // let end = nums.length - 1;
    // while(start <= end) {
    //     let mid = Math.floor((start + end) / 2);
    //     if(nums[mid] === target) {
    //         return mid;
    //     } else if(target > nums[mid]) {
    //         start = mid + 1;
    //     } else {
    //         end = mid - 1;
    //     };
    // };
    // return start;
// 2 pointer iterative solution
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
// }

// nums = [1, 3, 5, 6];
// console.log(searchInsert(nums, 7));


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


///////////////////////// 88: MERGED SORTED ARRAY /////////////////////////
// var merge = function(nums1, nums2, m, n) {
//     if(m === 0) {
//         nums1 = nums2;
//         return;
//     };
//     if(n === 0) {
//         return;
//     };
//     last = m - 1;
//     for(let i = 0; i < n; i++) {
//         if(nums2[i] >= nums1[last]) {
//             console.log(nums2[i] + ' >= ' + nums1[last]);
//             nums1[last + 1] = nums2[i]
//             last++;
//         } else {
//             while(nums2[i] < nums1[last] && last >= 0) {
//                 console.log(nums2[i] + ' < ' + nums1[last]);
//                 var temp = nums1[last];
//                 nums1[last] = nums2[i];
//                 nums1[last + 1] = temp;
//                 console.log('nums1 = '+ nums1);
//                 last--;
//             };
//             last = m + i;
//         };
//     };
//     console.log('nums1 = ' + nums1);
//     return;
// };

// var merge2 = function(nums1, nums2, m, n) {
//     if(m === 0) {
//         nums1 = nums2;
//         return;
//     };
//     if(n === 0) {
//         return;
//     };
//     let nums2Place = n - 1;
//     let nums1Place = m - 1;
//     let i = m + n - 1;
//     while(nums2Place >= 0) {
//         if(nums1Place < 0 || nums2[nums2Place] > nums1[nums1Place]) {
//             console.log('nums2Place = ' + nums2Place);
//             console.log('nums1Place = ' + nums1Place); 
//             nums1[i] = nums2[nums2Place];
//             nums2Place--;
//         } else {
//             console.log('nums2Place = ' + nums2Place);
//             nums1[i] = nums1[nums1Place];
//             nums1Place--;
//         };
//         i--;
//     };
//     console.log('nums1 = ' + nums1);
//     return;
// }

// nums1 = [1,2,3,0,0,0];
// nums2 = [2,5,6];
// m = 3;
// n = 3;
// merge2(nums1, nums2, m, n);


///////////////////////// 696: COUNT BINARY SUBSTRINGS /////////////////////////
///////////////////////// FDM INTERVIEW QUESTION /////////////////////////
// var countBinarySubstrings = function(s) {
//     const runs = []
//     let curr = 1
//     for(let i = 1; i<s.length; i++) {
//         if(s[i] === s[i-1]) {
//             curr += 1;
//         } else {
//             runs.push(curr);
//             curr = 1;
//         };
//     };
//     runs.push(curr);
//     result = 0
//     for(let i = 0; i < runs.length - 1; i++) {
//         result += Math.min(runs[i], runs[i+1]);
//     };
//     return result;
// };

// s = "1100";
// console.log(countBinarySubstrings(s));


///////////////////////// 706: DESIGN HASHMAP /////////////////////////
// var MyHashMap = function() {
//     this.map = {};
// };

// MyHashMap.prototype.put = function(key, value) {
//     this.map[key] = value;
// };

// MyHashMap.prototype.get = function(key) {
//     // if(this.map[key] !== undefined) {
//     //     return this.map[key];
//     // } else {
//     //     return -1
//     // };
//     return (key in this.map) ? this.map[key] : -1;
// };

// MyHashMap.prototype.remove = function(key) {
//     // if(key in this.map) {
//     //     delete this.map[key];
//     // };
//     return (key in this.map) ? delete this.map[key] : undefined;
// };

// const obj = new MyHashMap();
// obj.put(1, 1);
// console.log(obj)
// obj.put(2, 2);
// console.log(obj)
// console.log(obj.get(1))
// console.log(obj.get(3))
// obj.put(2, 1);
// console.log(obj)
// console.log(obj.get(2));
// obj.remove(2);
// console.log(obj.get(2));


///////////////////////// 2283: CHECK IF NUMBER HAS EQUAL DIGIT COUNT AND DIGIT VALUE /////////////////////////
var digitCount = function(s) {
    let map1 = new Map;
    let map2 = new Map;
    for (let i = 0; i < s.length; i++) {
        map1.set(i, s[+i]); 
        (map2.get(s[i])) ? map2.set(s[+i], map2.get(s[i]) + 1) : map2.set(s[+i], 1);
    };
    for (let i = 0; i < map1.size; i++) {
        let actual = 0;
        if(map2.get(String(i)) !== undefined) {
            actual = map2.get(String(i));
        };
        let required = map1.get(i);
        if (actual != required) {
            return false;
        };
    };
    return true;
};

num = '1210'
console.log(digitCount(num));