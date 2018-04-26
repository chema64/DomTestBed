(function(){"use strict";

const body = document.body;


function createHeading ()  {
	let heading1 = document.createElement("h1");
	let heading_text = document.createTextNode("Big Head!");
	heading1.appendChild(heading_text);
	body.appendChild(heading1);
}

function createDiv () {
	let div = document.createElement("div");
	div.setAttribute("id", "div1");
	body.appendChild(div);
}

function insertIntoDiv () {
	let div1 = document.getElementById('div1');
	let heading1 = document.createElement("h1");
	let heading_text = document.createTextNode("Big Head!");
	heading1.appendChild(heading_text);
	div1.insertAdjacentElement('afterbegin', heading1);
}

window.onload = createHeading();
createHeading();
createDiv();
insertIntoDiv();

var cssDivH1 = document.querySelector("#div1");
console.log(cssDivH1);


})();