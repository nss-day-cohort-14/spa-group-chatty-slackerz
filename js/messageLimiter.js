var Chatty = (function (chatty){

	chatty.limitMessages = function (idNum){ //this method limit messages to 20
		var messages = Chatty.getMessageArray(); 
		var targetMessageID = `messageBlock--${idNum}`;

		if(messages.length > 20){ //if the length is over 20 do:
			messages.splice(0, 1); //slice the first element out
			document.getElementById("output").removeChild(document.getElementById("output").firstChild); //remove the first child 
		}	
		return this.messages;
	};

	return chatty;
})(Chatty || {});