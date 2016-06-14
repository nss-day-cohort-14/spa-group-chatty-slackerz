var Chatty = (function(chatty){

	chatty.deleteMessage = function(event){
		var targetMessage = event.currentTarget;
		var targetMessageID = targetMessage.id;
		var idNum = targetMessageID.split("--")[1];
		var messageToDelete = document.getElementById(targetMessageID);

		if (event.target.id === `messageButton--${idNum}`){
			document.getElementById("output").removeChild(messageToDelete);
		}
	}
	return chatty;
})(Chatty || {}); 