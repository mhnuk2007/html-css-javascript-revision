// ------------------ Basic Arithmetic ------------------
let a = 10;
let b = 3;

console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333333333333335
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000 (10^3)

// ------------------ Increment / Decrement ------------------
let x = 5;

console.log("x++ =", x++); // 5 (then x becomes 6)
console.log("++x =", ++x); // 7
console.log("x-- =", x--); // 7 (then x becomes 6)
console.log("--x =", --x); // 5

// ------------------ Compound Assignment ------------------
let y = 10;

y += 5;  // y = 15
y -= 3;  // y = 12
y *= 2;  // y = 24
y /= 4;  // y = 6
y %= 4;  // y = 2
y **= 3; // y = 8 (2^3)

console.log("Compound assignment result y =", y);

// ------------------ Operator Precedence ------------------
console.log("5 + 2 * 3 =", 5 + 2 * 3);       // 11
console.log("(5 + 2) * 3 =", (5 + 2) * 3);   // 21
console.log("2 ** 3 ** 2 =", 2 ** 3 ** 2);   // 512

// ------------------ Type Coercion ------------------
console.log('"5" + 2 =', "5" + 2); // "52" (number → string)
console.log('"5" - 2 =', "5" - 2); // 3    (string → number)
console.log("true + 2 =", true + 2); // 3 (true → 1)
console.log("false + 2 =", false + 2); // 2 (false → 0)
console.log('"10" * "2" =', "10" * "2"); // 20
console.log('"10" / "2" =', "10" / "2"); // 5