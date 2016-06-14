var Chatty = (function(chatty){
	var newMessageText = document.getElementById("messageTextInput").value;
	var arrayObject = {user: "", message: "", timestamp: ""}; //the object that is in the arrays

	chatty.readInput = function(messageText) { // this function reads the messages 
		var messages = Chatty.getMessageArray();
		arrayObject.message = messageText; //add the message to the array
		messages.push(arrayObject);//the pushes them into the array
		return messages.length - 1; //return the index of the new item
	};

	chatty.editSelectedMessage = function(event) {
		var messages = Chatty.getMessageArray();
		var targetMessage = event.currentTarget; //get the whole message (inc delete button)
		var targetMessageID = targetMessage.id; //get the above message's id
		var idNum = targetMessageID.split("--")[1]; 
		var messageToEdit = document.getElementById(`messageText--${idNum}`); //get the DOm element to delete
		var children = document.getElementById("output").children; //get an array of CURRENT children of output id

		for (let i = 0; i < children.length; i++){ //find the child in question
			if(`messageBlock--${idNum}` === children[i].id){
				childIndex = i;
			}
		}

		if (event.target.id === `editMessage--${idNum}`){ //if the target of the event is the edit button
			console.log("ready to edit");
			document.getElementById(`messageBlock--${idNum}`).removeEventListener("click", Chatty.editSelectedMessage); //remove old event listener
			messageToEdit.innerHTML = `<input type="text" id="editFieldID--${idNum}" value="${messageToEdit.innerHTML}"></input>`; //create the edit field with old text inside
			document.getElementById(`messageBlock--${idNum}`).addEventListener("click", function(){ //add listener for inputing edit text
				if (event.target.id === `editMessage--${idNum}`){ //if target was edit button
					messages[childIndex].message = document.getElementById(`editFieldID--${idNum}`).value;//set the array's message element appropriately
					messageToEdit.innerHTML = messages[childIndex].message; //set the messages innerhtml
					document.getElementById(`messageBlock--${idNum}`).addEventListener("click", Chatty.editSelectedMessage); //re-add the main event listener

				}
			});
		}

	};

	chatty.addMessageToDOM = function(idNum) {//this function adds a message to the DOM
		var messages = Chatty.getMessageArray();
		//if there is text in the input OR the initial messages are not done loading, then input to the DOM
		//this stops random delete buttons from being created when enter is pressed
		var userSelection = document.getElementById("users"); //targets div with all radio buttons for user names

		if(document.getElementById("messageTextInput").value !== "" || 5 > idNum ){

			if (idNum > 4) {  
				arrayObject.timestamp = Chatty.timeStamp(); //adding timestamp to array for new messages after the first 5
				arrayObject.user = userSelection.elements["userRadioBtn"].value; //gets value of user radio buttons

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
			var messageID = document.createAttribute("id"); //this is the actual message area test
			var editMessageID = document.createAttribute("id");
			newMessageID.value = `messageBlock--${idNum}`; //set the IDs
			newDelButtonID.value = `messageButton--${idNum}`;
			messageID.value = `messageText--${idNum}`;
			editMessageID.value = `editMessage--${idNum}`
			newMessageDiv.setAttributeNode(newMessageID); //add the IDs to the message and button
			newMessageDelButton.setAttributeNode(newDelButtonID);
			newMessageText.setAttributeNode(messageID);
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