var Chatty = (function(chatty){

	chatty.deleteFromMessageArray = function (idNum) { //this helper function deletes from the array any message removed from DOM
		var messages = Chatty.getMessageArray(); //get the array
		var messageToRemoveID = `messageBlock--${idNum}`;
		var CurrentIDNum = messageToRemoveID.split("--")[1]; 
		var children = document.getElementById("output").children;
		var childIndex = null;

		for (let i = 0; i < children.length; i++){
			if(`messageBlock--${idNum}` === children[i].id){
				childIndex = i;
			}
		}

		var timeStampText = messages[childIndex].timestamp;

		for(let i = 0; i < messages.length; i++){
			if(messages[i].timestamp === timeStampText){
				messages.splice(i, 1);
				
			}
		}
		return this.messages;
	};

	chatty.deleteMessage = function(event){
		var targetMessage = event.currentTarget; //get the whole message (inc delete button)
		var targetMessageID = targetMessage.id; //get the above message's id
		var idNum = targetMessageID.split("--")[1]; //get the index of the id only
		var messageToDelete = document.getElementById(targetMessageID); //get the DOm element to delete

		if (event.target.id === `messageButton--${idNum}`){ //if the target id === the button id pressed then remove the message
			Chatty.deleteFromMessageArray(idNum); //call the f(x) to remove from the array
			document.getElementById("output").removeChild(messageToDelete);
		}
		if (Chatty.getMessageArray().length === 0){
				document.getElementById("clearMessages").disabled = true;
		}
	}

	return chatty;
})(Chatty || {}); 