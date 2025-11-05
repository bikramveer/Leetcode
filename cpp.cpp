#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <stack>
#include <math.h>
using namespace std;

// MARK: 1 - TWO SUM
vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    vector<int> result = {i, j};
                    return result;
                };
            };
        };
        return {};
    };

vector<int> twoSum2(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for(int i= 0; i < nums.size(); i++) {
        int hunted = target - nums[i];
        if(seen.count(hunted)) {
            return {seen[hunted], i};
        }
        seen[nums[i]] = i;
    };
    return {};
}


// MARK: 20 - VALID PARENTHESIS
bool isValid(string s) {
    stack<string> chars;
    string popped;
    if (s[0] == ')' || s[0] == ']' || s[0] == '}') {
        cout << "Started with open parenthesis." << endl;
        return false;
    };
    for (int i = 0; i < s.size(); i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            chars.push({s[i]});
        } else {
            switch (s[i])
            {
            case ')':
                if (chars.size() == 0) {
                    return false;
                };
                popped = chars.top();
                chars.pop();
                if (popped != "(") {
                    return false;
                };
                break;
            
            case ']':
                if (chars.size() == 0) {
                    return false;
                };
                popped = chars.top();
                chars.pop();
                if (popped != "[") {
                    return false;
                };
                break;
            
            case '}':
                if (chars.size() == 0) {
                    return false;
                };
                popped = chars.top();
                chars.pop();
                if (popped != "{") {
                    return false;
                };
                break;
            
            default:
                return false;
            };
        };
    };
    return (chars.size() == 0) ? true : false;
};


// MARK: 26 - REMOVE DUPLICATES FROM SORTED ARRAY
int removeDupiclates(vector<int>& nums) {
    int curr = 1;
    int k = 1;
    for (int i = 0; i < nums.size() - 1; i++) {
        if (nums[i + 1] == nums[i]) {
            continue;
        } else {
            nums[curr] = nums[i + 1];
            curr += 1;
            k += 1;
        };
    };
    return k;
}


// MARK; 27 - REMOVE ELEMENT
int removeElement(vector<int>& nums, int val) {
    int swapped = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != val) {
            nums[swapped] = nums[i];
            swapped++;
        };
    };
    return swapped;
}


// MARK: 28 - FIND THE INDEX OF THE FIRST OCCURENCE IN A STRING
int strStr(string haystack,  string needle) {
    int range = haystack.size() - needle.size() + 1;
    if (needle.size() > haystack.size()) {
        return -1;
    };
    for (int i = 0; i <= range; i++) {
        if (haystack[i] == needle[0]) {
            int temp = i;
            int curr = i;
            int y = 0;
            bool equal = true;
            while (y < needle.size()) {
                if (curr == haystack.size()) {
                    return -1;
                } else if (haystack[curr] != needle[y]) {
                    equal = false;
                    break;
                } else {
                    y++;
                    curr++;
                };
            };
            if (equal == true) {
                return temp;
            };
        };
    };
    return -1;
}


// MARK: 35 - SEARCH INSERTION POINT
int searchInsert(vector<int> nums, int target) {
    int start = 0;
    int end = nums.size() - 1;
    while (start <= end) {
        int mid = floor((start + end) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        };
    };
    return start;
}

int searchInsert2(vector<int> nums, int target) {
    if (nums.size() == 0) {
        return 0;
    } else if (nums.size() == 1) {
        if (nums[0] < target) {
            cout << "first value " << nums[0] << " is less than target " << target << endl;
            return 1;
        } else {
            cout << "first value " << nums[0] << " is greater than target " << target << endl;
            return 0;
        }
    }
    int first = 0;
    int second = 1;
    if (nums[first] == target || nums[first] >= target) {
        return first;
    };
    while (nums[second]) {
        if(nums[second] == target) {
            return second;
        } else if (target >= nums[first] && target < nums[second]) {
            return second;
        };
        first++;
        second++;
    };
    return second;
}


// MARK: 58 - LENGTH OF LAST WORD
int lengthOfLastWord(string s) {
    int count = 0;
    for (int i = s.length()-1; i >= 0; i--) {
        if (s[i] == ' ') {
            continue;
        };
        while (i >= 0 && s[i] != ' ') {
            count++;
            i--;
        };
        return count;
    }
    return count;
}


