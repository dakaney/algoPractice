var findAndReplacePattern = function(words, pattern) {
    let result = [];
    for (let word of words) {
        if (checkPattern(word, pattern)) {
            result.push(word);
        }
    }
    return result;
};

let checkPattern = (word, pattern) => {
    if (word.length !== pattern.length) return false;
    let wordToPattern = {};
    let patternToWord = {};
    for (let i = 0; i < word.length; i++) {
        wordToPattern[word[i]] = wordToPattern[word[i]] || pattern[i]
        if (wordToPattern[word[i]] !== pattern[i]) return false;
        patternToWord[pattern[i]] = patternToWord[pattern[i]] || word[i]
        if (patternToWord[pattern[i]] !== word[i]) return false;
    }
    return true;
}