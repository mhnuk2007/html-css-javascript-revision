let name = "Honey";   // Global (outer scope)

{
    let name = "Honey Chauhan"; // Block scope (inner scope)
    console.log(name);
}

console.log(name);