/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/attributes.js":
/*!***********************************!*\
  !*** ./src/modules/attributes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentDateSet": () => (/* binding */ CurrentDateSet)
/* harmony export */ });
/* harmony import */ var _modules_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/func */ "./src/modules/func.js");

var departureDate = document.getElementById("select-depart-date");
var arrivalDate = document.getElementById("select-arrival-date");
function CurrentDateSet() {
  departureDate.setAttribute("min", _modules_func__WEBPACK_IMPORTED_MODULE_0__.calCurrentDate);
  arrivalDate.setAttribute("min", _modules_func__WEBPACK_IMPORTED_MODULE_0__.calCurrentDate);
}

/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherIconNavDef": () => (/* binding */ WeatherIconNavDef),
/* harmony export */   "DepartDestAccept": () => (/* binding */ DepartDestAccept),
/* harmony export */   "ArrivDepartDateAccept": () => (/* binding */ ArrivDepartDateAccept),
/* harmony export */   "PassengersNumber": () => (/* binding */ PassengersNumber),
/* harmony export */   "LoginButtonPress": () => (/* binding */ LoginButtonPress),
/* harmony export */   "BaggageNumber": () => (/* binding */ BaggageNumber),
/* harmony export */   "SetPlace": () => (/* binding */ SetPlace),
/* harmony export */   "PriceCalcCheck": () => (/* binding */ PriceCalcCheck),
/* harmony export */   "CurrencyChange": () => (/* binding */ CurrencyChange),
/* harmony export */   "MakeReservation": () => (/* binding */ MakeReservation)
/* harmony export */ });
/* harmony import */ var _modules_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/func */ "./src/modules/func.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var weatherIcon = document.getElementById("weatherIcon");
var weatherIcons = {
  "clear": "./assets/images/Sunny2.svg",
  "rain": "./assets/images/Rain.svg",
  "clouds": "./assets/images/SunCloud2.svg",
  "drizzle": "./assets/images/Clouds.svg",
  "extreme": "./assets/images/Windy.svg"
};
function WeatherIconNavDef() {
  weatherIcon.setAttribute("src", weatherIcons.clear);
}
var selectDest = document.getElementById("select-dest");
var acceptDest = document.getElementById("set-dest");
var resultDestClass = document.getElementsByClassName("result-dest");
var footerLinksDest = document.getElementsByClassName("footerLinksDest");
var acceptDepart = document.getElementById("set-depart");
var selectDepart = document.getElementById("select-depart");
var resultDepartClass = document.getElementsByClassName("result-depart");
var footerLinksDepart = document.querySelectorAll(".footerLinksDepart");
function DepartDestAccept() {
  acceptDest.addEventListener("click", function () {
    var tempDest = new _modules_func__WEBPACK_IMPORTED_MODULE_0__.Where(selectDest.value); // console.log("Co jest w seleckie : ", tempDest.value);

    if (tempDest.value === "" || tempDest.value === undefined) {
      resultDestClass[0].textContent = "Wybierz co??";
      resultDestClass[1].textContent = "Wybierz co??";
    } else {
      resultDestClass[0].textContent = tempDest.Write();
      resultDestClass[1].textContent = tempDest.Write();
    }

    (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.setLink)(tempDest.Write());

    _toConsumableArray(footerLinksDest).forEach(function (e) {
      return e.classList.add("show");
    });

    return (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.zapiszData)(tempDest.Write(), "destination");
  }, false);
  acceptDepart.addEventListener("click", function () {
    var tempDepart = new _modules_func__WEBPACK_IMPORTED_MODULE_0__.Where(selectDepart.value);

    if (tempDepart.value === "" || tempDepart.value === undefined) {
      resultDepartClass[0].textContent = "Wybierz co??";
      resultDepartClass[1].textContent = "Wybierz co??";
    } else {
      resultDepartClass[0].textContent = tempDepart.Write();
      resultDepartClass[1].textContent = tempDepart.Write();
    }

    (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.setLink)(tempDepart.Write());

    _toConsumableArray(footerLinksDepart).forEach(function (e) {
      return e.classList.add("show");
    });

    return (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.zapiszData)(tempDepart.Write(), "departure");
  }, false);
}
var acceptArrivalDateBtn = document.getElementById("set-arrival-date");
var infoArrivalDate = document.getElementById("info-arrival-date");
var resultArrivalDate = document.querySelectorAll(".result-arrival-date");
var resultTripLength = document.querySelectorAll(".result-trip-length");
var acceptDepartDateBtn = document.getElementById("set-depart-date");
var infoDepartDate = document.getElementById("info-departure-date");
var resultDepartDate = document.querySelectorAll(".result-depart-date");
var departureDate = document.getElementById("select-depart-date");
var arrivalDate = document.getElementById("select-arrival-date");
function ArrivDepartDateAccept() {
  acceptArrivalDateBtn.addEventListener("click", function () {
    if (arrivalDate.value == "") {
      infoArrivalDate.classList.add("showinfo");
    } else {
      _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate = arrivalDate.value;
      infoArrivalDate.classList.remove("showinfo");
      resultArrivalDate[0].textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate;
    }

    if (_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate != "" && _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate != "") {
      (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.tripLength)(_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate, _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate);
      resultTripLength[0].textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.length;
    }
  }, false);
  acceptDepartDateBtn.addEventListener("click", function () {
    if (departureDate.value == "") {
      infoDepartDate.classList.add("showinfo");
    } else {
      // console.log("Data Deparure accepted", departureDate.value);
      _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate = departureDate.value;
      infoDepartDate.classList.remove("showinfo");
      arrivalDate.setAttribute("min", departureDate.value); // ograniczenie powrotu o wylot

      resultDepartDate[0].textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate;
    }

    if (_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate != "" && _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate != "") {
      // console.log(" wybrano dwie daty");
      (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.tripLength)(_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate, _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.arrivaldate);
    }
  }, false);
}
var decPassNr = document.getElementById("decPassNr");
var passNum = document.getElementById("passNum");
var resultPassNum = document.querySelector(".result-pass-num");
var incPassNr = document.getElementById("incPassNr");
function PassengersNumber() {
  decPassNr.addEventListener("click", function () {
    passNum.value--;

    if (passNum.value < 1) {
      passNum.value = 1;
    }

    _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.passengers = passNum.value;
    resultPassNum.textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.passengers;
  }, false); // arrEmail

  incPassNr.addEventListener("click", function () {
    passNum.value++;
    _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.passengers = passNum.value;
    resultPassNum.textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.passengers;
  }, false);
}
var loginBtn = document.getElementById("login-btn");
function LoginButtonPress() {
  loginBtn.addEventListener("click", _modules_func__WEBPACK_IMPORTED_MODULE_0__.CheckPass);
}
var bigBagNum = document.getElementById("bigBagNum");
var resultBigBag = document.getElementById("result-big-bag");
var smallBagNum = document.getElementById("smallBagNum");
var resultSmallBag = document.getElementById("result-small-bag");
function BaggageNumber() {
  bigBagNum.addEventListener("change", function () {
    _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.baggage.big = bigBagNum.value;
    resultBigBag.textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.baggage.big;
  }, false);
  smallBagNum.addEventListener("change", function () {
    _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.baggage.small = smallBagNum.value;
    resultSmallBag.textContent = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.baggage.small;
  }, false);
}
var setPlace = document.getElementById("set-place");
var boing737 = document.getElementById("b737");
var boing787 = document.getElementById("b787");
var embraer = document.getElementById("embraer");
var planeImg = document.getElementById("showPlane");
function SetPlace() {
  setPlace.addEventListener("click", function () {
    boing737.classList.toggle("hide");
    boing787.classList.toggle("hide");
    embraer.classList.toggle('hide');
    planeImg.classList.toggle("hide");
  });
}
var btnPrice = document.getElementById("btnPrice");
function PriceCalcCheck() {
  btnPrice.addEventListener("click", function () {
    (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.ticketCalc)();
  }, false);
}
var btnCurr = document.querySelectorAll(".btn.curr");
function CurrencyChange() {
  btnCurr.forEach(function (e) {
    return e.addEventListener("click", function (e) {
      var target = e.target;

      switch (target.textContent) {
        case "???":
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.actual = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.euro;
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.sign = "???";
          break;

        case "$":
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.actual = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.dolar;
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.sign = "$";
          break;

        case "??":
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.actual = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.funt;
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.sign = "??";
          break;

        case "PLN":
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.actual = _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.pln;
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.sign = "PLN";
          break;

        default:
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.actual = 1;
          _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.currencies.sign = "PLN";
      }

      (0,_modules_func__WEBPACK_IMPORTED_MODULE_0__.ticketCalc)();
      console.log(_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData);
    }, false);
  });
}
var reservation = document.getElementById('reservation');
var textInfo = document.getElementById('text-info');
function MakeReservation() {
  reservation.addEventListener('click', function () {
    var ticetId = "";
    var resInfo = document.createElement('p');

    if (_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.reserved == "") {
      ticetId = "".concat((Math.random() * 1000000).toFixed()).concat(_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.loggedin).concat(_modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.departuredate);
      resInfo.textContent = "Zarezerwowano bilet #id ".concat(ticetId);
      textInfo.appendChild(resInfo);
      _modules_func__WEBPACK_IMPORTED_MODULE_0__.airportData.trip.reserved = ticetId;
    }
  });
}

/***/ }),

/***/ "./src/modules/func.js":
/*!*****************************!*\
  !*** ./src/modules/func.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "airportData": () => (/* binding */ airportData),
