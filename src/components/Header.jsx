import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header>
            <a href="/">My Calendar</a>
            <nav>
                <button><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
            </nav>
        </header>
    );
}

export default Header;