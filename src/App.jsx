import './assets/style/App.css'
import Header from './components/Header';
import Calendar from './components/Calendar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
      <Header/>
      <main>
        <div className="calendar-container">
          <h1>
            <div className="calendar-icon-background">
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
            </div>
            Calendar
            </h1>
          <Calendar/>
        </div>
      </main>
    </>
  );
}

export default App;
