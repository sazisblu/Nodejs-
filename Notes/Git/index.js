console.log("Hello, World!");

// Variables
let name = "John Doe";
let age = 30;

// Conditional Statements
if (age > 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Loop iteration: " + i);
}

// Function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Jane Doe");

// Arrays
let colors = ["red", "green", "blue"];
console.log(colors[0]);

// Objects
let person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer"
};

console.log(person.name);

console.log();
let cat = {
  name: "Whiskers",
  age: 3,
  breed: "Siamese"
};

console.log(cat.name + " is a " + cat.age + " year old " + cat.breed + ".");

let catSounds = ["meow", "purrr", "hiss"];
for (let i = 0; i < catSounds.length; i++) {
  console.log("Cat sound: " + catSounds[i]);
}