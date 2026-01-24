function parseIntArrayUntilNegative() {
  let arr = [];
  while (true) {
    let num = prompt("Insert a number (negative to stop): ");
    num = parseInt(num);
    if (num < 0) {
      break;
    }
    arr.push(num);
  }
  return arr;
}

let numbers = parseIntArrayUntilNegative();
