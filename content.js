chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
	console.log(message.txt);
	if (message.txt==="hello") {
	var divs = document.getElementsByTagName('div');
		for(var i = 0; i < divs.length; i++) {
	  	divs[i].style.display = "none";
	}
	fetch('https://uinames.com/api/?ext')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data.name + " " + data.surname +" " +'Gender: ' + data.gender + " "+'Title:' + data.title +" " +'Phone:' + data.phone;
                document.write(div.innerHTML);
            }	
}
}
	