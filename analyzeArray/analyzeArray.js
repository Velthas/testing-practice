export { analyzeArray };

function analyzeArray(array) {
  let total = 0;
  let min = array[0];
  let max = array[0];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] > max) max = array[i];
    if (array[i] < min) min = array[i];
    total += array[i];
  }

  const average = total / length;

  return {
    min,
    max,
    length,
    average,
  };
}
