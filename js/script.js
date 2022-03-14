//DO WHILE LOOP
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// BREAK AND CONTINUE
//for (let i = 0; i < 10; i++){
//     if(i == 5) {
//         console.log("Five");
//         continue;
//     }
//
//     console.log(i);
//}

//for (let i = 0; i < 10; i++){
//     if(i == 5) {
//         console.log("Five");
//         break;
//     }

//     console.log(i);
//   }

//FUNCTIONS
function mySelf(name) {
  console.log("My name is", name);
}
mySelf("chris truncer");
mySelf("john strand");
mySelf("eric cole");
mySelf("eric conrad");
mySelf("frank ofori");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multiply(x, y) {
  let sum = x * y;
  console.log(sum);
}
multiply(2, 5);
multiply(6, 3);
multiply(9, 8);

//function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

//ARROW FUNCTIONS
let divide = (a, b) => a / b;
console.log(divide(10, 5));
let multi = (a, b) => a * b;
console.log(multi(10, 5));

//HIGHER ORDER FUNCTION
//function that takes a funtion as parameter.
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
let doubles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = numbers.map((number) => number + number);
console.log(doubles);
console.log(squares);

//FLITER
let evens = numbers.filter((number) => number % 2 === 0);
let odd = numbers.filter((number) => number % 2 !== 0);
let odd1 = numbers.filter((number) => number % 2 === 1);
console.log(evens);
console.log(odd);
console.log(odd1);

//FIND
let five = numbers.find((number) => number === 5);
console.log(five);

//STRING(any character on the keyboard that is in quotes)
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat("from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("lazy"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("u"));
console.log(sentence.indexOf("brown"));
console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart("10"));
console.log(sentence.padEnd("5"));
console.log(sentence.repeat("2"));
console.log(sentence.replace("lazy", "hardworkin"));
console.log(sentence.slice(20, 30));
console.log(sentence.split(" "));
let email = "kofi@email.com";
console.log(email.split("@"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
