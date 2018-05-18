/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_page_about_staff_staff_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_page_about_staff_staff_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_home_page_about_staff_staff_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_page_works_photo_photo_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_page_works_photo_photo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_home_page_works_photo_photo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_page_clients_reviews_reviews_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_page_clients_reviews_reviews_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_home_page_clients_reviews_reviews_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_general_header_header_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_general_header_header_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_general_header_header_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_general_header_main_menu_main_menu_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_general_header_main_menu_main_menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_general_header_main_menu_main_menu_js__);









/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

const items = document.querySelectorAll('.staff__item');
const list = document.querySelector('.staff__container');
const itemLength = items.length;

function setContainerWidth(container, item) {
	if (window.screen.width <= 600 && window.screen.width >= 360) {
		container.style.width = 100 / 2 * item.length + '%';
	} else if (window.screen.width < 360) {
		container.style.width = 100 / 1 * item.length + '%';
	} else if (window.screen.width > 600) {
		container.style.width = 100 / 4 * item.length + '%';
	}
}

setContainerWidth(list, items);

function setItemsWidth(nodes) {
	for (let i = 0; i < nodes.length; i++) {
		nodes[i].style.width = 100 / nodes.length + '%';
	}
}

setItemsWidth(items);

function updatePosition(step, amount) {
	let position = step / amount * (100 / itemLength * amount);
	list.style.transform = "translateX(-" + position + "%)";
}

let step = 0;
let amount = 0;

if (window.screen.width <= 600 && window.screen.width >= 360) {
	amount = 2;
} else if (window.screen.width < 360) {
	amount = 1;
} else {
	amount = 4;
}

if (amount > itemLength) {
	document.querySelector('.staff__button_right').classList.add('staff__button_disabled');
} else {
	document.querySelector('.staff__button_right').classList.remove('staff__button_disabled');
}

function activeButtons(step, itemLength, amount) {
	if (step < 1) {
		document.querySelector('.staff__button_left').classList.add('staff__button_disabled');
	} else {
		document.querySelector('.staff__button_left').classList.remove('staff__button_disabled');
	}

	if (step + amount > itemLength - 1) {
		document.querySelector('.staff__button_right').classList.add('staff__button_disabled');
	} else {
		document.querySelector('.staff__button_right').classList.remove('staff__button_disabled');
	}
}

function scrollСarousel(event) {
	if (event.target.classList.contains('staff__button_left')) {
		step = step - amount;
		if (step < 1) {
			step = 0;
		}
		activeButtons(step, itemLength, amount);
		updatePosition(step, amount);
	}

	if (event.target.classList.contains('staff__button_right')) {
		step += amount;
		if (step + amount > itemLength - 1) {
			step = itemLength - amount;
		}
		activeButtons(step, itemLength, amount);
		updatePosition(step, amount);
	}
}

document.addEventListener('click', scrollСarousel, true);
document.addEventListener('touched', scrollСarousel, true);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

document.addEventListener('click', function (event) {
	const target = event.target;

	if (target.classList.contains('categories__item')) {
		const filterAttr = target.getAttribute('data-work');
		const list = document.querySelectorAll('.photo__list .photo__item');
		for (let i = 0; i < list.length; i++) {
			if (list[i].getAttribute('data-work') === filterAttr || filterAttr === 'all') {
				list[i].classList.remove('hidden');
			} else {
				list[i].classList.add('hidden');
			}
		}
		const categories = document.querySelectorAll('.categories__item');
		for (let i = 0; i < categories.length; i++) {
			categories[i].classList.remove('categories__item_active');
		}

		target.classList.add('categories__item_active');
	}
});

document.querySelector('.categories__item').classList.add('categories__item_active');

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const reviews = document.querySelectorAll('.reviews__item');

for (let i = 0; i < reviews.length; i++) {
	reviews[i].style.width = 100 / reviews.length + '%';
}

const reviewsContainer = document.querySelector('.reviews__container');
reviewsContainer.style.width = 100 / 1 * reviews.length + '%';

let position = 1;

for (let i = 0; i < reviews.length; i++) {
	if (i !== 0) {
		reviews[i].classList.add('reviews__item_hidden');
	}
}

function updateSlides() {
	for (let i = 0; i < reviews.length; i++) {
		reviews[i].classList.add('reviews__item_hidden');

		if (position - 1 === i) {
			reviews[i].classList.remove('reviews__item_hidden');
		}
	}
}

function initPoints(arr) {
	const container = document.querySelector('.reviews__points');

	let template = '';

	for (let i = 1; i <= arr.length; i++) {
		template = template + '<button class="reviews__point" data-id="' + i + '"></button>';
	}

	container.innerHTML = template;
}

updateSlides(position);
initPoints(reviews);

document.addEventListener('click', function (event) {
	if (event.target.classList.contains('reviews__point')) {
		position = event.target.dataset.id;
		updateSlides(position);

		const points = document.querySelectorAll('.reviews__point');
		for (let i = 0; i < points.length; i++) {
			points[i].classList.remove('reviews__point_active');
		}

		event.target.classList.add('reviews__point_active');
	}
});

document.querySelector('.reviews__point').classList.add('reviews__point_active');

/***/ }),
/* 7 */
/***/ (function(module, exports) {

const block = document.querySelector('.header');
const logo = document.querySelector('.logo');

window.onscroll = function () {
	if (block.classList.contains('header_fixed') && window.pageYOffset < 20) {
		block.classList.remove('header_fixed');
		logo.removeAttribute('href');
	} else if (window.pageYOffset > 20) {
		block.classList.add('header_fixed');
		logo.setAttribute('href', '/');
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

const menuList = document.querySelector('.main-menu__list');
const points = Array.from(document.querySelectorAll(".anchor"));
const menuItemNodes = Array.from(document.querySelectorAll('.main-menu__item'));

function toggleSidenav() {
	if (menuList.classList.contains('main-menu__list_hidden') && window.screen.width < 500) {
		menuList.classList.remove('main-menu__list_hidden');
		menuList.style.width = "100%";
	} else if (menuList.classList.contains('main-menu__list_hidden') && window.screen.width > 500) {
		menuList.classList.remove('main-menu__list_hidden');
		menuList.style.width = "350px";
	} else {
		menuList.classList.add('main-menu__list_hidden');
		menuList.style.width = "0";
	}
}

function clickEvents(event) {
	if (event.target.closest('.menu-button')) {
		toggleSidenav();
		return;
	}

	if (event.target.closest('.close-button')) {
		toggleSidenav();
		return;
	}
}

document.addEventListener('click', clickEvents, true);
document.addEventListener('touched', clickEvents, true);

//scroll

function getPosition(position, points) {
	let result = 0;
	points.forEach((item, index, array) => {
		if (position >= item.offsetTop - 100) {
			result = index;
		}
	});

	return result;
}

function updateNavigation(nodes, index) {
	nodes.forEach((item, index2) => {
		if (index === index2) {
			item.classList.add('main-menu__item_active');
		} else {
			item.classList.remove('main-menu__item_active');
		}
	});
}

window.addEventListener('scroll', function (event) {
	updateNavigation(menuItemNodes, getPosition(window.pageYOffset, points));
});

/***/ })
/******/ ]);