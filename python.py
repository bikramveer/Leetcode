######################## 1: TWO SUM ########################
# def twoSum(nums: list[int], target: int) -> list[int]:
#     newDict = {}
#     for x in range(len(nums)):
#         newTarget = target - nums[x]
#         if newTarget in newDict:
#             result = [newDict[newTarget], x]
#             return result
#         print(newDict.values())
#         newDict.update({nums[x]: x})
#     return []


# print("hello world")
# nums = [1, 1, 1, 1, 1, 5, 8, 1, 1, 1,1, 1,1]
# result = twoSum(nums, 13)
# print(result)


##################### 27: REMOVE ELEMENT #####################
# def removeElement(nums: list[int], val: int) -> int:
#     swapped = 0
#     for x in range(len(nums)):
#         if nums[x] != val:
#             nums[swapped] = nums[x]
#             swapped += 1
#     return swapped

# nums = [0,1,2,2,3,0,4,2]
# print(removeElement(nums, 2))


##################### 28: FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING #####################
# def strStr(haystack: str, needle: str) -> int:
#     if len(needle) > len(haystack):
#         return -1
#     for x in range(len(haystack) - len(needle) + 1):
#         if haystack[x] == needle[0]:
#             temp = x
#             curr = x
#             y = 0
#             equal = True
#             while y < len(needle):
#                 if curr == len(haystack):
#                     return -1
#                 if haystack[curr] != needle[y]:
#                     equal = False
#                     break
#                 else:
#                     y += 1
#                     curr += 1
#             if equal == True:
#                 return temp
#     return -1

# def strStr2(haystack: str, needle: str) -> int:
#     needleLength = len(needle)
#     haystackLength = len(haystack)
#     for x in range(haystackLength - needleLength + 1):
#         if haystack[x : x + needleLength] == needle:
#             return x
#     return -1

# haystack = 'mississippi'
# needle = 'issippi'
# print(strStr(haystack, needle))


######################## 35: SEARCH INSERT POSITION ########################
# def searchInsert(nums: list[int], target: int) -> int:
#     middle = int(len(nums) / 2)
#     length = len(nums) - 1
#     print(f"middle: {middle}")
#     if target < nums[0]:
#         return 0
#     if target > nums[length]:
#         return length + 1
#     if target == nums[middle]:
#         return middle
#     if target < nums[middle] and target >= nums[middle]:
#         return middle + 1
#     if target >= nums[middle]:
#         offset = searchInsert(nums[middle+1:], target)
#         return middle + offset + 1
#     if target < nums[middle]:
#         return searchInsert(nums[:middle], target)
#     return middle

# nums = [1,3,5,6]
# print(searchInsert(nums, 4))


######################## 20: VALID PARENTHESIS ########################
# def isValid(s: str) -> bool:
#     stack = []
#     if s[0] == ')' or s[0] == ']' or s[0] == '}':
#         return False
#     for x in range(len(s)):
#         if s[x] == '(' or s[x] == '[' or s[x] == '{':
#             stack.append(s[x])
#         else:
#             if s[x] == ')':
#                 if stack == []:
#                     return False
#                 popped = stack.pop()
#                 if popped != '(':
#                     return False
#             if s[x] == ']':
#                 if stack == []:
#                     return False
#                 popped = stack.pop()
#                 if popped != '[':
#                     return False
#             if s[x] == '}':
#                 if stack == []:
#                     return False
#                 popped = stack.pop()
#                 if popped != '{':
#                     return False
#     if stack == []:
#         return True
#     else:
#         return False
    
# s = '([)]'
# print(isValid(s))


######################## 26: REMOVE DUPLICATES FROM SORTED ARRAY ########################
# def removeDuplicates(nums: list[int]) -> int:
# SOLUTION WITH HASHMAP
#     result = []
#     for x in range(len(nums)):
#         if nums[x] in result:
#             continue
#         else:
#             result.append(nums[x])
#     nums[:] = result
#     return len(nums)
#     # return nums
# SOLUTION WITHOUT HASHMAP
#     curr = 1
#     k = 1
#     for x in range(len(nums)-1):
#         if nums[x+1] == nums[x]:
#             continue
#         else:
#             nums[curr] = nums[x+1]
#             curr += 1
#             k += 1
#     print(nums)
#     return k


# nums = [0,0,1,1,1,2,2,3,3,4]
# print(removeDuplicates(nums))


