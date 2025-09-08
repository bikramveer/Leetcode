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