// ------------------- imports
import 'smoothscroll-for-websites';
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { menuInit, setActionOnHover, showReviewOnClick } from 'components/functions';
import { spollers } from 'components/spollers';
import { ScrollOnClick } from 'components/scroll';
// ------------------  import components###

// -------------------  global variables

const readyFunc = () => {
	menuInit();
	spollers();
	ScrollOnClick();
	setActionOnHover();
	showReviewOnClick();
};

const loadFunc = () => {
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
