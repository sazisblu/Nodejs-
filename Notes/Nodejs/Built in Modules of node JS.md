## Path module 
- The use of `Path` module. 
- This is used to show features of a file specified at `path`

``` js
const path = require('path')
const filepath-"E:\Nodejs\Notes\Java Script\Asynchronous and Synchronous\Promises.md"
console.log(path.basename(filepath));
```

## FS module 
- The use of `fs` module
- This module is used to read and write to files 

```js
const fs = require('fs');
fs.readFile('01. Call Stack.md', 'utf8', (err, data) => {
  if (err) {
    console.error("error:"+err);
    return;
  }
  console.log(data);
});

fs.writeFile('01. Call Stack.md'.'# Meow',(err)=>{
if(err)
{
console.log("Error:"+err);
}
else
{
console.log("Successfully written to file")
}
})
```

## HTTP module 
- The http module allows you to create HTTP servers and clients  Most most fundamental modules for building web servers.
- We made a basic server using this module . you can find the notes here [[First-api-notes]]
- 