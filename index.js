var terminal = require('node-terminal');

module.exports.write = write;
module.exports.updateSettings = updateSettings;

var index = 0;
var settings = {
	statusLength: 4,
	placeholderCharacter: "."
}

function updateSettings(settingOverride){
	if (!settingOverride) settingOverride = {};
	for (x in settings){
		settings[x] = settingOverride[x] || settings[x];
	}
}

function write(txt){
	var placeholder = padString(settings.placeholderCharacter, settings.statusLength)

	var thisLine = index;
	index += 1;
	var line = "[ " + placeholder + " ] " + txt

	var update = function(status, colour){
		var delta = placeholder.length - status.length;
		var delta1 = Math.floor(delta / 2);

		// pad status
		status = padString(" ",delta1) + status + padString(" ",delta - delta1)

		terminal.up(index - thisLine);
		terminal.clearLine();
		if (colour) {
			terminal.write("[ ").color(colour).write(status).reset().write(" ] " + txt);
		} else {
			terminal.write("[ " + status + " ] " + txt);
		}
		terminal.down(index - thisLine);
		//terminal.down(1000);
		terminal.left(1000)
	};

	var returnObj = function(message, colour){
		update(message, colour);
	}
	returnObj.ok = function(){
		update("OK", "green");
	};
	returnObj.error = function(){
		update("ERROR", "red");
	};
	returnObj.warning = function(){
		update("WARN", "yellow");
	};

	terminal.write(line).nl();
	return returnObj;
}
	


function padString(char, length){
	if (length <= 0) return "";
	var a = [];
	a[length] = "";
	return a.join(char);
}