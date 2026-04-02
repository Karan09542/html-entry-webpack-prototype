/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./html-entry-webpack-prototype/example/src/main.js"
/*!**********************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/main.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./html-entry-webpack-prototype/example/src/main.css\");\n/* harmony import */ var _public_images_mahadev_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/images/mahadev.png */ \"./html-entry-webpack-prototype/example/src/public/images/mahadev.png\");\n\r\n\r\nfor (let i in [...new Array(5).keys()]) {\r\n\tconsole.log(`om ${i}`);\r\n}\r\n\r\n// document.addEventListener(\"DOMContentLoaded\", () => {\r\n// \tconst img = document.createElement(\"img\");\r\n// \timg.src = mahadev;\r\n// \tdocument.body.appendChild(img);\r\n// });\r\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/main.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/scripts/gallery.js"
/*!*********************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/scripts/gallery.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_gallery_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/gallery.css */ \"./html-entry-webpack-prototype/example/src/style/gallery.css\");\n/* harmony import */ var _public_images_bbb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/images/bbb.png */ \"./html-entry-webpack-prototype/example/src/public/images/bbb.png\");\n/* harmony import */ var _public_images_bhole_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/bhole.png */ \"./html-entry-webpack-prototype/example/src/public/images/bhole.png\");\n/* harmony import */ var _public_images_mahadev_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/mahadev.png */ \"./html-entry-webpack-prototype/example/src/public/images/mahadev.png\");\n/* harmony import */ var _public_images_mahakal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/images/mahakal.png */ \"./html-entry-webpack-prototype/example/src/public/images/mahakal.png\");\n/* harmony import */ var _public_images_natraj_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/images/natraj.png */ \"./html-entry-webpack-prototype/example/src/public/images/natraj.png\");\n/* harmony import */ var _public_images_om_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/images/om.png */ \"./html-entry-webpack-prototype/example/src/public/images/om.png\");\n/* harmony import */ var _public_images_sambhu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/images/sambhu.png */ \"./html-entry-webpack-prototype/example/src/public/images/sambhu.png\");\n/* harmony import */ var _public_images_shankar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/images/shankar.png */ \"./html-entry-webpack-prototype/example/src/public/images/shankar.png\");\n/* harmony import */ var _public_images_shiv_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/images/shiv.png */ \"./html-entry-webpack-prototype/example/src/public/images/shiv.png\");\n\r\n\r\n// 🔥 Import images\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 🔥 Data\r\nconst images = [\r\n  { src: _public_images_bbb_png__WEBPACK_IMPORTED_MODULE_1__, name: \"bbb\" },\r\n  { src: _public_images_bhole_png__WEBPACK_IMPORTED_MODULE_2__, name: \"bhole\" },\r\n  { src: _public_images_mahadev_png__WEBPACK_IMPORTED_MODULE_3__, name: \"mahadev\" },\r\n  { src: _public_images_mahakal_png__WEBPACK_IMPORTED_MODULE_4__, name: \"mahakal\" },\r\n  { src: _public_images_natraj_png__WEBPACK_IMPORTED_MODULE_5__, name: \"natraj\" },\r\n  { src: _public_images_om_png__WEBPACK_IMPORTED_MODULE_6__, name: \"om\" },\r\n  { src: _public_images_sambhu_png__WEBPACK_IMPORTED_MODULE_7__, name: \"sambhu\" },\r\n  { src: _public_images_shankar_png__WEBPACK_IMPORTED_MODULE_8__, name: \"shankar\" },\r\n  { src: _public_images_shiv_png__WEBPACK_IMPORTED_MODULE_9__, name: \"shiv\" }\r\n];\r\n\r\n// 🔥 Reusable function\r\nfunction createGallery(rootId = \"app\") {\r\n  const root = document.getElementById(rootId);\r\n  if (!root) {\r\n    console.error(\"Root element not found\");\r\n    return;\r\n  }\r\n\r\n  // 🔥 Scoped container\r\n  const container = document.createElement(\"div\");\r\n  container.className = \"gallery-app\";\r\n\r\n  // Gallery grid\r\n  const gallery = document.createElement(\"div\");\r\n  gallery.className = \"gallery\";\r\n\r\n  // Lightbox\r\n  const lightbox = document.createElement(\"div\");\r\n  lightbox.className = \"lightbox\";\r\n\r\n  const lightboxImg = document.createElement(\"img\");\r\n  lightbox.appendChild(lightboxImg);\r\n\r\n  // Generate cards\r\n  images.forEach(({ src, name }) => {\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"card\";\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.alt = name;\r\n\r\n    const overlay = document.createElement(\"div\");\r\n    overlay.className = \"overlay\";\r\n    overlay.textContent = name;\r\n\r\n    card.appendChild(img);\r\n    card.appendChild(overlay);\r\n\r\n    // Open lightbox\r\n    card.addEventListener(\"click\", () => {\r\n      lightbox.classList.add(\"active\");\r\n      lightboxImg.src = src;\r\n    });\r\n\r\n    gallery.appendChild(card);\r\n  });\r\n\r\n  // Close lightbox\r\n  lightbox.addEventListener(\"click\", () => {\r\n    lightbox.classList.remove(\"active\");\r\n  });\r\n\r\n  // Append everything\r\n  container.appendChild(gallery);\r\n  container.appendChild(lightbox);\r\n  root.appendChild(container);\r\n}\r\n\r\n// 🔥 Init\r\ncreateGallery();\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/scripts/gallery.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/three.js"
/*!***********************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/three.js ***!
  \***********************************************************/
