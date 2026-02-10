// ------------------ Primitive Data Types ------------------
let num = 10;           // number stored in stack
let name = "Honey";     // string stored in stack
let isActive = true;    // boolean stored in stack

console.log(num);       // 10
console.log(name);      // "Honey"
console.log(isActive);  // true

// Copying primitive
let newNum = num;       // value is copied
newNum = 20;

console.log(num);       // 10 (original stays same)
console.log(newNum);    // 20 (independent copy)



// ------------------ Reference Data Types ------------------
let person = {
    name: "Honey",
    age: 10
}; // object stored in heap, 'person' in stack stores reference

let anotherPerson = person; // copies reference, NOT the object

anotherPerson.name = "Chauhan";

console.log(person.name);      // "Chauhan" (changed because same reference)
console.log(anotherPerson.name); // "Chauhan" (same object)

// Array example
let arr = [1, 2, 3];      // array stored in heap, 'arr' in stack stores reference
let arrCopy = arr;         // copies reference
arrCopy.push(4);

console.log(arr);          // [1, 2, 3, 4]
console.log(arrCopy);      // [1, 2, 3, 4]

// Creating independent copy of object (shallow copy)
let original = { a: 1, b: 2 };
let copy = { ...original };
copy.a = 10;

console.log(original.a);   // 1
console.log(copy.a);       // 10



// ------------------ Functions (Reference Type) ------------------
function greet() {
    console.log("Hello!");
}

let sayHi = greet;   // reference to the function
sayHi();             // Hello!