/* harmony export */   "currencies": () => (/* binding */ currencies),
/* harmony export */   "whichIcon": () => (/* binding */ whichIcon),
/* harmony export */   "calCurrentDate": () => (/* binding */ calCurrentDate),
/* harmony export */   "actWeatherDest": () => (/* binding */ actWeatherDest),
/* harmony export */   "Where": () => (/* binding */ Where),
/* harmony export */   "zapiszData": () => (/* binding */ zapiszData),
/* harmony export */   "tripLength": () => (/* binding */ tripLength),
/* harmony export */   "ticketCalc": () => (/* binding */ ticketCalc),
/* harmony export */   "setLink": () => (/* binding */ setLink),
/* harmony export */   "CheckPass": () => (/* binding */ CheckPass),
/* harmony export */   "chooseSeat": () => (/* binding */ chooseSeat)
/* harmony export */ });
/* harmony import */ var _assets_airportData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/airportData.json */ "./src/assets/airportData.json");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var airportData = _assets_airportData_json__WEBPACK_IMPORTED_MODULE_0__;
var currDolar = "";
var currEuro = "";
var currFunt = "";
function currencies() {
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json").then(function (resp) {
    return resp.json();
  }).then(function (data) {
    currDolar = data.rates[0].mid;
    airportData.currencies.dolar = currDolar;
  });
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json").then(function (resp) {
    return resp.json();
  }).then(function (data) {
    currEuro = data.rates[0].mid;
    airportData.currencies.euro = currEuro;
  });
  fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json").then(function (resp) {
    return resp.json();
  }).then(function (data) {
    currFunt = data.rates[0].mid;
    airportData.currencies.funt = currFunt;
  });
}
var weatherIcons = {
  "clear": "./assets/images/Sunny2.svg",
  "rain": "./assets/images/Rain.svg",
  "clouds": "./assets/images/SunCloud2.svg",
  "drizzle": "./assets/images/Clouds.svg",
  "extreme": "./assets/images/Windy.svg"
};
function whichIcon(weather, where) {
  switch (weather) {
    case "Clear":
      where.setAttribute("src", weatherIcons.clear);
      break;

    case "Clouds":
      where.setAttribute("src", weatherIcons.clouds);
      break;

    case "Rain":
      where.setAttribute("src", weatherIcons.rain);
      break;

    case "Drizzle":
      where.setAttribute("src", weatherIcons.drizzle);
      break;

    case "Extreme":
      where.setAttribute("src", weatherIcons.extreme);
      break;

    default:
      where.setAttribute("src", weatherIcons.clear);
  }
}
var day = 86400000;
var currentTime = new Date();
currentTime = currentTime.toLocaleTimeString();
var currentDate = new Date(); //1

var tommorow = new Date(currentDate.getTime() + day);
var calTomorrow = tommorow.toISOString().slice(0, 10);
var departureDate = document.getElementById("select-depart-date");
var calCurrentDate = currentDate.toISOString().slice(0, 10);
var actWeatherData = {};
var navWeatherStatus = document.getElementById('location-weather');
var weatherIcon = document.getElementById("weatherIcon");
function actWeatherDest(where) {
  fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(airportData.airport[where].lat, "&lon=").concat(airportData.airport[where]["long"], "&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl&units=metric")).then(function (response) {
    return response.json();
  }).then(function (data) {
    actWeatherData = data;
    airportData.airport[where].temp = +actWeatherData.main.temp.toFixed(1);
    airportData.airport[where].weatherDesc = actWeatherData.weather[0].description;
    airportData.airport[where].weather = actWeatherData.weather[0].main;
    airportData.airport[where].wind = +actWeatherData.wind.speed * 3.6;

    if (where == "wroclaw") {
      navWeatherStatus.textContent = "".concat(calCurrentDate, " | ").concat(currentTime, " | ").concat(actWeatherData.name, " | ").concat(actWeatherData.weather[0].description, " | ").concat(actWeatherData.main.temp.toFixed(1), " \u2103 | ").concat(actWeatherData.wind.speed, " km/h");
      whichIcon(airportData.airport[where].weather, weatherIcon);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
}
var Where = /*#__PURE__*/function () {
  function Where(dest) {
    _classCallCheck(this, Where);

    this.value = dest;
  }

  _createClass(Where, [{
    key: "Write",
    value: function Write() {
      if (this.value == "poznan") {
        this.value = "Pozna??";
      } else if (this.value == "london") {
        this.value = "Londyn";
      } else if (this.value == "wroclaw") {
        this.value = "Wroc??aw";
      } else if (this.value == "newyork") {
        this.value = "Nowy York";
      }

      return "".concat(this.value);
    }
  }]);

  return Where;
}();
var zapiszData = function zapiszData(data, where) {
  airportData[where] = data;
  departureDate.setAttribute("min", calTomorrow);
};
function tripLength(start, end) {
  var tripEnd = new Date(Date.parse(end));
  var tripStart = new Date(Date.parse(start));
  var tripLength = tripEnd.getDate() - tripStart.getDate();
  return airportData.trip.length = tripLength;
}
var resultPrice = document.querySelectorAll(".result-price");
var resultCurr = document.querySelectorAll(".result-curr");
function ticketCalc() {
  var tripPassengers = airportData.passengers;
  var tripDest = airportData.destination;
  var tripWays = airportData.trip.ways;
  var deppDate = airportData.trip.departuredate;
  var arrDate = airportData.trip.arrivaldate;
  var baggBigCount = airportData.trip.baggage.big;
  var baggSmallCount = airportData.trip.baggage.small;
  var pricePerPerson;

  if (tripDest == "") {
    console.log(" cel podr????y pusty ");
    tripWays = 0;
  } else if (tripDest != "") {
    switch (tripDest) {
      case "Londyn":
        pricePerPerson = airportData.airport.london.baseprice;
        break;

      case "Pozna??":
        pricePerPerson = airportData.airport.poznan.baseprice;
        break;

      case "Nowy York":
        pricePerPerson = airportData.airport.newyork.baseprice;
        break;

      default:
        pricePerPerson = 1;
    }

    if (arrDate == "" && deppDate == "") {
      tripWays = 0;
    } else if (arrDate == "" || deppDate == "") {
      tripWays = 1;
    } else if (arrDate != "" && deppDate != "") {
      tripWays = 2;
    }
  }

  var ticketPrice = +((tripPassengers * pricePerPerson * tripWays + +(pricePerPerson * tripWays * 0.1 * baggBigCount).toFixed(2) + +(pricePerPerson * tripWays * 0.07 * baggSmallCount).toFixed(2)) / airportData.currencies.actual).toFixed(2);
  airportData.trip.ticketprice = ticketPrice;
  resultPrice.forEach(function (e) {
    return e.textContent = airportData.trip.ticketprice;
  });
  resultCurr.forEach(function (e) {
    return e.textContent = airportData.currencies.sign;
  });
}
var linkDepartSite = document.getElementById("linkDepartSite");
var linkDepartInfo = document.getElementById("linkDepartInfo");
var linkDestSite = document.getElementById("linkDestSite");
var linkDestInfo = document.getElementById("linkDestInfo");
var resultAirplane = document.querySelectorAll(".result-airplane");
var planeImg = document.getElementById("showPlane");
var boing737 = document.getElementById("b737");
var embraer = document.getElementById("embraer");
var boing787 = document.getElementById("b787");
var resultWeatherDest = document.getElementById("result-weather-dest");
function setLink(data) {
  switch (data) {
    case "Wroc??aw":
      linkDepartSite.setAttribute("href", airportData.airport.wroclaw.homepage);
      linkDepartInfo.setAttribute("href", airportData.airport.wroclaw.infopage);
      break;

    case "Londyn":
      linkDestSite.setAttribute("href", airportData.airport.london.homepage);
      linkDestInfo.setAttribute("href", airportData.airport.london.infopage);
      resultAirplane.forEach(function (e) {
        return e.textContent = airportData.airplanes.big;
      });
      planeImg.setAttribute("src", airportData.airplanes[737]);
      boing737.classList.remove("hideStronger");
      embraer.classList.add("hideStronger");
      boing787.classList.add("hideStronger");
      resultWeatherDest.textContent = "Aktualna pogoda dla lotniska: ".concat(airportData.airport.london.name, " | temp:  ").concat(airportData.airport.london.temp, " \u2103 | ").concat(airportData.airport.london.weatherDesc, "   ").concat(airportData.airport.london.wind.toFixed(1), " km/h");
      whichIcon(airportData.airport.london.weather, weatherIcon2);
      break;

    case "Pozna??":
      linkDestSite.setAttribute("href", airportData.airport.poznan.homepage);
      linkDestInfo.setAttribute("href", airportData.airport.poznan.infopage);
      resultAirplane.forEach(function (e) {
        return e.textContent = airportData.airplanes.small;
      });
      planeImg.setAttribute("src", airportData.airplanes[175]);
      boing737.classList.add("hideStronger");
      embraer.classList.remove("hideStronger");
      boing787.classList.add("hideStronger");
      resultWeatherDest.textContent = "Aktualna pogoda dla lotniska: ".concat(airportData.airport.poznan.name, " | temp:  ").concat(airportData.airport.poznan.temp, " \u2103 | ").concat(airportData.airport.poznan.weatherDesc, "   ").concat(airportData.airport.poznan.wind.toFixed(1), " km/h");
      whichIcon(airportData.airport.poznan.weather, weatherIcon2);
      break;

    case "Nowy York":
      linkDestSite.setAttribute("href", airportData.airport.newyork.homepage);
      linkDestInfo.setAttribute("href", airportData.airport.newyork.infopage);
      resultAirplane.forEach(function (e) {
        return e.textContent = airportData.airplanes.biggest;
      });
      planeImg.setAttribute("src", airportData.airplanes[787]);
      boing737.classList.add("hideStronger");
      embraer.classList.add("hideStronger");
      boing787.classList.remove("hideStronger");
      resultWeatherDest.textContent = "Aktualna pogoda dla lotniska: ".concat(airportData.airport.newyork.name, " | temp:  ").concat(airportData.airport.newyork.temp, " \u2103 | ").concat(airportData.airport.newyork.weatherDesc, "   ").concat(airportData.airport.newyork.wind.toFixed(1), " km/h");
      whichIcon(airportData.airport.newyork.weather, weatherIcon2);
      break;

    default:
      resultAirplane[0].textContent = "Brak danych";
  }
}
var loginName = document.getElementById("login-name");
var loginInfoName = document.getElementById("info-login-name");
var loginEmail = document.getElementById("login-email");
var loginInfoEmail = document.getElementById("info-login-email");
var loginPass = document.getElementById("login-pass");
var loginInfoPass = document.getElementById("info-login-pass");
function CheckPass() {
  var arrName = airportData.users.map(function (e) {
    return e.name;
  });

  if (arrName.some(function (name) {
    return name == loginName.value;
  }) !== true) {
    loginInfoName.classList.add("showinfo");
  } else {
    loginInfoName.classList.remove("showinfo");

    if (airportData.users.find(function (user) {
      return user.name == loginName.value;
    }).email == loginEmail.value !== true) {
      loginInfoEmail.classList.add("showinfo");
    } else {
      loginInfoEmail.classList.remove("showinfo");

      if (airportData.users.find(function (user) {
        return user.name == loginName.value;
      }).password == loginPass.value !== true) {
        console.log("z??e has??o ", airportData.users.find(function (user) {
          return user.name == loginName.value;
        }));
        loginInfoPass.classList.add("showinfo");
      } else {
        loginInfoPass.classList.remove("showinfo");
        Login(loginName.value);
      }
    }
  }

  ticketCalc();
}
var resultLogin = document.querySelector(".result-login");
var avatar = document.querySelector(".avatar");
var loginModal = document.getElementById("modal5");
var loginModalBtn = document.getElementById("loginModalBtn");
var btnAirplane = document.getElementById("btnAirplane");
var baggageBtn = document.getElementById("btnBaggage");
var btnPlace = document.getElementById("btnPlace");
var btnPrice = document.getElementById("btnPrice");
var weatherIcon2 = document.getElementById("weatherIcon2");
var reservation = document.getElementById('reservation');
var isVisible = "is-visible";

function Login(name) {
  airportData.loggedin = name;
  resultLogin.textContent = airportData.loggedin;
  avatar.setAttribute("src", airportData.users.find(function (user) {
    return user.name == name;
  }).avatar);
  loginModal.classList.remove(isVisible);
  loginModalBtn.classList.add("hide");
  btnAirplane.classList.remove("hide");
  baggageBtn.classList.remove("hide");
  btnPlace.classList.remove("hide");
  btnPrice.classList.remove("hide");
  resultWeatherDest.classList.remove("hide");
  weatherIcon2.classList.remove("hide");
  reservation.classList.remove('hide');
}

var resultSeats = document.querySelector(".result-seats");
function chooseSeat() {
  var Seats = [];
  var svgImg = document.getElementsByTagName("g");

  var list = _toConsumableArray(svgImg);

  list = list.filter(function (e) {
    return e.hasAttribute("class");
  });
  list.forEach(function (e) {
    return e.addEventListener("click", function (e) {
      var parent = e.target.parentElement;
      var seat1 = e.target.parentElement.parentElement.classList;

      if (!parent.classList.contains("selected")) {
        parent.classList.toggle("selected");
        Seats.push(seat1.value);
      } else {
        Seats.splice(Seats.indexOf(seat1.value), 1);
        parent.classList.remove("selected");
      }

      if (Seats.length > airportData.passengers) {
        console.log("liczba zarez. miejsc <= passa", Seats.length);
        Seats.splice(Seats.indexOf(seat1.value), 1);
        parent.classList.remove("selected");
      }

      e.target.parentElement.parentElement.classList[0];
      airportData.trip.seatsreserved = Seats;
      var lista = Seats.join(", ");
      resultSeats.textContent = lista;
    }, false);
  });
}

/***/ }),

