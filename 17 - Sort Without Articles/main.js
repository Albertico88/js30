const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Sort Aplhabetically excluding articles 'the', 'an', 'a'.
// Sort Array
const sortedBand = bands.sort((first, second) => {
  return strip(first) > strip(second) ? 1 : -1;
});
console.log(sortedBand);

// Strip function to remove articles
function strip(bandName) {
  const articles = /^(a |the |an )/i;
  return bandName.replace(articles, '').trim();
}


// Grab DOM element
// .map() over each band and .join() to remove commas
document.querySelector('#bands').innerHTML =
  sortedBand
    .map(band => `<li>${band}</li>`)
    .join('');
