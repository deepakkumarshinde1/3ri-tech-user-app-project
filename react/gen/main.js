function* createAId(index, last) {
  // 1 .. 10
  for (index; index <= last; index++) {
    yield index; // return  a value and pause the function
  }
}

// ===> fill a form ==> id
// ===> fill a form ==> id
// ===> fill a form ==> id

// create number in sequence but when ever we want
// pause a function and resume it again
let myId = createAId(10, 20);

console.log(myId.next());
console.log("hello");
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
console.log(myId.next());
