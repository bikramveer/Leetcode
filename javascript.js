// MARK: 1 - TWO SUM
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


// MARK: 20 - VALID PARENTHESIS
// var isValid = function(s) {
//     const stack = [];
//     let popped;
//     if (s[0] === ')' || s[0] === ']' || s[0] === '}') {
//         console.log('Started with open parenthesis.');
//         return false;
//     };
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
//             stack.push(s[i]);
//             console.log(stack);
//         } else {
//             console.log(stack.length)
//             switch (s[i]) {
//                 case ')':
//                     if (stack.length == 0) {
//                         console.log('Empty Stack.')
//                         return false;
//                     };
//                     popped = stack.pop();
//                     if (popped !== '(') {
//                         return false;
//                     };
//                     break;
//                 case ']':
//                     if (stack.length === 0) {
//                         console.log('Empty Stack.')
//                         return false;
//                     };
//                     popped = stack.pop();
//                     if (popped !== '[') {
//                         return false;
//                     };
//                     break;
//                 case '}':
//                     if (stack.length === 0) {
//                         console.log('Empty Stack.')
//                         return false;
//                     };
//                     popped = stack.pop();
//                     if (popped !== '{') {
//                         return false;
//                     };
//                     break;
//                 default:
//                     return false;
//             };
//         };
//     };
//     return (stack.length === 0) ? true : false;
// };

// let s = '()';
// console.log(isValid(s));


// MARK: 26 - REMOVE DUPLICARTES FROM SORTED ARRAY
// var removeDuplicates = function(nums) {
//     let curr = 1;
//     let k = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i + 1] === nums[i]) {
//             continue;
//         } else {
//             nums[curr] = nums[i + 1];
//             curr += 1;
//             k += 1
//         };
//     };
//     console.log(nums);
//     return k;
// };

// let nums = [0,0,1,1,1,2,3,3,4];
// console.log(removeDuplicates(nums));


// MARK: 27 - REMOVE ELEMENT
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


// MARK: 28 - FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING
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
// console.log(strStr(haystack, needle));


// MARK: 35 - SEARCH INSERTION POINT
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


// MARK: 58 - LENGTH OF LAST WORD
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


// MARK: 66 - PLUS ONE
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


// MARK: 70 - CLIMBING STAIRS
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


// MARK: 88 - MERGED SORTED ARRAY
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


// MARK: 696 - COUNT BINARY SUBSTRINGS
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

// s = "11001001001110001";
// console.log(countBinarySubstrings(s));


// MARK: 706 - DESIGN HASHMAP
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


// MARK: 2283 - CHECK IF NUMBER HAS EQUAL DIGIT COUNT AND DIGIT VALUE
// var digitCount = function(s) {
//     let map1 = new Map;
//     let map2 = new Map;
//     for (let i = 0; i < s.length; i++) {
//         map1.set(i, s[+i]); 
//         (map2.get(s[i])) ? map2.set(s[+i], map2.get(s[i]) + 1) : map2.set(s[+i], 1);
//     };
//     for (let i = 0; i < map1.size; i++) {
//         let actual = 0;
//         if(map2.get(String(i)) !== undefined) {
//             actual = map2.get(String(i));
//         };
//         let required = map1.get(i);
//         if (actual != required) {
//             return false;
//         };
//     };
//     return true;
// };

// num = '1210'
// console.log(digitCount(num));


// MARK: 2807 - INSERT GREATEST COMMON DIVISORS IN LINKED LIST
// class ListNode {
//     constructor(val, next) {
//         this.val = (val === undefined ? 0 : val);
//         this.next = (next === undefined ? null : next);
//     }
// }
// var greatestCommonDivisor = function(x, y) {
//     let result = Math.min(x, y);

//     if (Math.max(x,y) % result === 0) {
//         return result;
//     } else {
//         result = Math.floor(result / 2);
//         while(result > 1) {
//             if(x%result === 0 && y%result === 0) {
//                 return result;
//             } else {
//                 result -= 1;
//             };
//         };
//     }
//     return result;
// };

// var insertGreatestCommonDivisors = function(head) {
//     if(head === undefined) {
//         return null;
//     };
//     if(head.next === null) {
//         return head;
//     };
//     let p1 = head;
//     let p2 = head.next;
//     while (p2 !== null) {
//         let temp = p1.next;
//         let gcd = greatestCommonDivisor(p1.val, p2.val);
//         let gcdNode = new ListNode(gcd);
//         gcdNode.next = temp;
//         p1.next = gcdNode;
//         p1 = temp;
//         p2 = p2.next;
//     };
//     curr = head;
//     while (curr !== null) {
//         console.log(curr.val);
//         curr = curr.next;
//     };
//     return head;
// };

// let head = new ListNode(18);
// head.next = new ListNode(6);
// let second = head.next;
// second.next = new ListNode(10);
// let third = second.next;
// third.next = new ListNode(3);
// console.log(insertGreatestCommonDivisors(head));


// MARK: 2980 - CHECK IF BITWISE OR HAS TRAILING ZEROES
// var hasTrailingZeros = function(nums) {
//     let evenCounter = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 0) {
//             evenCounter += 1;
//         };
//         if (evenCounter == 2) {
//             return true;
//         };
//     };
//     return false;
// };

// const nums = [2,4,6,8];
// console.log(hasTrailingZeros(nums))


