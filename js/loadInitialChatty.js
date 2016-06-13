var Chatty = (function (chatty) {
	var messages = null;
	var newRequest = new XMLHttpRequest();
	newRequest.addEventListener("load", parseJSON);
	newRequest.open("GET", "../json/initialMessages.json");
	newRequest.send();

	function parseJSON (event){
		var initialMessages = JSON.parse(event.target.responseText);
		messages = initialMessages.firstMessages;
	};

	chatty.getMessageArray = function (){
		return messages;
	};

	return chatty;

})(Chatty || {});