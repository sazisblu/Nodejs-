const fs = require("fs");
fs.readFile("01. Call Stack.md", "utf8", (err, data) => {
  if (err) {
    console.error("error:" + err);
    return;
  }
  console.log(data);
});

fs.writeFile("01. Call Stack.md", "# Meow", (err) => {
  if (err) {
    console.log("Error:" + err);
  } else {
    console.log("Successfully written to file");
  }
});
