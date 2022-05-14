import baza from "../assets/airportData.json";

export let airportData = baza;
let currDolar = "";
let currEuro = "";
let currFunt = "";

export function currencies() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currDolar = data.rates[0].mid;
            airportData.currencies.dolar = currDolar;
        });
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currEuro = data.rates[0].mid;
            airportData.currencies.euro = currEuro;
        });
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json")
        .then((resp) => resp.json())
        .then((data) => {
            currFunt = data.rates[0].mid;
            airportData.currencies.funt = currFunt;
        });
}

const weatherIcons = {
    "clear": "./assets/images/Sunny2.svg",
    "rain": "./assets/images/Rain.svg",
    "clouds": "./assets/images/SunCloud2.svg",
    "drizzle": "./assets/images/Clouds.svg",
    "extreme": "./assets/images/Windy.svg",
};

export function whichIcon(weather, where){
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

let day = 86400000;
let currentTime = new Date();
currentTime = currentTime.toLocaleTimeString();
let currentDate = new Date(); //1
let tommorow = new Date(currentDate.getTime() + day);
let calTomorrow = tommorow.toISOString().slice(0, 10);
const departureDate = document.getElementById("select-depart-date");


export let calCurrentDate = currentDate.toISOString().slice(0, 10);
let actWeatherData = {};
const navWeatherStatus = document.getElementById('location-weather');
const weatherIcon = document.getElementById("weatherIcon");
export function actWeatherDest(where) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${airportData.airport[where].lat}&lon=${airportData.airport[where].long}&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            actWeatherData = data;
            airportData.airport[where].temp = +actWeatherData.main.temp.toFixed(1);
            airportData.airport[where].weatherDesc = actWeatherData.weather[0].description;
            airportData.airport[where].weather = actWeatherData.weather[0].main;
            airportData.airport[where].wind = +actWeatherData.wind.speed * 3.6;
            if (where == "wroclaw") {
                navWeatherStatus.textContent = `${calCurrentDate} | ${currentTime} | ${actWeatherData.name} | ${actWeatherData.weather[0].description} | ${actWeatherData.main.temp.toFixed(1)} ℃ | ${
                    actWeatherData.wind.speed
                } km/h`;
                whichIcon(airportData.airport[where].weather, weatherIcon);
            }
        })
        .catch((err) => console.log(err));
}


export class Where {
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

export const zapiszData = (data, where) => {
    airportData[where] = data;
    departureDate.setAttribute("min", calTomorrow);
};


export function tripLength(start, end) {
    let tripEnd = new Date(Date.parse(end));
    let tripStart = new Date(Date.parse(start));
    let tripLength = tripEnd.getDate() - tripStart.getDate();
    return (airportData.trip.length = tripLength);
}

const resultPrice = document.querySelectorAll(".result-price");
const resultCurr = document.querySelectorAll(".result-curr");

export function ticketCalc() {
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

}


const linkDepartSite = document.getElementById("linkDepartSite");
const linkDepartInfo = document.getElementById("linkDepartInfo");
const linkDestSite = document.getElementById("linkDestSite");
const linkDestInfo = document.getElementById("linkDestInfo");
const resultAirplane = document.querySelectorAll(".result-airplane");
const planeImg = document.getElementById("showPlane");
const boing737 = document.getElementById("b737");
const embraer = document.getElementById("embraer");
const boing787 = document.getElementById("b787");
const resultWeatherDest = document.getElementById("result-weather-dest");

export function setLink(data) {
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

const loginName = document.getElementById("login-name");
const loginInfoName = document.getElementById("info-login-name");
const loginEmail = document.getElementById("login-email");
const loginInfoEmail = document.getElementById("info-login-email");
const loginPass = document.getElementById("login-pass");
const loginInfoPass = document.getElementById("info-login-pass");

export function CheckPass() {
    let arrName = airportData.users.map((e) => e.name);
    if (arrName.some((name) => name == loginName.value) !== true) {
        loginInfoName.classList.add("showinfo");
    } else {
        loginInfoName.classList.remove("showinfo");
        if ((airportData.users.find((user) => user.name == loginName.value).email == loginEmail.value) !== true) {
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
                Login(loginName.value);
            }
        }
    }
    ticketCalc();
}


const resultLogin = document.querySelector(".result-login");
const avatar = document.querySelector(".avatar");
const loginModal = document.getElementById("modal5");
const loginModalBtn = document.getElementById("loginModalBtn");
const btnAirplane = document.getElementById("btnAirplane");
const baggageBtn = document.getElementById("btnBaggage");
const btnPlace = document.getElementById("btnPlace");
const btnPrice = document.getElementById("btnPrice");
const weatherIcon2 = document.getElementById("weatherIcon2");
const reservation = document.getElementById('reservation');
const isVisible = "is-visible";

function Login(name) {
    airportData.loggedin = name;
    resultLogin.textContent = airportData.loggedin;
    avatar.setAttribute("src", airportData.users.find((user) => user.name == name).avatar);
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


const resultSeats = document.querySelector(".result-seats");
export function chooseSeat() {
    let Seats = [];
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