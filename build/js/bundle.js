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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/bro.js":
/*!***********************!*\
  !*** ./src/js/bro.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bro = function bro(greeting) {
  return greeting;
};

/* harmony default export */ __webpack_exports__["default"] = (bro);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bro */ "./src/js/bro.js");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_1__);


console.log(Object(_bro__WEBPACK_IMPORTED_MODULE_0__["default"])('hello bro')); // if (module && module.hot) module.hot.accept()

/** ================ 
** - Tags Switch -
** ================ */

window.onload = function () {
  var tagSlides = document.querySelector('.tag-slides');
  var Btns = document.querySelectorAll('.tag-btns button');
  var nDiv = tagSlides.getElementsByTagName("div");

  for (var i = 0; i < Btns.length; i++) {
    Btns[i].index = i;

    Btns[i].onclick = function () {
      for (i = 0; i < Btns.length; i++) {
        nDiv[i].style.display = "none";
      }

      nDiv[this.index].style.display = "block";
    };
  }
};
/*End of Tag Switch */

/** ================ 
** - Menu Bar -
** ================ */


var menuSpan = document.querySelector('.nav-click span');
var centerBar = document.querySelector('.nav-click span i');
var dropdown = document.querySelector('.menu');
menuSpan.addEventListener('click', function () {
  menuSpan.classList.toggle("active");
  centerBar.classList.toggle("active");
  dropdown.classList.toggle('menu-active');
});
/*End of Bars clicked to turn into close icon */

/** ====================
** - Get Tooltip Position-
** ==================== */

document.addEventListener('mousemove', function (e) {
  var tooltips = document.querySelectorAll('.tooltip');
  var posX = e.clientX;
  var posY = e.clientY;
  tooltips.forEach(function (tooltip) {
    tooltip.style.left = posX;
    tooltip.style.top = posY;
  });
});
/*End of Bars clicked to turn into close icon */

/** ================
** - Slides Scroll -
** ================ */

function moveToSlide(track, targetSlide, currentSlide) {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

var leftArrow = document.querySelector('.left-arrow');
var rightArrow = document.querySelector('.right-arrow');
var cardSlides = document.querySelectorAll('.card-slide');
var thumbnails = document.querySelector('.thumbnail-track');
var track = document.querySelector('.slides-track');
var currentSlide = 0;
var slideWidth = cardSlides[0].offsetWidth;
track.style.width = cardSlides.length * slideWidth;
cardSlides.forEach(function (slide, index) {
  return slide.style.left = index * slideWidth + 'px';
});
thumbnails.addEventListener('click', function (e) {
  targetThumbnail = e.target;
  console.log(thumbnails.firstElementChild(targetThumbnail));
});
rightArrow.addEventListener('click', function () {
  var currentSlide = track.querySelector('.current-slide');
  var nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, nextSlide, currentSlide);
});
leftArrow.addEventListener('click', function () {
  var currentSlide = track.querySelector('.current-slide');
  var prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, prevSlide, currentSlide);
});
/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/** ================
** - Tag Design -
** ================ */

/*End of Bars clicked to turn into close icon */

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map