/***/ "./src/modules/modals.js":
/*!*******************************!*\
  !*** ./src/modules/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modals": () => (/* binding */ Modals)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Modals() {
  var openEls = document.querySelectorAll("[data-open]");
  var isVisible = "is-visible"; // conecting via dataset

  var _iterator = _createForOfIteratorHelper(openEls),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;
      el.addEventListener("click", function () {
        var modalId = this.dataset.open;
        document.getElementById(modalId).classList.toggle(isVisible);
      }, false);
    } // Closing modal
    // Pressing btn close

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var closeEls = document.querySelectorAll("[data-close]");

  var _iterator2 = _createForOfIteratorHelper(closeEls),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _el = _step2.value;

      _el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  document.addEventListener("click", function (e) {
    if ((e.target == document.querySelector(".main.content") || e.target == document.querySelector(".main") || e.target == document.querySelector(".row")) && document.querySelector(".modal.is-visible")) {
      // document.querySelector(".modal.is-visible").classList.remove(isVisible);
      document.querySelectorAll(".modal.is-visible").forEach(function (e) {
        return e.classList.remove(isVisible);
      });
    }
  }, false);
  document.addEventListener("keyup", function (e) {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });
}

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, "/*Inter font*/\n/*scss for index.js and so index.html */\n:root {\n  --marg1: 0px;\n  --marg2: 20px;\n  --main-color: rgba(4, 163, 255, 0.623); }\n\n/* Style reset */\n*,\n*::before,\n*::after {\n  margin: 0;\n  box-sizing: border-box;\n  padding: 0; }\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /*min-width: 320px;*/\n  /* background-size: cover;*/ }\n\n#colors g:hover {\n  fill: #0ee323; }\n\ng.selected {\n  fill: #1a9226; }\n\n.container {\n  width: calc(100% - 2 * var(--marg1));\n  height: calc(100% - 2 * var(--marg1));\n  background-color: var(--main-color);\n  margin: var(--marg1);\n  padding: 0;\n  min-width: 320px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr auto -webkit-min-content;\n  grid-template-rows: auto 1fr auto min-content;\n  margin-bottom: 0px;\n  min-width: 320px; }\n\n.navbar {\n  display: flex;\n  /* flex-wrap: nowrap; */\n  flex-direction: row;\n  justify-content: left;\n  min-width: 320px;\n  width: calc(100% - 2 * var(--marg2));\n  height: 74px;\n  background: #e5e5e5;\n  border-radius: 10px;\n  margin: var(--marg2);\n  grid-column: 1 / span 2;\n  grid-row: 1 / 2; }\n\n.logo {\n  display: flex; }\n  .logo img {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    width: 150px;\n    height: auto;\n    margin-left: 20px; }\n\n.menu {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  list-style: none;\n  margin-right: 12px;\n  margin-top: auto;\n  margin-bottom: auto; }\n  .menu li {\n    margin-left: 8px;\n    margin-right: 8px;\n    display: flex;\n    text-align: center; }\n\nli.avatar {\n  margin-left: 24px; }\n\nli.location-weather {\n  margin-left: 20px; }\n\n.location-time,\n.location-weather {\n  font-family: \"DejaVu Sans Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  align-items: center;\n  color: #2B518B; }\n\n.btn-login {\n  background: #7d92b3;\n  border-radius: 5px;\n  width: 64px;\n  height: 32px;\n  border: none;\n  color: #e5e5e5; }\n  .btn-login:hover {\n    background: #e5e5e5;\n    border-radius: 5px;\n    width: 64px;\n    height: 32px;\n    border: 1px #7d92b3 solid;\n    color: #7d92b3; }\n\n/*button for accepting and saving data*/\n#select-dest, #select-depart {\n  width: 184px;\n  height: 32px;\n  background: #FFFFFF;\n  border: 1px solid #2B518B;\n  box-sizing: border-box;\n  border-radius: 5px; }\n\n.main {\n  margin-left: 20px;\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  /* background-color: rgba(255, 255, 255, 0.2); */ }\n  .main.content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 18px;\n    max-width: 100%;\n    min-height: 200px;\n    background: rgba(229, 229, 229, 0.3);\n    border-radius: 10px;\n    margin: 0px 58px 40px 8px;\n    padding: 26px; }\n\n.aside {\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  font-size: 0.8em;\n  color: #2B518B;\n  background-color: rgba(255, 255, 255, 0.2);\n  margin-right: 20px;\n  grid-column: 2 / 3;\n  grid-row: 2 / 3; }\n\n.aside-content {\n  width: auto;\n  background-color: rgba(56, 220, 231, 0.1);\n  overflow: hidden; }\n  .aside-content .result-text-info {\n    display: flex;\n    flex-direction: column;\n    font-size: 16px; }\n\n.row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  justify-items: center;\n  flex-wrap: wrap;\n  -moz-column-gap: 18px;\n  column-gap: 18px; }\n\n.footer {\n  background-color: #12cf0b;\n  /* filter: opacity(0.5); */\n  width: calc(100% - 2 * var(--marg2));\n  height: 74px;\n  background: #e5e5e5;\n  border-radius: 10px;\n  margin: var(--marg2);\n  min-width: 320px;\n  grid-column: 1 / span 2; }\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  height: 50px;\n  background: #cedee7;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 8px;\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  align-items: center;\n  color: #2B518B; }\n  .btn .arrival {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 1 / 2;\n    grid-row: 1 / 2; }\n  .btn:hover {\n    border: 1px solid #2B518B; }\n  .btn.accept {\n    background: #7d92b3;\n    border: 1px solid #e5e5e5;\n    box-sizing: border-box;\n    border-radius: 5px;\n    color: #e5e5e5;\n    font-size: 1.4em; }\n  .btn.accept:hover {\n    background: #0f68ee;\n    border: 1px solid #e5e5e5;\n    box-sizing: border-box;\n    border-radius: 5px;\n    color: #e5e5e5;\n    font-size: 1.4em; }\n  .btn img {\n    width: 25px; }\n  .btn.passangers img {\n    width: 34px; }\n    .btn.passangers img:hover {\n      width: 40px; }\n\n.numPass {\n  width: 50px;\n  height: 28px;\n  background-color: #e5e5e5;\n  border: 1px solid #2B518B;\n  border-radius: 5px;\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #2B518B;\n  padding-left: 11px; }\n\n/* main content */\n.sign {\n  height: 50px; }\n  .sign img {\n    width: 75px; }\n  .main-content .sign {\n    display: flex;\n    flex-direction: row;\n    justify-content: center; }\n\n.footer {\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2B518B;\n  text-align: center; }\n\n/* wklejka*/\nu li {\n  display: block; }\n\n.menu li:last-child {\n  display: none; }\n\nli .avatar {\n  margin-left: 0; }\n\n.logo {\n  height: auto;\n  margin: 0; }\n  .logo img {\n    margin-top: 8px;\n    width: 100px; }\n\n.btn-login,\n.btn-login-apear {\n  display: none; }\n\n.location-time,\n.location-weather {\n  font-size: 0.8em;\n  margin: 0; }\n\n.row {\n  flex-direction: column;\n  width: 100%; }\n\n.main-content {\n  margin: 8px;\n  width: auto;\n  max-width: none;\n  padding: 18px; }\n\n.main {\n  margin-left: 0;\n  height: auto; }\n  .main.content {\n    margin: 0 8px 8px 8px; }\n\n.footer {\n  width: auto;\n  height: 60px;\n  margin: 8px;\n  font-size: 0.8em; }\n\n.template {\n  width: 85%;\n  height: auto;\n  background-color: #2B518B;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: 4px;\n  border: 1px solid #b5b4b4; }\n  .template.hide {\n    display: none; }\n\n#select-arrival-date, #select-depart-date {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  height: 32px;\n  background: #FFFFFF;\n  border: 1px solid #2B518B;\n  box-sizing: border-box;\n  border-radius: 5px;\n  text-align: center;\n  padding-bottom: 2px;\n  font-family: 'Inter', sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 1em;\n  font-weight: 500;\n  font-size: 16px;\n  color: #2B518B;\n  align-self: center; }\n  #select-arrival-date:focus-visible, #select-depart-date:focus-visible {\n    border: 2px solid #2B518B;\n    outline: 0 solid; }\n\n.det-wether-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.flex, .img-info, .silos {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n@media (max-width: 900px) {\n  body {\n    min-height: 100vh;\n    height: auto; }\n  .navbar {\n    width: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: auto;\n    margin: 8px;\n    height: auto; }\n  .menu {\n    margin: 0;\n    margin-bottom: 8px; }\n    .menu li {\n      display: block; }\n      .menu li:last-child {\n        display: none; }\n  .logo {\n    height: auto;\n    margin: 0; }\n    .logo img {\n      margin-top: 8px;\n      width: 100px; }\n  li .avatar {\n    margin-left: 0; }\n  .btn-login,\n  .btn-login-apear {\n    display: none; }\n  .location-time,\n  .location-weather {\n    font-size: 0.8em;\n    margin: 0; }\n  .row {\n    flex-direction: column;\n    width: 100%; }\n  .container {\n    height: auto;\n    min-height: 100vh;\n    grid-template-columns: 1fr;\n    grid-template-rows: 110px -webkit-min-content auto -webkit-min-content;\n    grid-template-rows: 110px min-content auto min-content;\n    margin-bottom: 0px;\n    min-width: 320px; }\n  .main-content {\n    margin: 8px;\n    width: auto;\n    max-width: none;\n    padding: 18px; }\n  .main {\n    margin-left: 0; }\n    .main.content {\n      margin: 8px; }\n  .aside {\n    height: auto;\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .btn {\n    width: 100%; }\n  .footer {\n    width: auto;\n    height: 60px;\n    margin: 8px;\n    font-size: 0.8em; } }\n\n@media (max-width: 600px) {\n  body {\n    height: auto; }\n  .navbar {\n    width: auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: auto;\n    margin: 8px;\n    grid-column: 1 / span 2;\n    grid-row: 1 / 2; }\n  .menu {\n    justify-content: space-evenly;\n    margin: 0;\n    margin-bottom: 8px; }\n    .menu li {\n      display: block; }\n      .menu li:last-child {\n        display: none; }\n  .logo {\n    height: auto;\n    margin: 0; }\n    .logo img {\n      margin-top: 8px;\n      width: 100px; }\n  li .avatar {\n    margin-left: 0; }\n  .btn-login,\n  .btn-login-apear {\n    display: none; }\n  .location-time,\n  .location-weather {\n    font-size: 0.8em;\n    margin: 0; }\n  .row {\n    row-gap: 18px;\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n  .container {\n    height: auto;\n    grid-template-columns: 1fr;\n    grid-template-rows: 110px auto auto auto;\n    margin-bottom: 0px;\n    min-width: 320px; }\n  .main-content {\n    margin: 8px;\n    width: auto;\n    height: auto;\n    max-width: none;\n    padding: 18px; }\n  .main {\n    margin-left: 0; }\n    .main.content {\n      margin: 8px; }\n  .aside {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .btn {\n    width: 100%; }\n  .footer {\n    width: auto;\n    height: 60px;\n    margin: 8px;\n    font-size: 0.8em; } }\n", "",{"version":3,"sources":["webpack://./src/css/index.scss"],"names":[],"mappings":"AAEA,aAAA;AA0BA,uCAAA;AACA;EACI,YAAQ;EACR,aAAQ;EACR,sCAAa,EAAA;;AAEjB,gBAAA;AACA;;;EAGI,SAAS;EACT,sBAAsB;EACtB,UAAU,EAAA;;AAGd;EACI,aAAa;EAxBb,uBAAuB;EACvB,mBAAmB;EAyBnB,aAAa;EACb,8DAA4D;EAC5D,4BAA4B;EAC5B,sBAAsB;EACtB,oBAAA;EACA,2BAAA,EAA4B;;AAGhC;EACI,aAAa,EAAA;;AAGjB;EACI,aACJ,EAAA;;AAGA;EACI,oCAAoC;EACpC,qCAAqC;EACrC,mCAAmC;EACnC,oBAAoB;EACpB,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,qDAAqD;EACrD,6CAA6C;EAC7C,kBAAkB;EAClB,gBAAgB,EAAA;;AAIpB;EACI,aAAa;EACb,uBAAA;EACA,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,oCAAoC;EACpC,YAAY;EACZ,mBA/EoB;EAgFpB,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,eAAe,EAAA;;AAInB;EAAQ,aAAa,EAAA;EAArB;IAEI,gDAA6C;IAC7C,4BAA4B;IAC5B,2BAA2B;IAC3B,YAAY;IACZ,YAAY;IACZ,iBAAiB,EAAA;;AAIrB;EACI,WAAW;EACX,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB,EAAA;EARvB;IAUI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,kBAAkB,EAAA;;AAItB;EAEI,iBAAiB,EAAA;;AAFrB;EAKI,iBAAiB,EAAA;;AAIrB;;EAEI,2CAA2C;EAC3C,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,cApImB,EAAA;;AAuIvB;EACI,mBArIgB;EAsIhB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,cA5IoB,EAAA;EAsIxB;IAQI,mBA9IoB;IA+IpB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAA6B;IAC7B,cAjJgB,EAAA;;AAqJpB,uCAAA;AAEA;EACI,YAAY;EACZ,YAAW;EACX,mBA3JgB;EA4JhB,yBA9JmB;EA+JnB,sBAAsB;EACtB,kBAAkB,EAAA;;AAItB;EACI,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,gDAAA,EAAiD;EAJrD;IAnJI,aAAa;IACb,sBAAsB;IAyJtB,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,iBAAiB;IACjB,oCAAmC;IACnC,mBAAmB;IACnB,yBAAyB;IACzB,aAAa,EAAA;;AAGjB;EA9KI,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EA6Kd,gBAAgB;EAChB,cAxLmB;EAyLnB,0CAA0C;EAC1C,kBAAkB;EAClB,kBAAkB;EAClB,eAAe,EAAA;;AAGnB;EACI,WAAW;EACX,yCAAyC;EACzC,gBAAgB,EAAA;EAHpB;IA9KI,aAAa;IACb,sBAAsB;IAmLtB,eAAe,EAAA;;AAInB;EACI,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,qBAAqB;EACrB,eAAe;EACf,qBAAqB;EAChB,gBAAgB,EAAA;;AAIzB;EACI,yBAAkC;EAClC,0BAAA;EACA,oCAAoC;EACpC,YAAY;EACZ,mBAxNoB;EAyNpB,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;EAChB,uBAAuB,EAAA;;AAG3B;EACI,aAAa;EApNb,uBAAuB;EACvB,mBAAmB;EAqNnB,SAAS;EACT,WAAW;EACX,YAAY;EACZ,mBAvOoB;EAwOpB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EAlOZ,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EAiOd,mBAAmB;EACnB,cA5OmB,EAAA;EAgOvB;IAcI,aAAa;IAjOb,uBAAuB;IACvB,mBAAmB;IAkOnB,kBAAkB;IAClB,eAAe,EAAA;EAjBnB;IAoBI,yBApPmB,EAAA;EAgOvB;IAuBI,mBApPgB;IAqPhB,yBAvPoB;IAwPpB,sBAAsB;IACtB,kBAAkB;IAClB,cA1PoB;IA2PpB,gBAAgB,EAAA;EA5BpB;IA+BI,mBAAmB;IACnB,yBA/PoB;IAgQpB,sBAAsB;IACtB,kBAAkB;IAClB,cAlQoB;IAmQpB,gBAAgB,EAAA;EApCpB;IAuCI,WAAW,EAAA;EAvCf;IA2CQ,WAAW,EAAA;IA3CnB;MA6CY,WAAW,EAAA;;AASvB;EACI,WAAW;EACX,YAAY;EACZ,yBAxRoB;EAyRpB,yBA1RmB;EA2RnB,kBAAkB;EApRlB,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EAmRd,aAAa;EAhRb,uBAAuB;EACvB,mBAAmB;EAiRnB,kBAAkB;EAClB,cAhSmB;EAiSnB,kBAAiB,EAAA;;AAGrB,iBAAA;AACA;EACI,YAAY,EAAA;EADhB;IAGI,WAAW,EAAA;EAEX;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB,EAAA;;AAzF/B;EA7MI,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EAySd,aAAa;EAtSb,uBAAuB;EACvB,mBAAmB;EAuSnB,cArTmB;EAsTnB,kBAAkB,EAAA;;AAGtB,WAAA;AAGI;EACI,cAAc,EAAA;;AAElB;EACI,aAAa,EAAA;;AALrB;EAQQ,cAAc,EAAA;;AA3OtB;EAiPI,YAAY;EACZ,SAAS,EAAA;EAlPb;IAoPI,eAAe;IACf,YAAY,EAAA;;AAIhB;;EAEI,aAAa,EAAA;;AAtNjB;;EA0NI,gBAAgB;EAChB,SAAS,EAAA;;AA/Ib;EAkJI,sBAAsB;EACtB,WAAW,EAAA;;AAGf;EACI,WAAW;EACX,WAAW;EACX,eAAe;EACf,aAAa,EAAA;;AA/LjB;EAoMI,cAAc;EACd,YAAW,EAAA;EArMf;IAuMI,qBAAqB,EAAA;;AAvJzB;EA6JI,WAAW;EACX,YAAY;EACZ,WAAW;EACX,gBAAgB,EAAA;;AAGpB;EACI,UAAU;EACV,YAAW;EACX,yBA1XmB;EA2XnB,yDAAyD;EACzD,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,WAAU;EACV,yBAAmC,EAAA;EATvC;IAWI,aAAa,EAAA;;AAIjB;EACI,0BAA0B;EAC1B,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,mBAzYgB;EA0YhB,yBA5YmB;EA6YnB,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAkB;EAzYlB,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EAwYd,gBAAe;EACf,eAAe;EACf,cApZmB;EAqZnB,kBAAkB,EAAA;EAClB;IACI,yBAvZe;IAwZf,gBAAiB,EAAA;;AAUzB;EAjZI,aAAa;EACb,sBAAsB;EALtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAwZvB;EArZI,aAAa;EACb,sBAAsB;EALtB,uBAAuB;EACvB,mBAAmB,EAAA;;AA+ZvB;EAzYA;IA2YQ,iBAAiB;IACjB,YAAW,EAAA;EAxWnB;IA2WQ,WAAW;IACX,sBAAsB;IAva1B,uBAAuB;IACvB,mBAAmB;IAwaf,gBAAgB;IAChB,WAAW;IACX,YAAY,EAAA;EArVpB;IAyVQ,SAAS;IACT,kBAAkB,EAAA;IA1V1B;MA4VQ,cAAc,EAAA;MAhIlB;QAkIQ,aAAa,EAAA;EAzWzB;IA+WQ,YAAY;IACZ,SAAS,EAAA;IAhXjB;MAkXQ,eAAe;MACf,YAAY,EAAA;EAhJpB;IAqJQ,cAAc,EAAA;EA/HtB;;IAmIQ,aAAa,EAAA;EAvVrB;;IA2VQ,gBAAgB;IAChB,SAAS,EAAA;EAhRjB;IAmRQ,sBAAsB;IACtB,WAAW,EAAA;EAranB;IAwaQ,YAAY;IACZ,iBAAiB;IACjB,0BAA0B;IAC1B,sEAAsE;IACtE,sDAAsD;IACtD,kBAAkB;IAClB,gBAAgB,EAAA;EAvIxB;IA6IQ,WAAW;IACX,WAAW;IACX,eAAe;IACf,aAAa,EAAA;EA3UrB;IA8UQ,cAAc,EAAA;IA9UtB;MAgVY,WAAW,EAAA;EA/TvB;IAmUQ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,iBAAiB,EAAA;EA5RzB;IA+RQ,WAAW,EAAA;EA3SnB;IA+SQ,WAAW;IACX,YAAY;IACZ,WAAW;IACX,gBAAgB,EAAA,EACnB;;AAGL;EAteA;IAweQ,YAAY,EAAA;EApcpB;IAwcQ,WAAW;IACX,sBAAsB;IApgB1B,uBAAuB;IACvB,mBAAmB;IAqgBf,gBAAe;IACf,WAAW;IACX,uBAAuB;IACvB,eAAe,EAAA;EAnbvB;IAsbQ,6BAA6B;IAC7B,SAAS;IACT,kBAAkB,EAAA;IAxb1B;MA0bQ,cAAc,EAAA;MA9NlB;QAgOQ,aAAa,EAAA;EAvczB;IA6cQ,YAAY;IACZ,SAAS,EAAA;IA9cjB;MAgdQ,eAAe;MACf,YAAY,EAAA;EA9OpB;IAmPQ,cAAc,EAAA;EA7NtB;;IAiOQ,aAAa,EAAA;EArbrB;;IAybQ,gBAAgB;IAChB,SAAS,EAAA;EA9WjB;IAiXQ,aAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW,EAAA;EArgBnB;IAwgBQ,YAAY;IACZ,0BAA0B;IAC1B,wCAAwC;IACxC,kBAAkB;IAClB,gBAAgB,EAAA;EArOxB;IA0OQ,WAAW;IACX,WAAW;IACX,YAAW;IACX,eAAe;IACf,aAAa,EAAA;EAzarB;IA6aQ,cAAc,EAAA;IA7atB;MA+aY,WAAW,EAAA;EA9ZvB;IAmaQ,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,iBAAiB,EAAA;EA3XzB;IA8XQ,WAAW,EAAA;EA1YnB;IA8YQ,WAAW;IACX,YAAY;IACZ,WAAW;IACX,gBAAgB,EAAA,EACnB","sourcesContent":["@import url(./modal.css);\r\n\r\n/*Inter font*/\r\n@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\r\n\r\n\r\n$btnbackground : #cedee7;\r\n$mainDarkBlue : #2B518B ;\r\n$mainLightColor: #e5e5e5;\r\n$whiteColor: #FFFFFF;\r\n$loginColor: #7d92b3;\r\n\r\n\r\n@mixin fontStyle {\r\n    font-family: 'Inter', sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n}\r\n@mixin justAlignCenter {\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n@mixin flexColumn {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*scss for index.js and so index.html */\r\n:root {\r\n    --marg1: 0px;\r\n    --marg2: 20px;\r\n    --main-color: rgba(4, 163, 255, 0.623);\r\n}\r\n/* Style reset */\r\n*,\r\n*::before,\r\n*::after {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    @include justAlignCenter;\r\n    height: 100vh;\r\n    background: url(../assets/images/clouds_1920.jpg) top center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /*min-width: 320px;*/\r\n    /* background-size: cover;*/\r\n}\r\n\r\n#colors g:hover{\r\n    fill: #0ee323;\r\n}\r\n\r\ng.selected {\r\n    fill: #1a9226\r\n}\r\n\r\n\r\n.container {\r\n    width: calc(100% - 2 * var(--marg1));\r\n    height: calc(100% - 2 * var(--marg1));\r\n    background-color: var(--main-color);\r\n    margin: var(--marg1);\r\n    padding: 0;\r\n    min-width: 320px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto 1fr auto -webkit-min-content;\r\n    grid-template-rows: auto 1fr auto min-content;\r\n    margin-bottom: 0px;\r\n    min-width: 320px;\r\n}\r\n\r\n\r\n.navbar {\r\n    display: flex;\r\n    /* flex-wrap: nowrap; */\r\n    flex-direction: row;\r\n    justify-content: left;\r\n    min-width: 320px;\r\n    width: calc(100% - 2 * var(--marg2));\r\n    height: 74px;\r\n    background: $mainLightColor;\r\n    border-radius: 10px;\r\n    margin: var(--marg2);\r\n    grid-column: 1 / span 2;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n.logo { display: flex; \r\n    img {\r\n    content: url(../assets/images/Flightbook.svg);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    width: 150px;\r\n    height: auto;\r\n    margin-left: 20px;\r\n    }\r\n}\r\n\r\n.menu {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    list-style: none;\r\n    margin-right: 12px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n    li {\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    display: flex;\r\n    text-align: center;\r\n    }\r\n}\r\n\r\nli {\r\n    &.avatar {\r\n    margin-left: 24px;\r\n    }\r\n    &.location-weather {\r\n    margin-left: 20px;\r\n    }\r\n}\r\n\r\n.location-time,\r\n.location-weather {\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 1em;\r\n    align-items: center;\r\n    color: $mainDarkBlue;\r\n}\r\n\r\n.btn-login {\r\n    background: $loginColor;\r\n    border-radius: 5px;\r\n    width: 64px;\r\n    height: 32px;\r\n    border: none;\r\n    color: $mainLightColor;\r\n    &:hover {\r\n    background: $mainLightColor;\r\n    border-radius: 5px;\r\n    width: 64px;\r\n    height: 32px;\r\n    border: 1px $loginColor solid;\r\n    color: $loginColor;\r\n    }\r\n}\r\n\r\n/*button for accepting and saving data*/\r\n\r\n#select-dest, #select-depart {\r\n    width: 184px;\r\n    height:32px;\r\n    background: $whiteColor;\r\n    border: 1px solid $mainDarkBlue;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n.main {\r\n    margin-left: 20px;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n    /* background-color: rgba(255, 255, 255, 0.2); */\r\n    &.content {\r\n    @include flexColumn;\r\n    align-items: center;\r\n    gap: 18px;\r\n    max-width: 100%;\r\n    min-height: 200px;\r\n    background: rgba(229, 229, 229,0.3);\r\n    border-radius: 10px;\r\n    margin: 0px 58px 40px 8px;\r\n    padding: 26px;\r\n    }\r\n}\r\n.aside {\r\n    @include fontStyle;\r\n    font-size: 0.8em;\r\n    color: $mainDarkBlue;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    margin-right: 20px;\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.aside-content {\r\n    width: auto;\r\n    background-color: rgba(56, 220, 231, 0.1);\r\n    overflow: hidden;\r\n    .result-text-info{\r\n    @include flexColumn;\r\n    font-size: 16px;\r\n    }\r\n}\r\n\r\n.row {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: auto auto;\r\n    justify-items: center;\r\n    flex-wrap: wrap;\r\n    -moz-column-gap: 18px;\r\n         column-gap: 18px;\r\n}\r\n\r\n\r\n.footer {\r\n    background-color: rgb(18, 207, 11);\r\n    /* filter: opacity(0.5); */\r\n    width: calc(100% - 2 * var(--marg2));\r\n    height: 74px;\r\n    background: $mainLightColor;\r\n    border-radius: 10px;\r\n    margin: var(--marg2);\r\n    min-width: 320px;\r\n    grid-column: 1 / span 2;\r\n}\r\n\r\n.btn {\r\n    display: flex;\r\n    @include justAlignCenter;\r\n    gap: 12px;\r\n    width: 100%;\r\n    height: 50px;\r\n    background: $btnbackground;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    @include fontStyle;\r\n    align-items: center;\r\n    color: $mainDarkBlue;\r\n    .arrival {\r\n    display: flex;\r\n    @include justAlignCenter;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n    }\r\n    &:hover {\r\n    border: 1px solid $mainDarkBlue;\r\n    }\r\n    &.accept {\r\n    background: $loginColor;\r\n    border: 1px solid $mainLightColor;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color: $mainLightColor;\r\n    font-size: 1.4em;\r\n}\r\n&.accept:hover {\r\n    background: #0f68ee;\r\n    border: 1px solid $mainLightColor;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color: $mainLightColor;\r\n    font-size: 1.4em;\r\n}\r\nimg {\r\n    width: 25px;\r\n}\r\n&.passangers {\r\n    img {\r\n        width: 34px;\r\n        &:hover {\r\n            width: 40px;\r\n        }\r\n    }\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n.numPass {\r\n    width: 50px;\r\n    height: 28px;\r\n    background-color: $mainLightColor;\r\n    border: 1px solid $mainDarkBlue;\r\n    border-radius: 5px;\r\n    @include fontStyle;\r\n    display: flex;\r\n    @include justAlignCenter;\r\n    text-align: center;\r\n    color: $mainDarkBlue;\r\n    padding-left:11px;\r\n}\r\n\r\n/* main content */\r\n.sign {\r\n    height: 50px;\r\n    img {\r\n    width: 75px;\r\n    }\r\n    .main-content & {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.footer {\r\n    @include fontStyle;\r\n    display: flex;\r\n    @include justAlignCenter;\r\n    color: $mainDarkBlue;\r\n    text-align: center;\r\n}\r\n\r\n/* wklejka*/\r\n\r\nli {\r\n    u & {\r\n        display: block;\r\n    }\r\n    .menu &:last-child {\r\n        display: none;\r\n    }\r\n    & .avatar {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n\r\n.logo {\r\n    height: auto;\r\n    margin: 0;\r\n    img {\r\n    margin-top: 8px;\r\n    width: 100px;\r\n    }\r\n}\r\n\r\n.btn-login,\r\n.btn-login-apear {\r\n    display: none;\r\n}\r\n.location-time,\r\n.location-weather {\r\n    font-size: 0.8em;\r\n    margin: 0;\r\n}\r\n.row {\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.main-content {\r\n    margin: 8px;\r\n    width: auto;\r\n    max-width: none;\r\n    padding: 18px;\r\n}\r\n\r\n\r\n.main {\r\n    margin-left: 0;\r\n    height:auto;\r\n    &.content {\r\n    margin: 0 8px 8px 8px;\r\n    }\r\n}\r\n\r\n\r\n.footer {\r\n    width: auto;\r\n    height: 60px;\r\n    margin: 8px;\r\n    font-size: 0.8em;\r\n}\r\n\r\n.template {\r\n    width: 85%;\r\n    height:auto;\r\n    background-color: $mainDarkBlue;\r\n    background-image: url(\"../assets/images/clouds_1920.jpg\");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    margin:4px;\r\n    border:1px solid rgb(181, 180, 180);\r\n    &.hide {\r\n    display: none;\r\n    }\r\n}\r\n\r\n%select-tool {\r\n    width: -webkit-min-content;\r\n    width: -moz-min-content;\r\n    width: min-content;\r\n    height: 32px;\r\n    background: $whiteColor;\r\n    border: 1px solid $mainDarkBlue;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    padding-bottom:2px;\r\n    @include fontStyle;\r\n    font-weight:500;\r\n    font-size: 16px;\r\n    color: $mainDarkBlue;\r\n    align-self: center;\r\n    &:focus-visible {\r\n        border: 2px solid $mainDarkBlue;\r\n        outline: 0 solid ;\r\n    }\r\n}\r\n\r\n#select-arrival-date, #select-depart-date {\r\n    @extend %select-tool;\r\n}\r\n\r\n\r\n\r\n.det-wether-icon{\r\n    @include flexColumn;\r\n    @include justAlignCenter;\r\n}\r\n.flex, .img-info , .silos {\r\n    @include flexColumn;\r\n    @include justAlignCenter;\r\n}\r\n\r\n\r\n\r\n@media  (max-width: 900px) {\r\n    body {\r\n        min-height: 100vh;\r\n        height:auto;\r\n    }\r\n    .navbar {\r\n        width: auto;\r\n        flex-direction: column;\r\n        @include justAlignCenter;\r\n        min-height: auto;\r\n        margin: 8px;\r\n        height: auto;\r\n    }\r\n    .menu {\r\n        \r\n        margin: 0;\r\n        margin-bottom: 8px;\r\n        li {\r\n        display: block;\r\n            &:last-child {\r\n            display: none;\r\n            }\r\n        }\r\n    }\r\n\r\n    .logo {\r\n        height: auto;\r\n        margin: 0;\r\n        img {\r\n        margin-top: 8px;\r\n        width: 100px;\r\n        }\r\n    }\r\n\r\n    li .avatar {\r\n        margin-left: 0;\r\n    }\r\n    .btn-login,\r\n    .btn-login-apear {\r\n        display: none;\r\n    }\r\n    .location-time,\r\n    .location-weather {\r\n        font-size: 0.8em;\r\n        margin: 0;\r\n    }\r\n    .row {\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        height: auto;\r\n        min-height: 100vh;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 110px -webkit-min-content auto -webkit-min-content;\r\n        grid-template-rows: 110px min-content auto min-content;\r\n        margin-bottom: 0px;\r\n        min-width: 320px;\r\n    }\r\n\r\n\r\n    \r\n    .main-content {\r\n        margin: 8px;\r\n        width: auto;\r\n        max-width: none;\r\n        padding: 18px;\r\n    }\r\n    .main {\r\n        margin-left: 0;\r\n        &.content {\r\n            margin: 8px;\r\n        }\r\n    }\r\n    .aside {\r\n        height: auto;\r\n        grid-column: 1 / 2;\r\n        grid-row: 3 / 4;\r\n        margin-left: 8px;\r\n        margin-right: 8px;\r\n    }\r\n    .btn {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer {\r\n        width: auto;\r\n        height: 60px;\r\n        margin: 8px;\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n\r\n@media  (max-width: 600px) {\r\n    body {\r\n        height: auto;\r\n    }\r\n\r\n    .navbar {\r\n        width: auto;\r\n        flex-direction: column;\r\n        @include justAlignCenter;\r\n        min-height:auto;\r\n        margin: 8px;\r\n        grid-column: 1 / span 2;\r\n        grid-row: 1 / 2;\r\n    }\r\n    .menu {\r\n        justify-content: space-evenly;\r\n        margin: 0;\r\n        margin-bottom: 8px;\r\n        li {\r\n        display: block;\r\n            &:last-child {\r\n            display: none;\r\n            }\r\n        }\r\n    }\r\n\r\n    .logo {\r\n        height: auto;\r\n        margin: 0;\r\n        img {\r\n        margin-top: 8px;\r\n        width: 100px;\r\n        }\r\n    }\r\n\r\n    li .avatar {\r\n        margin-left: 0;\r\n    }\r\n    .btn-login,\r\n    .btn-login-apear {\r\n        display: none;\r\n    }\r\n    .location-time,\r\n    .location-weather {\r\n        font-size: 0.8em;\r\n        margin: 0;\r\n    }\r\n    .row {\r\n        row-gap:18px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n    }\r\n    .container {\r\n        height: auto;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 110px auto auto auto;\r\n        margin-bottom: 0px;\r\n        min-width: 320px;\r\n    }\r\n\r\n    \r\n    .main-content {\r\n        margin: 8px;\r\n        width: auto;\r\n        height:auto;\r\n        max-width: none;\r\n        padding: 18px;\r\n    }\r\n\r\n    .main {\r\n        margin-left: 0;\r\n        &.content {\r\n            margin: 8px;\r\n        }\r\n    }\r\n    \r\n    .aside {\r\n        grid-column: 1 / 2;\r\n        grid-row: 3 / 4;\r\n        margin-left: 8px;\r\n        margin-right: 8px;\r\n    }\r\n    .btn {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer {\r\n        width: auto;\r\n        height: 60px;\r\n        margin: 8px;\r\n        font-size: 0.8em;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --lightgray: #94bdc7;\r\n    --blue: steelblue;\r\n    --white: #fff;\r\n    --dark: rgba(11, 40, 106, 0.8);\r\n    --hot: rgb(202, 76, 76);\r\n    --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: inherit;\r\n}\r\n\r\n\r\nbutton.close-modal {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--dark);\r\n    margin-right:12px;\r\n}\r\nbutton.close-modal:hover{\r\n    color: var(--hot);\r\n}\r\n\r\n.btn-group {\r\n    text-align: center;\r\n}\r\n\r\n.open-modal {\r\n    font-weight: bold;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n    padding: 0.75rem 1.75rem;\r\n    border-radius: 5px;\r\n    width:100%;\r\n}\r\n#modal1 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal2 {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal3 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal4{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal5{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal5 .modal-content {\r\n    flex-direction: column;\r\n}\r\n#modal5 .login {\r\n    margin:6px;\r\n    height:32px;\r\n    width: 80%;\r\n    background-color: #fff;\r\n    border: 1px solid #2b518b;\r\n    border-radius: 5px;\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 0.8em;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    justify-content: center;\r\n    color: #2b518b;\r\n    padding-left: 11px;\r\n    \r\n}\r\n#modal5 .login:focus-visible {\r\n    border: 2px solid #2B518B;\r\n    outline: 0 solid ;\r\n}\r\n\r\n#modal6{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n#modal7{\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.modal {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 0;\r\n    background: rgba(0, 54, 135, 0.5);\r\n    cursor: pointer;\r\n    visibility: hidden;\r\n    opacity: 0.5;\r\n    transition: all 0.35s ease-in;\r\n    border-radius: 5px;\r\n    overflow:auto;\r\n    width:100%;\r\n}\r\n\r\n.modal-header>p {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:600;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n    margin-left:12px;\r\n    color: #2b518b;\r\n}\r\n\r\n.modal-dialog {\r\n    border-radius: 5px;\r\n    background: var(--white);\r\n    overflow: auto;\r\n    cursor: default;\r\n    margin:12px;\r\n    width:90%;\r\n}\r\n\r\n.modal-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 22px 0;\r\n}\r\n\r\n\r\n.active {\r\n    display: block;\r\n}\r\n\r\n\r\n#select-dest, #select-depart {\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save {\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    width: 84px;\r\n    height:32px;\r\n    color: #20742D;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 15px;\r\n    background: #7d92b3;\r\n    border: 1px solid #7d92b3;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color:#e5e5e5;\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save:hover {\r\n    background: #0f68ee;\r\n    border: 1px solid #e5e5e5;\r\n    color: #e5e5e5;\r\n}\r\n\r\n\r\n\r\n.modal-header,\r\n.modal-footer {\r\n    background: var(--lightgray);\r\n}\r\n\r\n.modal-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal-header .modal-close {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.modal p + p {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.modal {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.45s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n    display:flex;\r\n    visibility: visible;\r\n    opacity: 1;\r\n    backdrop-filter: brightness(1.5);\r\n}\r\n\r\n.modal-footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n#linkDepartSite, #linkDepartInfo, #linkDestSite, #linkDestInfo   {\r\n    \r\n    padding: 4px;\r\n    text-decoration: none;\r\n}\r\n\r\n#linkDepartSite:hover,#linkDepartInfo:hover,#linkDestSite:hover,#linkDestInfo:hover{\r\n    color:rgb(214, 214, 214);\r\n}\r\n\r\n.footerLinksDest, .footerLinksDepart {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n#info-arrival-date,#info-departure-date {\r\n    text-align: center;\r\n    padding-bottom:20px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:400;\r\n    font-size: 16px;\r\n    color: #2b518b;\r\n    display: none;\r\n}\r\n\r\n.login-info{\r\n    text-align: center;\r\n    padding-bottom:8px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:400;\r\n    font-size: 16px;\r\n    color: #a62312;\r\n    display: none;\r\n}\r\n#info-arrival-date.showinfo, #info-departure-date.showinfo, #info-login-name.showinfo,#info-login-email.showinfo, #info-login-pass.showinfo {\r\n    display: block;\r\n}\r\n\r\n\r\n#loginModalBtn.hide {\r\n    display:none;\r\n    opacity: 1;\r\n}\r\n\r\n#btnAirplane {\r\n    display:flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n\r\n.btn.baggage{\r\n    display: flex;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n}\r\n.btn.place {\r\n    display: flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.btn.price{\r\n    display: flex;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n}\r\n.btn.reserved{\r\n    background: #3f924d;\r\n    border: 1px solid #86e595;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n    color: #fff;\r\n}\r\n.btn.reserved:hover{\r\n    border: 2px solid #10d531;\r\n    background: #20742D;\r\n    color: rgb(22, 235, 107);\r\n}\r\n\r\n.btn.reserved.hide {\r\n    display:none;\r\n}\r\n\r\n\r\n#btnAirplane.hide,\r\n.btn.baggage.hide,\r\n.btn.place.hide,\r\n#b737.hide,\r\n#b737.hideStronger,\r\n#b787.hide,\r\n#b787.hideStronger,\r\n.btn.price.hide,\r\n#result-weather-dest.hide,\r\n#weatherIcon2.hide,\r\n#embraer.hide,\r\n#embraer.hideStronger {\r\n    display:none;\r\n}\r\n\r\n\r\n#b737, #embraer, #b787 {\r\n    display:block;\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n    width:min-content;\r\n}\r\n\r\n.btn.curr {\r\n    width:50px;\r\n    height: 50px;\r\n    border: 3px solid  ;\r\n    border-radius: 50% 50%;\r\n    font-size: 20px;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.show {\r\n    visibility:visible; \r\n}\r\n\r\n.login {\r\n    margin: 12px;\r\n}\r\n\r\ndiv.svg{\r\n    overflow:auto;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n[data-aprove] {\r\n    color:rgb(211, 173, 19);\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"] .modal-dialog {\r\n    opacity: 0;\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n    transition: all .350s ease-in;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"].is-visible .modal-dialog {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition-delay: 0.2s;\r\n    transform: scaleY(1);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Literata\");\r\n@import url(\"https://fonts.googleapis.com/css?family=Tangerine\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&effect=neon\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap\");\r\n\r\n:root {\r\n    --lightgray: #94bdc7;\r\n    --blue: steelblue;\r\n    --white: #fff;\r\n    --dark: rgba(11, 40, 106, 0.8);\r\n    --hot: rgb(202, 76, 76);\r\n    --bounceEasing: cubic-bezier(0.51, 0.92, 0.24, 1.15);\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\r\n    outline: none;\r\n    font-size: inherit;\r\n}\r\n\r\n\r\nbutton.close-modal {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    color: var(--dark);\r\n    margin-right:12px;\r\n}\r\nbutton.close-modal:hover{\r\n    color: var(--hot);\r\n}\r\n\r\n.btn-group {\r\n    text-align: center;\r\n}\r\n\r\n.open-modal {\r\n    font-weight: bold;\r\n    background: var(--blue);\r\n    color: var(--white);\r\n    padding: 0.75rem 1.75rem;\r\n    border-radius: 5px;\r\n    width:100%;\r\n}\r\n#modal1 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal2 {\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal3 {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal4{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal5{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n#modal5 .modal-content {\r\n    flex-direction: column;\r\n}\r\n#modal5 .login {\r\n    margin:6px;\r\n    height:32px;\r\n    width: 80%;\r\n    background-color: #fff;\r\n    border: 1px solid #2b518b;\r\n    border-radius: 5px;\r\n    font-family: \"DejaVu Sans Mono\", sans-serif;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 0.8em;\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    justify-content: center;\r\n    color: #2b518b;\r\n    padding-left: 11px;\r\n    \r\n}\r\n#modal5 .login:focus-visible {\r\n    border: 2px solid #2B518B;\r\n    outline: 0 solid ;\r\n}\r\n\r\n#modal6{\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n#modal7{\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n\r\n.modal {\r\n    position: relative;\r\n    display: none;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 0;\r\n    background: rgba(0, 54, 135, 0.5);\r\n    cursor: pointer;\r\n    visibility: hidden;\r\n    opacity: 0.5;\r\n    transition: all 0.35s ease-in;\r\n    border-radius: 5px;\r\n    overflow:auto;\r\n    width:100%;\r\n}\r\n\r\n.modal-header>p {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:600;\r\n    font-size: 14px;\r\n    line-height: 15px;\r\n    margin-left:12px;\r\n    color: #2b518b;\r\n}\r\n\r\n.modal-dialog {\r\n    border-radius: 5px;\r\n    background: var(--white);\r\n    overflow: auto;\r\n    cursor: default;\r\n    margin:12px;\r\n    width:90%;\r\n}\r\n\r\n.modal-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 22px 0;\r\n}\r\n\r\n\r\n.active {\r\n    display: block;\r\n}\r\n\r\n\r\n#select-dest, #select-depart {\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save {\r\n    padding-left: 4px;\r\n    padding-right: 4px;\r\n    width: 84px;\r\n    height:32px;\r\n    color: #20742D;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 15px;\r\n    background: #7d92b3;\r\n    border: 1px solid #7d92b3;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n    color:#e5e5e5;\r\n    margin: 8px;\r\n}\r\n\r\n.btn-save:hover {\r\n    background: #0f68ee;\r\n    border: 1px solid #e5e5e5;\r\n    color: #e5e5e5;\r\n}\r\n\r\n\r\n\r\n.modal-header,\r\n.modal-footer {\r\n    background: var(--lightgray);\r\n}\r\n\r\n.modal-header {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n\r\n.modal-header .modal-close {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.modal p + p {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.modal {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: all 0.45s ease-in;\r\n}\r\n\r\n.modal.is-visible {\r\n    display:flex;\r\n    visibility: visible;\r\n    opacity: 1;\r\n    backdrop-filter: brightness(1.5);\r\n}\r\n\r\n.modal-footer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n#linkDepartSite, #linkDepartInfo, #linkDestSite, #linkDestInfo   {\r\n    \r\n    padding: 4px;\r\n    text-decoration: none;\r\n}\r\n\r\n#linkDepartSite:hover,#linkDepartInfo:hover,#linkDestSite:hover,#linkDestInfo:hover{\r\n    color:rgb(214, 214, 214);\r\n}\r\n\r\n.footerLinksDest, .footerLinksDepart {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n#info-arrival-date,#info-departure-date {\r\n    text-align: center;\r\n    padding-bottom:20px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:400;\r\n    font-size: 16px;\r\n    color: #2b518b;\r\n    display: none;\r\n}\r\n\r\n.login-info{\r\n    text-align: center;\r\n    padding-bottom:8px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight:400;\r\n    font-size: 16px;\r\n    color: #a62312;\r\n    display: none;\r\n}\r\n#info-arrival-date.showinfo, #info-departure-date.showinfo, #info-login-name.showinfo,#info-login-email.showinfo, #info-login-pass.showinfo {\r\n    display: block;\r\n}\r\n\r\n\r\n#loginModalBtn.hide {\r\n    display:none;\r\n    opacity: 1;\r\n}\r\n\r\n#btnAirplane {\r\n    display:flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n\r\n\r\n.btn.baggage{\r\n    display: flex;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n}\r\n.btn.place {\r\n    display: flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.btn.price{\r\n    display: flex;\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n}\r\n.btn.reserved{\r\n    background: #3f924d;\r\n    border: 1px solid #86e595;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 2;\r\n    color: #fff;\r\n}\r\n.btn.reserved:hover{\r\n    border: 2px solid #10d531;\r\n    background: #20742D;\r\n    color: rgb(22, 235, 107);\r\n}\r\n\r\n.btn.reserved.hide {\r\n    display:none;\r\n}\r\n\r\n\r\n#btnAirplane.hide,\r\n.btn.baggage.hide,\r\n.btn.place.hide,\r\n#b737.hide,\r\n#b737.hideStronger,\r\n#b787.hide,\r\n#b787.hideStronger,\r\n.btn.price.hide,\r\n#result-weather-dest.hide,\r\n#weatherIcon2.hide,\r\n#embraer.hide,\r\n#embraer.hideStronger {\r\n    display:none;\r\n}\r\n\r\n\r\n#b737, #embraer, #b787 {\r\n    display:block;\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n    width:min-content;\r\n}\r\n\r\n.btn.curr {\r\n    width:50px;\r\n    height: 50px;\r\n    border: 3px solid  ;\r\n    border-radius: 50% 50%;\r\n    font-size: 20px;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.show {\r\n    visibility:visible; \r\n}\r\n\r\n.login {\r\n    margin: 12px;\r\n}\r\n\r\ndiv.svg{\r\n    overflow:auto;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n[data-aprove] {\r\n    color:rgb(211, 173, 19);\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"] .modal-dialog {\r\n    opacity: 0;\r\n    transform: scaleY(0);\r\n    transform-origin: top center;\r\n    transition: all .350s ease-in;\r\n}\r\n\r\n[data-animation=\"slideInOutLeft\"].is-visible .modal-dialog {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition-delay: 0.2s;\r\n    transform: scaleY(1);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/airportData.json":
/*!*************************************!*\
  !*** ./src/assets/airportData.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"airport":{"wroclaw":{"name":"Port lotniczy Wroc??aw-Strachowice","lat":"51.109444","long":"16.880278","iata":"WRO","homepage":"https://airport.wroclaw.pl","infopage":"https://airportguide.com/airport/info/WRO","temp":15,"wind":0.5,"weatherDesc":"bezchmurnie","weather":"Clear"},"london":{"name":"Londyn Heathrow","lat":"51.4706","long":"-.461941","iata":"LHR","homepage":"https://www.heathrow.com","infopage":"https://airportguide.com/airport/info/LHR","temp":7,"wind":0.5,"weatherDesc":"bezchmurnie","weather":"Clear","baseprice":1063},"poznan":{"name":"Port Lotniczy Pozna??-??awica im. Henryka Wieniawskiego","lat":"52.421001","long":"16.8263","iata":"POZ","homepage":"http://www.airport-poznan.com.pl/","infopage":"https://airportguide.com/airport/info/POZ","temp":7,"wind":0.5,"weatherDesc":"bezchmurnie","weather":"Clear","baseprice":218},"newyork":{"name":"Port lotniczy Johna F. Kenned\'ego","lat":"40.6329","long":"-73.7714","iata":"JFK","homepage":"https://www.jfkairport.com","infopage":"https://airportguide.com/airport/info/JFK","temp":7,"wind":0.5,"weatherDesc":"bezchmurnie","weather":"Clear","baseprice":3053}},"trip":{"departuredate":"","arrivaldate":"","length":0,"ways":"","baggage":{"big":0,"small":0},"seatsreserved":[],"ticketprice":0,"reserved":""},"passengers":1,"users":[{"id":0,"name":"Karol","email":"karolawdziewicz@gmail.com","password":"bestcode","avatar":"./assets/images/avatarKarol.svg"},{"id":1,"name":"Piotrek","email":"peter@gmail.com","password":"simplecode","avatar":"./assets/images/AvatarPiotrek.svg"},{"id":2,"name":"Mulan","email":"donkey@gmail.com","password":"abrakadabra","avatar":"./assets/images/AvatarMulan.svg"}],"loggedin":"","airplanes":{"175":"./assets/images/LOT_Embraer175.jpg","737":"./assets/images/Boeing_737_800.jpg","787":"./assets/images/Boeing-787-8-rev2.jpg","small":"Embraer 175","big":"Boeing 737-800","biggest":"Boeing 787-10"},"destination":"","departure":"","currencies":{"euro":4.5,"dolar":4.1,"pln":1,"funt":5,"actual":1,"sign":"PLN"}}');

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
/* harmony import */ var _assets_airportData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/airportData.json */ "./src/assets/airportData.json");
/* harmony import */ var _modules_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/func */ "./src/modules/func.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modals */ "./src/modules/modals.js");
/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/events */ "./src/modules/events.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/attributes */ "./src/modules/attributes.js");






var airportData = _assets_airportData_json__WEBPACK_IMPORTED_MODULE_1__;
(0,_modules_func__WEBPACK_IMPORTED_MODULE_2__.currencies)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.WeatherIconNavDef)();
Object.keys(airportData.airport).forEach(function (e) {
  return (0,_modules_func__WEBPACK_IMPORTED_MODULE_2__.actWeatherDest)(e);
});
(0,_modules_modals__WEBPACK_IMPORTED_MODULE_3__.Modals)();
(0,_modules_attributes__WEBPACK_IMPORTED_MODULE_5__.CurrentDateSet)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.DepartDestAccept)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.ArrivDepartDateAccept)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.PassengersNumber)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.LoginButtonPress)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.BaggageNumber)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.SetPlace)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.PriceCalcCheck)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.CurrencyChange)();
(0,_modules_func__WEBPACK_IMPORTED_MODULE_2__.chooseSeat)();
(0,_modules_events__WEBPACK_IMPORTED_MODULE_4__.MakeReservation)();
})();

/******/ })()
;
//# sourceMappingURL=index.c5eb9e5a350041f15199.bundle.js.map