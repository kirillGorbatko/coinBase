import { GLOBAL_VARS } from 'utils/constants';
// ========================================================================================================================================================

let bodyLockStatus = true;

export const bodyLock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let $lockPadding = document.querySelectorAll('.lockPadding');
		$lockPadding.forEach(el => {
			const element = el;
			element.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
		});

		body.style.paddingRight = `${window.innerWidth - document.querySelector('.wrapper').offsetWidth}px`;
		document.documentElement.classList.add('pageLock');

		bodyLockStatus = false;
		setTimeout(() => {
			bodyLockStatus = true;
		}, delay);
	}
};

export const bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let $lockPadding = document.querySelectorAll('.lockPadding');
		setTimeout(() => {
			$lockPadding.forEach(el => {
				const element = el;
				element.style.paddingRight = '0px';
			});
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove('pageLock');
		}, delay);
		bodyLockStatus = false;
		setTimeout(() => {
			bodyLockStatus = true;
		}, delay);
	}
};

export const bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('pageLock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
};

export function menuInit() {
	let iconMenu = document.querySelector('.iconMenu');
	if (iconMenu) {
		iconMenu.addEventListener('click', (e) => {
			if (bodyLockStatus) {
				bodyLockToggle();
				document.documentElement.classList.toggle('menuOpen');
			}
		});
	}
}

export function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove('menuOpen');
}

export function uniqArray(array) {
	return array.filter((item, index, self) => {
		return self.indexOf(item) === index;
	});
}

export function removeClasses(array, className) {
	array.forEach(el => {
		const element = el;
		element.classList.remove(className);
	});
}

// Show card on hover
export function setActionOnHover() {
	const blogBody = document.querySelector('.blogsList');
	const $blogs = blogBody.querySelectorAll('.blogCard');

	$blogs.forEach(element => {
		const blogElement = element;

		blogElement.addEventListener('mouseenter', () => {
			if (!blogElement.closest(`.${GLOBAL_VARS.active}`)) {
				const activeElement = blogBody.querySelector(`.section_blog_card.${GLOBAL_VARS.active}`);
				if (activeElement) activeElement.classList.remove(GLOBAL_VARS.active);
				blogElement.classList.add(GLOBAL_VARS.active);
			}
		});
	});
}

// Show review on click
export function showReviewOnClick() {
	const reviewsBody = document.querySelector('.reviewBody');
	const $reviews = reviewsBody.querySelectorAll('.reviewItem');
	const reviewClass = 'reviewItem';

	if (reviewsBody && $reviews.length) {
		reviewsBody.addEventListener('click', (e) => {
			const elTarget = e.target;

			if (elTarget.closest(`.${reviewClass}`)) {
				if (elTarget.closest(`.${reviewClass}.${GLOBAL_VARS.active}`)) {
					elTarget.classList.remove(GLOBAL_VARS.active);
				} else {
					removeClasses($reviews, GLOBAL_VARS.active);
					elTarget.classList.toggle(GLOBAL_VARS.active);
				}
			} else {
				removeClasses($reviews, GLOBAL_VARS.active);
			}
		});
	}
}

// Smooth closing/opening blocks

export const slideClass = 'targetSlide';

/* eslint no-unused-expressions: 0 */
export const slideUp = (targetEl, duration = 500) => {
	const target = targetEl;
	if (!target.classList.contains(slideClass)) {
		target.classList.add(slideClass);
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove(slideClass);
		}, duration);
	}
};

export const slideDown = (targetEl, duration = 500) => {
	const target = targetEl;
	if (!target.classList.contains(slideClass)) {
		target.classList.add(slideClass);
		target.hidden = target.hidden ? false : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = `${duration}ms`;
		target.style.height = `${height}px`;
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove(slideClass);
		}, duration);
	}
};

export const slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return slideDown(target);
	} else {
		return slideUp(target);
	}
};
