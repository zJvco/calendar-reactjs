function changeDateFormat(date) {
    if (date.length === 1) {
        return "0" + date;
    }

    return date;
}

function convertHourToMinutes(hour) {
    if (hour == 0) hour = 24;
    return hour * 60;
}

export { changeDateFormat, convertHourToMinutes };