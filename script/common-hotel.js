/* 
 * @author : irfan.maulana
 */

moment.locale("id");

function isNumber(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode === 8) {
        return true;
    } else {
        return false;
    }
}

function launchChat() {
    var launchChatEventDetails = {
        'event': 'live-chat',
        'category': 'Live Chat',
        'action': 'onclick',
        'label': '',
        'value': ''
    };
    //trackGTMEvent(launchChatEventDetails);
    if (!windowExists("framemain")) {
        var winLeft = (screen.width - 500) / 2;
        var winUp = (screen.height - 400) / 2;
        var defaultOptions = "location=no,status=no,toolbar=no,personalbar=no,menubar=no,directories=no,scrollbars=no,resizeable=yes,top=" + winUp + ",left=" + winLeft + ",width=500,height=400";
        if (typeof param_liveChatLink === "undefined") {
            var param_liveChatLink = "https://livesupport.blibli.com/start.jsp?workgroup=csblibli@workgroup.livesupport.blibli.com&amp;location=";
        }
        var winVar = window.open(param_liveChatLink + window.location.href, "framemain", defaultOptions);
        windows[windows.length] = winVar;
        return winVar;
    } else {
        var theWin = getWindow(name);
        theWin.focus();
    }
}

var windows = [];
function windowExists(name) {
    for (var i = 0; i < window.length; i++) {
        try {
            if (windows[i].name === name)
                return true;
        } catch (exception) {
        }
    }
    return false;
}

function redirectToPage(pathUrl) {
    window.location = pathUrl;
}

var weekdaysLocale = {
    shorthand: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    longhand: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
};
var monthsLocale = {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    longhand: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
};
if (typeof flatpickr !== 'undefined') {
    /* Datepicker */
    flatpickr.init.prototype.defaultConfig.prevArrow = "<i class='bli-arrow-left font-20 text-grey'></i>";
    flatpickr.init.prototype.defaultConfig.nextArrow = "<i class='bli-arrow-right font-20 text-grey'></i>";
    flatpickr.init.prototype.l10n.weekdays = weekdaysLocale;
    flatpickr.init.prototype.l10n.months = monthsLocale;
}

function convertYYYYMMDD(dateStr, format) {
    if (moment) {
        var defaultFormat = 'YYYY-MM-DD';
        if (format) {
            defaultFormat = format;
        }
        return moment(dateStr, defaultFormat).format('DD-MM-YYYY');
    }
}
/*
 * 09 Agustus 2016 change to 2016-08-09
 * @param {type} dateString
 * @returns {String} YYYY-MM-DD
 */
function toYYYYMMDD(dateString) {
    dateString = dateString.split(' ').join('-');
    var parts = dateString.split('-');
    var dayStr = parts[0];
    var yearStr = parts[2];
    var monthInt = 0;
    for (var i = 0; i < monthsLocale.longhand.length; i++) {
        var item = monthsLocale.longhand[i];
        if (item.toLowerCase() === parts[1].toLowerCase()) {
            monthInt = i + 1;
            break;
        }
    }

    if (monthInt < 10) {
        monthInt = "0" + monthInt;
    }

    return yearStr + "-" + monthInt + "-" + dayStr;
}
/*
 * 09-08-2016 change to Javascript Date object
 * prefer using momenjs converter for cross browser support
 * @param {String} date string with format DD-MM-YYYY 
 * @param {String} format string if you have your own format 
 * @returns {object} new Date
 */
function toDate(dateStr, format) {
    if (typeof moment !== 'undefined') {
        if (format) {
            return moment(dateStr, format).toDate();
        } else {
            return moment(dateStr, 'YYYY-MM-DD').toDate();
        }
    }
}

/*
 * util for create url friendly string with dash and lowercase
 * @param {type} name
 * @returns {String}
 * 
 */
function createUrlFriendlyName(name) {
    name = $.trim(name.toLowerCase());
    name = name.replace(/[^A-Za-z0-9]+/g, "-");
    while (name.charAt(0) === '-') {
        name = name.substr(1);
    }
    while (name.charAt(name.length - 1) === '-') {
        name = name.substr(0, name.length - 1);
    }
    return name;
}

var KEY_LAST_SEARCH = "blibli-hotel-last-search";

/*
 * 
 * @param {string} label
 * @param {string} url
 * @param {number} hotelCount
 * @param {number} limit
 * @returns {undefined}
 *
 */
function saveLastSearch(label, area, url, hotelCount, limit) {
    if (typeof localStorage !== "undefined") {
        var objSearch = {
            hotelCount: hotelCount,
            label: label,
            url: url,
            savedDate: new Date().getTime(),
            area: area
        };

        // read data from storage
        var dataStoreObject = readLastSearch();

        if (dataStoreObject !== null) {
            if (dataStoreObject.data) {
                for (var i = 0; i < dataStoreObject.data.length; i++) {
                    var obj = dataStoreObject.data[i];
                    if (obj.url === objSearch.url) {
                        dataStoreObject.data.splice(i, 1);
                        break;
                    }
                }
                dataStoreObject.savedDate = new Date().getTime();
                if (dataStoreObject.data.length < limit) {
                    dataStoreObject.data.push(objSearch);
                } else {
                    dataStoreObject.data.splice(dataStoreObject.data.length - 1, 1);
                    dataStoreObject.data.push(objSearch);
                }
            }
        } else {
            var data = [];
            data.push(objSearch);
            dataStoreObject = {
                savedDate: new Date().getTime(),
                data: data
            };
        }

        localStorage.setItem(KEY_LAST_SEARCH, JSON.stringify(dataStoreObject));
    }
}

/*
 * 
 * @returns {Object} ==> dataStoreObject = {savedDate:11111, data:[]};
 */
function readLastSearch() {
    var dataStoreObject = null;
    if (typeof localStorage !== "undefined") {
        var objFromStorage = localStorage.getItem(KEY_LAST_SEARCH);
        try {
            dataStoreObject = JSON.parse(objFromStorage);
        } catch (err) {
        }
    }
    return dataStoreObject;
}

function getArray(n) {
    var arr = [];
    if (!isNaN(n)) {
        n = parseInt(n);
        for (var i = 0; i < n; i++) {
            arr.push(i);
        }
    }

    return arr;
}
;

function getStringArray(n) {
    var arr = [];
    if (!isNaN(n)) {
        n = parseInt(n);
        for (var i = 0; i < n; i++) {
            arr.push((i).toString());
        }

    }
    return arr;
}
;

function setDefaultImage() {
    var DEFAULT_IMG_LARGE = staticAbsoluteUrl + "resources/images/hotel/img-default-large.png";
    var DEFAULT_IMG_MEDIUM = staticAbsoluteUrl + "resources/images/hotel/img-default-medium.png";

    $('.js-img-err--large').error(function () {
        $(this).attr("src", DEFAULT_IMG_LARGE);
    });
    $('.js-img-err').error(function () {
        $(this).attr("src", DEFAULT_IMG_MEDIUM);
    });
}

$(document).ready(function () {
    setDefaultImage();  
});
