var Chatty = (function(chatty){

	function deleteFromMessageArray (index) {
		messages = chatty.getMessageArray();
		messages = messages.splice(index, 1);
		return this.mesages;
	};

	chatty.deleteMessage = function(event){
		var targetMessage = event.currentTarget;
		var targetMessageID = targetMessage.id;
		var idNum = targetMessageID.split("--")[1];
		var messageToDelete = document.getElementById(targetMessageID);
		var messages = Chatty.getMessageArray();

		if (event.target.id === `messageButton--${idNum}`){
			document.getElementById("output").removeChild(messageToDelete);
			deleteFromMessageArray(idNum);
		}
	}
	return chatty;
})(Chatty || {}); 