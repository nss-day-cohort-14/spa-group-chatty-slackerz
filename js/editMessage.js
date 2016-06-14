var Chatty = (function(chatty){

	chatty.editSelectedMessage = function(event) {
		var targetMessage = event.currentTarget; //get the whole message (inc delete button)
		var targetMessageID = targetMessage.id; //get the above message's id
		var idNum = targetMessageID.split("--")[1]; 
		var messageToEdit = document.getElementById(targetMessageID); //get the DOm element to delete

		if (event.target.id === `editMessage--${idNum}`){
			console.log("stuff");
		}

	};

	return chatty;
})(Chatty || {});