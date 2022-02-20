import { useState } from 'react';
import './assets/style/App.css'
import Header from './components/Header';
import Calendar from './components/Calendar';
import Schedule from './components/Schedule';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [showSchedule, setSchedule] = useState(false, 0);
  const [scheduleDate, setScheduleDate] = useState({
    day: null,
    month: null,
    year: null,
    hour: null
  });

  return (
    <>
      <Header setSchedule={setSchedule}/>
      <main>
        <div className="calendar-container">
          <h1>
            <div className="calendar-icon-background">
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
            </div>
            Calendar
            </h1>
          { showSchedule ? <Schedule setSchedule={setSchedule} scheduleDate={scheduleDate}/> : <Calendar setSchedule={setSchedule}/> }
        </div>
      </main>
    </>
  );
}

export default App;
