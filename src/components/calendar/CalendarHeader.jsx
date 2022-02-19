import { toTitleCase } from '../../utils/stringHandler';

function CalendarHeader(props) {
    const date = new Date();
    
    let headers = [];

    let curDate = date.getDate();
    let curYear = date.getFullYear();
    let curMonth = date.getMonth()+1;
    let dayNum = date.getDay();

    let maxDaysPeerMonth = new Date(curYear, curMonth, 0).getDate();

    let resetDayCount = 0;

    let getDaysOfWeek = (range) => {
        let calcDay = Math.abs(curDate - dayNum) + range;

        if (calcDay > maxDaysPeerMonth) {
            resetDayCount++;
            calcDay = resetDayCount;
        }

        return calcDay;
    }

    for (let i = 0; i < props.daysNameOfWeek.length; i++) {
        headers.push(
            <div key={i} className={"header " + props.daysNameOfWeek[i]}>
                <span>{getDaysOfWeek(i)}</span>
                <>{toTitleCase(props.daysNameOfWeek[i])}</>
            </div>
        );
    }

    return (
        <div className="calendar-header">
            <div className="empty"></div>
            { headers }
        </div>
    );
}

export default CalendarHeader;