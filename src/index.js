import style from "./css/index.scss";
import baza from "./assets/airportData.json";

let day = 86400000;
let currentTime = new Date();

currentTime = currentTime.toLocaleTimeString();

let currentDate = new Date(); //1
let calCurrentDate = currentDate.toISOString().slice(0, 10);
console.log(currentDate.getDate(), "currentDate getDate ");
console.log(currentDate.toISOString().slice(0, 10), "currentDate odcięte pod kalendarz"); //2
console.log(Date(currentDate.getTime()), "get time"); //daje milisekundy od początku // 3 to są milis

let tommorow = new Date(currentDate.getTime() + day);
console.log(tommorow.getDay(), "tommorow getdate"); // który jutro
console.log(tommorow.getMonth(), "tommorow getdate"); // który jutro
console.log(tommorow.getFullYear(), "tommorow getdate"); // który jutro
let calTomorrow = tommorow.toISOString().slice(0, 10);
console.log(calTomorrow, "jutro obcięte pod kalendarz");

let inFiveDays = new Date(Date.parse("2022-05-12")); // za 5 dni z klendarza
// console.log(inFiveDays.toISOString().slice(0,10),"inFiveDays odciete"); // za 5 dni odciete
console.log(inFiveDays.getDate(), "inFiveDays "); // za 5 dni odciete jest 12
console.log(inFiveDays.getDate() - currentDate.getDate(), "różnica dni między przyszłoscia a dzisiaj "); // za 5 dni odciete jest 12

// let odczyt z arrivalDate i porównać z tommorow

// let dzis = Date.parse('2022-05-07');
// console.log(wczoraj, " wczoraj");
// console.log(dzis, "dzisiaj");
// console.log((dzis - wczoraj)/3600000," godziny");
// console.log(calDate);

// let parseDate = Date.parse(calDate);
// console.log((parseDate-(wczoraj-(3600000*24)))/(3600000*24), "dni");

// let tommorow = new Date(currentDate.getTime() + day);
// console.log(tommorow.toISOString().slice(0,10),"jutro obcięte");

// console.log(currentData.toLocaleDateString().split('.'));

let airportData = {
    "airport": {
        "wroclaw": {
            "name": "Port lotniczy Wrocław-Strachowice",
            "lat": "51.109444",
            "long": "16.880278",
            "iata": "WRO",
            "homepage": "https://airport.wroclaw.pl",
            "infopage": "https://airportguide.com/airport/info/WRO",
            "temp": 15,
            "wind": 0.5,
            "weatherDesc": "bezchmurnie",
            "weather": "Clear",
        },
        "london": {
            "name": "Londyn Heathrow",
            "lat": "51.4706",
            "long": "-.461941",
            "iata": "LHR",
            "homepage": "https://www.heathrow.com",
            "infopage": "https://airportguide.com/airport/info/LHR",
            "temp": 7,
            "wind": 0.5,
            "weatherDesc": "bezchmurnie",
            "weather": "Clear",
        },
        "poznan": {
            "name": "Port Lotniczy Poznań-Ławica im. Henryka Wieniawskiego",
            "lat": "52.421001",
            "long": "16.8263",
            "iata": "POZ",
            "homepage": "http://www.airport-poznan.com.pl/",
            "infopage": "https://airportguide.com/airport/info/POZ",
            "temp": 7,
            "wind": 0.5,
            "weatherDesc": "bezchmurnie",
            "weather": "Clear",
        },
        "newyork": {
            "name": "Port lotniczy Johna F. Kenned'ego",
            "lat": "40.6329",
            "long": "-73.7714",
            "iata": "JFK",
            "homepage": "https://www.jfkairport.com",
            "infopage": "https://airportguide.com/airport/info/JFK",
            "temp": 7,
            "wind": 0.5,
            "weatherDesc": "bezchmurnie",
            "weather": "Clear",
        },
    },
    "trip": {
        "departuredate": "",
        "arrivaldate": "",
        "length": 0,
        "ways": "",
        "baggage": {
            "big": 0,
            "small": 0,
        },
        "seatsreservd": []
    },
    "passengers": 1,
    "users": [
        {
            "id": 0,
            "name": "Karol",
            "email": "karolawdziewicz@gmail.com",
            "password": "bestcode",
            "avatar": "./assets/images/avatarKarol.svg",
        },
        {
            "id": 1,
            "name": "Piotrek",
            "email": "peter@gmail.com",
            "password": "simplecode",
            "avatar": "./assets/images/AvatarPiotrek.svg",
        },
        {
            "id": 2,
            "name": "Mulan",
            "email": "donkey@gmail.com",
            "password": "abrakadabra",
            "avatar": "./assets/images/AvatarMulan.svg",
        },
    ],
    "loggedin": "",
    "airplanes": {
        "small": "Embraer 175",
        "big": "Boeing 737-800",
        "biggest": "Boeing 787-10",
        "175": "https://www.lot.com/content/dam/lot/lot-com/other-images/flota/embraer-175/LOT_Embraer175_fot_Jacek_Bonczek_bluesky_1.coreimg.82.1200.jpg/1631525569254/LOT_Embraer175_fot_Jacek_Bonczek_bluesky_1.jpg",
        "737": "https://www.lot.com/content/dam/lot/lot-com/other-images/flota/boeing-737-800/Boeing_737_800_fot_Jacek_Bonczek.coreimg.82.1200.jpg/1630659561913/Boeing_737_800_fot_Jacek_Bonczek.jpg",
        "787": "https://www.lot.com/content/dam/lot/lot-com/other-images/flota/boeing-787/Boeing-787-8-rev2-Jacek-Bonczek.coreimg.82.1200.jpg/1643107593684/Boeing-787-8-rev2-Jacek-Bonczek.jpg",
    },
    "destination": "",
    "departure": "",
};

