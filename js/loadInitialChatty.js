var Chatty = (function (chatty) {
	var messages = null;
	var newRequest = new XMLHttpRequest();
	newRequest.addEventListener("load", parseJSON);
	newRequest.open("GET", "../json/initialMessages.json");
	newRequest.send();

	function parseJSON (event){
		var initialMessages = JSON.parse(event.target.responseText);
		messages = initialMessages.firstMessages;	//gets first 5 messages
		for (i = 0; i < messages.length; i++) {		//loop through array to add each message
			Chatty.addMessageToDOM(i); //call the add messages function 5 times 
		}

	};

	chatty.getMessageArray = function (){  //gets the array of messages
		return messages;
	};

	return chatty;

})(Chatty || {});