let n = parseInt(prompt("Insert how many numbers you want to input: "));
let numbers = parseIntArray(n);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;

function parseIntArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Insert number " + (i + 1) + ": "));
    arr.push(num);
  }
  return arr;
}

console.log("The average is: " + average);
