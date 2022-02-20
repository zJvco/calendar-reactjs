import '../assets/style/Calendar.css';
import CalendarContent from './calendar/CalendarContent';

import CalendarHeader from './calendar/CalendarHeader';
import CalendarLeftSideHours from './calendar/CalendarLeftSideHours';

const daysNameOfWeek = ["sunday", "monday", "tuesday", "wednesday",
                        "thursday", "friday", "saturday"];

function Calendar(props) {
    return (
        <div className="calendar">
            <CalendarHeader daysNameOfWeek={daysNameOfWeek}/>
            <div className="calendar-body">
                <CalendarLeftSideHours/>
                <CalendarContent daysNameOfWeek={daysNameOfWeek} setSchedule={props.setSchedule}/>
            </div>
        </div>
    );
}

export default Calendar;