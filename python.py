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


##################### 88: MERGED SORTED ARRAY #####################
def merge(nums1: list[int], nums2: list[int], m: int, n: int) -> None:
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
    if m == 0:
        nums1[:] = nums2
        return
    if n == 0:
        return
    nums2Place = n - 1
    nums1Place = m - 1
    i = m + n - 1
    while nums2Place >= 0:
        if nums1Place < 0 or nums2[nums2Place] > nums1[nums1Place]:
            nums1[i] = nums2[nums2Place]
            nums2Place -= 1
        else:
            nums1[i] = nums1[nums1Place]
            nums1Place -= 1
        i -= 1
    return

nums1 = [2, 0]
nums2 = [1]
m = 1
n = 1
merge(nums1, nums2, m, n)