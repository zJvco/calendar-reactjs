import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import '../assets/style/Schedule.css';
import { changeDateFormat, convertHourToMinutes } from '../utils/dateHandler';

import OptionsTime from './schedule/OptionsTime';

function Schedule(props) {
    const date = new Date();

    const curDay = date.getDate();
    const curMonth = date.getMonth()+1;
    const curYear = date.getFullYear();

    const curHour = date.getHours();
    const curMinutes = date.getMinutes();

    const [defaultDateValue, setDefaultDateValue] = useState(
        changeDateFormat(curYear.toString()) + "-" +
        changeDateFormat(curMonth.toString()) + "-" +
        changeDateFormat(curDay.toString())
    );

    const [totalTime, setTotalTime] = useState("0min");
    
    const getFTimeValue = (h, m) => {
        if (h >= 23 && m > 30) {
            return "00:00";
        }

        if (m > 59) {
            h++;
            m = 0;
        }

        const tempFHour = changeDateFormat(h.toString());
        const tempFMin = m < 30 ? "00" : "30";
        
        return tempFHour + ":" + tempFMin;
    }

    const [selectedInitialTime, setInitialTime] = useState(
        getFTimeValue(curHour, curMinutes)
    );

    const [selectedEndTime, setEndTime] = useState(
        getFTimeValue(curHour, curMinutes + 30)
    );

    const onChangeSelectedOption = (e) => {
        const fih = parseInt(e.target.value.split(":"));
        const fim = parseInt(e.target.value.split(":")[1]);

        setInitialTime(getFTimeValue(fih, fim));

        const selectEndEL = document.getElementById("end-hour");

        const fTimeEnd = getFTimeValue(fih, fim+30);
        selectEndEL.value = fTimeEnd;

        const feh = parseInt(fTimeEnd.split(":"));
        const fem = parseInt(fTimeEnd.split(":")[1]);

        let fa = convertHourToMinutes(fih) + fim;
        let fb = convertHourToMinutes(feh) + fem;

        setTotalTime((Math.abs(fa - fb)).toString() + "min");
    }

    return (
        <div className="schedule-container">
            <form action="/" method="POST">
                <div className="input-group title-group">
                    <label>
                        <FontAwesomeIcon icon="fa-solid fa-pen" />
                    </label>
                    <input type="text" name="title" id="title" placeholder='Add a title'/>
                </div>
                <div className="input-group time-group">
                    <label>
                        <FontAwesomeIcon icon="fa-solid fa-clock" />
                    </label>
                    <div className='time-content'>
                        <div className="date-group initial">
                            <input type="date" name="initial-date" id="initial-date"
                                value={defaultDateValue}
                                onChange={e => setDefaultDateValue(e.value)}/>
                            <select name="initial-hour" id="initial-hour"
                                defaultValue={ selectedInitialTime }
                                onChange={e => onChangeSelectedOption(e)}>
                                <OptionsTime/>
                            </select>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        <div className="date-group end">
                            <input type="date" name="end-date" id="end-date"
                                value={defaultDateValue}
                                onChange={e => setDefaultDateValue(e.value)}/>
                            <select name="end-hour" id="end-hour"
                                defaultValue={ selectedEndTime }>
                                <OptionsTime/>
                            </select>
                        </div>
                        <span className="total-time">{totalTime}</span>
                    </div>
                </div>
                <div className="input-group occurrence-group">
                    <label>
                        <FontAwesomeIcon icon="fa-solid fa-repeat" />
                    </label>
                    <select name="occurrence" id="occurrence">
                        <option value="no-repeat">Not repeatble</option>
                        <option value="everyday-of-week">Everyday of week</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="annually">Annually</option>
                    </select>
                </div>
                <div className="input-group description-group">
                    <label>
                        <FontAwesomeIcon icon="fa-solid fa-list" />
                    </label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder='Type details of this schedule'></textarea>
                </div>
                <div className="input-group submit-group">
                    <input type="button" id="close" value="Close" onClick={() => props.setSchedule(false)}/>
                    <input type="submit" id="save" value="Save"/>
                </div>
            </form>
        </div>
    );
}

export default Schedule;