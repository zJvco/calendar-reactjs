function CalendarContent(props) {
    let weekCols = [];

    for (let i = 0; i < props.daysNameOfWeek.length; i++) {
        const weekName = props.daysNameOfWeek[i];

        weekCols.push(
            <div className={"cols " + weekName} key={weekName}>
                <div id={weekName + "-00"} className="calendar-card"></div>
                <div id={weekName + "-01"} className="calendar-card"></div>
                <div id={weekName + "-02"} className="calendar-card"></div>
                <div id={weekName + "-03"} className="calendar-card"></div>
                <div id={weekName + "-04"} className="calendar-card"></div>
                <div id={weekName + "-05"} className="calendar-card"></div>
                <div id={weekName + "-06"} className="calendar-card"></div>
                <div id={weekName + "-07"} className="calendar-card"></div>
                <div id={weekName + "-08"} className="calendar-card"></div>
                <div id={weekName + "-09"} className="calendar-card"></div>
                <div id={weekName + "-10"} className="calendar-card"></div>
                <div id={weekName + "-11"} className="calendar-card"></div>
                <div id={weekName + "-12"} className="calendar-card"></div>
                <div id={weekName + "-13"} className="calendar-card"></div>
                <div id={weekName + "-14"} className="calendar-card"></div>
                <div id={weekName + "-15"} className="calendar-card"></div>
                <div id={weekName + "-16"} className="calendar-card"></div>
                <div id={weekName + "-17"} className="calendar-card"></div>
                <div id={weekName + "-18"} className="calendar-card"></div>
                <div id={weekName + "-19"} className="calendar-card"></div>
                <div id={weekName + "-20"} className="calendar-card"></div>
                <div id={weekName + "-21"} className="calendar-card"></div>
                <div id={weekName + "-22"} className="calendar-card"></div>
                <div id={weekName + "-23"} className="calendar-card"></div>
            </div>
        );
    }

    return (
        <div className="calendar-content">
            { weekCols }
        </div>
    );
}

export default CalendarContent;