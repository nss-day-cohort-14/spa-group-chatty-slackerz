var Chatty = (function (chatty) {
	var messages = null;
	var newRequest = new XMLHttpRequest();
	newRequest.addEventListener("load", parseJSON);
	newRequest.open("GET", "../json/initialMessages.json");
	newRequest.send();

	function parseJSON (event){
		var initialMessages = JSON.parse(event.target.responseText);
		messages = initialMessages.firstMessages;	//gets first 5 messages
		for (i = 0; i < messages.length; i++) {		//loop thru array to add each message
			var newMessageDiv = document.createElement("div"); //create the div
			newMessageDiv.innerHTML = messages[i].message; //put the message in the div
			var newMessageDelButton = document.createElement("button"); //add a new button element
			newMessageDelButton.innerHTML = "Delete"; //call it delete
			var outputArea = document.getElementById("output"); //identify the output area
			var newMessageID = document.createAttribute("id"); //add an ID
			newMessageID.value = `messageBlock--${i}`; //set the IDs
			newMessageDiv.setAttributeNode(newMessageID); //add the ID
			outputArea.appendChild(newMessageDiv); //add the new message
			newMessageDiv.appendChild(newMessageDelButton); //add button to the message
		};

	};

	chatty.getMessageArray = function (){  //gets the array of messages
		return messages;
	};

	return chatty;

})(Chatty || {});