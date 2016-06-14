var Chatty = (function(chatty){
	var newMessageText = document.getElementById("messageTextInput").value;
	var arrayObject = {user: "", message: "", timestamp: ""}; //the object that is in the arrays

	chatty.readInput = function(messageText) { // this function reads the messages 
		var messages = Chatty.getMessageArray();
		arrayObject.message = messageText; //add the message to the array
		messages.push(arrayObject);//the pushes them into the array
		return messages.length - 1; //return the index of the new item
	};

	chatty.addMessageToDOM = function(idNum) {//this function adds a message to the DOM
		
			var newMessageDiv = document.createElement("div"); //create the div
			var messages = Chatty.getMessageArray(); //get the messages

			newMessageDiv.innerHTML = messages[idNum].message; //put the message in the div
			var newMessageDelButton = document.createElement("button"); //add a new button element
			newMessageDelButton.innerHTML = "Delete"; //call it delete

			var outputArea = document.getElementById("output"); //identify the output area

			var newMessageID = document.createAttribute("id"); //add an ID
			var newDelButtonID = document.createAttribute("id")
			newMessageID.value = `messageBlock--${idNum}`; //set the IDs
			newDelButtonID.value = `messageButton--${idNum}`;
			newMessageDiv.setAttributeNode(newMessageID); //add the ID
			newMessageDelButton.setAttributeNode(newDelButtonID);

			outputArea.appendChild(newMessageDiv); //add the new message
			newMessageDiv.appendChild(newMessageDelButton); //add button to the message

			document.getElementById("messageTextInput").value = ""; //reset the input field
			document.getElementById(`messageBlock--${idNum}`).addEventListener("click", Chatty.deleteMessage);
		};

	return chatty;
})(Chatty || {});