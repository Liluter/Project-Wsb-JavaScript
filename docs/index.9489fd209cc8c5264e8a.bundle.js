/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/css/index.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/css/index.scss ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/clouds_1920.jpg */ "./src/assets/images/clouds_1920.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/Flightbook.svg */ "./src/assets/images/Flightbook.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*Inter font*/\n/*scss for index.js and so index.html */\n:root {\n  --marg1: 0px;\n  --marg2: 20px;\n  --main-color: rgba(4, 163, 255, 0.623); }\n\n/* Style reset */\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0; }\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top center;\n  background-repeat: no-repeat;\n  /*min-width: 320px;*/\n  /* background-size: cover;*/ }\n\n.container {\n  width: calc(100% - 2 * var(--marg1));\n  height: calc(100% - 2 * var(--marg1));\n  background-color: var(--main-color);\n  margin: var(--marg1);\n  padding: 0;\n  min-width: 320px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto -webkit-min-content;\n  grid-template-rows: auto 1fr auto min-content;\n  margin-bottom: 0px;\n  min-width: 320px; }\n\n.navbar {\n  display: flex;\n  /* flex-wrap: nowrap; */\n  flex-direction: row;\n  justify-content: left;\n  min-width: 320px;\n  width: calc(100% - 2 * var(--marg2));\n  height: 74px;\n  background: #e5e5e5;\n  border-radius: 10px;\n  margin: var(--marg2);\n  grid-column: 1 / span 2;\n  grid-row: 1 / 2; }\n\n.logo {\n  display: flex; }\n\n.logo img {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 150px;\n  height: auto;\n  margin-left: 20px; }\n\n.menu {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  list-style: none;\n  margin-right: 12px;\n  margin-top: auto;\n  margin-bottom: auto; }\n\n.menu li {\n  margin-left: 8px;\n  margin-right: 8px;\n  display: flex;\n  text-align: center; }\n\nli .avatar {\n  margin-left: 24px; }\n\nli .location-weather {\n  margin-left: 20px; }\n\n.location-time,\n.location-weather {\n  font-family: \"DejaVu Sans Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  align-items: center;\n  color: #2b518b; }\n\n.btn-login {\n  background: #7d92b3;\n  border-radius: 5px;\n  width: 64px;\n  height: 32px;\n  border: none;\n  color: #e5e5e5; }\n\n.btn-login:hover {\n  background: #e5e5e5;\n  border-radius: 5px;\n  width: 64px;\n  height: 32px;\n  border: 1px #7d92b3 solid;\n  color: #7d92b3; }\n\n/*button for accepting and saving data*/\n#select-dest, #select-depart {\n  width: 184px;\n  height: 32px;\n  background: #FFFFFF;\n  border: 1px solid #2B518B;\n  box-sizing: border-box;\n  border-radius: 5px; }\n\n.main {\n  margin-left: 20px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  /* background-color: rgba(255, 255, 255, 0.2); */ }\n\n.aside {\n  background-color: rgba(255, 255, 255, 0.2);\n  margin-right: 20px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3; }\n\n.main.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  max-width: 100%;\n  min-height: 200px;\n  background: #e5e5e5;\n  border-radius: 10px;\n  margin: 0px 58px 40px 8px;\n  padding: 26px; }\n\n.aside-content {\n  width: auto;\n  height: 100%;\n  background-color: rgba(56, 220, 231, 0.1); }\n\n.row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  justify-items: center;\n  flex-wrap: wrap;\n  -moz-column-gap: 18px;\n  column-gap: 18px; }\n\n.btn .arrival {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / 2;\n  grid-row: 1 / 2; }\n\n.footer {\n  background-color: #12cf0b;\n  /* filter: opacity(0.5); */\n  width: calc(100% - 2 * var(--marg2));\n  height: 74px;\n  background: #e5e5e5;\n  border-radius: 10px;\n  margin: var(--marg2);\n  min-width: 320px;\n  grid-column: 1 / span 2; }\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  width: 200px;\n  height: 50px;\n  background: #cedee7;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 8px;\n  font-family: \"DejaVu Sans Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  align-items: center;\n  color: #2b518b; }\n\n.btn:hover {\n  border: 1px solid #2b518b; }\n\n.btn.accept {\n  background: #7d92b3;\n  border: 1px solid #e5e5e5;\n  box-sizing: border-box;\n  border-radius: 5px;\n  color: #e5e5e5;\n  font-size: 1.4em; }\n\n.btn.accept:hover {\n  background: #0f68ee;\n  border: 1px solid #e5e5e5;\n  box-sizing: border-box;\n  border-radius: 5px;\n  color: #e5e5e5;\n  font-size: 1.4em; }\n\n.btn img {\n  width: 25px; }\n\n.btn.passangers img {\n  width: 34px; }\n\n.btn.passangers img:hover {\n  width: 40px; }\n\n.sign {\n  height: 50px; }\n\n.sign img {\n  width: 75px; }\n\n.numPass {\n  width: 28px;\n  height: 28px;\n  background-color: #e5e5e5;\n  border: 1px solid #2b518b;\n  border-radius: 5px;\n  font-family: \"DejaVu Sans Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2b518b; }\n\n/* main content */\n.main-content .sign {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.footer {\n  font-family: \"DejaVu Sans Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #2b518b;\n  text-align: center; }\n\n/* wklejka*/\nu li {\n  display: block; }\n\n.menu li:last-child {\n  display: none; }\n\n.logo {\n  height: auto;\n  margin: 0; }\n\n.logo img {\n  margin-top: 8px;\n  width: 100px; }\n\nli .avatar {\n  margin-left: 0; }\n\n.btn-login,\n.btn-login-apear {\n  display: none; }\n\n.location-time,\n.location-weather {\n  font-size: 0.8em;\n  margin: 0; }\n\n.row {\n  flex-direction: column;\n  width: 100%; }\n\n.main {\n  margin-left: 0;\n  height: auto; }\n\n.main-content {\n  margin: 8px;\n  width: auto;\n  max-width: none;\n  padding: 18px; }\n\n.main.content {\n  margin: 8px; }\n\n/*\r\n.aside {\r\n    grid-column: 1 / 2;\r\n    grid-row: 3 / 4;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n}\r\n*/\n.btn {\n  width: 100%; }\n\n.footer {\n  width: auto;\n  height: 60px;\n  margin: 8px;\n  font-size: 0.8em; }\n\n.template {\n  width: 300px;\n  height: 300px;\n  background-color: #2B518B; }\n\n@media (max-width: 900px) {\n  body {\n    height: auto; }\n  .navbar {\n    width: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: auto;\n    margin: 8px;\n    height: auto; }\n  .menu {\n    margin: 0;\n    margin-bottom: 8px; }\n  .menu li {\n    display: block; }\n  .menu li:last-child {\n    display: none; }\n  .logo {\n    height: auto;\n    margin: 0; }\n  .logo img {\n    margin-top: 8px;\n    width: 100px; }\n  li .avatar {\n    margin-left: 0; }\n  .btn-login,\n  .btn-login-apear {\n    display: none; }\n  .location-time,\n  .location-weather {\n    font-size: 0.8em;\n    margin: 0; }\n  .row {\n    flex-direction: column;\n    width: 100%; }\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 110px auto auto auto;\n    margin-bottom: 0px;\n    min-width: 320px; }\n  .main {\n    margin-left: 0; }\n  .main-content {\n    margin: 8px;\n    width: auto;\n    max-width: none;\n    padding: 18px; }\n  .main.content {\n    margin: 8px; }\n  .aside {\n    height: auto;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .btn {\n    width: 100%; }\n  .footer {\n    width: auto;\n    height: 60px;\n    margin: 8px;\n    font-size: 0.8em; } }\n\n@media (max-width: 600px) {\n  body {\n    height: auto; }\n  .navbar {\n    width: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: auto;\n    margin: 8px;\n    grid-column: 1 / span 2;\n    grid-row: 1 / 2; }\n  .menu {\n    justify-content: space-evenly;\n    margin: 0;\n    margin-bottom: 8px; }\n  .menu li {\n    display: block; }\n  .menu li:last-child {\n    display: none; }\n  .logo {\n    height: auto;\n    margin: 0; }\n  .logo img {\n    margin-top: 8px;\n    width: 100px; }\n  li .avatar {\n    margin-left: 0; }\n  .btn-login,\n  .btn-login-apear {\n    display: none; }\n  .location-time,\n  .location-weather {\n    font-size: 0.8em;\n    margin: 0; }\n  .row {\n    row-gap: 18px;\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n  .container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 110px auto auto auto;\n    margin-bottom: 0px;\n    min-width: 320px; }\n  .main {\n    margin-left: 0; }\n  .main-content {\n    margin: 8px;\n    width: auto;\n    height: auto;\n    max-width: none;\n    padding: 18px; }\n  .main.content {\n    margin: 8px; }\n  .aside {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .btn {\n    width: 100%; }\n  .footer {\n    width: auto;\n    height: 60px;\n    margin: 8px;\n    font-size: 0.8em; } }\n", "",{"version":3,"sources":["webpack://./src/css/index.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(./modal.css);\r\n\r\n/*Inter font*/\r\n@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\r\n\r\n/*scss for index.js and so index.html */\r\n:root {\r\n    --marg1: 0px;\r\n    --marg2: 20px;\r\n    --main-color: rgba(4, 163, 255, 0.623);\r\n}\r\n/* Style reset */\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    background: url(../assets/images/clouds_1920.jpg) top center;\r\n    background-repeat: no-repeat;\r\n    /*min-width: 320px;*/\r\n    /* background-size: cover;*/\r\n}\r\n\r\n.container {\r\n    width: calc(100% - 2 * var(--marg1));\r\n    height: calc(100% - 2 * var(--marg1));\r\n    background-color: var(--main-color);\r\n    margin: var(--marg1);\r\n    padding: 0;\r\n    min-width: 320px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto 1fr auto -webkit-min-content;\r\n    grid-template-rows: auto 1fr auto min-content;\r\n    margin-bottom: 0px;\r\n    min-width: 320px;\r\n}\r\n\r\n\r\n.navbar {\r\n    display: flex;\r\n    /* flex-wrap: nowrap; */\r\n    flex-direction: row;\r\n    justify-content: left;\r\n    min-width: 320px;\r\n    width: calc(100% - 2 * var(--marg2));\r\n    height: 74px;\r\n    background: #e5e5e5;\r\n    border-radius: 10px;\r\n    margin: var(--marg2);\r\n    grid-column: 1 / span 2;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n.logo {\r\n    display: flex;\r\n}\r\n\r\n.logo img {\r\n    content: url(../assets/images/Flightbook.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    width: 150px;\r\n    height: auto;\r\n    margin-left: 20px;\r\n}\r\n\r\n.menu {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    list-style: none;\r\n    margin-right: 12px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.menu li {\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    display: flex;\r\n    text-align: center;\r\n}\r\n\r\nli .avatar {\r\n    margin-left: 24px;\r\n}\r\nli .location-weather {\r\n    margin-left: 20px;\r\n}\r\n\r\n.location-time,\r\n.location-weather {\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    align-items: center;\r\n    color: #2b518b;\r\n}\r\n.btn-login {\r\n    background: #7d92b3;\r\n    border-radius: 5px;\r\n    width: 64px;\r\n    height: 32px;\r\n    border: none;\r\n    color: #e5e5e5;\r\n}\r\n.btn-login:hover {\r\n    background: #e5e5e5;\r\n    border-radius: 5px;\r\n    width: 64px;\r\n    height: 32px;\r\n    border: 1px #7d92b3 solid;\r\n    color: #7d92b3;\r\n}\r\n\r\n/*button for accepting and saving data*/\r\n\r\n#select-dest, #select-depart {\r\n    width: 184px;\r\n    height:32px;\r\n    background: #FFFFFF;\r\n    border: 1px solid #2B518B;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n\r\n\r\n.main {\r\n    margin-left: 20px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n    /* background-color: rgba(255, 255, 255, 0.2); */\r\n}\r\n.aside {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    margin-right: 20px;\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.main.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 18px;\r\n    max-width: 100%;\r\n    min-height: 200px;\r\n    background: #e5e5e5;\r\n    border-radius: 10px;\r\n    margin: 0px 58px 40px 8px;\r\n    padding: 26px;\r\n}\r\n.aside-content {\r\n    width: auto;\r\n    height: 100%;\r\n    background-color: rgba(56, 220, 231, 0.1);\r\n}\r\n.row {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto auto;\r\n    justify-items: center;\r\n    flex-wrap: wrap;\r\n    -moz-column-gap: 18px;\r\n         column-gap: 18px;\r\n}\r\n\r\n.btn .arrival {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.footer {\r\n    background-color: rgb(18, 207, 11);\r\n    /* filter: opacity(0.5); */\r\n    width: calc(100% - 2 * var(--marg2));\r\n    height: 74px;\r\n    background: #e5e5e5;\r\n    border-radius: 10px;\r\n    margin: var(--marg2);\r\n    min-width: 320px;\r\n    grid-column: 1 / span 2;\r\n}\r\n\r\n.btn {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 12px;\r\n    width: 200px;\r\n    height: 50px;\r\n    background: #cedee7;\r\n\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    align-items: center;\r\n    color: #2b518b;\r\n}\r\n\r\n.btn:hover {\r\n    border: 1px solid #2b518b;\r\n}\r\n\r\n.btn.accept {\r\n    background: #7d92b3;\r\n    border: 1px solid #e5e5e5;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color: #e5e5e5;\r\n    font-size: 1.4em;\r\n}\r\n.btn.accept:hover {\r\n    background: #0f68ee;\r\n    border: 1px solid #e5e5e5;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color: #e5e5e5;\r\n    font-size: 1.4em;\r\n}\r\n\r\n.btn img {\r\n    width: 25px;\r\n}\r\n\r\n.btn.passangers img {\r\n    width: 34px;\r\n}\r\n.btn.passangers img:hover {\r\n    width: 40px;\r\n}\r\n\r\n.sign {\r\n    height: 50px;\r\n}\r\n\r\n.sign img {\r\n    width: 75px;\r\n}\r\n\r\n.numPass {\r\n    width: 28px;\r\n    height: 28px;\r\n    background-color: #e5e5e5;\r\n    border: 1px solid #2b518b;\r\n    border-radius: 5px;\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #2b518b;\r\n}\r\n\r\n/* main content */\r\n\r\n.main-content .sign {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\n.footer {\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #2b518b;\r\n    text-align: center;\r\n}\r\n\r\n/* wklejka*/\r\n\r\n\r\nu li {\r\n    display: block;\r\n}\r\n.menu li:last-child {\r\n    display: none;\r\n}\r\n.logo {\r\n    height: auto;\r\n    margin: 0;\r\n}\r\n.logo img {\r\n    margin-top: 8px;\r\n    width: 100px;\r\n}\r\n\r\nli .avatar {\r\n    margin-left: 0;\r\n}\r\n.btn-login,\r\n.btn-login-apear {\r\n    display: none;\r\n}\r\n.location-time,\r\n.location-weather {\r\n    font-size: 0.8em;\r\n    margin: 0;\r\n}\r\n.row {\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.main {\r\n    margin-left: 0;\r\n    height:auto;\r\n}\r\n\r\n.main-content {\r\n    margin: 8px;\r\n    width: auto;\r\n    max-width: none;\r\n    padding: 18px;\r\n}\r\n.main.content {\r\n    margin: 8px;\r\n}\r\n\r\n/*\r\n.aside {\r\n    grid-column: 1 / 2;\r\n    grid-row: 3 / 4;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n}\r\n*/\r\n\r\n.btn {\r\n    width: 100%;\r\n}\r\n\r\n.footer {\r\n    width: auto;\r\n    height: 60px;\r\n    margin: 8px;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.template {\r\n    width: 300px;\r\n    height:300px;\r\n    background-color: #2B518B;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media  (max-width: 900px) {\r\n    body {\r\n        height: auto;\r\n    }\r\n    .navbar {\r\n        width: auto;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        min-height: auto;\r\n        margin: 8px;\r\n        height: auto;\r\n    }\r\n    .menu {\r\n        \r\n        margin: 0;\r\n        margin-bottom: 8px;\r\n    }\r\n    .menu li {\r\n        display: block;\r\n    }\r\n    .menu li:last-child {\r\n        display: none;\r\n    }\r\n    .logo {\r\n        height: auto;\r\n        margin: 0;\r\n    }\r\n    .logo img {\r\n        margin-top: 8px;\r\n        width: 100px;\r\n    }\r\n\r\n    li .avatar {\r\n        margin-left: 0;\r\n    }\r\n    .btn-login,\r\n    .btn-login-apear {\r\n        display: none;\r\n    }\r\n    .location-time,\r\n    .location-weather {\r\n        font-size: 0.8em;\r\n        margin: 0;\r\n    }\r\n    .row {\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 110px auto auto auto;\r\n        margin-bottom: 0px;\r\n        min-width: 320px;\r\n    }\r\n\r\n    .main {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .main-content {\r\n        margin: 8px;\r\n        width: auto;\r\n        max-width: none;\r\n        padding: 18px;\r\n    }\r\n    .main.content {\r\n        margin: 8px;\r\n    }\r\n    .aside {\r\n        height: auto;\r\n        grid-column: 1 / 2;\r\n        grid-row: 3 / 4;\r\n        margin-left: 8px;\r\n        margin-right: 8px;\r\n    }\r\n    .btn {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer {\r\n        width: auto;\r\n        height: 60px;\r\n        margin: 8px;\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media  (max-width: 600px) {\r\n    body {\r\n        height: auto;\r\n    }\r\n\r\n    .navbar {\r\n        width: auto;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        min-height:auto;\r\n        margin: 8px;\r\n        grid-column: 1 / span 2;\r\n        grid-row: 1 / 2;\r\n    }\r\n    .menu {\r\n        justify-content: space-evenly;\r\n        margin: 0;\r\n        margin-bottom: 8px;\r\n    }\r\n    .menu li {\r\n        display: block;\r\n    }\r\n    .menu li:last-child {\r\n        display: none;\r\n    }\r\n    .logo {\r\n        height: auto;\r\n        margin: 0;\r\n    }\r\n    .logo img {\r\n        margin-top: 8px;\r\n        width: 100px;\r\n    }\r\n\r\n    li .avatar {\r\n        margin-left: 0;\r\n    }\r\n    .btn-login,\r\n    .btn-login-apear {\r\n        display: none;\r\n    }\r\n    .location-time,\r\n    .location-weather {\r\n        font-size: 0.8em;\r\n        margin: 0;\r\n    }\r\n    .row {\r\n        row-gap:18px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 110px auto auto auto;\r\n        margin-bottom: 0px;\r\n        min-width: 320px;\r\n    }\r\n\r\n    .main {\r\n        margin-left: 0;\r\n    }\r\n\r\n    .main-content {\r\n        margin: 8px;\r\n        width: auto;\r\n        height:auto;\r\n        max-width: none;\r\n        padding: 18px;\r\n    }\r\n    .main.content {\r\n        margin: 8px;\r\n    \r\n    }\r\n    \r\n    .aside {\r\n        \r\n        grid-column: 1 / 2;\r\n        grid-row: 3 / 4;\r\n        margin-left: 8px;\r\n        margin-right: 8px;\r\n    }\r\n    .btn {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer {\r\n        width: auto;\r\n        height: 60px;\r\n        margin: 8px;\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Literata);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Tangerine);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&effect=neon);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --lightgray: #94bdc7;\r\n    --blue: steelblue;\r\n    --white: #fff;\r\n    --dark: rgba(11, 40, 106, 0.8);\r\n    --hot: rgb(202, 76, 76);\r\n    --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);\r\n}\r\n\r\n/* * {\r\n    padding: 0;\r\n    margin: 0;\r\n} */\r\n\r\n/* .container {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    background-color: rgb(56, 107, 165);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: inherit;\r\n}\r\n\r\n\r\nbutton.close-modal {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--dark);\r\n    margin-right:12px;\r\n}\r\nbutton.close-modal:hover{\r\n    color: var(--hot);\r\n}\r\n/* rgb(165, 101, 56); */\r\n\r\n/* body {\r\n    background-color: rgb(112, 112, 112);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    font: 16px/1.5 sans-serif;\r\n} */\r\n\r\n.btn-group {\r\n    text-align: center;\r\n}\r\n\r\n.open-modal {\r\n    font-weight: bold;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n    padding: 0.75rem 1.75rem;\r\n    border-radius: 5px;\r\n    width:100%;\r\n}\r\n#modal1 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal2 {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.modal {\r\n    position: relative;\r\n    /* top: 10px;\r\n    left: 10px;\r\n    right: 10px;\r\n    bottom: 10px; */\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 0;\r\n    background: rgb(43 81 139);\r\n    cursor: pointer;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.35s ease-in;\r\n    border-radius: 5px;\r\n    overflow:auto;\r\n    width:100%;\r\n}\r\n\r\n.modal-header>p {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:600;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n    margin-left:12px;\r\n    color: #2b518b;\r\n}\r\n\r\n.modal-dialog {\r\n    /* position:relative;\r\n    top:11%; */\r\n    /* width: 80%; */\r\n    border-radius: 5px;\r\n    background: var(--white);\r\n    overflow: auto;\r\n    cursor: default;\r\n    margin:12px;\r\n    width:90%;\r\n}\r\n\r\n/* .modal-dialog > * {\r\n    padding: 1rem;\r\n} */\r\n\r\n.modal-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 22px 0;\r\n}\r\n\r\n\r\n#select-dest {\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save {\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    width: 84px;\r\n    height:32px;\r\n    /* dark green stroke1 */\r\n    color: #20742D;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 15px;\r\n    background: #7d92b3;\r\n    border: 1px solid #7d92b3;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color:#e5e5e5;\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save:hover {\r\n    background: #0f68ee;\r\n    /* dark green stroke1 */\r\n    border: 1px solid #e5e5e5;\r\n    color: #e5e5e5;\r\n}\r\n\r\n\r\n\r\n.modal-header,\r\n.modal-footer {\r\n    background: var(--lightgray);\r\n}\r\n\r\n.modal-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal-header .modal-close {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.modal p + p {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.modal {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.45s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n    display:flex;\r\n    visibility: visible;\r\n    opacity: 1;\r\n    backdrop-filter: brightness(1.5);\r\n}\r\n\r\n.modal-footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n[data-aprove] {\r\n    color:rgb(211, 173, 19);\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"] .modal-dialog {\r\n    opacity: 0;\r\n    /* transform: scale(20%); */\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n    transition: all .350s ease-in;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"].is-visible .modal-dialog {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition-delay: 0.2s;\r\n    transform: scaleY(1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAKA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,uBAAuB;IACvB,oDAAoD;AACxD;;AAEA;;;GAGG;;AAEH;;;;;;;;GAQG;;;AAGH;IACI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;AACA,uBAAuB;;AAEvB;;;;;;;;GAQG;;AAEH;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,kBAAkB;IAClB,UAAU;AACd;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB;;;AAGA;IACI,kBAAkB;IAClB;;;mBAGe;IACf,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,UAAU;IACV,0BAA0B;IAC1B,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,6BAA6B;IAC7B,kBAAkB;IAClB,aAAa;IACb,UAAU;AACd;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI;cACU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,wBAAwB;IACxB,cAAc;IACd,eAAe;IACf,WAAW;IACX,SAAS;AACb;;AAEA;;GAEG;;AAEH;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;AACnB;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,cAAc;AAClB;;;;AAIA;;IAEI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,2BAA2B;IAC3B,oBAAoB;IACpB,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,eAAe;IACf,sBAAsB;IACtB,oBAAoB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Literata\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Tangerine\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&effect=neon\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap\");\r\n\r\n:root {\r\n    --lightgray: #94bdc7;\r\n    --blue: steelblue;\r\n    --white: #fff;\r\n    --dark: rgba(11, 40, 106, 0.8);\r\n    --hot: rgb(202, 76, 76);\r\n    --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);\r\n}\r\n\r\n/* * {\r\n    padding: 0;\r\n    margin: 0;\r\n} */\r\n\r\n/* .container {\r\n    width: 50vw;\r\n    height: 50vh;\r\n    background-color: rgb(56, 107, 165);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: inherit;\r\n}\r\n\r\n\r\nbutton.close-modal {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--dark);\r\n    margin-right:12px;\r\n}\r\nbutton.close-modal:hover{\r\n    color: var(--hot);\r\n}\r\n/* rgb(165, 101, 56); */\r\n\r\n/* body {\r\n    background-color: rgb(112, 112, 112);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    font: 16px/1.5 sans-serif;\r\n} */\r\n\r\n.btn-group {\r\n    text-align: center;\r\n}\r\n\r\n.open-modal {\r\n    font-weight: bold;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n    padding: 0.75rem 1.75rem;\r\n    border-radius: 5px;\r\n    width:100%;\r\n}\r\n#modal1 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal2 {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.modal {\r\n    position: relative;\r\n    /* top: 10px;\r\n    left: 10px;\r\n    right: 10px;\r\n    bottom: 10px; */\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 0;\r\n    background: rgb(43 81 139);\r\n    cursor: pointer;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.35s ease-in;\r\n    border-radius: 5px;\r\n    overflow:auto;\r\n    width:100%;\r\n}\r\n\r\n.modal-header>p {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:600;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n    margin-left:12px;\r\n    color: #2b518b;\r\n}\r\n\r\n.modal-dialog {\r\n    /* position:relative;\r\n    top:11%; */\r\n    /* width: 80%; */\r\n    border-radius: 5px;\r\n    background: var(--white);\r\n    overflow: auto;\r\n    cursor: default;\r\n    margin:12px;\r\n    width:90%;\r\n}\r\n\r\n/* .modal-dialog > * {\r\n    padding: 1rem;\r\n} */\r\n\r\n.modal-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 22px 0;\r\n}\r\n\r\n\r\n#select-dest {\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save {\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    width: 84px;\r\n    height:32px;\r\n    /* dark green stroke1 */\r\n    color: #20742D;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 15px;\r\n    background: #7d92b3;\r\n    border: 1px solid #7d92b3;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color:#e5e5e5;\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save:hover {\r\n    background: #0f68ee;\r\n    /* dark green stroke1 */\r\n    border: 1px solid #e5e5e5;\r\n    color: #e5e5e5;\r\n}\r\n\r\n\r\n\r\n.modal-header,\r\n.modal-footer {\r\n    background: var(--lightgray);\r\n}\r\n\r\n.modal-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal-header .modal-close {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.modal p + p {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.modal {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.45s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n    display:flex;\r\n    visibility: visible;\r\n    opacity: 1;\r\n    backdrop-filter: brightness(1.5);\r\n}\r\n\r\n.modal-footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n[data-aprove] {\r\n    color:rgb(211, 173, 19);\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"] .modal-dialog {\r\n    opacity: 0;\r\n    /* transform: scale(20%); */\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n    transition: all .350s ease-in;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"].is-visible .modal-dialog {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition-delay: 0.2s;\r\n    transform: scaleY(1);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/css/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/Flightbook.svg":
/*!******************************************!*\
  !*** ./src/assets/images/Flightbook.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/e109322a5d1d05d276c8.svg";

/***/ }),

