/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
  int preorder(TreeNode* root, int pathVal, int totalVal) {
    if (root == NULL) return 0;

    pathVal = pathVal * 10 + root->val;

    if (root->left == NULL && root->right == NULL) return pathVal;

    int leftVal = preorder(root->left, pathVal, totalVal);
    int rightVal = preorder(root->right, pathVal, totalVal);

    return leftVal + rightVal;
  }
public:
  int sumNumbers(TreeNode* root) {
    return preorder(root, 0, 0);
  }
};