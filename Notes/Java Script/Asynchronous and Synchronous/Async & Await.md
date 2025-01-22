```js
function fetchdata()
{
return new Promise ((resolve , project)=>
{
setTimeout(()=>{const success=true 
if (success)
{
resolve("Date Fetched");
}
	else
	{
	reject("Error Fetching data");	
	}
},2000)
})
}

async function displayData()
{
console.log("initial");
const data= await fetchData();
console.log(data);
console.log("final");
}
displayData();
```

```js
console.log("Meow")
```