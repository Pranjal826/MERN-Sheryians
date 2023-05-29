#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
using namespace std;
string findSmallestWindow( string& A,  string& B) {
    unordered_map<char, int> countB, countA;
    
    // Step 1: Populate countB with character frequencies of B
    for (char c : B)
        countB[c]++;
    
    int l = 0, r = 0;
    int count = 0;
    int minL = A.length() + 1;
    int strtind = -1;
    
    while (r < A.length()) {
        // Step 2: Expand the window and update countA
        countA[A[r]]++;
        
        // Step 3: Increment count if character is present in B and its frequency in countA is less than or equal to countB
        if (countB.find(A[r]) != countB.end() && countA[A[r]] <= countB[A[r]])
            count++;
        
        // Step 4: If window contains all characters of B, try to minimize the window
        if (count == B.length()) {
            // Shrink the window by moving the l pointer
            while (countB.find(A[l]) == countB.end() || countA[A[l]] > countB[A[l]]) {
                countA[A[l]]--;
                l++;
            }
            
            // Update the minimum window length and starting index
            int windowL = r - l + 1;
            if (windowL < minL) {
                minL = windowL;
                strtind = l;
            }
        }
        
        r++;
    }
    
    // Step 5: Check if a valid window was found
    if (strtind == -1)
        return "-1";
    
    return A.substr(strtind, minL);
}

int main() {
    string A = "timetopractice";
    string B = "toc";
    cout << findSmallestWindow(A, B) << endl; 

    A = "zoomlazapzo";
    B = "oza";
    cout << findSmallestWindow(A, B) << endl;

    return 0;
}
