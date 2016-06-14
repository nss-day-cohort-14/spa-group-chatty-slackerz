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
		//if there is text in the input OR the initial messages are not done loading, then input to the DOM
		//this stops random delete buttons from being created when enter is pressed
		if(document.getElementById("messageTextInput").value !== "" || 5 > idNum ){

			if (idNum > 4) {  //adding timestamp to array for new messages after the first 5
				arrayObject.timestamp = Chatty.timeStamp();
				arrayObject.user = "You";
			};

			var newMessageDiv = document.createElement("div"); //create the div
			var messages = Chatty.getMessageArray(); //get the messages

			var newMessageTimestamp = document.createElement("span");  //create a span for timestamp 
			newMessageTimestamp.innerHTML = messages[idNum].timestamp;  //put the timestamp in the span
			newMessageTimestamp.classList.add("timestamp"); //add class for styling

			var newMessageUser = document.createElement("span");
			newMessageUser.innerHTML = messages[idNum].user + ": ";
			newMessageUser.classList.add("userName");

			var newMessageText = document.createElement("span");  //create a span for message
			newMessageText.innerHTML = messages[idNum].message; //put the message in the span
			newMessageText.classList.add("messageText"); //add class for styling

			var newMessageDelButton = document.createElement("button"); //add a new button element
			newMessageDelButton.innerHTML = "Delete"; //call it delete
			var editCurrentMessageButton = document.createElement("button");
			editCurrentMessageButton.innerHTML = "Edit";
			var outputArea = document.getElementById("output"); //identify the output area


			var newMessageID = document.createAttribute("id"); //add an ID
			var newDelButtonID = document.createAttribute("id");
			var editMessageID = document.createAttribute("id");
			newMessageID.value = `messageBlock--${idNum}`; //set the IDs
			newDelButtonID.value = `messageButton--${idNum}`;
			editMessageID.value = `editMessage--${idNum}`
			newMessageDiv.setAttributeNode(newMessageID); //add the IDs to the message and button
			newMessageDelButton.setAttributeNode(newDelButtonID);
			editCurrentMessageButton.setAttributeNode(editMessageID);


			outputArea.appendChild(newMessageDiv); //add the new message
			newMessageDiv.appendChild(newMessageTimestamp);
			newMessageDiv.appendChild(newMessageUser);
			newMessageDiv.appendChild(newMessageText);
			newMessageDiv.appendChild(newMessageDelButton); //add button to the message
			newMessageDiv.appendChild(editCurrentMessageButton); //add button to the message

			document.getElementById("messageTextInput").value = ""; //reset the input field
			document.getElementById(`messageBlock--${idNum}`).addEventListener("click", Chatty.deleteMessage);
			document.getElementById(`messageBlock--${idNum}`).addEventListener("click", Chatty.editSelectedMessage);
		}	else {
			alert("Write something in the box, please!");
		}
		Chatty.limitMessages(idNum);
	};

	return chatty;
})(Chatty || {});