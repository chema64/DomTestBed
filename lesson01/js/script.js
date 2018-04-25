var listOfNumbers = [1, 3, 6, 13, 5, 9];

var body;
var div ;

// ------------------------
function makeDiv (divLength) {
    body = document.body;
    div = document.createElement("div");
    div.style.width = divLength + "em";
    body.appendChild(div);
}
// ------------------------

for (var i = 0; i <= listOfNumbers.length - 1; i++) {
    makeDiv(listOfNumbers[i]);
}