/***/ "./src/assets/images/clouds_1920.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/clouds_1920.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/e2217daac308f645a44c.jpg";

/***/ }),

/***/ "./src/assets/userData.json":
/*!**********************************!*\
  !*** ./src/assets/userData.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"iata":"UTK","lon":"169.86667","iso":"MH","status":1,"name":"Utirik Airport","continent":"OC","type":"airport","lat":"11.233333","size":"small"},{"iata":"FIV","iso":"US","status":1,"name":"Five Finger CG Heliport","continent":"NA","type":"heliport","size":null},{"iata":"FAK","iso":"US","status":1,"name":"False Island Seaplane Base","continent":"NA","type":"seaplanes","size":null},{"iata":"BWS","iso":"US","status":0,"name":"Blaine Municipal Airport","continent":"NA","type":"closed","size":null},{"iata":"WKK","lon":"-158.61111","iso":"US","status":1,"name":"Aleknagik / New Airport","continent":"NA","type":"airport","lat":"59.27778","size":"medium"},{"iata":"TSS","iso":"US","status":1,"name":"East 34th Street Heliport","continent":"NA","type":"heliport","size":null},{"iata":"FOB","lon":"-123.79444","iso":"US","status":1,"name":"Fort Bragg Airport","continent":"NA","type":"airport","lat":"39.474445","size":"small"},{"iata":"ABP","lon":"141.1","iso":"PG","status":1,"name":"Atkamba Airport","continent":"OC","type":"airport","lat":"-6.066667","size":"small"},{"iata":"ALV","iso":"AD","status":1,"name":"Andorra la Vella Heliport","continent":"EU","type":"heliport","size":null},{"iata":"ADC","lon":"145.73334","iso":"PG","status":1,"name":"Andakombe Airport","continent":"OC","type":"airport","lat":"-7.133333","size":"small"},{"iata":"TJP","lon":"-66.563545","iso":"PR","status":1,"name":"Areopuerto Internacional Michael Gonzalez","continent":"NA","type":"airport","lat":"18.010702","size":"large"},{"iata":"AEE","iso":"SS","status":1,"name":"Adareil Airport","continent":"AF","type":"airport","size":"small"},{"iata":"AEI","iso":"ES","status":1,"name":"Algeciras Heliport","continent":"EU","type":"heliport","size":null},{"iata":"AEK","lon":"146.28334","iso":"PG","status":1,"name":"Aseki Airport","continent":"OC","type":"airport","lat":"-7.366667","size":"small"},{"iata":"OLR","lon":"36.130333","iso":"AF","status":1,"name":"Salerno Landing Zone Airport","continent":"AS","type":"airport","lat":"34.023167","size":"small"},{"iata":"AFR","lon":"148.38333","iso":"PG","status":1,"name":"Afore Airstrip","continent":"OC","type":"airport","lat":"-9.133333","size":"small"},{"iata":"AFT","lon":"160.85","iso":"SB","status":1,"name":"Afutara Aerodrome","continent":"OC","type":"airport","lat":"-9.2","size":"small"},{"iata":"ATD","lon":"161.03334","iso":"SB","status":1,"name":"Uru Harbour Airport","continent":"OC","type":"airport","lat":"-8.866667","size":"small"},{"iata":"VEV","lon":"159.55","iso":"SB","status":1,"name":"Barakoma Airport","continent":"OC","type":"airport","lat":"-7.85","size":"small"}]');

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _assets_userData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/userData.json */ "./src/assets/userData.json");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // fetch("http://api.openweathermap.org/data/2.5/weather?lat=51.11&lon=17.02&appid=e88cbba2770d843c73cbfc59c2d7a3b0")
//   .then(response => response.json())
//   // .then(data => console.log(data.main.temp - 273.15))
//   .then(data => {const div = document.createElement("div");
//     div.innerHTML = ` ${(data.name)}: ${(data.main.temp - 273.15 ).toFixed(1)} st C`;
//     const pogoda = document.getElementById("pogoda"); 
//     pogoda.appendChild(div);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// ===Modal===

