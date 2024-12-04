function sumSeriesRecursive(n, sum = 0) {
  sum += n;
  // BASE CASE
  if (n === 1) return sum;
  // RECURSIVE CASE
  return sumSeriesRecursive(n - 1, sum);
  
}

function sumSeriesIterative(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n--;
  }
  return sum;
}

export { sumSeriesIterative, sumSeriesRecursive };
