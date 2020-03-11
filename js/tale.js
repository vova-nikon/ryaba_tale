const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
	$.getJSON(dataURL, handleData);
}

function handleData(data) {
	let tale = "";

	let obj = {
		var1 : $("#field1").val(),
		var2 : $("#field2").val(),
		var3 : $("#field3").val(),
		var4 : $("#field4").val(),
		var5 : $("#field5").val(),
		var6 : $("#field6").val(),
		speach : $("#field7").val()
	};

	data["text"].forEach(function(item, index) {
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
		}

		tale += item + "<br>";
	});
    
    $("#result").html(tale);
}

function init() {
	$("#create-button").click(handleButton);
}

$(document).ready(init);