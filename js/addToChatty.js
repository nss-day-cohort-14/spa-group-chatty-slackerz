var Chatty = (function(chatty){
	var newMessageText = document.getElementById("messageTextInput").value;
	var arrayObject = {user: "", message: ""};

	chatty.readInput = function(messageText) {
		var messages = Chatty.getMessageArray();
		arrayObject.message = messageText;
		messages.push(arrayObject);
		return messages.length; //return the index of the new item
	};

	chatty.addMessageToDOM = function(idNum) {
		var newMessageDiv = document.createElement("div");
		newMessageDiv.innerHTML = Chatty.newMessageText;

		var newMessageID = document.createAttribute("id");
		var newMessageDelButton = document.createElement("button");
		var newDelButtonID = document.createAttribute("id")
		newMessageID.vaule = `messageBlock--${idNum}`;
		newDelButtonID.vlaue = `messageButton--${idNum}`;
		newMessageDiv.setAttributeNode(newMessageID);

		Chatty.outputArea.appendChild(newMessageDiv); //add the new message
		newMessageDiv.appendChild(newDelButtonID);
	};

	return chatty;
})(Chatty || {});