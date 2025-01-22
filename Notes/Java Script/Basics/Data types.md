### JavaScript Data Types
#### Primitive Data Types

*   **Number**: Represents a numeric value, e.g., `42` or `3.14`.
*   **String**: Represents a sequence of characters, e.g., `'hello'` or `"hello"`.
*   **Boolean**: Represents a true or false value.
*   **Null**: Represents the absence of any object value.
*   **Undefined**: Represents an uninitialized or non-existent variable.
*   **Symbol**: Represents a unique and immutable value.

#### Composite Data Types

*   **Object**: Represents a collection of key-value pairs, e.g., `{ name: 'John', age: 30 }`.
*   **Array**: Represents an ordered collection of values, e.g., `[1, 2, 3]`.

#### Special Data Types

*   **Function**: Represents a block of code that can be executed, e.g., `function add(a, b) { return a + b; }`.
*   **Date**: Represents a date and time value.

### Classes in JavaScript

*   **Classes**: Introduced in ECMAScript 2015, classes are a way to define custom data types using the `class` keyword.
*   **Constructors**: Special methods used to initialize objects when they are created.
*   **Methods**: Functions that belong to a class or object.
*   **Inheritance**: The ability of one class to inherit properties and methods from another class.

### Why Printing Data Type of an Array Results in Object

In JavaScript, arrays are actually objects with a special `length` property and some additional methods like `push`, `pop`, etc. When you use the `typeof` operator to check the data type of an array, it returns `'object'` because arrays are objects.

However, you can use the `Array.isArray()` method to check if a value is an array.

```javascript
const arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"
console.log(Array.isArray(arr)); // Output: true
```