const ticketData = {};

const weatherIcons = {
    "clear": "./assets/images/Sunny2.svg",
    "rain": "./assets/images/Rain.svg",
    "clouds": "./assets/images/SunCloud2.svg",
    "drizzle": "./assets/images/Clouds.svg",
    "extreme": "./assets/images/Windy.svg",
};

//"clouds": "./assets/images/Clouds.svg",

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

let actWeatherData = {};

const navWeatherStatus = document.getElementById("location-weather");

// function actWeatherNav() {
//     fetch("http://api.openweathermap.org/data/2.5/weather?lat=51.109444&lon=16.880278&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl&units=metric")
//         .then((response) => response.json())
//         .then((data) => {
//             actWeatherData = data;
//             // console.log(actWeatherData);
//             navWeatherStatus.textContent = `${actWeatherData.name} | ${actWeatherData.weather[0].description} | ${(actWeatherData.main.temp).toFixed(1)} ℃ | ${(+actWeatherData.wind.speed * 3.6).toFixed(2)} km/h`;
//             airportData.airport.wroclaw.temp = +(actWeatherData.main.temp).toFixed(1);
//             airportData.airport.wroclaw.weatherDesc = actWeatherData.weather[0].description;
//             airportData.airport.wroclaw.weather = actWeatherData.weather[0].main;
//             airportData.airport.wroclaw.wind = (+actWeatherData.wind.speed * 3.6).toFixed(2);
//         })
//         .catch((err) => console.log(err));
// }

// actWeatherNav();

const weatherIcon = document.getElementById("weatherIcon");

// console.log(weatherIcon.getAttribute('src'));
weatherIcon.setAttribute("src", weatherIcons.clear);
// console.log(weatherIcon.getAttribute('src'));
// chwilę obiekt trzeba dopisać

// wczytania api pogodowego i przypisanie icon nav bar na odpowiednią pogodę