##################### 58: LENGTH OF LAST WORD #####################
# def lengthOfLastWord(s: str) -> int:
#     x = len(s) - 1
#     print(f'x = {x}')
#     count = 0
#     while x >= 0:
#         if s[x] == ' ':
#             x -= 1
#         else:
#             while s[x] != ' ' and x >= 0:
#                 count += 1
#                 x -= 1
#             return count
#     return count

# s = ''
# print(lengthOfLastWord(s))


######################## 66: PLUS ONE ########################
# def plusOne(digits: list[int]) -> list[int]:
#     for x in range(len(digits)-1, -1, -1):
#         digits[x] += 1
#         if digits[x] != 10:
#             return digits
#         else:
#             digits[x] = 0
#             if digits[0] == 0:
#                 digits = [1] + digits
#                 return digits
#     return digits



# digits = [9,9,9,9,9,9]
# print(plusOne(digits))


######################## 70: CLIMBING STAIRS ########################
# def climbStairs(n: int) -> int:
# RECURSION 
    # if n == 1:
    #     return 1
    # if n == 2:
    #     return 2
    # else:
    #     return climbStairs(n-1) + climbStairs(n-2)
# TABULATION
    # if n == 1:
    #     return 1
    # if n == 2:
    #     return 2
    # else:
    #     table = {}
    #     table[1] = 1
    #     table[2] = 2
    #     for x in range(3,n+1): 
    #         table[x] = table[x-1] + table[x-2]
    #     return table[n]
        
# n = 44
# print(climbStairs(n))


##################### 88: MERGED SORTED ARRAY #####################
# def merge(nums1: list[int], nums2: list[int], m: int, n: int) -> None:
    # if m == 0:
    #     nums1[:] = nums2
    #     return
    # if n == 0:
    #     return
    # last = m - 1
    # for x in range(n):
    #     if nums2[x] >= nums1[last]:
    #         print(f'nums2[x] >= nums1[last]: {nums2[x]} >= {nums1[last]}')
    #         nums1[last + 1] = nums2[x]
    #         last += 1
    #     else:
    #         while nums2[x] < nums1[last] and last >= 0:
    #             print(f'nums2[x] < nums1[last]: {nums2[x]} < {nums1[last]}')
    #             temp = nums1[last]
    #             nums1[last] = nums2[x]
    #             nums1[last + 1] = temp
    #             print(f'nums1 = {nums1}')
    #             last -= 1
    #         last = m + x
    # print(nums1)
    # return
#     if m == 0:
#         nums1[:] = nums2
#         return
#     if n == 0:
#         return
#     nums2Place = n - 1
#     nums1Place = m - 1
#     i = m + n - 1
#     while nums2Place >= 0:
#         if nums1Place < 0 or nums2[nums2Place] > nums1[nums1Place]:
#             nums1[i] = nums2[nums2Place]
#             nums2Place -= 1
#         else:
#             nums1[i] = nums1[nums1Place]
#             nums1Place -= 1
#         i -= 1
#     return

# nums1 = [2, 0]
# nums2 = [1]
# m = 1
# n = 1
# merge(nums1, nums2, m, n)


######################## FDM INTERVIEW QUESTION ########################
# very similar to leetcode question 696
# this is considered a leetcode easy question
# but fair to say it's tricky unless you know the trick
# def countBinarySubstrings(s: str) -> int:
#     runs = []
#     curr = 1
#     for i in range(1, len(s)):
#         if s[i] == s[i-1]:
#             curr += 1
#         else:
#             runs.append(curr)
#             curr = 1
#     runs.append(curr)
#     return sum(min(runs[i], runs[i+1]) for i in range(len(runs) - 1))

# s = "001100011"
# print(countBinarySubstrings(s))


######################## 706: DESIGN HASHMAP ########################
# class MyHashMap:

#     def __init__(self):
#         self.size = 10
#         self.buckets = [[] for _ in range(self.size)]
    
#     def put(self, key: int, value: int) -> None:
#         index = key % self.size
#         bucket = self.buckets[index]
#         for i, (k,v) in enumerate(bucket):
#             if k == key:
#                 bucket[i] = (key, value)
#                 return
#         bucket.append((key, value))
    
#     def get(self, key: int) -> int:
#         index = key % self.size
#         for k, v in self.buckets[index]:
#             if k == key:
#                 return v
#         return -1

