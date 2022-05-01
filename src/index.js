import style from "./css/index.scss";

// ===Modal===
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";

const user = "Karol";

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
        console.log(User);
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
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
            console.log("test");
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
const result = document.getElementById("show-dest");
const acceptDest = document.getElementById("set-dest");
const resultDest = document.getElementById("result-dest");
const resultDest2 = document.getElementById("btn-label-depart");
const resultDestClass = document.getElementsByClassName("result-dest");

class Where {
    constructor(dest) {
    this.cel = dest;
    }
    
    Write() {
        console.log('z klasy komunikat');
        if (this.cel == "warsaw") {
            this.cel = "Warszawa";
        } else if (this.cel == "london") {
            this.cel = "Londyn";
        } else if (this.cel == "newyork") {
            this.cel = "Nowy York";
        }
        return `${this.cel}`;
    }
}


acceptDest.addEventListener("click", () => {
    const tempDest = new Where(selectDest.value);
    // result.textContent = tempDest.Write();
    console.log("zakceptowano : ",selectDest.value);
    // resultDest.textContent = tempDest.Write();
    // resultDest2.textContent = tempDest.Write();
    resultDestClass[0].textContent = tempDest.Write()
    resultDestClass[1].textContent = tempDest.Write()
},false);

selectDest.addEventListener("change", () => {
    console.log("na wydarzenia zmiany", selectDest.value);
    const tempDest = new Where(selectDest.value);
    result.textContent = tempDest.Write();
},false);
