import '../assets/style/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    return (
        <header>
            <a className="header-title" href="/">MyCalendar</a>
            <nav>
                <button className="new-meeting-btn" onClick={() => props.setSchedule(true)}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                    New meeting
                </button>
            </nav>
        </header>
    );
}

export default Header;