// MARK 66 - PLUS ONE
vector<int> plusOne(vector<int> digits) {
    int curr = digits.size() - 1;
    while (curr >= 0) {
        digits[curr]++;
        if(digits[curr] == 10) {
            digits[curr] = 0;
            if (curr == 0) {
                vector<int> lead = {1};
                lead.insert(lead.end(), digits.begin(), digits.end());
                return lead;
            };
            curr--;
        } else {
            return digits;
        };
    };
    return digits;
};


// MARK: 70 - CLIMBING STAIRS
int climbingStairs(int n) {
    if (n == 1) {
        return 1;
    };
    if (n == 2) {
        return 2;
    } else {
        unordered_map <int, int> map;
        map[1] = 1;
        map[2] = 2;
        for (int i = 3; i <= n; i++) {
            map[i] = map[i - 1] + map[i - 2];
        };
        return map[n];
    };
};


// MARK: 88 - MERGED SORTED ARRAY
void merge(vector<int>& nums1, vector<int>& nums2, int m, int n) {
    if (m == 0) {
        nums1 = nums2;
        return;
    };
    if (n == 0) {
        return;
    };
    int nums2Place = n - 1;
    int nums1Place = m - 1;
    int i = m + n - 1;
    while (nums2Place >= 0) {
        if (nums1Place < 0 || nums2[nums2Place] > nums1[nums1Place]) {
            nums1[i] = nums2[nums2Place];
            nums2Place--;
        } else {
            nums1[i] = nums1[nums1Place];
            nums1Place--;
        };
        i--;
    };
    return;
};


// MARK: 696 - COUNT BINARY SUBSTRINGS
int countBinarySubstrings (string s) {
    vector<int> runs = {};
    int curr = 1;
    for (int i = 1; i < s.length(); i++) {
        if (s[i] == s[i-1]) {
            curr += 1;
        } else {
            runs.push_back(curr);
            curr = 1;
        };
    };
    runs.push_back(curr);
    int result = 0;
    for (int i = 0; i < runs.size() - 1; i++) {
        result += min(runs[i], runs[i+1]);
    };
    return result;
};


// MARK: 706 - DESIGN HASHMAP
class MyHashMap {
    vector<int> data;
    public:
        MyHashMap(): data(1'000'000, -1) {};

        void put(int key, int value) {
            data[key] = value;
        };
        int get(int key) {
            return data[key];
        };
        void remove(int key) {
            data[key] = -1;
        }
};

int main() {
    // vector<int> nums = {3,2,4};
    // int target = 6;
    // vector<int> result = twoSum2(nums, target);
    // cout << result[0] << " " << result[1] << endl;

    // string s = "[]({})";
    // cout << isValid(s) << endl;

    // vector<int> nums = {0,0,1,1,1,2,3,3,4};
    // cout << removeDupiclates(nums) << endl;

    // vector<int> nums = {0,1,2,2,3,0,4,2};
    // cout << removeElement(nums, 2) << endl;

    // string haystack = "dasbutsad";
    // string needle = "sad";
    // cout << strStr(haystack, needle) << endl;

    // vector<int> nums = {1};
    // cout << searchInsert(nums, 1) << endl;
    // cout << searchInsert2(nums,1) << endl;

    // string s = "a";
    // cout << lengthOfLastWord(s) << endl;

    // vector<int> digits = {2,3,7,9,9};
    // vector<int> result = plusOne(digits);
    // for (int i = 0; i < result.size(); i++) {
    //     cout << result[i] << endl;
    // };

    // cout << climbingStairs(43) << endl;

    // vector<int> nums1 = {1,2,3,0,0,0};
    // vector<int> nums2 = {2,5,6};
    // int m = 3;
    // int n = 3;
    // merge(nums1, nums2, m, n);
    // for (int i = 0; i < nums1.size(); i++) {
    //     cout << nums1[i] << endl;
    // };

    // string s = "11001001001110001";
    // cout << countBinarySubstrings(s) << endl;
   
    return 0;
};