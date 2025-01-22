class Person {
  // Constructor to initialize the person object with name and age
  constructor(name, age) {
    // Initialize the name property
    this.name = name;
    // Initialize the age property
    this.age = age;
  }
  // Method to print a personalized introduction
  introduction() {
    // Log the introduction message to the console
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  }
}

// Create a new Person object
var personvar = new Person("Sajan", 20);
// Call the introduction method on the person object
personvar.introduction();
