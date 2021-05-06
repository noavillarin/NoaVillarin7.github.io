// let canvas = document.querySelector("#canvas");

// let currentRat = "#rat1";

// canvas.addEventListener("mousedown", function (event) {
//   console.log("This is the mousedown event");
//   console.log(event);

//    let newRat = document.createElement("div");
//   newRat.classList.add("rat");
//   newRat.innerHTML = currentRat;

//  newRat.style.left = event.pageX + "px";
//   newRat.style.top = event.pageY + "px";

//   canvas.addEventListener("mousemove", function(event){
//   if (startDrawing){
//   console.log("mouse event");
//   console.log(event);

//   let newRat = document.createElement("div");
//   newRat.classList.add("rat1");
//   newRat.innerHTML = currentEmoji;

//   newRat.style.left = event.pageX + "px";
//   newRat.style.top = event.pageY + "px";

//   canvas.appendChild(newRat;
//   } 
// })

// canvas.addEventListener("mouseup", function(event){
//   startDrawing = false;
// })


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


// // Get the element on the page with the id canvas
// let canvas = document.querySelector("#canvas");

// let painting = false; 
// // TODO: Replace with your own emoji
// let currentEmoji = "👼";
// // Detect the moment we press the mouse down on the canvas div
// canvas.addEventListener("mousedown", function (event) {
//   painting = true;
//   console.log("This is the mousedown event");
//   console.log(event);
//   // Create a new emoji div on the page and set it equal to your desired emoji
//   let newEmoji = document.createElement("div");
//   newEmoji.classList.add("emoji");
//   newEmoji.innerHTML = currentEmoji;

//   // Set the style of that position so that it goes where you just pressed your mouse down

//   newEmoji.style.left = event.pageX + "px";
//   newEmoji.style.top = event.pageY + "px";

//   // Add that emoji to the canvas element so that it appears on the screen
//   canvas.appendChild(newEmoji);

 
// });

// canvas.addEventListener("mouseup", function (event) {
//   painting = false;
// });
 
// // TODO: Add functionality that makes it so the emoji "paints" when you hold your mouse down and move it on the screen

// canvas.addEventListener("mousemove", function (event){

//   if (painting){
//   console.log("This is the mousemove event");
//   console.log(event);

//   let newEmoji = document.createElement("div");
//     newEmoji.classList.add("emoji");
//     newEmoji.innerHTML = currentEmoji;

//     newEmoji.style.left = event.pageX + "px";
//     newEmoji.style.top = event.pageY + "px";

//   canvas.appendChild(newEmoji);

//     } else{

//     }
  
// }); 
