var initializeDOM = (function(){
	var largeTextCheckBox = document.getElementById("largeText"); //get element of the large text checkbox
	var darkThemeCheckBox = document.getElementById("darkTheme"); //get element of the dark theme toggle checkbox
	var clearMessageButton = document.getElementById("clearMessages"); //get element of the clear message button
	var outputArea = document.getElementById("output"); //get element to print data into
	var textInputBox = document.getElementById("messageTextInput");

	function disableClear(){ //helper function to disable the clear key when id=output is empty
		if (outputArea.innerHTML === "") {
			clearMessageButton.disabled = true;
		} else {
			clearMessageButton.disabled = false;
		}
	}
//listens for the enter key to be pressed
	window.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			Chatty.addMessageToDOM(Chatty.readInput(document.getElementById("messageTextInput").value));
		}
		disableClear(); //call helper function
	});
//this listener listens for the large text for the body of the message.
	largeTextCheckBox.addEventListener("change", function(event){
		outputArea.classList.toggle("enlargeText"); //toggle the large text class for the text input section
	});
	darkThemeCheckBox.addEventListener("change", function(event){	
		document.body.classList.toggle("dark"); //if one is on to start  with only one will ever be on at a a time
		document.getElementById("messageTextInput").classList.toggle("dark");
	});
	clearMessageButton.addEventListener("click", function(event){
		var messagesLength = Chatty.getMessageArray().length;
		//remove content from the content div in the HTML
		outputArea.innerHTML = ""; //wipe out the HTML in the output div
		disableClear(); //call helper function

		for (let i = messagesLength; i > 0; i--){
			Chatty.deleteFromMessageArray(0);
		}

	});
})();