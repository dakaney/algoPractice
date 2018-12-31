// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
 
function pyramid(n) {
    let res = '';
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            res = ' ';
        } else {
            res += '  ';
        }
    }
    for (let i = n; i > 0; i--) {
        res = res.substr(0,i - 1) + '#' + res.substr(i);
        res = res.substr(0, res.length - i) + '#' + res.substr(res.length - i + 1);
        console.log(res);
    }
}

module.exports = pyramid;
