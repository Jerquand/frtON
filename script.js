// Call back function for Search bar
function searchBar() {
    let search = document.getElementById("search").value;
    document.getElementById("btn").innerHTML = search;
  }

  // Call back function for Email and Pasword
function login(){
  let login1 = document.getElementById("login1").value;
  document.getElementById("form-group mb-2").innerHTML= login1;
}


app.listen(port, () => console.log('welcome your listinng ar port ${port}'));

//use a function expression
var user = {
  firstName: "J",
  lastName: "D",
  fullName : "",
  userName : "",
  password : "",
  email : "",
  mailingAddress : "",
  billingAddress : "",
  getFullName: function() {
  console.log(user.firstName + " " + user.lastName);
  }
};

// Age to see website
let age = 17;
const isOldEnough =
  age >=18

  ?"Welcome to our site."
  : "Sorry; you must be 18 older to enter.";

console.log(isOldEnough);



try {
  // Block of code to try
} catch (err) {
  // Block of code to handle errors
} finally {
  // Block of code to be executed regardless of the try..catch result
}
// tested on Node v4.2.6
var crypto = require('crypto');


// execute request and output results to console
https.request({ host: url, method: 'GET', path: path, headers: my_headers }, function(res){
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
    	console.log(chunk);
  });
}).end();


// Math console log for all math equations
console.log(Math);
console.log(Date());
console.log();
app.listen(443, console.log('Server started  on port ${POST}'));
