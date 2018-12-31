// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let str1 = stringA.toLowerCase().replace(/[^a-z]+/g, '').split('');
    let str2 = stringB.toLowerCase().replace(/[^a-z]+/g, '').split('');
    let storage = {};
    if (str1.length !== str2.length) return false;
    for (let char of str1) {
        storage[char] = storage[char] + 1 || 1;
    }

    for (let char of str2) {
        if (!storage[char]) return false;
        if (storage[char] - 1 >= 0) {
            storage[char] -= 1;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = anagrams;
