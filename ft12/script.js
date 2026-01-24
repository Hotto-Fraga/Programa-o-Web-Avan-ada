function parseIntArray(n) {
  let arr = [];
  let numbers = Math.random() * 100;
  for (let i = 0; i < n; i++) {
    let num = Math.floor(numbers);
    arr.push(num);
  }
  return arr;
}

let n = 10;
let numbers = parseIntArray(n);
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum is: " + sum);
