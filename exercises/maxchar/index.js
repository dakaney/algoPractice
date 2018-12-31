// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
 
function maxChar(str) {
    let storage = {};
    let highestCount = 0;
    let highestChar = str[0];
    for (let char of str) {
        storage[char] = storage[char] + 1 || 1;
        if (highestCount < storage[char]) {
            highestCount = storage[char];
            highestChar = char;
        }
    };
    return highestChar;
}

module.exports = maxChar;
