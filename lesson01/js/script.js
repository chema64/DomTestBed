(function(){"use strict";

const body = document.body;

var listOfNumbers = [1, 3, 6, 13, 5, 9];
var div;


// ------------------------							
function makeDiv (divLength) {

	div = document.createElement("div");
    div.style.width = divLength + "em";
    body.appendChild(div); 
}
// ------------------------

for (let i = 0; i < listOfNumbers.length; i++) {
    makeDiv(listOfNumbers[i]);
    removeDiv();
}



 function removeDiv() {
 	body.removeChild(div)
 }

})();