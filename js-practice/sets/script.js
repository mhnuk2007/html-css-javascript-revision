// =======================
// SETS IN JAVASCRIPT
// =======================

// Create a Set for our packing list
const itemsToPack = new Set();

// Add items to the Set
itemsToPack.add("water bottle");
itemsToPack.add("laptop");
itemsToPack.add("headphones");
itemsToPack.add("snacks");
itemsToPack.add("book");
itemsToPack.add("sunscreen");

console.log(itemsToPack); 
// Output: Set(6) {"water bottle", "laptop", "headphones", "snacks", "book", "sunscreen"}

// =======================
// BASIC SET METHODS
// =======================

// has() → Check if an item exists
console.log(itemsToPack.has("laptop")); // true
console.log(itemsToPack.has("charger")); // false

// delete() → Remove an item
itemsToPack.delete("snacks");
console.log(itemsToPack.has("snacks")); // false

// size → Number of unique items
console.log(itemsToPack.size); // 5

// add() → Avoid duplicates automatically
itemsToPack.add("laptop"); // Already exists, Set ignores it
console.log(itemsToPack.size); // Still 5

// =======================
// COMBINING ARRAYS INTO A UNIQUE SET
// =======================

const backpack1 = ["water bottle", "laptop"];
const backpack2 = ["headphones", "snacks", "book"];

// Combine both arrays and remove duplicates using Set
const combinedItems = new Set([...backpack1, ...backpack2, "sunscreen"]);
console.log(combinedItems); 
// Output: Set(6) {"water bottle", "laptop", "headphones", "snacks", "book", "sunscreen"}

// =======================
// LOOPING THROUGH SET ITEMS
// =======================

// Check which backpack has which item
combinedItems.forEach(item => {
  if (backpack1.includes(item)) {
    console.log(`${item} is packed in backpack 1`);
  } else if (backpack2.includes(item)) {
    console.log(`${item} is packed in backpack 2`);
  } else {
    console.log(`${item} is not packed`);
  }
});

// =======================
// SET → ARRAY
// =======================

// Convert Set back to array if needed
const uniqueItemsArray = [...combinedItems];
console.log(uniqueItemsArray);
// ["water bottle", "laptop", "headphones", "snacks", "book", "sunscreen"]