import Schedule from "../Schedule";

function CalendarContent(props) {
    let weekCols = [];

    for (let i = 0; i < props.daysNameOfWeek.length; i++) {
        const weekName = props.daysNameOfWeek[i];

        weekCols.push(
            <div className={"cols " + weekName} key={weekName}>
                <div id={weekName + "-00"} className="calendar-card" onClick={Schedule(weekName, 0)}></div>
                <div id={weekName + "-01"} className="calendar-card" onClick={Schedule(weekName, 1)}></div>
                <div id={weekName + "-02"} className="calendar-card" onClick={Schedule(weekName, 2)}></div>
                <div id={weekName + "-03"} className="calendar-card" onClick={Schedule(weekName, 3)}></div>
                <div id={weekName + "-04"} className="calendar-card" onClick={Schedule(weekName, 4)}></div>
                <div id={weekName + "-05"} className="calendar-card" onClick={Schedule(weekName, 5)}></div>
                <div id={weekName + "-06"} className="calendar-card" onClick={Schedule(weekName, 6)}></div>
                <div id={weekName + "-07"} className="calendar-card" onClick={Schedule(weekName, 7)}></div>
                <div id={weekName + "-08"} className="calendar-card" onClick={Schedule(weekName, 8)}></div>
                <div id={weekName + "-09"} className="calendar-card" onClick={Schedule(weekName, 9)}></div>
                <div id={weekName + "-10"} className="calendar-card" onClick={Schedule(weekName, 10)}></div>
                <div id={weekName + "-11"} className="calendar-card" onClick={Schedule(weekName, 11)}></div>
                <div id={weekName + "-12"} className="calendar-card" onClick={Schedule(weekName, 12)}></div>
                <div id={weekName + "-13"} className="calendar-card" onClick={Schedule(weekName, 13)}></div>
                <div id={weekName + "-14"} className="calendar-card" onClick={Schedule(weekName, 14)}></div>
                <div id={weekName + "-15"} className="calendar-card" onClick={Schedule(weekName, 15)}></div>
                <div id={weekName + "-16"} className="calendar-card" onClick={Schedule(weekName, 16)}></div>
                <div id={weekName + "-17"} className="calendar-card" onClick={Schedule(weekName, 17)}></div>
                <div id={weekName + "-18"} className="calendar-card" onClick={Schedule(weekName, 18)}></div>
                <div id={weekName + "-19"} className="calendar-card" onClick={Schedule(weekName, 19)}></div>
                <div id={weekName + "-20"} className="calendar-card" onClick={Schedule(weekName, 20)}></div>
                <div id={weekName + "-21"} className="calendar-card" onClick={Schedule(weekName, 21)}></div>
                <div id={weekName + "-22"} className="calendar-card" onClick={Schedule(weekName, 22)}></div>
                <div id={weekName + "-23"} className="calendar-card" onClick={Schedule(weekName, 23)}></div>
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