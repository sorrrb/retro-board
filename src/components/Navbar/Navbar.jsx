import { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../Contexts";
import Icon from "../Icon/Icon";

const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);

function Navbar({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <nav className={`navbar theme--${theme}`}>
      <div className="logo">
        <Icon name={"logo"} descriptor="CanCodes Retro Logo" size={64} />
        <h1 className="logo--text">
          CanCodes
          <span>Retro</span>
        </h1>
      </div>
      <h1 className="active-board--title">Retro Board</h1>
      <div className="navbar--controls">
        <button className="navbar--btn">
          <Icon name={"timer"} size={32} />
        </button>
        <button className="navbar--btn">
          <Icon name={"teamMembers"} size={32} />
        </button>
        <button
          className={`navbar--btn btn-${theme}`}
          onClick={toggleTheme}>
          <Icon name={`theme${capitalizeStr(theme)}`} size={32} />
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func
}

export default Navbar;
