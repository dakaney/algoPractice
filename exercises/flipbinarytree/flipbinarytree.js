/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;
    let sameStructure = (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right));
    let flipStructure = (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
    return sameStructure || flipStructure;
};