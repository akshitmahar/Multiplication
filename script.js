// Generate random numbers
var num1 = Math.floor(Math.random() * 13) + 7;
var num2 = Math.floor(Math.random() * 8) + 2;

// Display numbers in table
document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

// Wait 1 seconds and display answer
setTimeout(function(){
	var answer = num1 * num2;
	document.getElementById("result").innerHTML = num1 + " * " + num2 + " = " + answer;
}, 700);

// Reload page when user presses enter
document.addEventListener("keyup", function(event) {
	if (event.key === "Enter") {
	  // Reload the page
	  location.reload();
	}
});