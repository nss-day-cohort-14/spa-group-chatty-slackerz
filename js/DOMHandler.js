var initializeDOM = (function(){
	var largeTextCheckBox = document.getElementById("largeText"); //get element of the large text checkbox
	var darkThemeCheckBox = document.getElementById("darkTheme"); //get element of the dark theme toggle checkbox
	var clearMessageButton = document.getElementById("clearMessages"); //get element of the clear message button
	var outputArea = document.getElementById("output"); //get element to print data into
//this listener listens for the enter key press
	window.addEventListener("keyup", function(event){
		if (event.keyCode === 13){
			Chatty.addMessageToDOM(Chatty.readInput(document.getElementById("messageTextInput").value));
			console.log("key code registered");//call function to enter new message into the DOM
		}
	});
//this listener listens for the large text for the body of the message.
	largeTextCheckBox.addEventListener("change", function(event){
		outputArea.classList.toggle("enlargeText"); //toggle the large text class for the text input section
		console.log("text to big");
	});
	darkThemeCheckBox.addEventListener("change", function(event){	
		document.body.classList.toggle("dark"); //if one is on to start  with only one will ever be on at a a time
		console.log("theme to dark");
	});
	clearMessageButton.addEventListener("click", function(event){
		//remove content from the content div in the html
		outputArea.innerHTML = "";
		console.log("cleared");
	});
})();