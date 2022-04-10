// ------------------- imports
import 'smoothscroll-for-websites';
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { menuInit, setActionOnHover, showReviewOnClick } from 'components/functions';
import { spollers } from 'components/spollers';
import { ScrollOnClick } from 'components/scroll';
import { animate } from 'components/animations';
// ------------------  import components###

// -------------------  global variables

const readyFunc = () => {
	ScrollOnClick();
	menuInit();
	spollers();
	if (window.innerWidth >= 1024) {
		setActionOnHover();
		showReviewOnClick();
		animate();
	}
};

const loadFunc = () => {
	document.documentElement.classList.add('pageLoaded');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