() {

eval("{console.log(\"bam bam bhole\")\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/three.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/utils/a.js"
/*!*************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/utils/a.js ***!
  \*************************************************************/
() {

eval("{console.log(\"a.js\")\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/utils/a.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/main.html"
/*!************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/main.html ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_main_css_html_entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/main.css?html-entry */ \"./html-entry-webpack-prototype/example/src/main.css?html-entry\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_style_header_sass_html_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/style/header.sass?html-entry */ \"./html-entry-webpack-prototype/example/src/style/header.sass?html-entry\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_style_footer_scss_html_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/style/footer.scss?html-entry */ \"./html-entry-webpack-prototype/example/src/style/footer.scss?html-entry\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/main.js */ \"./html-entry-webpack-prototype/example/src/main.js\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_three_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/three.js */ \"./html-entry-webpack-prototype/example/src/three.js\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_three_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_three_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_utils_a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/utils/a.js */ \"./html-entry-webpack-prototype/example/src/utils/a.js\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_utils_a_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_utils_a_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_scripts_gallery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/scripts/gallery.js */ \"./html-entry-webpack-prototype/example/src/scripts/gallery.js\");\n/* harmony import */ var file_C_Users_karan_test_webpack_html_entry_webpack_prototype_example_src_public_images_mahadev_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file:///C:/Users/karan/test/webpack/html-entry-webpack-prototype/example/src/public/images/mahadev.png */ \"./html-entry-webpack-prototype/example/src/public/images/mahadev.png\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/main.html?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/main.css"
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/main.css ***!
  \****************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n/* 🔥 ONE-TONE DESIGN SYSTEM */\n:root {\n  --bg: #0f172a; /* dark base */\n  --bg-soft: #1e293b; /* cards */\n  --primary: #6366f1; /* main tone */\n  --primary-soft: #818cf8;\n  --text: #e2e8f0;\n  --text-dim: #94a3b8;\n  --border: #334155;\n}\n\n/* Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.6;\n}\n\n/* Layout */\nmain {\n  max-width: 1100px;\n  margin: auto;\n  padding: 30px 20px;\n}\n\n/* Heading */\nh1 {\n  text-align: center;\n  margin: 30px 0;\n  color: var(--primary-soft);\n  letter-spacing: 2px;\n}\n\n/* Images\nimg {\n  border-radius: 12px;\n  margin: 10px;\n  border: 1px solid var(--border);\n  transition: 0.3s;\n}\n\nimg:hover {\n  transform: scale(1.05);\n  border-color: var(--primary);\n} */\n/* 🔥 HERO IMAGE SECTION */\n.hero-images {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  padding: 25px 20px;\n  background: rgba(255, 255, 255, 0.02);\n  border-bottom: 1px solid var(--border);\n}\n\n/* image styling (inherits tone) */\n.hero-images img {\n  height: 100px;\n  border-radius: 12px;\n  border: 1px solid var(--border);\n  transition: 0.3s;\n}\n\n.hero-images img:hover {\n  transform: scale(1.08);\n  border-color: var(--primary);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/style/gallery.css"
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/style/gallery.css ***!
  \*************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n/* 🔥 EVERYTHING scoped inside .gallery-app */\n.gallery-app {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n}\n\n/* DO NOT TOUCH body/header/main ❌ */\n/* Gallery grid */\n.gallery-app .gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 20px;\n}\n\n/* Card */\n.gallery-app .card {\n  position: relative;\n  border-radius: 16px;\n  overflow: hidden;\n  cursor: pointer;\n  background: #111827;\n  transition: 0.3s;\n}\n\n.gallery-app .card img {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  transition: 0.4s;\n}\n\n.gallery-app .card:hover img {\n  transform: scale(1.1);\n}\n\n.gallery-app .card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);\n}\n\n/* Overlay */\n.gallery-app .overlay {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);\n}\n\n/* Lightbox */\n.gallery-app .lightbox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  z-index: 999;\n}\n\n.gallery-app .lightbox.active {\n  display: flex;\n}\n\n.gallery-app .lightbox img {\n  max-width: 90%;\n  max-height: 80%;\n  border-radius: 12px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/style/gallery.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/main.css?html-entry"
/*!**********************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/main.css?html-entry ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/main.css?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/style/footer.scss?html-entry"
/*!*******************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/style/footer.scss?html-entry ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/style/footer.scss?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/style/header.sass?html-entry"
/*!*******************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/style/header.sass?html-entry ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/style/header.sass?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/main.css"
/*!***********************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/main.css ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/main.css?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/style/gallery.css"
/*!********************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/style/gallery.css ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./gallery.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./html-entry-webpack-prototype/example/src/style/gallery.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/style/gallery.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/bbb.png"
/*!************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/bbb.png ***!
  \************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/d157eae85d8268d21cf3.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/bbb.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/bhole.png"
/*!**************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/bhole.png ***!
  \**************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/dc190c6c848ef8a40661.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/bhole.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/mahadev.png"
/*!****************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/mahadev.png ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/2285cc3c75dcb12a4e10.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/mahadev.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/mahakal.png"
/*!****************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/mahakal.png ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/ddf24c3b74463bf363e3.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/mahakal.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/natraj.png"
/*!***************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/natraj.png ***!
  \***************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/613504c339d22d02c0ac.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/natraj.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/om.png"
/*!***********************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/om.png ***!
  \***********************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/d944f479b435f95707af.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/om.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/sambhu.png"
/*!***************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/sambhu.png ***!
  \***************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/381fbe082287b172dc4e.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/sambhu.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/shankar.png"
/*!****************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/shankar.png ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/25db43a60cd369766b56.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/shankar.png?\n}");

/***/ },

/***/ "./html-entry-webpack-prototype/example/src/public/images/shiv.png"
/*!*************************************************************************!*\
  !*** ./html-entry-webpack-prototype/example/src/public/images/shiv.png ***!
  \*************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{module.exports = __webpack_require__.p + \"public/b5146a7133d0670dce76.png\";\n\n//# sourceURL=webpack://webpack/./html-entry-webpack-prototype/example/src/public/images/shiv.png?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./html-entry-webpack-prototype/example/src/main.html");
/******/ 	
/******/ })()
;