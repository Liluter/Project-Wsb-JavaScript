export function Modals() {
    const openEls = document.querySelectorAll("[data-open]");
    const isVisible = "is-visible";
    // conecting via dataset
    for (const el of openEls) {
        el.addEventListener("click", function () {
            const modalId = this.dataset.open;
            document.getElementById(modalId).classList.toggle(isVisible);
        },false);
    }
    // Closing modal
    // Pressing btn close
    const closeEls = document.querySelectorAll("[data-close]");
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

    document.addEventListener("keyup", (e) => {
        if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });
}