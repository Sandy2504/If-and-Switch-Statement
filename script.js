const size = 25;
let result;

if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "lower than 10";
}
console.log(result);

//   Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

// TODO: Implement the oldYoung function

function oldYoung(age) {
  if (typeof age !== "number" || age < 0) {
    return "string";
  } else if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "younger person";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
console.log(oldYoung("15"));
