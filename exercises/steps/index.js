// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += ' ';
    }
    for (let j = 0; j < n; j++) {
        result = '#' + result.substr(0, result.length - 1);
        console.log(result);
    }
}

module.exports = steps;