var openEls = document.querySelectorAll("[data-open]");
var isVisible = "is-visible";
var userData = {
  "destination": ""
}; // conecting via dataset

var _iterator = _createForOfIteratorHelper(openEls),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var el = _step.value;
    el.addEventListener("click", function () {
      var modalId = this.dataset.open;
      document.getElementById(modalId).classList.toggle(isVisible);
    });
  } // Closing modal
  // Pressing btn close

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

var closeEls = document.querySelectorAll("[data-close]");
var aproveEls = document.querySelectorAll("[data-aprove]"); // const isVisible = "is-visible";

var _iterator2 = _createForOfIteratorHelper(closeEls),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var _el = _step2.value;

    _el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  } // Setting modal aproved

} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var aproveVal = false;

var _iterator3 = _createForOfIteratorHelper(aproveEls),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _el2 = _step3.value;

    _el2.addEventListener("click", function () {
      console.log("Aproved!!!");
      User.aproveVal = true;
      console.log(User);
      document.querySelector(".modal.is-visible").classList.remove(isVisible); // this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  } // Clicking outside modal
  // const isVisible = "is-visible";

} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}

document.addEventListener("click", function (e) {
  if ((e.target == document.querySelector(".main.content") || e.target == document.querySelector(".main") || e.target == document.querySelector(".row")) && document.querySelector(".modal.is-visible")) {
    // document.querySelector(".modal.is-visible").classList.remove(isVisible);
    document.querySelectorAll(".modal.is-visible").forEach(function (e) {
      return e.classList.remove(isVisible);
    });
    console.log("testtest");
  }
}, false); // const isVisible = "is-visible";
// pressing key up wsc

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
}); // Wybór celu podróży destination do wyniesienia do modułów

