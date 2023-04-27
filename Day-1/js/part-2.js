// primitive => immutable => store data by value
// string , number , boolean
let text = "abc";
text = text + "happy";

// non-primitive => Mutable => store data by reference
// array , jsObject
let array1 = [10];
array1[1] = 20;
// console.log(array1);

let a1 = ["hello"]; // 0x111
let a2 = [1, 2, 3];
let b1 = [...a1, ...a2]; // 0x112
a1[0] = "deepakkumar"; // 0x111 =[0]

console.log(a1, b1);

let p1 = { name: "deepak" };
let p2 = { address: "Shirdi" };

let p3 = { ...p1, ...p2 };

// console.log(p3);

// rest params
function add(...values) {
  //let result = a + b + c;
  let result = values.reduce((pValue, cValue) => {
    return pValue + cValue;
  }, 0);

  console.log(result);
}

add(20, 11111);

// default params

function sub(a = 0, b = 0) {
  console.log(a - b); // NaN => Not a Number
}

sub(10, 5);
sub();
