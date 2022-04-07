import { GLOBAL_VARS } from 'utils/constants';
import {
	uniqArray,
	slideToggle,
	slideUp,
	slideClass,
} from 'components/functions';

// Spollers classes
const spollerClass = 'spollerItem';
const spollerTitleClass = 'spollerTitle';
const spollerInitClass = 'spollerInit';
const oneSpollerClass = 'oneSpoller';

// Closing active spoller
function hideSpollersBody(spollerBlock) {
	const spollerActiveTitle = spollerBlock.querySelector(`.${spollerTitleClass}.${GLOBAL_VARS.active}`);
	if (spollerActiveTitle) {
		spollerActiveTitle.classList.remove(GLOBAL_VARS.active);
		slideUp(spollerActiveTitle.nextElementSibling);
	}
}

function setSpollerAction(e) {
	const element = e.target;
	if (element.closest(`.${spollerClass}`) && element.closest(`.${spollerTitleClass}`)) {
		const spollerTitle = element.closest(`.${spollerTitleClass}`);
		const spollerBlock = spollerTitle.closest(`.${spollerClass}`);
		const oneSpoller = spollerBlock.classList.contains(oneSpollerClass) === true;
		if (!spollerBlock.querySelectorAll(`.${slideClass}`).length) {
			if (oneSpoller && !spollerTitle.classList.contains(GLOBAL_VARS.active)) {
				hideSpollersBody(spollerBlock);
			}
			spollerTitle.classList.toggle(GLOBAL_VARS.active);
			slideToggle(spollerTitle.nextElementSibling);
		}
		e.preventDefault();
	}
}

// Work with content
function InitSpollersBody(spollersBlock, hideSpollerBody = true) {
	const $spollerTitles = spollersBlock.querySelectorAll(`.${spollerTitleClass}`);
	if ($spollerTitles.length) {
		$spollerTitles.forEach(element => {
			const spollersTitle = element;
			if (hideSpollerBody && !spollersTitle.classList.contains(GLOBAL_VARS.active)) {
				spollersTitle.nextElementSibling.hidden = true;
			} else {
				spollersTitle.nextElementSibling.hidden = false;
			}
		});
	}
}

// Initialisation
function initSpollers(spollersArray, matchMedia = false) {
	spollersArray.forEach(element => {
		let spollersBlock = element;
		spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
		if (matchMedia.matches || !matchMedia) {
			spollersBlock.classList.add(spollerInitClass);
			InitSpollersBody(spollersBlock);
			spollersBlock.addEventListener('click', setSpollerAction);
		} else {
			spollersBlock.classList.remove(spollerInitClass);
			InitSpollersBody(spollersBlock, false);
			spollersBlock.removeEventListener('click', setSpollerAction);
		}
	});
}

export function spollers() {
	// Getting all spollers
	const $spollersArray = document.querySelectorAll(`.${spollerClass}`);
	if ($spollersArray.length) {
		// Initialisation regullar spollers
		const $spollersRegullar = Array.from($spollersArray).filter((item) => {
			return !item.dataset.spollers;
		});
		if ($spollersRegullar.length) {
			initSpollers($spollersRegullar);
		}

		// Getting spollers with media-quaries
		const $spollersMedia = Array.from($spollersArray).filter((item) => {
			return item.dataset.spollers;
		});
		// Initialisation spollers with media-quaries
		if ($spollersMedia.length) {
			const breakpointsArray = [];
			$spollersMedia.forEach(element => {
				const item = element;
				const params = item.dataset.spollers;
				const breakpoint = {};
				const paramsArray = params.split(',');
				[breakpoint.value] = paramsArray;
				breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
				breakpoint.item = item;
				breakpointsArray.push(breakpoint);
			});

			// Getting unique breakpoints
			let mediaQuaries = breakpointsArray.map((item) => {
				return `(${item.type}-width: ${item.value}px),${item.value},${item.type}`;
			});
			mediaQuaries = uniqArray(mediaQuaries);

			// Work with each breakpoint
			mediaQuaries.forEach(element => {
				const breakpoint = element;
				const paramsArray = breakpoint.split(',');
				const matchMedia = window.matchMedia(paramsArray[0]);
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];

				// Objects with actual parameters
				const spollersArray = breakpointsArray.filter((item) => {
					if (item.value === mediaBreakpoint && item.type === mediaType) return true;
					else return false;
				});

				// Event
				matchMedia.addEventListener('change', () => {
					initSpollers(spollersArray, matchMedia);
				});
				initSpollers(spollersArray, matchMedia);
			});
		}
	}
}
// ========================================================================================================================================================
