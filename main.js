$(document).ready(function() {

	/* PROJECTSDATA should be fetched from a server */
	const PROJECTSDATA = [
		{
			sectionName: 'chrome-box',
			elementName: 'blur-all',
			demoURL: 'https://github.com/takacsnorbee/chrome_extension_blur',
			imgSrc: 'pic/blur.png',
			figcaptionText: 'Blur Img'
		},
		{
			sectionName: 'vue-box',
			elementName: 'word-cards',
			demoURL: 'https://github.com/takacsnorbee/wordCards',
			imgSrc: 'pic/wordCard.png',
			figcaptionText: 'Words'
		},
		{
			sectionName: 'vue-box',
			elementName: 'dog-fight',
			demoURL: 'https://github.com/takacsnorbee/dogFight',
			imgSrc: 'pic/dogFight.png',
			figcaptionText: 'Dog Fight'
		},
		{
			sectionName: 'webler-box',
			elementName: 'shopping-list-java',
			demoURL: 'https://github.com/takacsnorbee/Shopping_List_Java',
			imgSrc: 'pic/shopping-list.png',
			figcaptionText: 'Shopping List (java)'
		},
		{
			sectionName: 'webler-box',
			elementName: 'game-center',
			demoURL: 'https://github.com/takacsnorbee/game_center_java',
			imgSrc: 'pic/game-center.png',
			figcaptionText: 'Game center(Java)'
		},
		{
			sectionName: 'cb-box',
			elementName: 'profil-cb',
			demoURL: 'https://github.com/takacsnorbee/profile',
			imgSrc: 'pic/portfolio-cb.png',
			figcaptionText: 'Profile'
		},
		{
			sectionName: 'cb-box',
			elementName: 'color-clock',
			demoURL: 'https://github.com/takacsnorbee/colorclock',
			imgSrc: 'pic/colorclock.png',
			figcaptionText: 'Color Clock'
		},
		{
			sectionName: 'cb-box',
			elementName: 'mantis',
			demoURL: 'https://github.com/takacsnorbee/Mantis-shrimps',
			imgSrc: 'pic/mantis.png',
			figcaptionText: 'Mantis'
		},
		{
			sectionName: 'cb-box',
			elementName: 'c-light',
			demoURL: 'https://github.com/takacsnorbee/codeberry-light/',
			imgSrc: 'pic/light.png',
			figcaptionText: 'Blog'
		},
		{
			sectionName: 'cb-box',
			elementName: 'wedding',
			demoURL: 'https://github.com/takacsnorbee/wedding',
			imgSrc: 'pic/wedding.png',
			figcaptionText: 'Wedding'
		},
		{
			sectionName: 'cb-box',
			elementName: 'wiki',
			demoURL: 'https://github.com/takacsnorbee/wiki-page-copy',
			imgSrc: 'pic/wiki.png',
			figcaptionText: 'Wiki Copy'
		},
		{
			sectionName: 'fcc-box',
			elementName: 'tribute',
			demoURL: 'https://github.com/takacsnorbee/tribute-page-fcc',
			imgSrc: 'pic/tribute.png',
			figcaptionText: 'Triubute'
		},
		{
			sectionName: 'fcc-box',
			elementName: 'survey',
			demoURL: 'https://github.com/takacsnorbee/survey-form-fcc/',
			imgSrc: 'pic/survey.png',
			figcaptionText: 'Survey'
		},
		{
			sectionName: 'fcc-box',
			elementName: 'product',
			demoURL: 'https://github.com/takacsnorbee/product-landing-page-fcc/',
			imgSrc: 'pic/product-landing.png',
			figcaptionText: 'Landing Page'
		},
		{
			sectionName: 'js-box',
			elementName: 'shooter',
			demoURL: 'https://github.com/takacsnorbee/smileShooter/',
			imgSrc: 'pic/shooter.png',
			figcaptionText: 'Shooter'
		},
		{
			sectionName: 'js-box',
			elementName: 'udemy',
			demoURL: 'https://github.com/takacsnorbee/udemy/',
			imgSrc: 'pic/udemy.png',
			figcaptionText: 'Udemy'
		},
		{
			sectionName: 'js-box',
			elementName: 'shopping-list',
			demoURL: 'https://github.com/takacsnorbee/Shopping-list/',
			imgSrc: 'pic/shopping-list.png',
			figcaptionText: 'Shopping List'
		},
		{
			sectionName: 'js-box',
			elementName: 'd-clock',
			demoURL: 'https://github.com/takacsnorbee/digitalClock/',
			imgSrc: 'pic/digital.png',
			figcaptionText: 'Digital Clock'
		},
		{
			sectionName: 'js-box',
			elementName: 'a-clock',
			demoURL: 'https://github.com/takacsnorbee/analogClock/',
			imgSrc: 'pic/analoge.png',
			figcaptionText: 'Analoge Clock'
		},
		{
			sectionName: 'js-box',
			elementName: 'game',
			demoURL: 'https://github.com/takacsnorbee/ticTacToe/',
			imgSrc: 'pic/tic-tac-toe.png',
			figcaptionText: 'Tic Tac Toe'
		},
		{
			sectionName: 'js-box',
			elementName: 'spinner',
			demoURL: 'https://github.com/takacsnorbee/loader-spinner/',
			imgSrc: 'pic/spinner.png',
			figcaptionText: 'Spinner'
		},
		{
			sectionName: 'js-box',
			elementName: 'progress-bar',
			demoURL: 'https://github.com/takacsnorbee/progress_bar/',
			imgSrc: 'pic/progress-bar.png',
			figcaptionText: 'Progress Bar'
		},
		{
			sectionName: 'js-box',
			elementName: 'search-light',
			demoURL: 'https://github.com/takacsnorbee/searchlight/',
			imgSrc: 'pic/searchlight.png',
			figcaptionText: 'Search Light'
		},
		{
			sectionName: 'js-box',
			elementName: 'menu-indicator',
			demoURL: 'https://github.com/takacsnorbee/menu-indicator/',
			imgSrc: 'pic/menu-indicator.png',
			figcaptionText: 'Menu With Indicator'
		},
		{
			sectionName: 'js-box',
			elementName: 'fingerprint-scanner',
			demoURL: 'https://github.com/takacsnorbee/fingerprint/',
			imgSrc: 'pic/fingerprint-scanner.png',
			figcaptionText: 'Fingerprint Scanner'
		},
		{
			sectionName: 'js-box',
			elementName: 'click_signal',
			demoURL: 'https://github.com/takacsnorbee/click_signal/',
			imgSrc: 'pic/click_signal.png',
			figcaptionText: 'Click Signal'
		},
		{
			sectionName: 'js-box',
			elementName: 'snake-border',
			demoURL: 'https://github.com/takacsnorbee/snake_border/',
			imgSrc: 'pic/snake_border.png',
			figcaptionText: 'Snake Border'
		},
		{
			sectionName: 'js-box',
			elementName: 'toggle_button_v1',
			demoURL: 'https://github.com/takacsnorbee/toggle_button_v1/',
			imgSrc: 'pic/toggle_button_v1.png',
			figcaptionText: 'Toggle Button V1'
		},
		{
			sectionName: 'js-box',
			elementName: 'toggle_button_v2',
			demoURL: 'https://github.com/takacsnorbee/toggle_button_v1/',
			imgSrc: 'pic/toggle_button_v2.png',
			figcaptionText: 'Toggle Button V2'
		},
	];

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
		div.appendChild(a);
		div.appendChild(figcaption);
		
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
