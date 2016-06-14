var Chatty = (function (chatty) {
	var users = {
		names: ["Bob", "Sue", "Juan", "Vince", "Janice"]
	};

	var userNamesDiv = document.getElementById("users"); //element to add user radio buttons to
	
	for (i =0; i < users.names.length; i++){
		var newUserRadioBtn = document.createElement("input");
		var newUserRadioBtnType = document.createAttribute("type");
		newUserRadioBtnType.value = "radio";
		newUserRadioBtn.setAttributeNode(newUserRadioBtnType);
		var newUserRadioBtnName = document.createAttribute("name");
		newUserRadioBtnName.value = "userRadioBtn";
		newUserRadioBtn.setAttributeNode(newUserRadioBtnName);
		var newUserRadioBtnValue = document.createAttribute("value");

		var userName = users.names[i];
		newUserRadioBtnValue.value = userName;
		newUserRadioBtn.setAttributeNode(newUserRadioBtnValue);

		var userLabel = document.createElement("span");
		userLabel.innerHTML = userName;
		userLabel.classList.add("userLabel");

		userNamesDiv.appendChild(newUserRadioBtn);
		userNamesDiv.appendChild(userLabel);

	};


	chatty.getUserNamesArray = function (){
		console.log("users array", users.names);
		return users.names;
	};



	return chatty;

})(Chatty || {});