const http = require("http"); //importing module , we have two ways
// 1. const var = requre('module')
// 2. import 'module' as var
const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log("url:", url);
  console.log("method:", method);
  if ((url = "/")) {
    res.end("response from end point");
  }
  if ((url = "/")) {
    res.end("response from end point");
  }
  if ((url = "/test")) {
    res.end("response from test end point");
  }
}); // Creates a new HTTP server instance, handling incoming requests and sending responses.
server.listen(3000, (err) => {
  if (err) {
    console.log("Error:" + err);
  }
  console.log("Server is running on port 3000");
  console.log("new line");
}); //Three arguements :1.Server listens to the specified port (here the port number is 3000)
// 2. Type of host (local or non local)
//3. callback function
