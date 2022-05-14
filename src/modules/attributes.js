import { calCurrentDate } from "../modules/func";

const departureDate = document.getElementById("select-depart-date");
const arrivalDate = document.getElementById("select-arrival-date");

export function CurrentDateSet() {
    departureDate.setAttribute("min", calCurrentDate);
    arrivalDate.setAttribute("min", calCurrentDate);
}