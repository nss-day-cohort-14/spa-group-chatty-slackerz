var Chatty = (function(chatty){

	function deleteFromMessageArray (index) { //this helper function deletes from the array any message removed from DOM
		messages = chatty.getMessageArray(); //get the array
		messages = messages.splice(index, 1); //splice out the index that need to be removed
		return this.mesages; //return the messages area to the Chatty object
	};

	chatty.deleteMessage = function(event){
		var targetMessage = event.currentTarget; //get the whole message (inc delete button)
		var targetMessageID = targetMessage.id; //get the above message's id
		var idNum = targetMessageID.split("--")[1]; //get the index of the id only
		var messageToDelete = document.getElementById(targetMessageID); //get the DOm element to delete

		if (event.target.id === `messageButton--${idNum}`){ //if the target id === the button id pressed then remove the message
			document.getElementById("output").removeChild(messageToDelete);
			deleteFromMessageArray(idNum); //call the f(x) to remove from the array
		}
	}
	return chatty;
})(Chatty || {}); 