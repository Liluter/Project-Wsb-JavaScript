import { Where,
    zapiszData,
    setLink,
    airportData,
    tripLength,
    CheckPass,
    ticketCalc } from "../modules/func";

const weatherIcon = document.getElementById("weatherIcon");

const weatherIcons = {
    "clear": "./assets/images/Sunny2.svg",
    "rain": "./assets/images/Rain.svg",
    "clouds": "./assets/images/SunCloud2.svg",
    "drizzle": "./assets/images/Clouds.svg",
    "extreme": "./assets/images/Windy.svg",
};

export function WeatherIconNavDef() {
    weatherIcon.setAttribute("src", weatherIcons.clear);
}


const selectDest = document.getElementById("select-dest");
const acceptDest = document.getElementById("set-dest");
const resultDestClass = document.getElementsByClassName("result-dest");
const footerLinksDest = document.getElementsByClassName("footerLinksDest");
const acceptDepart = document.getElementById("set-depart");
const selectDepart = document.getElementById("select-depart");
const resultDepartClass = document.getElementsByClassName("result-depart");
const footerLinksDepart = document.querySelectorAll(".footerLinksDepart");

export function DepartDestAccept() {
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
}

const acceptArrivalDateBtn = document.getElementById("set-arrival-date");
const infoArrivalDate = document.getElementById("info-arrival-date");
const resultArrivalDate = document.querySelectorAll(".result-arrival-date");
const resultTripLength = document.querySelectorAll(".result-trip-length");

const acceptDepartDateBtn = document.getElementById("set-depart-date");
const infoDepartDate = document.getElementById("info-departure-date");
const resultDepartDate = document.querySelectorAll(".result-depart-date");
const departureDate = document.getElementById("select-depart-date");
const arrivalDate = document.getElementById("select-arrival-date");

export function ArrivDepartDateAccept() {
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
                // console.log("Data Deparure accepted", departureDate.value);
                airportData.trip.departuredate = departureDate.value;
                infoDepartDate.classList.remove("showinfo");
                arrivalDate.setAttribute("min", departureDate.value); // ograniczenie powrotu o wylot
                resultDepartDate[0].textContent = airportData.trip.departuredate;
            }
            if (airportData.trip.arrivaldate != "" && airportData.trip.departuredate != "") {
                // console.log(" wybrano dwie daty");
                tripLength(airportData.trip.departuredate, airportData.trip.arrivaldate);
            }
        },
        false
    );
}


const decPassNr = document.getElementById("decPassNr");
const passNum = document.getElementById("passNum");
const resultPassNum = document.querySelector(".result-pass-num");
const incPassNr = document.getElementById("incPassNr");

export function PassengersNumber() {
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
}

const loginBtn = document.getElementById("login-btn");

export function LoginButtonPress()
{
    loginBtn.addEventListener("click", CheckPass);
}

const bigBagNum = document.getElementById("bigBagNum");
const resultBigBag = document.getElementById("result-big-bag");
const smallBagNum = document.getElementById("smallBagNum");
const resultSmallBag = document.getElementById("result-small-bag");

export function BaggageNumber() {
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
}

const setPlace = document.getElementById("set-place");
const boing737 = document.getElementById("b737");
const boing787 = document.getElementById("b787");
const embraer = document.getElementById("embraer");
const planeImg = document.getElementById("showPlane");

export function SetPlace() {
    setPlace.addEventListener("click", function () {
        boing737.classList.toggle("hide");
        boing787.classList.toggle("hide");
        embraer.classList.toggle('hide');
        planeImg.classList.toggle("hide");
    });
}

const btnPrice = document.getElementById("btnPrice");

export function PriceCalcCheck() {
    btnPrice.addEventListener(
        "click",
        function () {
            ticketCalc();
        },
        false
    );
}


const btnCurr = document.querySelectorAll(".btn.curr");

export function CurrencyChange() {
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
                console.log(airportData);
            },
            false
        )
    );
}

const reservation = document.getElementById('reservation');
const textInfo = document.getElementById('text-info');

export function MakeReservation() {
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
}