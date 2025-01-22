class car {
  constructor(model, brand) {
    // Initialize the name property
    this.model = model;
    // Initialize the age property
    this.brand = brand;
  }

  getDetails() {
    console.log(`This car is a ${this.brand} ${this.model}`);
  }
}

car1 = new car("Lambo", "A12025");
car1.getDetails();
