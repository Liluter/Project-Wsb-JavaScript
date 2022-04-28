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

document.addEventListener("click", (e) => {
    // console.log("kliknięto", e.target);
    // console.log("parent", e.target.parentElement);
    // console.log("1 kid", e.target.firstChild);

    if ((e.target == document.querySelector(".container") || e.target == document.querySelector("body")) && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
        console.log("test");
    }
});

// const isVisible = "is-visible";
// pressing key up wsc

document.addEventListener("keyup", (e) => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

