import PROJECTSDATA from './projectData.js';
import SKILLDATA from './skillData.js';

$(document).ready(function() {

	/*SETTINGS*/

	$('.settings-text').click(function() {
		$('.settings').toggleClass('open-settings');
	})

	/*HIDE WELCOME*/

	$('button').click(function() {
		$('#welcome-background').slideUp();
		$('#welcome').hide();
		$('button').hide();
		$('#about-me-wrapper').addClass('slide-in-left')
	}); 

	/*HAMBURGER MENU*/

	$('#hambi-menu').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('open');
		$('nav').toggleClass('is-active');
	});
	
	$(document).click( e => {
		let hambi = $('#hambi-menu');
		if ( e.target !== hambi) {
			$('#hambi-menu').removeClass('open');
			$('nav').removeClass('is-active');
		}
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

	/* BUILD SKILLS */

	buildSkills(SKILLDATA);

	/* BUILD PROJECTS */

	buildElements(PROJECTSDATA);

	/* SLIDE */

	$('#about-slide').change( function(e) {
		
		$('.chart-wrapper').css('width', e.target.value + '%');
		
		let val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		$(this).css('background-image',
		'-webkit-gradient(linear, left top, right top, '
		+ 'color-stop(' + val + ', rgba(0,0,0, .7)), '
		+ 'color-stop(' + val + ', #C5C5C5)'
		+ ')'
		);
	})

	/* DARK MODE & LANGUAGE */

	$('#dark-checkbox').change(
		function(){
			if ($(this).is(':checked')) {
				$('body, .chart-wrapper').css('background-color', '#1d1d1d');
				$('.portfolio-box p').css('color', '#daf6ff');
				$('footer').css('color', 'white');
				localStorage.setItem("darkModeActive", true);
			} else {
				$('body, .chart-wrapper').css('background-color', 'white');
				$('.portfolio-box p').css('color', 'black');
				$('footer').css('color', 'black');
				localStorage.setItem("darkModeActive", false);
			}
		}
	);

	$('#lang-checkbox').change(
		function(){
			if ($(this).is(':checked')) {
				setLangHun();
				localStorage.setItem("isEnglish", false);
			} else {
				setLangEng();
				localStorage.setItem("isEnglish", true);
			}
		}
	);

	let darkModeIsActive = JSON.parse(localStorage.getItem("darkModeActive"));
	let englishModeIsAcitve = JSON.parse(localStorage.getItem("isEnglish"));

	if(englishModeIsAcitve) {
		$('#lang-checkbox').prop('checked', false);
		setLangEng();
	} else {
		$('#lang-checkbox').prop('checked', true);
		setLangHun();
	}

	if(darkModeIsActive) {
		$('#dark-checkbox').prop('checked', true);
		$('body, .chart-wrapper').css('background-color', '#1d1d1d');
		$('.portfolio-box p').css('color', '#daf6ff');
		$('footer').css('color', 'white');
	} else {
		$('#dark-checkbox').prop('checked', false);
		$('body, .chart-wrapper').css('background-color', 'white');
		$('.portfolio-box p').css('color', 'black');
		$('footer').css('color', 'black');
	}
})

function setLangHun() {
	$('.settings-text').text('Beállítás');
	$('.nav a:nth-child(1)').text('Kezdőoldal')
	$('.nav a:nth-child(2)').text('Rólam')
	$('.nav a:nth-child(3)').text('Projektjeim')
	$('#welcome h1:nth-child(1)').text('Üdvözlöm')
	$('#welcome h1:nth-child(2)').text('Tekintse meg a portfólióm')
	$('#about-me-wrapper h2').text('Takács Norbert')
	$('#about-me-wrapper h3:nth-child(2)').text('Szoftverfejlesztő')
	$('#about-me-wrapper h3:nth-child(5)').text('Kapcsolat')
	$('#js-box p:first-child').text('Pár projektem')
	$('#fcc-box p:first-child').text('freeCodeCamp projektek')
	$('#cb-box p:first-child').text('A Codeberry-nél készült projektek')
	$('#webler-box p:first-child').text('Java projektek')
	$('#vue-box p:first-child').text('Vue projektek')
	$('#react-box p:first-child').text('React projektek')
	$('#chrome-box p:first-child').text('Chrome kiegészítők')
	$('.made').text('Készítette Takács Norbert')
}

function setLangEng() {
	$('.settings-text').text('Settings');
	$('.nav a:nth-child(1)').text('Home')
	$('.nav a:nth-child(2)').text('About me')
	$('.nav a:nth-child(3)').text('My projects')
	$('#welcome h1:nth-child(1)').text('Welcome')
	$('#welcome h1:nth-child(2)').text('Take a look on my portfolio')
	$('#about-me-wrapper h2').text('Norbert Takacs');
	$('#about-me-wrapper h3:nth-child(2)').text('Software developer');
	$('#about-me-wrapper h3:nth-child(5)').text('Contact me')
	$('#js-box p:first-child').text('Few projects what I made')
	$('#fcc-box p:first-child').text('freeCodeCamp projects')
	$('#cb-box p:first-child').text('I have made these projects while I was learning at Codeberry')
	$('#webler-box p:first-child').text('Java projects')
	$('#vue-box p:first-child').text('Vue projects')
	$('#react-box p:first-child').text('React projects')
	$('#chrome-box p:first-child').text('Chrome extensions')
	$('.made').text('Made by Norbert Takacs')
}

function buildElements(projects) {
	
	projects.forEach( e => {
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
			case 'react-box':
				section = document.getElementById('react-box');
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

function buildSkills(skills) {
	let skillsWraper = $('.chart-wrapper');
	skills.forEach( e => {
		let bar = $('<div></div>');
		let fill = $('<div></div>').text(e.skillName);
		bar.addClass('skill-bar');
		fill.addClass('skill-fill');
		fill.css('width', e.proficiency + '%');
		bar.append(fill);
		skillsWraper.append(bar);
	});
}