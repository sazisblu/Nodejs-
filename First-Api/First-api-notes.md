# Starting the Node Server

To start your Node server, follow these steps:

## Step 1: Initialize the Project

- Run the command `npm init` in your terminal to create a `package.json` file. This file will store information about your project, including dependencies and scripts.
- You can do the same initialization with command `npm init -y`

## Step 2: Install Dependencies

Install the required dependencies for your project using `npm install`.

## Step 3: Create a Server File

- Create a new file, typically named `server.js` or `index.js`, to write your server code.
- Once a server is created and ran , any update in the code of the server file is not immediately shown when we make api requests. 
- To reflect the change in code we shall restart the server which we do by:
  ``
## Step 4: Write Server Code

In your server file, write the code to create and start your server. For example:

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

## Step 5: Start the Server

Add a script to your `package.json` file to start the server:

```json
"scripts": {
  "start": "node server.js"
}
```

Then, run the command `npm start` to start your server.

Note: Make sure to replace `server.js` with the actual name of your server file.


## Nodemon
- This package restarts the server every time any new changes are made to the server code
- This can be ran by using scripts inside the package.json file 
- ![[Pasted image 20250122085405.png]]
- Here if i run `npm run start` - `node index.js` will run
- Here if i run `npm run meow` - `nodemon index.js` will run

### since in node servers, we have to create new blocks for every potential URL accessed by the API and the possible request combinations, thus it is inefficient. so we shall explore the Express JS framework. [[Second-Api-Express-notes]]
