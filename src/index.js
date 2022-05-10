import style from "./css/index.scss";
import baza from "./assets/airportData.json";
let airportData = baza;
let day = 86400000;
let currentTime = new Date();

currentTime = currentTime.toLocaleTimeString();

let currentDate = new Date(); //1
let calCurrentDate = currentDate.toISOString().slice(0, 10);
let tommorow = new Date(currentDate.getTime() + day);
let calTomorrow = tommorow.toISOString().slice(0, 10);
let inFiveDays = new Date(Date.parse("2022-05-12")); // za 5 dni z klendarza

// let airportData = {
//     "airport": {
//         "wroclaw": {
//             "name": "Port lotniczy Wrocław-Strachowice",
//             "lat": "51.109444",
//             "long": "16.880278",
//             "iata": "WRO",
//             "homepage": "https://airport.wroclaw.pl",
//             "infopage": "https://airportguide.com/airport/info/WRO",
//             "temp": 15,
//             "wind": 0.5,
//             "weatherDesc": "bezchmurnie",
//             "weather": "Clear",
//         },
//         "london": {
//             "name": "Londyn Heathrow",
//             "lat": "51.4706",
//             "long": "-.461941",
//             "iata": "LHR",
//             "homepage": "https://www.heathrow.com",
//             "infopage": "https://airportguide.com/airport/info/LHR",
//             "temp": 7,
//             "wind": 0.5,
//             "weatherDesc": "bezchmurnie",
//             "weather": "Clear",
//             "baseprice": 1063.0,
//         },
//         "poznan": {
//             "name": "Port Lotniczy Poznań-Ławica im. Henryka Wieniawskiego",
//             "lat": "52.421001",
//             "long": "16.8263",
//             "iata": "POZ",
//             "homepage": "http://www.airport-poznan.com.pl/",
//             "infopage": "https://airportguide.com/airport/info/POZ",
//             "temp": 7,
//             "wind": 0.5,
//             "weatherDesc": "bezchmurnie",
//             "weather": "Clear",
//             "baseprice": 218.0,
//         },
//         "newyork": {
//             "name": "Port lotniczy Johna F. Kenned'ego",
//             "lat": "40.6329",
//             "long": "-73.7714",
//             "iata": "JFK",
//             "homepage": "https://www.jfkairport.com",
//             "infopage": "https://airportguide.com/airport/info/JFK",
//             "temp": 7,
//             "wind": 0.5,
//             "weatherDesc": "bezchmurnie",
//             "weather": "Clear",
//             "baseprice": 3053.0,
//         },
//     },
//     "trip": {
//         "departuredate": "",
//         "arrivaldate": "",
//         "length": 0,
//         "ways": "",
//         "baggage": {
//             "big": 0,
//             "small": 0,
//         },
//         "seatsreserved": [],
//         "ticketprice": 0,
//         "reserved": "",
//     },
//     "passengers": 1,
//     "users": [
//         {
//             "id": 0,
//             "name": "Karol",
//             "email": "karolawdziewicz@gmail.com",
//             "password": "bestcode",
//             "avatar": "./assets/images/avatarKarol.svg",
//         },
//         {
//             "id": 1,
//             "name": "Piotrek",
//             "email": "peter@gmail.com",
//             "password": "simplecode",
//             "avatar": "./assets/images/AvatarPiotrek.svg",
//         },
//         {
//             "id": 2,
//             "name": "Mulan",
//             "email": "donkey@gmail.com",
//             "password": "abrakadabra",
//             "avatar": "./assets/images/AvatarMulan.svg",
//         },
//     ],
//     "loggedin": "",
//     "airplanes": {
//         "small": "Embraer 175",
//         "big": "Boeing 737-800",
//         "biggest": "Boeing 787-10",
//         "175": "./assets/images/LOT_Embraer175.jpg",
//         "737": "./assets/images/Boeing_737_800.jpg",
//         "787": "./assets/images/Boeing-787-8-rev2.jpg",
//     },
//     "destination": "",
//     "departure": "",
//     "currencies": {
//         "euro": 4.5,
//         "dolar": 4.1,
//         "pln": 1.0,
//         "funt": 5.0,
//         "actual": 1,
//         "sign": "PLN",
//     },
// };

