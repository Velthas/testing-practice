export default reverseString;

// Takes the initial string, then turns it into an array of separate
// letters using the split method with '' as a parameter,
// that array is then reversed, and finally put together into a string using join.
// Ff no argument is passed, join returns elements as comma separated list
// but I wanted it to return each letter stitched together, so passed '';
function reverseString(string) {
  return string.split('').reverse().join('');
};