function actWeatherDest(where) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${airportData.airport[where].lat}&lon=${airportData.airport[where].long}&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl&units=metric`)
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
                switch (airportData.airport[where].weather) {
                    case "Clear":
                        weatherIcon.setAttribute("src", weatherIcons.clear);
                        break;
                    case "Clouds":
                        weatherIcon.setAttribute("src", weatherIcons.clouds);
                        break;
                    case "Rain":
                        weatherIcon.setAttribute("src", weatherIcons.rain);
                        break;
                    case "Drizzle":
                        weatherIcon.setAttribute("src", weatherIcons.drizzle);
                        break;
                    case "Extreme":
                        weatherIcon.setAttribute("src", weatherIcons.extreme);
                        break;
                    default:
                        weatherIcon.setAttribute("src", weatherIcons.clear);
                }
            }
        })
        .catch((err) => console.log(err));
}

Object.keys(airportData.airport).forEach((e) => actWeatherDest(e));

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
// const isVisible = "is-visible";

for (const el of closeEls) {
    el.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

// Setting modal aproved
// let aproveVal = false;
// for (const el of aproveEls) {
//     el.addEventListener("click", function () {
//         console.log("Aproved!!!");
//         User.aproveVal = true;
//         // console.log(User);
//         document.querySelector(".modal.is-visible").classList.remove(isVisible);
//         // this.parentElement.parentElement.parentElement.classList.remove(isVisible);
//     });
// }
// Clicking outside modal
// const isVisible = "is-visible";921

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

// Wybór celu podróży destination do wyniesienia do modułów

const selectDest = document.getElementById("select-dest");
const selectDepart = document.getElementById("select-depart");
const acceptDest = document.getElementById("set-dest");
const acceptDepart = document.getElementById("set-depart");
// const resultDest = document.getElementById("result-dest");
// const resultDest2 = document.getElementById("btn-label-dest");
const resultDestClass = document.getElementsByClassName("result-dest");
const resultDepartClass = document.getElementsByClassName("result-depart");
const linkDestSite = document.getElementById("linkDestSite");
const linkDestInfo = document.getElementById("linkDestInfo");
const linkDepartSite = document.getElementById("linkDepartSite");
const linkDepartInfo = document.getElementById("linkDepartInfo");
const footerLinksDest = document.getElementsByClassName("footerLinksDest");
// const footerLinksDepart = document.getElementsByClassName('footerLinksDepart');
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
const baggageBtn = document.getElementById("btnBaggage");
// baggage section
const bigBagNum = document.getElementById("bigBagNum");
const smallBagNum = document.getElementById("smallBagNum");
const resultBigBag = document.getElementById("result-big-bag");
const resultSmallBag = document.getElementById("result-small-bag");

// aside section
const planeImg = document.getElementById("showPlane");
const btnAirplane = document.getElementById("btnAirplane");
const btnPlace = document.getElementById("btnPlace");
const boing737 = document.getElementById('b737');
const resultSeats = document.querySelector('.result-seats');
const setPlace = document.getElementById('set-place');

// console.log(departureDate.value);

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
        console.log("Co jest w seleckie : ", tempDest.value);
        if (tempDest.value === "" || tempDest.value === undefined) {
            // console.log("zakceptowano undefined: ", tempDest.value);
            // resultDest.textContent = tempDest.Write();
            // resultDest2.textContent = tempDest.Write();
            resultDestClass[0].textContent = "Wybierz coś";
            resultDestClass[1].textContent = "Wybierz coś";
        } else {
            console.log("nie ma undefined.. : ", tempDest.value);
            // resultDest.textContent = tempDest.Write();
            // resultDest2.textContent = tempDest.Write();
            resultDestClass[0].textContent = tempDest.Write();
            resultDestClass[1].textContent = tempDest.Write();
        }
        console.log("Dane do setLink dest ", tempDest.Write());
        setLink(tempDest.Write());
        // console.log(footerLinksDest);
        [...footerLinksDest].forEach((e) => e.classList.add("show"));
        return zapiszData(tempDest.Write(), "destination");
    },
    false
);

acceptDepart.addEventListener(
    "click",
    function () {
        const tempDepart = new Where(selectDepart.value);
        console.log("Co jest w seleckie : ", tempDepart.value);
        if (tempDepart.value === "" || tempDepart.value === undefined) {
            // console.log("zakceptowano undefined: ", tempDepart.value);
            // resultDepart.textContent = tempDepart.Write();
            // resultDepart2.textContent = tempDepart.Write();
            resultDepartClass[0].textContent = "Wybierz coś";
            resultDepartClass[1].textContent = "Wybierz coś";
        } else {
            // console.log("nie ma undefined.. : ", tempDepart.value);
            // resultDepart.textContent = tempDepart.Write();
            // resultDepart2.textContent = tempDepart.Write();
            resultDepartClass[0].textContent = tempDepart.Write();
            resultDepartClass[1].textContent = tempDepart.Write();
        }
        console.log("Dane do setLink depart ", tempDepart.Write());
        setLink(tempDepart.Write());
        // console.log(footerLinksDepart);
        // footerLinks.forEach((e) => e.classList.toggle('show'));
        [...footerLinksDepart].forEach((e) => e.classList.add("show"));
        return zapiszData(tempDepart.Write(), "departure");
    },
    false
);

const zapiszData = (data, where) => {
    airportData[where] = data;

    console.log("Sprawdzenie odczyt: ", airportData.where, airportData);
    // console.log("co jest w select Dest:", selectDest.value);
    // console.log("co jest w selectDepart:", selectDepart.value);
    // console.log("airportData dest", airportData);
    departureDate.setAttribute("min", calTomorrow);
    // console.log(departureDate.value);
    // console.log(arrivalDate.value);
    console.log(airportData.destination);
};

function setLink(data) {
    // console.log("data z setLink:", data);
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
            boing737.classList.remove('hideStronger');
            break;
        case "Poznań":
            linkDestSite.setAttribute("href", airportData.airport.poznan.homepage);
            linkDestInfo.setAttribute("href", airportData.airport.poznan.infopage);
            resultAirplane.forEach((e) => (e.textContent = airportData.airplanes.small));
            planeImg.setAttribute("src", airportData.airplanes[175]);
            break;
        case "Nowy York":
            linkDestSite.setAttribute("href", airportData.airport.newyork.homepage);
            linkDestInfo.setAttribute("href", airportData.airport.newyork.infopage);
            resultAirplane.forEach((e) => (e.textContent = airportData.airplanes.biggest));
            planeImg.setAttribute("src", airportData.airplanes[787]);
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
            console.log("Data Arrival accepted", arrivalDate.value);
            airportData.trip.arrivaldate = arrivalDate.value;
            infoArrivalDate.classList.remove("showinfo");
            resultArrivalDate[0].textContent = airportData.trip.arrivaldate;
        }
        if (airportData.trip.arrivaldate != "" && airportData.trip.departuredate != "") {
            console.log(" wybrano dwie daty");

            tripLength(airportData.trip.departuredate, airportData.trip.arrivaldate);
            resultTripLength[0].textContent = airportData.trip.length;
            // airportData.trip.length = airportData.trip.departuredate - airportData.trip.arrivaldate
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
        // console.log("ujmij passengerow")
        passNum.value--;
        if (passNum.value < 1) {
            passNum.value = 1;
        }
        airportData.passengers = passNum.value;
        resultPassNum.textContent = airportData.passengers;
        // resultPassNum.textContent = passNum.value.toString();
        // console.log(passNum.value, airportData.passengers)
    },
    false
);
// arrEmail
incPassNr.addEventListener(
    "click",
    function () {
        // console.log("dodaj passengerow")
        passNum.value++;
        airportData.passengers = passNum.value;
        resultPassNum.textContent = airportData.passengers;
        // console.log(resultPassNum.textContent);
        // console.log(passNum.value , airportData.passengers)
    },
    false
);

loginBtn.addEventListener("click", CheckPass);

function CheckPass() {
    let arrName = airportData.users.map((e) => e.name);
    let arrEmail = airportData.users.map((e) => e.email);
    let arrPass = airportData.users.map((e) => e.password);

    // console.log(loginName.value)
    // console.log(loginEmail.value)
    // console.log(loginPass.value)
    // console.log(arrName.some(name => name == loginName.value));

    if (arrName.some((name) => name == loginName.value) !== true) {
        // console.log('nie ma cie w bazie ');
        loginInfoName.classList.add("showinfo");
    } else {
        loginInfoName.classList.remove("showinfo");

        if ((airportData.users.find((user) => user.name == loginName.value).email == loginEmail.value) !== true) {
            console.log("zły email ", airportData.users.find((user) => user.name == loginName.value).email);

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
                // funkcja szczegółów i awatara.
                Login(loginName.value);
            }
        }
    }
}


function Login(name) {
    console.log("funkcja login", airportData.loggedin);
    airportData.loggedin = name;
    resultLogin.textContent = airportData.loggedin;
    avatar.setAttribute("src", airportData.users.find((user) => user.name == name).avatar);
    // przejście do trybu rozszerzonego bagaże i samolot itp
    loginModal.classList.remove(isVisible);
    loginModalBtn.classList.add("hide");
    btnAirplane.classList.remove("hide");
    baggageBtn.classList.remove("hide");
    btnPlace.classList.remove("hide");
    
}

bigBagNum.addEventListener(
    "change",
    () => {
        airportData.trip.baggage.big = bigBagNum.value;
        resultBigBag.textContent = airportData.trip.baggage.big;
        console.log("bagaz duzy w bazie :", airportData.trip.baggage.big);
    },
    false
);
smallBagNum.addEventListener(
    "change",
    () => {
        airportData.trip.baggage.small = smallBagNum.value;
        resultSmallBag.textContent = airportData.trip.baggage.small;
        console.log("bagaz mały w bazie :", airportData.trip.baggage.small);
    },
    false
);

let Seats = [];
function chooseSeat() {
    
    const svgImg = document.getElementsByTagName("g");
    let list = [...svgImg];
    list = list.filter((e) => e.hasAttribute("class"));
    // console.log(list);
    list.forEach((e) =>
        e.addEventListener(
            "click",
            function (e) {
                let parent = e.target.parentElement
                let seat1 = e.target.parentElement.parentElement.classList;
                console.log(seat1.value);
                if (!parent.classList.contains('selected')) {
                    parent.classList.toggle('selected');
                    Seats.push(seat1.value);
                } else {
                    Seats.splice(Seats.indexOf(seat1.value),1);
                    parent.classList.remove('selected');
                }
                console.log(parent.classList.contains('selected'))
                // console.log(parent.classList);
                e.target.parentElement.parentElement.classList[0];
                console.log(Seats);
                airportData.trip.seatsreservd = Seats;
                let lista = Seats.join(', ');
                console.log(lista);
                resultSeats.textContent = lista;
            },
            false
        )
    );
}

setPlace.addEventListener('click', function () {
    boing737.classList.toggle('hide');
    planeImg.classList.toggle('hide');
})

chooseSeat()



console.log(Seats);

// const loginName = document.getElementById('login-name');
// const loginEmail = document.getElementById('login-email');
// const loginPass = document.getElementById('login-pass');

// airportData.passengers = passNum.value;
// console.log(passNum.value, " wartość w passnum")

// const resultDepartDate = document.querySelectorAll(".result-depart-date");
// const resultArrivalDate = document.querySelectorAll(".result-arrival-date");
// const resultTripLength = document.querySelectorAll(".result-trip-length");

// Validacja danych

// departureDate.addEventListener("change", () => {
//         console.log("na wydarzenia zmiany", departureDate.value);
//     },false);

// console.log(baza);

// console.log(baza);
// userData.destination = tempDest.Write();

// Do prezentowania wyniku po dokonaniu wyboru w seleckcie
//const result = document.getElementById("show-dest");
// selectDest.addEventListener("change", () => {
//     console.log("na wydarzenia zmiany", selectDest.value);
//     const tempDest = new Where(selectDest.value);
//     result.textContent = tempDest.Write();
// },false);

//=================================================
// ================================================
