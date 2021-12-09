// all functions in util/logger.js are available
const largestSplice = require('./utilities/largestSplice');

// using ES6 object destructuring, only myFirstFunction is available
const { sum, concat } = require('./utilities/sumConcat');


console.log('Sum: ',sum([1,2,3,4,5]));
console.log('Concat: ',concat([1,2,3,4,5],[6,7,8,9]));
console.log('Largest Number: ',largestSplice.lgNum([1,2,3,4,5]));
console.log('Removed 3rd: ',largestSplice.cut3([1,2,3,4,5]));