import DATA from './projectData.js';

$(document).ready(function() {
	
	const PROJECTSDATA = DATA;

	/*HIDE WELCOME*/

	$('button').click(function() {
		$('#welcome-background').slideUp();
		$('#welcome').hide();
		$('button').hide();
	}); 
	
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

	/* BUILD PROJECTS */

	buildElements(PROJECTSDATA);
})


function buildElements(PROJECTSDATA) {
	
	PROJECTSDATA.forEach( e => {
		let div = document.createElement('div');
		let a = document.createElement('a');
		let img = document.createElement('img');
		let figcaption = document.createElement('figcaption');
		let section = '';

		div.setAttribute('id', e.elementName);
		a.setAttribute('href', e.demoURL);
		a.setAttribute('target', '_blank');
		img.setAttribute('src', e.imgSrc);
		figcaption.textContent = e.figcaptionText;

		a.appendChild(img);
		a.appendChild(figcaption);
		div.appendChild(a);
		
		switch (e.sectionName) {
			case 'chrome-box':
				section = document.getElementById('chrome-box');
				section.appendChild(div);
				break;
			case 'vue-box':
				section = document.getElementById('vue-box');
				section.appendChild(div);
				break;
			case 'webler-box':
				section = document.getElementById('webler-box');
				section.appendChild(div);
				break;
			case 'cb-box':
				section = document.getElementById('cb-box');
				section.appendChild(div);
				break;
			case 'fcc-box':
				section = document.getElementById('fcc-box');
				section.appendChild(div);
				break;
			case 'js-box':
				section = document.getElementById('js-box');
				section.appendChild(div);
				break;
			default:
				break;
		}
	});
}
