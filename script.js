var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.createElement("button");

randomBtn.appendChild(document.createTextNode("Surprise Me!"));
body.appendChild(randomBtn);

//This function creates a random color
function randomColor() {
	//var x, y, and z select the numbers for the first color
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	//var a, b, and c select numbers for the second
	var a = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var c = Math.floor(Math.random() * 256);

 	var randomBg = "linear-gradient(to right, rgb(" 
 	+ x + ", " + y + ", " + z + "), rgb("//first color
 	+ a + ", " + b + ", " + z + "))";//second color

 	document.body.style.background = randomBg;//append to stylesheet
 	css.textContent = body.style.background + ";";//declare the css line
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient()

randomBtn.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);