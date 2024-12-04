export {exponent}


function exponent(x, n) {
// BASE CASE:
  if (n === 1) return x;

// RECURSIVE CASE:
  let firstNumber; let
    secondNumber;
  // n is even
  if (n % 2 === 0) {
    firstNumber = exponent(x, n / 2);
    secondNumber = exponent(x, n / 2);
  }
  // n is odd
  else {
    firstNumber = exponent(x, (n - 1) / 2);
    secondNumber = exponent(x, (n - 1) / 2 + 1);
  }
  return firstNumber * secondNumber
}