const ticketData = {};

const weatherIcons = {
    "clear": "./assets/images/Sunny2.svg",
    "rain": "./assets/images/Rain.svg",
    "clouds": "./assets/images/SunCloud2.svg",
    "drizzle": "./assets/images/Clouds.svg",
    "extreme": "./assets/images/Windy.svg",
};

// currencies
let currDolar = "";
let currEuro = "";
let currFunt = "";

function currencies() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currDolar = data.rates[0].mid;
            // console.log(` Dolar po ${currDolar}`);
            airportData.currencies.dolar = currDolar;
            // btnResult.innerText = convert(Number(mojaKwota.value), Number(curExchange));
        });
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currEuro = data.rates[0].mid;
            // console.log(` Euro po ${currEuro}`);
            airportData.currencies.euro = currEuro;
            // btnResult.innerText = convert(Number(mojaKwota.value), Number(curExchange));
        });
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currFunt = data.rates[0].mid;
            // console.log(` Funt po ${currFunt}`);
            airportData.currencies.funt = currFunt;
            // btnResult.innerText = convert(Number(mojaKwota.value), Number(curExchange));
        });
}

currencies();

let actWeatherData = {};

const weatherIcon = document.getElementById("weatherIcon");
const weatherIcon2 = document.getElementById("weatherIcon2");

weatherIcon.setAttribute("src", weatherIcons.clear);

// wczytani api pogodowego i przypisanie icon navbar na odpowiednią pogodę

const navWeatherStatus = document.getElementById('location-weather');

function actWeatherDest(where) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${airportData.airport[where].lat}&lon=${airportData.airport[where].long}&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            actWeatherData = data;
            // console.log(actWeatherData);
            // console.log(Object.keys(airportData.airport));
            // console.log(where, airportData.airport[where].lat, airportData.airport[where].long);
            airportData.airport[where].temp = +actWeatherData.main.temp.toFixed(1);
            airportData.airport[where].weatherDesc = actWeatherData.weather[0].description;
            airportData.airport[where].weather = actWeatherData.weather[0].main;
            airportData.airport[where].wind = +actWeatherData.wind.speed * 3.6;
            // console.log(where, airportData.airport[where].lat, airportData.airport[where].long, airportData.airport[where].weather);
            if (where == "wroclaw") {
                navWeatherStatus.textContent = `${calCurrentDate} | ${currentTime} | ${actWeatherData.name} | ${actWeatherData.weather[0].description} | ${actWeatherData.main.temp.toFixed(1)} ℃ | ${
                    actWeatherData.wind.speed
                } km/h`;
                whichIcon(airportData.airport[where].weather, weatherIcon);
            }
        })
        .catch((err) => console.log(err));
}

