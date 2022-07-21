const DIGITS = '0123456789';
function generateNumberCode(useDashes) {
  let value = "";
  for (let i = 0; i < 10; i++) {
    if (useDashes && (i === 3 || i === 6)) {
      value += "-";
    }
    value += randomElement(DIGITS);
  }
  return value;
}
