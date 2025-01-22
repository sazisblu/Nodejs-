// Define a calculator function that takes two numbers and an operator as arguments
calculator = (x, y, sign) => {
  // Use a switch statement to determine the operation based on the operator
  switch (sign) {
    // If the operator is '+', return the sum of x and y
    case '+':
      return (x + y)
    // If the operator is '-', return the difference of x and y
    case '-':
      return (x - y)
    // If the operator is '*', return the product of x and y
    case '*':
      return (x * y)
    // If the operator is '/', return the quotient of x and y
    case '/':
      return (x / y)
  }
}

// Call the calculator function with arguments 1, 2, and '*' (multiplication)
var result = calculator(1, 2, '*');
// Log the result to the console
console.log(result);