#     def remove(self, key: int) -> None:
#         index = key % self.size
#         bucket = self.buckets[index]
#         for i, (k, _) in enumerate(bucket):
#             if k == key:
#                 bucket.pop(i)
#                 return

# hm = MyHashMap()
# hm.put(1, 1)
# hm.put(2, 2)
# hm


######################## 2283: CHECK IF NUMBER HAS EQUAL DIGIT COUNT AND DIGIT VALUE ########################
# def digitCount(num: str) -> bool:
#     newDict = {}
#     newDict2 = {}
#     for x in range(len(num)):
#         newDict[x] = int(num[x])
#         if num[x] in newDict2:
#             newDict2[num[x]] = newDict2[num[x]] + 1
#         else:
#             newDict2[num[x]] = 1
#     print(f'newDict = {newDict}')
#     print(f'newDict2 = {newDict2}')
#     for x in range(len(newDict)):
#         print(f'x = {x}')
#         actual = newDict2.get(str(x), 0)
#         print(f'actual = {actual}')
#         required = newDict[x]
#         print(f'required = {required}')
#         if actual != required:
#             return False
#     return True

# num = '1210'
# print(digitCount(num))


######################## 2807: INSERT GREATEST COMMON DIVISORS IN LINKED LIST ########################
# from typing import Optional
# import math
# class ListNode:
#     def __init__(self, val = 0, next = None):
#         self.val = val
#         self.next = next
# class Solution:
#     def insertionGCD(head: Optional[ListNode]) -> Optional[ListNode]:
#         if head is None:
#             return None
#         if head.next is None:
#             return head
#         p1 = head
#         p2 = head.next
#         while p2 is not None:
#             temp = p1.next
#             gcd = ListNode(math.gcd(p1.val, p2.val), None)
#             gcd.next = temp
#             p1.next = gcd
#             p1 = temp
#             p2 = p2.next
#         curr = head
#         while curr is not None:
#             print(curr.val)
#             curr = curr.next
#         return head

# head = ListNode(18, None)
# head.next = ListNode(6, None)
# second = head.next
# second.next = ListNode(10, None)
# third = second.next
# third.next = ListNode(3, None)
# Solution.insertionGCD(head)

# 001100011
# count all substrings with equal 0s and 1s
# answer above is 6
# 01,0011,1100,10,01,0011


######################## 2980: CHECK IF BITWISE OR HAS TRAILING ZEROES ########################
# def hasTrailingZeroes(nums: list[int]) -> bool:
#     evenCounter = 0
#     for x in range(len(nums)):
#         if(nums[x] % 2 == 0):
#             evenCounter = evenCounter + 1
#         if(evenCounter == 2):
#             return True
#     return False

# nums = [2,4,6,8]
# print(hasTrailingZeroes(nums))


######################## 3178: FIND THE CHILD WHO HAS THE BALL AFTER K SECONDS ########################
# def numberOfChild(n: int, k: int) -> int:
    # currentChild = 0
    # goingForward = True
    # i = 1
    # for i in range(k):
    #     if (currentChild == n - 1):
    #         goingForward = False
    #     if(currentChild == 0):
    #         goingForward = True
    #     if(goingForward == True):
    #         currentChild += 1
    #     if(goingForward == False):
    #         currentChild -= 1
    #     print(currentChild)
    # return currentChild
#     n -= 1
#     rounds = k / n
#     remainder = k % n
#     if rounds%2 == 0:
#         return remainder
#     else:
#         return n - remainder

# print(numberOfChild(3, 5))


######################## 3591: CHECK IF ANY ELEMENT HAS PRIME FREQUENCY ########################
# def is_prime(n: int) -> bool:
#     print(n)
#     if n <= 1:
#         return False
#     for i in range(2, n):
#         if n % i == 0:
#             return False
#     return True

# def checkPrimeFrequency(nums: list[int]) -> bool:
#     newDict = {}
#     allOnes = True
#     for x in range(len(nums)):
#         if nums[x] in newDict:
#             newDict[nums[x]] += 1
#             allOnes = False
#         else:
#             newDict[nums[x]] = 1
#     if allOnes == True:
#         return False
#     for x in newDict:
#         if newDict[x] == 1 or is_prime(newDict[x]) == False:
#             continue
#         else:
#             return True
#     return False

# nums = [2,2,0,6,12,2,10,7,0,2]
# print(checkPrimeFrequency(nums))
