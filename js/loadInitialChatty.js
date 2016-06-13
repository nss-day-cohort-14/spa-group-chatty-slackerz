var Chatty = (function (chatty) {
	var messages = null;
	var newRequest = new XMLHttpRequest();
	newRequest.addEventListener("load", parseJSON);
	newRequest.open("GET", "../json/intitialMassages.json");
	newRequest.send();

	function parseJSON (event){
		var initialMessages = JSON.parse(event.target.responseText);
		messages = initialMessages.firstMessages;
	};

	return chatty;

})(Chatty || {});




//testing timestamp

// var newTime = Date.now();
// console.log("newTime", newTime);
// console.log("day", Date.getDay());