// MARK: 3178 - FIND THE CHILD WHO HAS TEH BALL AFTER K SECONDS
// var numberOfChild = function(n, k) {
//     let currentChild = 0;
//     let goingForward = true;
//     let i = 1;
//     for (i; i <= k; i++) {
//         if (currentChild == n - 1) {
//             goingForward = false;
//         };
//         if (currentChild == 0) {
//             goingForward = true;
//         };
//         if (goingForward == true) {
//             currentChild += 1;
//         } else {
//             currentChild -= 1;
//         };
//     };
//     return currentChild;
// };

// console.log(numberOfChild2(3,5))


// MARK: 3591 - CHECK IF ANY ELEMENT HAS PRIME FREQUENCY
// var isPrime = function(n) {
//     console.log('checking if ' + n + ' is a prime number...');
//     if (n <= 1) {
//         return false;
//     };
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return false;
//         };
//     };
//     return true;
// }

// var checkPrimeFrequency = function(nums) {
//     const newDict = new Map;
//     let allOnes = true;
//     for (let i = 0; i < nums.length; i++) {
//         if (newDict.has(nums[i])) {
//             console.log(nums[i] + ' is in newDict');
//             newDict.set(nums[i], newDict.get(nums[i]) + 1);
//             allOnes = false;
//         } else {
//             newDict.set(nums[i], 1);
//         };
//     };
//     if (allOnes == true) {
//         return false;
//     };
//     console.log(newDict);
//     for (const key of newDict.keys()) {
//         if(newDict.get(key) == 1 || isPrime(newDict.get(key)) == false) {
//             continue;
//         } else {
//             return true;
//         };
//     };
//     return false;
// };

// let nums = [3,0,3,6,3,3];
// console.log(checkPrimeFrequency(nums));


// MARK: LEETCODE TOP 100

// MARK: 136 - SINGLE NUMBER
// var singleNumber = function(nums) {
//     const map = new Map;
//     for(let i = 0; i < nums.length; i++) {
//         if(map.get(nums[i])) {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         } else {
//             map.set(nums[i], 1);
//         };
//     };
//     for(const key of map.keys()) {
//         if(map.get(key) == 1) {
//             return key;
//         };
//     };
//     return -1;
// };

// // this can also be done using the XOR operator
// var singleNumber2 = function(nums) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result = result ^ nums[i];
//     };
//     return result;
// }

// let nums = [2,2,1];
// console.log(singleNumber2(nums))


// MARK: 169 - MAJORITY ELEMENT
// O(n) space, O(n) time
// var majorityElement = function(nums) {
//     const map = new Map;
//     for(let i = 0; i < nums.length; i++) {
//         if(map.get(nums[i])) {
//             map.set(nums[i], map.get(nums[i]) + 1);
//         } else {
//             map.set(nums[i], 1);
//         };
//     };
//     let result = nums[0];
//     for(const key of map.keys()) {
//         if(map.get(key) > map.get(result)) {
//             result = key;
//         }
//     };
//     return result;
// };

// // O(1) space, O(n) time
// var majorityElement2 = function(nums) {
//     let majority = 0;
//     let res = 0
//     for(let i of nums) {
//         if(majority === 0) {
//             res = i
//             console.log('res is now ' + res);
//         };
//         if(res === i) {
//             console.log('found another res = ' + res);
//             majority += 1;
//         } else {
//             console.log('found an element different from res = ' + res);
//             majority -= 1;
//         }
//         console.log('majority is at ' + majority);
//     };
//     return res;
// }

// let nums = [1,2,3,4,4,4,4];
// console.log(majorityElement2(nums));


// MARK: 560 - SUBARRAY SUM EQUALS K
// var subarraySum = function(nums, k) {
//     let result = 0;
//     let map = new Map;
//     for(let i=0; i < nums.length; i++) {
//         map.set(i, nums[i]);
//     };
//     // console.log(map)
//     const keys = Array.from(map.keys());
//     for (let i = 0; i < keys.length; i++) {
//         // console.log('i = ' + i)
//         if(map.get(i) === k) {
//             // console.log('value was the same as k');
//             result++;
//         };
//         let curr = i + 1;
//         let curr_val = map.get(i);
//         // console.log('going into loop with curr: ' + curr + ' and curr_val: ' + curr_val);
//         while (curr < keys.length) {
//             // console.log('curr_val before addition: ' + curr_val);
//             curr_val += map.get(curr);
//             // console.log('curr_val after adding ' + map.get(curr) + ': ' + curr_val);
//             if(curr_val === k) {
//                 // console.log('curr val: ' + curr_val + ' is equal to k');
//                 result++;
//                 curr++;
//                 continue;
//             } else {
//                 curr++;
//             }
//         };
//     };
//     return result;
// };

// var subarraySum2 = function(nums, k) {
//     let count = 0;
//     let prefix = 0;
//     const seen = new Map;
//     seen.set(0,1);
//     for (let x of nums) {
//         prefix += x;
//         console.log('prefix is now ' + prefix);
//         if (seen.get(prefix - k)) {
//             console.log('prefix of ' + prefix + ' - 100 = ' + (prefix - k) + ' is in the map and seen ' + seen.get(prefix - k) + ' times.')
//             count += seen.get(prefix - k);
//         };
//         seen.set(prefix, (seen.get(prefix) || 0) + 1);
//     };
//     return count;
// }

// let nums = [28,54,7,-70,22,65,-6,50,50,-1,1];
// let k = 100;
// console.log(subarraySum2(nums, k))


// MARK: 108 - CONVERT SORTED ARRAY TO BINARY TREE SEARCH
// var sortedArrayToBST = function(nums) {
    
// }
