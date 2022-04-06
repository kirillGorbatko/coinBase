// ------------------- imports
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { menuInit, spollers } from 'components/functions';
// ------------------  import components###

// -------------------  global variables

const readyFunc = () => {
	menuInit();
	spollers();
};

const loadFunc = () => {
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
