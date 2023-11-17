import I18n from "react-native-i18n";
import * as RNLocalize from "react-native-localize";
import th from "./locales/th";
import en from "./locales/en";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = "th";
}
I18n.changelanguage = function (language) {
  // console.log('i18n',language);
  if (language == "TH") {
    I18n.locale = "th";
  } else if (language == "EN") {
    I18n.locale = "en";
  }
};
I18n.fallbacks = true;
I18n.translations = { th, en };

I18n.localeCal = {
  name: "th",
  config: {
    months:
      "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
        "_"
      ),
    monthsShort:
      "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
        "_"
      ),
    weekdays:
      "วันอาทิตย์_วันจันทร์_วันอังคาร_วันพุธ_วันพฤหัสบดี_วันศุกร์_วันเสาร์".split(
        "_"
      ),
    weekdaysShort: "อา_จ_อ_พ_พฤ_ศ_ส".split("_"),
    weekdaysMin: "อา_จ_อ_พ_พฤ_ศ_ส".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY LT",
      LLLL: "dddd D MMMM YYYY LT",
    },
    calendar: {
      sameDay: "[Aujourd'hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "une année",
      yy: "%d années",
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function (number) {
      return number + (number === 1 ? "er" : "ème");
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === "M";
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? "PD" : "MD";
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  },
};

I18n.localeCalen = {
  name: "en",
  config: {
    months:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    monthsShort:
      "Jan._Feb._Mar._Apr._May._Jun._Jul._Aug._Sep._Oct._Nov._Dec.".split("_"),
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysMin: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    longDateFormat: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "DD/MM/YYYY",
      LL: "D MMMM YYYY",
      LLL: "D MMMM YYYY LT",
      LLLL: "dddd D MMMM YYYY LT",
    },
    calendar: {
      sameDay: "[Aujourd'hui à] LT",
      nextDay: "[Demain à] LT",
      nextWeek: "dddd [à] LT",
      lastDay: "[Hier à] LT",
      lastWeek: "dddd [dernier à] LT",
      sameElse: "L",
    },
    relativeTime: {
      future: "dans %s",
      past: "il y a %s",
      s: "quelques secondes",
      m: "une minute",
      mm: "%d minutes",
      h: "une heure",
      hh: "%d heures",
      d: "un jour",
      dd: "%d jours",
      M: "un mois",
      MM: "%d mois",
      y: "une année",
      yy: "%d années",
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function (number) {
      return number + (number === 1 ? "er" : "ème");
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === "M";
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? "PD" : "MD";
    },
    week: {
      dow: 1, // Monday is the first day of the week.
      doy: 4, // The week that contains Jan 4th is the first week of the year.
    },
  },
};

export default I18n;
