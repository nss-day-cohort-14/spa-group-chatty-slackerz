var Chatty = (function(chatty){
	var newMessageText = document.getElementById("messageTextInput").value;
	var arrayObject = {user: "", message: ""};

	chatty.readInput = function(messageText) {
		var messages = Chatty.getMessageArray();
		arrayObject.message = messageText;
		messages.push(arrayObject);
		return messages.length - 1; //return the index of the new item
	};

	chatty.addMessageToDOM = function(idNum) {
		var newMessageDiv = document.createElement("div");
		var messages = Chatty.getMessageArray();

		newMessageDiv.innerHTML = messages[idNum].message;
		var newMessageDelButton = document.createElement("button");
		newMessageDelButton.innerHTML = "Delete";

		var outputArea = document.getElementById("output");

		var newMessageID = document.createAttribute("id");
		var newDelButtonID = document.createAttribute("id")
		newMessageID.value = `messageBlock--${idNum}`;
		newDelButtonID.value = `messageButton--${idNum}`;
		newMessageDiv.setAttributeNode(newMessageID);


		outputArea.appendChild(newMessageDiv); //add the new message
		newMessageDiv.appendChild(newMessageDelButton);
	};

	return chatty;
})(Chatty || {});