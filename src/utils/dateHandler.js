function changeDateFormat(date) {
    if (date.length === 1) {
        return "0" + date;
    }

    return date;
}

function convertHourToMinutes(hour) {
    return hour * 60;
}

export { changeDateFormat, convertHourToMinutes };