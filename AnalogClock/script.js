
var sec = document.getElementsByClassName("sec")[0];
var min = document.getElementsByClassName("min")[0];
var hour = document.getElementsByClassName("hour")[0];

console.log(sec);

function getTime(){
	var d = new Date();

	sec.style.transform="rotate("+d.getSeconds()*6+"deg)";
	min.style.transform="rotate("+d.getMinutes()*6+"deg)";
	hour.style.transform="rotate("+(d.getHours()*30+(d.getMinutes()/60)*30)+"deg)";
	console.log((d.getHours()*30+(d.getMinutes()/60)*30));
	setTimeout(getTime,1000);
}

getTime();