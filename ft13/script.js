function parseIntArray(n) {
  let arr = [];
  let numbers = Math.random() * 10;
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(numbers);
    arr.push(num);
    numbers += Math.random() * 10;
  }
  return arr;
}

let n = 10;
let numbers = parseIntArray(n);
let sum = 0;

let filterodNumbers = numbers.filter((num) => num % 2 === 0);

console.log("The odd numbers are: " + filterodNumbers);