function whichIcon(weather, where){
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

Object.keys(airportData.airport).forEach((e) => actWeatherDest(e));

console.log(airportData.airport);

// ===Modal===
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

// conecting via dataset
for (const el of openEls) {
    el.addEventListener("click", function () {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.toggle(isVisible);
    });
}

// Closing modal
// Pressing btn close
const closeEls = document.querySelectorAll("[data-close]");
const aproveEls = document.querySelectorAll("[data-aprove]");

for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener(
    "click",
    (e) => {
        if (
            (e.target == document.querySelector(".main.content") || e.target == document.querySelector(".main") || e.target == document.querySelector(".row")) &&
            document.querySelector(".modal.is-visible")
        ) {
            // document.querySelector(".modal.is-visible").classList.remove(isVisible);
            document.querySelectorAll(".modal.is-visible").forEach((e) => e.classList.remove(isVisible));
        }
    },
    false
);

// const isVisible = "is-visible";
// pressing key up wsc

document.addEventListener("keyup", (e) => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

// Destination selection
const selectDest = document.getElementById("select-dest");
const selectDepart = document.getElementById("select-depart");
const acceptDest = document.getElementById("set-dest");
const acceptDepart = document.getElementById("set-depart");
const resultDestClass = document.getElementsByClassName("result-dest");
const resultDepartClass = document.getElementsByClassName("result-depart");
const linkDestSite = document.getElementById("linkDestSite");
const linkDestInfo = document.getElementById("linkDestInfo");
const linkDepartSite = document.getElementById("linkDepartSite");
const linkDepartInfo = document.getElementById("linkDepartInfo");
const footerLinksDest = document.getElementsByClassName("footerLinksDest");
const footerLinksDepart = document.querySelectorAll(".footerLinksDepart");
// Date section
const departureDate = document.getElementById("select-depart-date");
const arrivalDate = document.getElementById("select-arrival-date");
const acceptDepartDateBtn = document.getElementById("set-depart-date");
const acceptArrivalDateBtn = document.getElementById("set-arrival-date");
const infoDepartDate = document.getElementById("info-departure-date");
const infoArrivalDate = document.getElementById("info-arrival-date");
const resultDepartDate = document.querySelectorAll(".result-depart-date");
const resultArrivalDate = document.querySelectorAll(".result-arrival-date");
const resultTripLength = document.querySelectorAll(".result-trip-length");
// passenger section
const passNum = document.getElementById("passNum");
const decPassNr = document.getElementById("decPassNr");
const incPassNr = document.getElementById("incPassNr");
const resultPassNum = document.querySelector(".result-pass-num");
//login
const loginName = document.getElementById("login-name");
const loginEmail = document.getElementById("login-email");
const loginPass = document.getElementById("login-pass");
const loginBtn = document.getElementById("login-btn");
const loginInfoName = document.getElementById("info-login-name");
const loginInfoEmail = document.getElementById("info-login-email");
const loginInfoPass = document.getElementById("info-login-pass");
const resultLogin = document.querySelector(".result-login");
const avatar = document.querySelector(".avatar");
//przjscie do widoku szczegółów
const loginModal = document.getElementById("modal5");
const loginModalBtn = document.getElementById("loginModalBtn");
const resultAirplane = document.querySelectorAll(".result-airplane");
// weather status update
const resultWeatherDest = document.getElementById("result-weather-dest");
// baggage section
const baggageBtn = document.getElementById("btnBaggage");
const bigBagNum = document.getElementById("bigBagNum");
const smallBagNum = document.getElementById("smallBagNum");
const resultBigBag = document.getElementById("result-big-bag");
const resultSmallBag = document.getElementById("result-small-bag");
// aside section
const planeImg = document.getElementById("showPlane");
const btnAirplane = document.getElementById("btnAirplane");
const btnPlace = document.getElementById("btnPlace");
const boing737 = document.getElementById("b737");
const boing787 = document.getElementById("b787");
const embraer = document.getElementById("embraer");
const resultSeats = document.querySelector(".result-seats");
const setPlace = document.getElementById("set-place");
// ticket calculation
const btnPrice = document.getElementById("btnPrice");
const btnCurr = document.querySelectorAll(".btn.curr");
//reservation
const reservation = document.getElementById('reservation');

departureDate.setAttribute("min", calCurrentDate);
arrivalDate.setAttribute("min", calCurrentDate);

class Where {
    constructor(dest) {
        this.value = dest;
    }
    Write() {
        if (this.value == "poznan") {
            this.value = "Poznań";
        } else if (this.value == "london") {
            this.value = "Londyn";
        } else if (this.value == "wroclaw") {
            this.value = "Wrocław";
        } else if (this.value == "newyork") {
            this.value = "Nowy York";
        }
        return `${this.value}`;
    }
}

acceptDest.addEventListener(
    "click",
    function () {
        const tempDest = new Where(selectDest.value);
        // console.log("Co jest w seleckie : ", tempDest.value);
        if (tempDest.value === "" || tempDest.value === undefined) {
            resultDestClass[0].textContent = "Wybierz coś";
            resultDestClass[1].textContent = "Wybierz coś";
        } else {
            resultDestClass[0].textContent = tempDest.Write();
            resultDestClass[1].textContent = tempDest.Write();
        }
        setLink(tempDest.Write());
        [...footerLinksDest].forEach((e) => e.classList.add("show"));
        return zapiszData(tempDest.Write(), "destination");
    },
    false
);

acceptDepart.addEventListener(
    "click",
    function () {
        const tempDepart = new Where(selectDepart.value);
        if (tempDepart.value === "" || tempDepart.value === undefined) {
            resultDepartClass[0].textContent = "Wybierz coś";
            resultDepartClass[1].textContent = "Wybierz coś";
        } else {
            resultDepartClass[0].textContent = tempDepart.Write();
            resultDepartClass[1].textContent = tempDepart.Write();
        }
        setLink(tempDepart.Write());
        [...footerLinksDepart].forEach((e) => e.classList.add("show"));
        return zapiszData(tempDepart.Write(), "departure");
    },
    false
);

const zapiszData = (data, where) => {
    airportData[where] = data;
    departureDate.setAttribute("min", calTomorrow);
};

function setLink(data) {
    switch (data) {
        case "Wrocław":
            linkDepartSite.setAttribute("href", airportData.airport.wroclaw.homepage);
            linkDepartInfo.setAttribute("href", airportData.airport.wroclaw.infopage);
            break;
        case "Londyn":
            linkDestSite.setAttribute("href", airportData.airport.london.homepage);
            linkDestInfo.setAttribute("href", airportData.airport.london.infopage);
            resultAirplane.forEach((e) => (e.textContent = airportData.airplanes.big));
            planeImg.setAttribute("src", airportData.airplanes[737]);
            boing737.classList.remove("hideStronger");
            embraer.classList.add("hideStronger");
            boing787.classList.add("hideStronger");
            resultWeatherDest.textContent = `Aktualna pogoda dla lotniska: ${airportData.airport.london.name} | temp:  ${airportData.airport.london.temp} ℃ | ${airportData.airport.london.weatherDesc}   ${(airportData.airport.london.wind).toFixed(1)} km/h`;
            whichIcon(airportData.airport.london.weather, weatherIcon2);
            break;
        case "Poznań":
            linkDestSite.setAttribute("href", airportData.airport.poznan.homepage);
            linkDestInfo.setAttribute("href", airportData.airport.poznan.infopage);
            resultAirplane.forEach((e) => (e.textContent = airportData.airplanes.small));
            planeImg.setAttribute("src", airportData.airplanes[175]);
            boing737.classList.add("hideStronger");
            embraer.classList.remove("hideStronger");
            boing787.classList.add("hideStronger");
            resultWeatherDest.textContent = `Aktualna pogoda dla lotniska: ${airportData.airport.poznan.name} | temp:  ${airportData.airport.poznan.temp} ℃ | ${airportData.airport.poznan.weatherDesc}   ${(airportData.airport.poznan.wind).toFixed(1)} km/h`;
            whichIcon(airportData.airport.poznan.weather, weatherIcon2);
            break;
        case "Nowy York":
            linkDestSite.setAttribute("href", airportData.airport.newyork.homepage);
            linkDestInfo.setAttribute("href", airportData.airport.newyork.infopage);
            resultAirplane.forEach((e) => (e.textContent = airportData.airplanes.biggest));
            planeImg.setAttribute("src", airportData.airplanes[787]);
            boing737.classList.add("hideStronger");
            embraer.classList.add("hideStronger");
            boing787.classList.remove("hideStronger");
            resultWeatherDest.textContent = `Aktualna pogoda dla lotniska: ${airportData.airport.newyork.name} | temp:  ${airportData.airport.newyork.temp} ℃ | ${airportData.airport.newyork.weatherDesc}   ${(airportData.airport.newyork.wind).toFixed(1)} km/h`;
            whichIcon(airportData.airport.newyork.weather, weatherIcon2);
            break;
        default:
            resultAirplane[0].textContent = "Brak danych";
    }
}

acceptArrivalDateBtn.addEventListener(
    "click",
    function () {
        if (arrivalDate.value == "") {
            infoArrivalDate.classList.add("showinfo");
        } else {
            airportData.trip.arrivaldate = arrivalDate.value;
            infoArrivalDate.classList.remove("showinfo");
            resultArrivalDate[0].textContent = airportData.trip.arrivaldate;
        }
        if (airportData.trip.arrivaldate != "" && airportData.trip.departuredate != "") {

            tripLength(airportData.trip.departuredate, airportData.trip.arrivaldate);
            resultTripLength[0].textContent = airportData.trip.length;
        }
    },
    false
);

acceptDepartDateBtn.addEventListener(
    "click",
    function () {
        if (departureDate.value == "") {
            infoDepartDate.classList.add("showinfo");
        } else {
            console.log("Data Deparure accepted", departureDate.value);
            airportData.trip.departuredate = departureDate.value;
            infoDepartDate.classList.remove("showinfo");
            arrivalDate.setAttribute("min", departureDate.value); // ograniczenie powrotu o wylot
            resultDepartDate[0].textContent = airportData.trip.departuredate;
        }
        if (airportData.trip.arrivaldate != "" && airportData.trip.departuredate != "") {
            console.log(" wybrano dwie daty");
            tripLength(airportData.trip.departuredate, airportData.trip.arrivaldate);
        }
    },
    false
);

function tripLength(start, end) {
    let tripEnd = new Date(Date.parse(end));
    let tripStart = new Date(Date.parse(start));
    let tripLength = tripEnd.getDate() - tripStart.getDate();
    console.log(tripLength, "zapisuje do bazy długość podróży");
    return (airportData.trip.length = tripLength);
}

decPassNr.addEventListener(
    "click",
    function () {
        passNum.value--;
        if (passNum.value < 1) {
            passNum.value = 1;
        }
        airportData.passengers = passNum.value;
        resultPassNum.textContent = airportData.passengers;
    },
    false
);
// arrEmail
incPassNr.addEventListener(
    "click",
    function () {
        passNum.value++;
        airportData.passengers = passNum.value;
        resultPassNum.textContent = airportData.passengers;
    },
    false
);

loginBtn.addEventListener("click", CheckPass);

function CheckPass() {
    let arrName = airportData.users.map((e) => e.name);
    if (arrName.some((name) => name == loginName.value) !== true) {
        // console.log('nie ma cie w bazie ');
        loginInfoName.classList.add("showinfo");
    } else {
        loginInfoName.classList.remove("showinfo");
        if ((airportData.users.find((user) => user.name == loginName.value).email == loginEmail.value) !== true) {
            // console.log("zły email ", airportData.users.find((user) => user.name == loginName.value).email);
            loginInfoEmail.classList.add("showinfo");
        } else {
            loginInfoEmail.classList.remove("showinfo");
            if ((airportData.users.find((user) => user.name == loginName.value).password == loginPass.value) !== true) {
                console.log(
                    "złe hasło ",
                    airportData.users.find((user) => user.name == loginName.value)
                );
                loginInfoPass.classList.add("showinfo");
            } else {
                loginInfoPass.classList.remove("showinfo");
                console.log("logged in... as ", loginName.value);
                Login(loginName.value);
            }
        }
    }
    ticketCalc();
}

function Login(name) {
    airportData.loggedin = name;
    resultLogin.textContent = airportData.loggedin;
    avatar.setAttribute("src", airportData.users.find((user) => user.name == name).avatar);
    // przejście do trybu rozszerzonego bagaże i samolot itp
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

bigBagNum.addEventListener(
    "change",
    () => {
        airportData.trip.baggage.big = bigBagNum.value;
        resultBigBag.textContent = airportData.trip.baggage.big;
    },
    false
);

smallBagNum.addEventListener(
    "change",
    () => {
        airportData.trip.baggage.small = smallBagNum.value;
        resultSmallBag.textContent = airportData.trip.baggage.small;
    },
    false
);

let Seats = [];
function chooseSeat() {
    const svgImg = document.getElementsByTagName("g");
    let list = [...svgImg];
    list = list.filter((e) => e.hasAttribute("class"));
    list.forEach((e) =>
        e.addEventListener(
            "click",
            function (e) {
                let parent = e.target.parentElement;
                let seat1 = e.target.parentElement.parentElement.classList;
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
                let lista = Seats.join(", ");
                resultSeats.textContent = lista;
            },
            false
        )
    );
}

setPlace.addEventListener("click", function () {
    boing737.classList.toggle("hide");
    boing787.classList.toggle("hide");
    embraer.classList.toggle('hide');
 

    planeImg.classList.toggle("hide");
});

// ticket calculation

const resultPrice = document.querySelectorAll(".result-price");
const resultCurr = document.querySelectorAll(".result-curr");

function ticketCalc() {
    let tripLength = airportData.trip.length;
    let tripPassengers = airportData.passengers;
    let tripDest = airportData.destination;
    let tripWays = airportData.trip.ways;
    let deppDate = airportData.trip.departuredate; 
    let arrDate = airportData.trip.arrivaldate; 
    let baggBigCount = airportData.trip.baggage.big;
    let baggSmallCount = airportData.trip.baggage.small;
    let pricePerPerson;

    if (tripDest == "") {
        console.log(" cel podróży pusty ");
        tripWays = 0;
    } else if (tripDest != "") {
        switch (tripDest) {
            case "Londyn":
                pricePerPerson = airportData.airport.london.baseprice;
                break;
            case "Poznań":
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

    let ticketPrice = +(
        (tripPassengers * pricePerPerson * tripWays + +(pricePerPerson * tripWays * 0.1 * baggBigCount).toFixed(2) + +(pricePerPerson * tripWays * 0.07 * baggSmallCount).toFixed(2)) /
        airportData.currencies.actual
    ).toFixed(2);
    airportData.trip.ticketprice = ticketPrice;
    resultPrice.forEach((e) => (e.textContent = airportData.trip.ticketprice));
    resultCurr.forEach((e) => (e.textContent = airportData.currencies.sign));

    console.log(ticketPrice);
}

btnPrice.addEventListener(
    "click",
    function () {
        ticketCalc();
    },
    false
);

btnCurr.forEach((e) =>
    e.addEventListener(
        "click",
        function (e) {
            let target = e.target;
            switch (target.textContent) {
                case "€":
                    airportData.currencies.actual = airportData.currencies.euro;
                    airportData.currencies.sign = "€";
                    break;
                case "$":
                    airportData.currencies.actual = airportData.currencies.dolar;
                    airportData.currencies.sign = "$";
                    break;
                case "£":
                    airportData.currencies.actual = airportData.currencies.funt;
                    airportData.currencies.sign = "£";
                    break;
                case "PLN":
                    airportData.currencies.actual = airportData.currencies.pln;
                    airportData.currencies.sign = "PLN";
                    break;
                default:
                    airportData.currencies.actual = 1;
                    airportData.currencies.sign = "PLN";
            }
            ticketCalc();
        },
        false
    )
);
chooseSeat();

// reservation
const textInfo = document.getElementById('text-info');

reservation.addEventListener('click', function () {
    let ticetId = "";
    const resInfo = document.createElement('p');
    if ( airportData.trip.reserved == "") {
        ticetId = `${(Math.random()*1000000).toFixed()}${airportData.loggedin}${airportData.trip.departuredate}`;
        resInfo.textContent = `Zarezerwowano bilet #id ${ticetId}`;
        textInfo.appendChild(resInfo);
        airportData.trip.reserved = ticetId;
    }
})
