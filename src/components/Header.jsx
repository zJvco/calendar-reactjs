import '../assets/style/Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header>
            <a className="header-title" href="/">MyCalendar</a>
            <nav>
                <button className="new-meeting-btn"><FontAwesomeIcon icon="fa-solid fa-plus" />New meeting</button>
            </nav>
        </header>
    );
}

export default Header;