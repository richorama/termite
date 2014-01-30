var t = require('./index');
var p1 = t.write("turn on reactor")
var p2 = t.write("lower the control rods")
var p3 = t.write("switch on the toaster")
var p4;

setTimeout(function(){
	p1("ON", "magenta");
	p4.ok();
}, 1000);

setTimeout(function(){
	p2("DOWN");
	p4 = t.write("it's a trap")
}, 500);

setTimeout(function(){
	p3.warning();
}, 10);
