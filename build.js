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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_fonts_robotoslab_robotoslab_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_fonts_montserrat_montserrat_scss__);
//import _ from 'lodash';




//fixed menu
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

//staff-slider
const staff = document.querySelectorAll('.staff__item');
for (let i = 0; i < staff.length; i++) {
	staff[i].style.width = 100 / staff.length + '%';
}

const staffContainer = document.querySelector('.staff__container');
staffContainer.style.width = 100 / 4 * staff.length + '%';

const reviews = document.querySelectorAll('.reviews__item');
for (let i = 0; i < reviews.length; i++) {
	reviews[i].style.width = 100 / reviews.length + '%';
}

//reviews-slider
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

//filter-works
document.addEventListener('click', function (event) {
	const target = event.target;

	if (target.classList.contains('categories__item')) {
		const filterAttr = target.getAttribute('data-work');
		const list = document.querySelectorAll('.photo__list .photo__item');
		for (var i = 0; i < list.length; i++) {
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

	//add active link
	if (target.classList.contains('main-menu__link')) {
		const location = window.location.href;
		const link = document.querySelectorAll('.main-menu__link');
		for (var i = 0; i < link.length; i++) {
			link[i].classList.remove('main-menu__link_active');
		}
		target.classList.add('main-menu__link_active');
	};
});

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

/***/ })
/******/ ]);