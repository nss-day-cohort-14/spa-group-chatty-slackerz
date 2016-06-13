var Chatty = (function(chatty){
	var newMessageText = document.getElementById("messageTextInput");

	chatty.readInput = function (){
		Chatty.messages.push(newMessageText);
	};

	return chatty;
})(Chatty || {});