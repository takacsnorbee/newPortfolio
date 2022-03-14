/*HIDE WELCOME*/

$(document).ready(function() {
	$('button').click(function() {
		$('#welcome-background').slideUp();
		$('#welcome').hide();
		$('button').hide();
	}) 
})

/*DATE IN FOOTER*/

const YEARNOW = new Date().getFullYear();
document.getElementById('year').innerHTML = YEARNOW;

/*TIME IN HEADER*/

function setTime() {
	
	let timeNow = new Date();
	let hour = timeNow.getHours();
	let min = timeNow.getMinutes();
	let sec = timeNow.getSeconds();
	
	if(hour <= 9) {
		hour = `0${hour}`;
	}
	
	if(min <= 9) {
		min = `0${min}`;
	}
	
	if(sec <= 9) {
		sec = `0${sec}`;
	}

	document.getElementById('header-time').innerHTML = `${hour}:${min}:${sec}`;	
}

setInterval(setTime, 1000);

/* SET AUDIO VOLUME */

const AUDIO = document.getElementById('audio');
AUDIO.volume = 0.1;
