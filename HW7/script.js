console.log("hi");

document.body.style.backgroundColor = "#040901"

function clicktattoo(){
	tattoo.classList.add("clear");
	me.classList.remove("clear");
	corn.classList.remove("clear");
	let p = document.querySelector("#bio");
	p.innerHTML = "Here's a cutie lil tat I gave my friend &#128054;"
}
let tattoo = document.querySelector("#tattoo");
tattoo.addEventListener("click", clicktattoo)

function clickme(){
	me.classList.add("clear");
	tattoo.classList.remove("clear");
	corn.classList.remove("clear");
	let p = document.querySelector("#bio");
	p.innerHTML = "Dis is me with a face mask on wearing a snowman sweatshirt &#9731;"
}
let me = document.querySelector("#me");
me.addEventListener("click", clickme)

function clickcorn(){
	corn.classList.add("clear");
	tattoo.classList.remove("clear");
	me.classList.remove("clear");
	let p = document.querySelector("#bio");
	p.innerHTML = "This is my all time fave snack &#127805;"
}
let corn = document.querySelector("#corn");
corn.addEventListener("click", clickcorn)