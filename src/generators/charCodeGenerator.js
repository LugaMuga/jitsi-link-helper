function generateCharCode(useDashes) {
  let value = "";
  for (let i = 0; i < 10; i++) {
    if (useDashes && (i === 3 || i === 6)) {
      value += "-";
    }
    value += String.fromCharCode(97 + Math.random() * 10);
  }
  return value;
}
