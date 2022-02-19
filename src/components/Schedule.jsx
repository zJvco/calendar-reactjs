import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/style/Schedule.css';

function Schedule(props) {
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
                            <input type="date" name="initial-date" id="initial-date"/>
                            <select name="initial-hour" id="initial-hour" height="40">
                                <option value="00-00">00:00</option>
                                <option value="00-30">00:30</option>
                                <option value="01-00">01:00</option>
                                <option value="01-30">01:30</option>
                                <option value="02-00">02:00</option>
                                <option value="02:30">02:30</option>
                                <option value="03:00">03:00</option>
                                <option value="03:30">03:30</option>
                                <option value="04:00">04:00</option>
                                <option value="04:30">04:30</option>
                                <option value="05:00">05:00</option>
                                <option value="05:30">05:30</option>
                                <option value="06:00">06:00</option>
                                <option value="06:30">06:30</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="21:00">21:00</option>
                                <option value="21:30">21:30</option>
                                <option value="22:00">22:00</option>
                                <option value="22:30">22:30</option>
                                <option value="23:00">23:00</option>
                                <option value="23:30">23:30</option>
                            </select>
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        <div className="date-group end">
                            <input type="date" name="end-date" id="end-date"/>
                            <select name="end-hour" id="end-hour">
                                <option value="00-00">00:00</option>
                                <option value="00-30">00:30</option>
                                <option value="01-00">01:00</option>
                                <option value="01-30">01:30</option>
                                <option value="02-00">02:00</option>
                                <option value="02:30">02:30</option>
                                <option value="03:00">03:00</option>
                                <option value="03:30">03:30</option>
                                <option value="04:00">04:00</option>
                                <option value="04:30">04:30</option>
                                <option value="05:00">05:00</option>
                                <option value="05:30">05:30</option>
                                <option value="06:00">06:00</option>
                                <option value="06:30">06:30</option>
                                <option value="07:00">07:00</option>
                                <option value="07:30">07:30</option>
                                <option value="08:00">08:00</option>
                                <option value="08:30">08:30</option>
                                <option value="09:00">09:00</option>
                                <option value="09:30">09:30</option>
                                <option value="10:00">10:00</option>
                                <option value="10:30">10:30</option>
                                <option value="11:00">11:00</option>
                                <option value="11:30">11:30</option>
                                <option value="12:00">12:00</option>
                                <option value="12:30">12:30</option>
                                <option value="13:00">13:00</option>
                                <option value="13:30">13:30</option>
                                <option value="14:00">14:00</option>
                                <option value="14:30">14:30</option>
                                <option value="15:00">15:00</option>
                                <option value="15:30">15:30</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="21:00">21:00</option>
                                <option value="21:30">21:30</option>
                                <option value="22:00">22:00</option>
                                <option value="22:30">22:30</option>
                                <option value="23:00">23:00</option>
                                <option value="23:30">23:30</option>
                            </select>
                        </div>
                        <span className='total-time'>30min</span>
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
                    <input type="button" id="close" value="Close"/>
                    <input type="submit" id="save" value="Save"/>
                </div>
            </form>
        </div>
    );
}

export default Schedule;