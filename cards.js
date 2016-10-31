var cardArray = [];

//////Event Listener///////
document.getElementById("createButton")
	.addEventListener("click", getInput);

document.getElementById("clear")
	.addEventListener("click", reset);

document.querySelector("body").addEventListener("click", function(event) {
console.log(event);
	if (event.target.parentElement.tagName.toLowerCase() === "li") {
  	console.log("You clicked on an <li> element");
  	event.target.parentElement.remove();

}
});

//////FUNK STATION//////
function getInput () {
	var textInput = document.getElementById("textInput").value;
	console.log("textInput", typeof textInput);
	if (textInput) {
		addCard(textInput);
	} else {
		alert("You must enter text or go away");
	}
}

function addCard (dM) {
	var cardId = document.getElementById("card");
	cardArray.push(dM);

	// for (var i = 0; i < cardArray.length; i++) {
		// cardArray[i]
		cardId.innerHTML += "<li class='cardDecorate'>" + cardArray + "<br><button type='button' class='deleteMe'>Delete" + "</button>" + "</li>";
		}
	// }
// }



// function removeElement(event) {
// 	event.target.parentElement.remove();
// 	onClick='removeElement()'
// }

function reset () {
	document.getElementById("textInput").value = "";
	console.clear();
}

// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.