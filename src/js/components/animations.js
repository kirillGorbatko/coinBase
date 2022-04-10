import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animate() {
	const $topWaves = document.querySelectorAll('.topWave');
	const $bottomWaves = document.querySelectorAll('.bottomWave');
	const $topDecors = document.querySelectorAll('.topDecor');
	const $bottomDecors = document.querySelectorAll('.bottomDecor');
	const $headTitles = document.querySelectorAll('.headTitle');
	const $headTexts = document.querySelectorAll('.headText');
	const $headBtns = document.querySelectorAll('.headBtn');
	const $infoPictures = document.querySelectorAll('.infoPic');
	const $tableColumns = document.querySelectorAll('.tableColumn');
	const $tradeItems = document.querySelectorAll('.tradeItem');
	const $blogWraps = document.querySelectorAll('.blogWrap');
	const reviewList = document.querySelector('.reviewList');
	const reviewItemClass = 'reviewItem';
	const $appLinks = document.querySelectorAll('.appLink');
	const $appPhones = document.querySelectorAll('.appPhone');

	if ($bottomWaves.length) {
		$bottomWaves.forEach(element => {
			const botWave = element;
			gsap.from(botWave, {
				y: '80%',
				duration: 2,
				scrollTrigger: botWave,
			});
		});
	}

	if ($topWaves.length) {
		$topWaves.forEach(element => {
			const topWave = element;
			gsap.from(topWave, {
				y: '-80%',
				duration: 1,
				scrollTrigger: topWave,
			});
		});
	}

	if ($bottomDecors.length) {
		$bottomDecors.forEach(element => {
			const bottomDecor = element;
			gsap.from(bottomDecor, {
				y: '100%',
				x: '-30%',
				duration: 3,
				repeat: -1,
				yoyo: true,
				scrollTrigger: bottomDecor,
			});
		});
	}

	if ($topDecors.length) {
		$topDecors.forEach(element => {
			const topDecor = element;
			gsap.from(topDecor, {
				y: '-100%',
				x: '-10%',
				repeat: -1,
				yoyo: true,
				duration: 5,
				scrollTrigger: topDecor,
			});
		});
	}

	if ($headTitles.length) {
		$headTitles.forEach(element => {
			const headTitle = element;
			gsap.from(headTitle, {
				y: '100%',
				duration: 1,
				opacity: 0,
				scrollTrigger: headTitle,
			});
		});
	}

	if ($headTexts.length) {
		$headTexts.forEach(element => {
			const headText = element;
			gsap.from(headText, {
				y: '30%',
				opacity: 0,
				duration: 1,
				delay: 0.5,
				scrollTrigger: headText,
			});
		});
	}

	if ($headBtns.length) {
		$headBtns.forEach(element => {
			const headBtn = element;
			gsap.from(headBtn, {
				y: '50%',
				opacity: 0,
				duration: 1,
				delay: 0.8,
				scrollTrigger: headBtn,
			});
		});
	}

	if ($infoPictures.length) {
		$infoPictures.forEach(element => {
			const infoPicture = element;
			gsap.from(infoPicture, {
				y: '20%',
				opacity: 0,
				duration: 1.5,
				scrollTrigger: infoPicture,
			});
		});
	}

	if ($tableColumns.length) {
		$tableColumns.forEach(element => {
			const tableColumn = element;
			gsap.from(tableColumn, {
				y: '20%',
				opacity: 0,
				duration: 1.5,
				scrollTrigger: tableColumn,
			});
		});
	}

	if ($tradeItems.length) {
		let transformX = 20;
		$tradeItems.forEach(element => {
			const tradeItem = element;
			gsap.from(tradeItem, {
				x: `${transformX}%`,
				opacity: 0,
				duration: 1,
				scrollTrigger: tradeItem,
			});
			transformX *= -1;
		});
	}

	if ($blogWraps.length) {
		$blogWraps.forEach(element => {
			const blogWrap = element;
			gsap.from(blogWrap, {
				y: '20%',
				opacity: 0,
				duration: 1.5,
				scrollTrigger: blogWrap,
			});
		});
	}

	if (reviewList) {
		gsap.from(`.${reviewItemClass}`, {
			scale: 0,
			y: '120%',
			duration: 1,
			scrollTrigger: {
				trigger: reviewList,
				start: 'top center',
			},
			stagger: {
				each: 1,
				from: 'center',
				amount: 2,
			},
		});
	}

	if ($appLinks.length) {
		let transformX = 20;
		$appLinks.forEach(element => {
			const appLink = element;
			gsap.from(appLink, {
				x: `${transformX}%`,
				y: '120%',
				opacity: 0,
				duration: 1,
				scrollTrigger: appLink,
			});
			transformX *= -1;
		});
	}

	if ($appPhones.length) {
		let skew = 10;
		let transformX = -40;
		$appPhones.forEach(element => {
			const appPhone = element;
			gsap.from(appPhone, {
				y: '20%',
				x: `${transformX}%`,
				opacity: 0,
				duration: 1,
				skewX: skew,
				scrollTrigger: {
					trigger: appPhone,
					start: 'top center',
				},
			});
			skew *= -1;
			transformX *= -1;
		});
	}
}
