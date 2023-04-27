// class
setTimeout(function () {
  // callback | inline function
}, 5 * 1000); // 1s === 1000ms
// function call

// global object ==> window
var a = 10;

// this ==> window globally
// function keyword function "this" will be ==> window object
console.log(window);
console.log(this);

function abc() {
  function xyz() {
    console.log(this);
  }

  xyz();
}

abc();

setTimeout(function () {
  console.log(this);
}, 5 * 1000); // 1s === 1000ms

class MyClass {
  print() {
    setTimeout(() => {
      console.log(this);
    }, 1 * 1000); // 1s === 1000ms
  }
}

let myClass = new MyClass();
myClass.print();

//  destructuring
// extracting a data from array or object
let array = [10, 20, 30, 40, 50];
// index = 0
// let numberOne = array[0];
// let numberTwo = array[1];

let [numberOne, numberTwo] = array;

console.log(numberOne, numberTwo);

// js Object
let product = {
  name: "Mi Mobile",
  price: 30000,
  dispatch: "20-April-2023",
};

// let dispatch = product.dispatch
let { dispatch: d, name: pName } = product;
// let pName = product.name

console.log(d);
console.log(pName);
