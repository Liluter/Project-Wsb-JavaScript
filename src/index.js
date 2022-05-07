import style from "./css/index.scss";
import baza from "./assets/userData.json";

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

function actWeatherNav() {
    fetch("http://api.openweathermap.org/data/2.5/weather?lat=51.11&lon=17.02&appid=e88cbba2770d843c73cbfc59c2d7a3b0&lang=pl")
        .then((response) => response.json())
        .then((data) => {
            actWeatherData = data;
            console.log(actWeatherData);
            navWeatherStatus.textContent = `${actWeatherData.name} | ${actWeatherData.weather[0].description} | ${(actWeatherData.main.temp - 273.15).toFixed(1)} ℃ | ${actWeatherData.wind.speed} m/s`;
        })
        .catch((err) => console.log(err));
}

actWeatherNav();


// ===Modal===
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

const userData = {
    "destination": "",
};

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
let aproveVal = false;
for (const el of aproveEls) {
    el.addEventListener("click", function () {
        console.log("Aproved!!!");
        User.aproveVal = true;
        // console.log(User);
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        // this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}
// Clicking outside modal
// const isVisible = "is-visible";

document.addEventListener(
    "click",
    (e) => {
        if (
            (e.target == document.querySelector(".main.content") || e.target == document.querySelector(".main") || e.target == document.querySelector(".row")) &&
            document.querySelector(".modal.is-visible")
        ) {
            // document.querySelector(".modal.is-visible").classList.remove(isVisible);
            document.querySelectorAll(".modal.is-visible").forEach((e) => e.classList.remove(isVisible));
            console.log("testtest");
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

class Where {
    constructor(dest) {
        this.value = dest;
    }

    Write() {
        console.log("z klasy komunikat");
        if (this.value == "warsaw") {
            this.value = "Warszawa";
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
            console.log("zakceptowano undefined: ", tempDest.value);
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
        return zapiszData(tempDest.Write());
    },
    false
);

acceptDepart.addEventListener(
    "click",
    function () {
        const tempDest = new Where(selectDepart.value);
        console.log("Co jest w seleckie : ", tempDest.value);
        if (tempDest.value === "" || tempDest.value === undefined) {
            console.log("zakceptowano undefined: ", tempDest.value);
            // resultDest.textContent = tempDest.Write();
            // resultDest2.textContent = tempDest.Write();
            resultDepartClass[0].textContent = "Wybierz coś";
            resultDepartClass[1].textContent = "Wybierz coś";
        } else {
            console.log("nie ma undefined.. : ", tempDest.value);
            // resultDest.textContent = tempDest.Write();
            // resultDest2.textContent = tempDest.Write();
            resultDepartClass[0].textContent = tempDest.Write();
            resultDepartClass[1].textContent = tempDest.Write();
        }
        return zapiszData(tempDest.Write());
    },
    false
);

const zapiszData = (data) => {
    console.log("Zapisano do userData : ", (userData.destination = data));

    console.log("Sprawdzenie odczyt: ", userData.destination);
};

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