var selectDest = document.getElementById("select-dest");
var selectDepart = document.getElementById("select-depart");
var acceptDest = document.getElementById("set-dest");
var acceptDepart = document.getElementById("set-depart"); // const resultDest = document.getElementById("result-dest");
// const resultDest2 = document.getElementById("btn-label-dest");

var resultDestClass = document.getElementsByClassName("result-dest");
var resultDepartClass = document.getElementsByClassName("result-depart");

var Where = /*#__PURE__*/function () {
  function Where(dest) {
    _classCallCheck(this, Where);

    this.value = dest;
  }

  _createClass(Where, [{
    key: "Write",
    value: function Write() {
      console.log('z klasy komunikat');

      if (this.value == "warsaw") {
        this.value = "Warszawa";
      } else if (this.value == "london") {
        this.value = "Londyn";
      } else if (this.value == "wroclaw") {
        this.value = "Wrocław";
      } else if (this.value == "newyork") {
        this.value = "Nowy York";
      }

      return "".concat(this.value);
    }
  }]);

  return Where;
}();

acceptDest.addEventListener("click", function () {
  var tempDest = new Where(selectDest.value);
  console.log("Co jest w seleckie : ", tempDest.value);

  if (tempDest.value === "" || tempDest.value === undefined) {
    console.log("zakceptowano undefined: ", tempDest.value); // resultDest.textContent = tempDest.Write();
    // resultDest2.textContent = tempDest.Write();

    resultDestClass[0].textContent = "Wybierz coś";
    resultDestClass[1].textContent = "Wybierz coś";
  } else {
    console.log("nie ma undefined.. : ", tempDest.value); // resultDest.textContent = tempDest.Write();
    // resultDest2.textContent = tempDest.Write();

    resultDestClass[0].textContent = tempDest.Write();
    resultDestClass[1].textContent = tempDest.Write();
  }

  return zapiszData(tempDest.Write());
}, false);
acceptDepart.addEventListener("click", function () {
  var tempDest = new Where(selectDepart.value);
  console.log("Co jest w seleckie : ", tempDest.value);

  if (tempDest.value === "" || tempDest.value === undefined) {
    console.log("zakceptowano undefined: ", tempDest.value); // resultDest.textContent = tempDest.Write();
    // resultDest2.textContent = tempDest.Write();

    resultDepartClass[0].textContent = "Wybierz coś";
    resultDepartClass[1].textContent = "Wybierz coś";
  } else {
    console.log("nie ma undefined.. : ", tempDest.value); // resultDest.textContent = tempDest.Write();
    // resultDest2.textContent = tempDest.Write();

    resultDepartClass[0].textContent = tempDest.Write();
    resultDepartClass[1].textContent = tempDest.Write();
  }

  return zapiszData(tempDest.Write());
}, false);

var zapiszData = function zapiszData(data) {
  console.log("Zapisano do userData : ", userData.destination = data);
  console.log("Sprawdzenie odczyt: ", userData.destination);
};

console.log(_assets_userData_json__WEBPACK_IMPORTED_MODULE_1__); // userData.destination = tempDest.Write();
// Do prezentowania wyniku po dokonaniu wyboru w seleckcie
//const result = document.getElementById("show-dest");
// selectDest.addEventListener("change", () => {
//     console.log("na wydarzenia zmiany", selectDest.value);
//     const tempDest = new Where(selectDest.value);
//     result.textContent = tempDest.Write();
// },false);
//=================================================
// ================================================
})();

/******/ })()
;
//# sourceMappingURL=index.9489fd209cc8c5264e8a.bundle.js.map