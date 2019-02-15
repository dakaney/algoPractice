var maxDepth = function(root) {
    if (!root) return 0;
    let count = 1;
    let queue = [root, 'newLevel'];
    while (queue.length > 1) {
        let current = queue.shift();
        if (current === 'newLevel') {
            count += 1;
            queue.push('newLevel');
        } else {
            queue.push(...current.children);
        }
    }
    return count;
};
