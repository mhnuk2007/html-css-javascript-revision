// =======================
// ARRAYS IN JAVASCRIPT
// =======================

// Creating an array using square brackets []  (Most Common & Recommended)
let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // [1, 2, 3, 4, 5]

// Creating an array using Array Constructor
// Not used often, but important to know
let arrConstructor1 = new Array(1, 2, 3, 4, 5);
console.log(arrConstructor1); // [1,2,3,4,5]

// If you pass a SINGLE number, it creates empty slots
let arrConstructor2 = new Array(5);
console.log(arrConstructor2); // [empty × 5]
console.log(arrConstructor2.length); // 5

// Accessing elements using index (starts from 0)
console.log(myArray[0]); // 1

// Modifying elements by index
myArray[1] = 10;
console.log(myArray); // [1, 10, 3, 4, 5]

// =======================
// BASIC ARRAY METHODS
// =======================

// push() → Adds element to the END of array
myArray.push(6);
console.log(myArray); // [1,10,3,4,5,6]

// pop() → Removes LAST element
myArray.pop();
console.log(myArray); // [1,10,3,4,5]

// unshift() → Adds element to the START
myArray.unshift(0);
console.log(myArray); // [0,1,10,3,4,5]

// shift() → Removes FIRST element
myArray.shift();
console.log(myArray); // [1,10,3,4,5]

// length → Total number of elements
console.log(myArray.length); // 5

// =======================
// SORTING & REVERSING
// =======================

// sort() → Default sort is STRING sort (not numeric)
myArray.sort();
console.log(myArray); // May be incorrect for numbers

// Numeric ASCENDING sort
myArray.sort((a, b) => a - b);
console.log(myArray); // [1,3,4,5,10]

// Numeric DESCENDING sort
myArray.sort((a, b) => b - a);
console.log(myArray); // [10,5,4,3,1]

// reverse() → Reverses array order
myArray.reverse();
console.log(myArray);

// =======================
// TYPE CHECKING
// =======================

// typeof array returns "object"
console.log(typeof myArray); // "object"

// Correct way to check array
console.log(Array.isArray(myArray)); // true

// Type of individual element
console.log(typeof myArray[0]); // "number"

// =======================
// CONCATENATION
// =======================

// concat() → Merges arrays without modifying originals
let anotherArray = [7, 8, 9];
let combinedArray = myArray.concat(anotherArray);
console.log(combinedArray);

// =======================
// SLICE (NO CHANGE)
// =======================

// slice(start, end) → Copies part of array
// End index is NOT included
let slicedArray = myArray.slice(1, 4);
console.log(slicedArray); // Copy only
console.log(myArray);     // Original unchanged

// =======================
// SPLICE (CHANGES ARRAY)
// =======================

// splice(index, deleteCount) → Remove items
myArray.splice(2, 1);
console.log(myArray);

// splice(index, deleteCount, items...) → Insert
myArray.splice(2, 0, 25);
console.log(myArray);

// Replace elements
myArray.splice(1, 2, 5, 30);
console.log(myArray);

// =======================
// SEARCH METHODS
// =======================

let fruits = ["Apple", "Banana", "Mango"];

// includes() → Checks existence
console.log(fruits.includes("Banana")); // true

// indexOf() → First occurrence index
console.log(fruits.indexOf("Mango")); // 2

// lastIndexOf() → Last occurrence index
console.log(fruits.lastIndexOf("Apple")); // 0

// =======================
// STRING CONVERSION
// =======================

// join() → Array → String
let fruitsString = fruits.join(", ");
console.log(fruitsString); // "Apple, Banana, Mango"

// split() → String → Array
let fruitsArray = fruitsString.split(", ");
console.log(fruitsArray);

// =======================
// MAP / FILTER / REDUCE
// =======================

let numbers = [1, 2, 3, 4, 5];

// map() → Transform each element
let squaredNumbers = numbers.map(n => n * n);
console.log(squaredNumbers); // [1,4,9,16,25]

// filter() → Select matching elements
let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2,4]

// reduce() → Combine into single value
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15

// =======================
// FINDING VALUES
// =======================

let ages = [18, 22, 15, 30, 25];

// find() → First matching value
console.log(ages.find(a => a >= 18)); // 18

// findIndex() → Index of first match
console.log(ages.findIndex(a => a >= 18)); // 0

// =======================
// BOOLEAN CHECKS
// =======================

// some() → At least one true
console.log(numbers.some(n => n > 4)); // true

// every() → All must be true
console.log(numbers.every(n => n > 0)); // true

// =======================
// EXTRA USEFUL METHODS
// =======================

// flat() → Remove nesting
let nested = [1, 2, [3, 4], [5]];
console.log(nested.flat()); // [1,2,3,4,5]

// fill(value, start, end) → Fill range
let fillArr = [1,2,3,4];
fillArr.fill(0, 1, 3);
console.log(fillArr); // [1,0,0,4]

// copyWithin(target, start) → Copy inside array
let copyArr = [1,2,3,4,5];
copyArr.copyWithin(0,3);
console.log(copyArr); // [4,5,3,4,5]

// at() → Access from end using negative index
console.log(numbers.at(-1)); // 5

let newArr = [2,3,4];
console.log(newArr);

newArr[9] = 10; // Creates empty slots from index 3 to 8
console.log(newArr); // [2,3,4, <6 empty items>, 10]

newArr.forEach(n => console.log(n)); // 2,3,4,10 (skips empty slots)
for(let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]); // 2,3,4,undefined (includes empty slots)
}

let colors = ["Red", "Green", "Blue"];
colors.forEach(color => console.log(color)); // Red, Green, Blue
colors.forEach((color, index) => console.log(index + ": " + color)); // 0 Red, 1 Green, 2 Blue

const ul = document.querySelector(".colors-list");
colors.forEach(color => {
    const li = document.createElement("li");
    li.textContent = color;
    ul.appendChild(li);
});

// Shift last element to first position
let shiftArr = [1,2,3,4];
// Method 1: Using pop() and unshift()
let lastElement = shiftArr.pop();
shiftArr.unshift(lastElement);
console.log(shiftArr); // [4,1,2,3]

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];
console.log("deskArray:", deskArray);

const newDeskArray = [...deskArray];
console.log("newDeskArray:", newDeskArray);
// Remove the last item from newDeskArray
newDeskArray.pop();
console.log("newDeskArray:", newDeskArray); 

// Sort the remaining items alphabetically
newDeskArray.sort();
console.log("newDeskArray:", newDeskArray);

// Move the last item in the array to the first position
const lastItem = newDeskArray.pop();
newDeskArray.unshift(lastItem);
console.log("newDeskArray:", newDeskArray);

// Find the "usb-drive" item and move it to the end of the array
const usbIndex = newDeskArray.indexOf("USB drive");
newDeskArray.splice(usbIndex, 1); // Remove and get the item
newDeskArray.push("USB drive"); // Add it to the end
console.log("newDeskArray:", newDeskArray);

// Find the "laptop" item and remove it from the array
const laptopIndex = newDeskArray.indexOf("laptop");
newDeskArray.splice(laptopIndex, 1); // Remove laptop
console.log("newDeskArray:", newDeskArray);