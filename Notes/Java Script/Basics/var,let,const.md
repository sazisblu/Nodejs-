# Blocks, Hoisting, and Variable Declarations in JavaScript
===========================================================

## Overview

In JavaScript, variables can be declared using `var`, `let`, and `const`. Each has its own set of rules and use cases. Understanding the differences between them is crucial for writing efficient and bug-free code.

## Blocks

A block in JavaScript is a set of statements enclosed in curly brackets `{}`. Blocks can be used to group statements together and are commonly used with control structures like `if`, `else`, `for`, and `while`.

## Hoisting

Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope, regardless of where they are actually declared. This can lead to unexpected behavior if not understood properly.

## Variable Declarations

### var

*   **Function scope**: Variables declared with `var` are function scoped, meaning they are accessible throughout the function they are declared in.
*   **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, but their assignment is not.
*   **Redeclaration**: Variables declared with `var` can be redeclared without any issues.
*   **Use cases**: `var` is generally avoided in modern JavaScript due to its function scope and hoisting behavior. However, it can still be used in certain situations where function scope is desired.

### let

*   **Block scope**: Variables declared with `let` are block scoped, meaning they are only accessible within the block they are declared in.
*   **Hoisting**: Variables declared with `let` are hoisted to the top of their scope, but their assignment is not.
*   **Redeclaration**: Variables declared with `let` cannot be redeclared in the same scope.
*   **Use cases**: `let` is commonly used when a variable needs to be reassigned or updated.

### const

*   **Block scope**: Variables declared with `const` are block scoped, meaning they are only accessible within the block they are declared in.
*   **Hoisting**: Variables declared with `const` are hoisted to the top of their scope, but their assignment is not.
*   **Redeclaration**: Variables declared with `const` cannot be redeclared in the same scope.
*   **Use cases**: `const` is commonly used when a variable does not need to be reassigned or updated.

## Comparison Table

|  | var | let | const |
| --- | --- | --- | --- |
| **Scope** | Function scope | Block scope | Block scope |
| **Hoisting** | Hoisted, but assignment is not | Hoisted, but assignment is not | Hoisted, but assignment is not |
| **Redeclaration** | Allowed | Not allowed | Not allowed |
| **Reassignment** | Allowed | Allowed | Not allowed |
| **Use cases** | Function scope, legacy code | Block scope, reassignment | Block scope, constants |

## Best Practices

*   Use `const` for variables that do not need to be reassigned or updated.
*   Use `let` for variables that need to be reassigned or updated.
*   Avoid using `var` unless function scope is desired.
*   Always declare variables at the top of their scope to avoid hoisting issues.


```javascript
// Example 1: Printing values of members
let person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.occupation); // Output: Software Developer

// Example 2: Nesting objects inside objects
let address = {
  street: '123 Main St',
  city: 'New York',
  state: 'NY',
  zip: '10001'
};

person.address = address;

console.log(person.address.street); // Output: 123 Main St
console.log(person.address.city); // Output: New York
console.log(person.address.state); // Output: NY
console.log(person.address.zip); // Output: 10001

// Example 3: Creating a collection of objects
let people = [
  {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
  },
  {
    name: 'Jane Doe',
    age: 25,
    occupation: 'Marketing Manager'
  },
  {
    name: 'Bob Smith',
    age: 40,
    occupation: 'Sales Representative'
  }
];

for (let person of people) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.occupation);
  console.log('------------------------');
}

// Example 4: Accessing object properties using bracket notation
let personName = 'John Doe';
let personAge = 30;

let personObject = {
  [personName]: {
    age: personAge
  }
};

console.log(personObject[personName].age); // Output: 30

// Example 5: Using the Object.keys() method to iterate over object properties
let personProperties = Object.keys(person);

for (let property of personProperties) {
  console.log(property);
  console.log(person[property]);
  console.log('------------------------');
}
```