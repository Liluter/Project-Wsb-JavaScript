import style from "./css/index.scss";
import baza from "./assets/airportData.json";
import { currencies,
        actWeatherDest,
        chooseSeat } from "./modules/func";
import {Modals} from "./modules/modals";
import {WeatherIconNavDef,
        DepartDestAccept,
        ArrivDepartDateAccept,
        PassengersNumber,
        LoginButtonPress,
        BaggageNumber,
        SetPlace,
        PriceCalcCheck,
        CurrencyChange,
        MakeReservation } from "./modules/events"
import { CurrentDateSet } from "./modules/attributes"

let airportData = baza;

currencies();

WeatherIconNavDef();

Object.keys(airportData.airport).forEach((e) => actWeatherDest(e));

Modals();

CurrentDateSet()

DepartDestAccept()

ArrivDepartDateAccept();

PassengersNumber()

LoginButtonPress()

BaggageNumber();

SetPlace();

PriceCalcCheck();

CurrencyChange();

chooseSeat();

MakeReservation();