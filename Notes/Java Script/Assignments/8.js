function getSquare(x) {
  return x * x;
}

console.log("Square of 5 from normal function is:" + getSquare(5));

// converting this to Arrow function
let getsquare = (x) => {
  return x * x;
};

console.log("Square of a 5 from arrow fun:" + getsquare(5));
