var Chatty = (function (chatty){

	chatty.limitMessages = function (idNum){
		var messages = Chatty.getMessageArray(); 
		var targetMessageID = `messageBlock--${idNum}`;

		if(messages.length > 20){
			messages.splice(0, 1);
			document.getElementById("output").removeChild(document.getElementById("output").firstChild);
		}	
		return this.messages;
	};

	return chatty;
})(Chatty || {});