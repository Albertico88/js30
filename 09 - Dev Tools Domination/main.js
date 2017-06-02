const dogs = [
  {
    name: 'Snickers',
    age: 2
  },
  {
    name: 'hugo',
    age: 8
  }
];
//
// function makeGreen() {
//   const p = document.querySelector('p');
//   p.style.color = '#BADA55';
//   p.style.fontSize = '50px';
// }
const p = document.querySelector('p');
//Console

// Interpolated
let say = 'cool';
console.log('Hello I am a %s string!', '💩');
console.log(`Hello, I am a ${say} string`);

// Styled
console.log('%c Text here', 'font-size:10px; background: red');


// warning!
console.warn('Big mistake');

// Error :|
console.error('Error');

// Info
console.info('Useful info here');

// Testing
console.assert(1 === 2, 'That is wrong!');


// Viewing DOM Elements
console.log(p);
console.dir(p);

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/albertico88')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching data');
});
