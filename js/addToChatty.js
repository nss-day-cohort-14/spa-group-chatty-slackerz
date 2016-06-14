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
		var messages = Chatty.getMessageArray();

		if(document.getElementById("messageTextInput").value !== "" || 5 > idNum ){

			if (idNum > 4) {  //adding timestamp to array for new messages after the first 5
				arrayObject.timestamp = Chatty.timeStamp();
			};

			var newMessageDiv = document.createElement("div"); //create the div
			var messages = Chatty.getMessageArray(); //get the messages

			var newMessageTimestamp = document.createElement("span");  //create a span for timestamp 
			newMessageTimestamp.innerHTML = messages[idNum].timestamp;  //put the timestamp in the span
			newMessageTimestamp.classList.add("timestamp"); //add class for styling
			console.log("timestamp", newMessageTimestamp);

			var newMessageText = document.createElement("span");  //create a span for message
			newMessageText.innerHTML = messages[idNum].message; //put the message in the span
			newMessageText.classList.add("messageText"); //add class for styling

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
			newMessageDiv.appendChild(newMessageTimestamp);
			newMessageDiv.appendChild(newMessageText);
			newMessageDiv.appendChild(newMessageDelButton); //add button to the message

			document.getElementById("messageTextInput").value = ""; //reset the input field
			document.getElementById(`messageBlock--${idNum}`).addEventListener("click", Chatty.deleteMessage);
		}	else {
			alert("Write something in the box, please!");
		}
	};

	return chatty;
})(Chatty || {});