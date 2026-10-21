export function calculate(left, operator, right) {
  if (typeof left !== 'number' || typeof right !== 'number') {
    throw new Error('Operands must be numbers');
  }
  let result;
  switch (operator) {
    case '+':
      result = left + right;
      break;
    case '-':
      result = left - right;
      break;
    case '*':
      result = left * right;
      break;
    case '/':
      if (right === 0) {
        throw new Error('Division by zero');
      }
      result = left / right;
      break;
    default:
      throw new Error('Unsupported operator');
  }
  // Normalize floating point results to avoid binary artifacts
  // Using toPrecision with sufficient digits then converting back to Number
  const normalized = Number(result.toPrecision(15));
  if (!Number.isFinite(normalized)) {
    throw new Error('Result is not a finite number');
  }
  return normalized;
}
