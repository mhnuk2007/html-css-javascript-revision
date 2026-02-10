//object-example.js
let Person = {
    name: "Honey",
    age: 10,
    class: 4,
    school: "spsc",
    subjects: {
        sub1: "English",
        sub2: "Maths",
        sub3: "Science",
    }
}

console.log(Person);
console.log(Person.name);
console.log(Person.age);
console.log(Person.class);
console.log(Person.school);
console.log(Person.subjects);
console.log(Person["name"]);
console.log(Person["age"]);
console.log(Person["class"]);
console.log(Person["school"]);
console.log(Person["subjects"]);

console.log(Object.keys(Person));
console.log(Object.values(Person));
console.log(Object.entries(Person));


console.log(typeof Person);
console.log(typeof Person.name);
console.log(typeof Person.age);
console.log(typeof Person.class);
console.log(typeof Person.school);
console.log(typeof Person.subjects);