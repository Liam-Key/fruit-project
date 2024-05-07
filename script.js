let btn = document.getElementById("button");
let output = document.getElementById("out-text");
let fruits = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "kiwi",
  "watermelon",
  "grapefruit",
  "lycees",
];

btn.addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * fruits.length);
  output.innerHTML = fruits[randomIndex];
});

//create random function
//apply it to an array
//display the result by the push of a button
