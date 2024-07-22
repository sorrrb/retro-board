import { useContext } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "../../Contexts";
import './Navbar.css';
import Icon from "../Icon/Icon";
import IconButton from "../Buttons/IconButton/IconButton";

const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);

function Navbar({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <nav className={`navbar theme--${theme}`}>
      <div className="logo">
        <Icon name={"logo"} descriptor="CanCodes Retro Logo" size={48} />
        <h1 className="logo--text">
          <span>CanCodes</span>
          <span>Retro</span>
        </h1>
      </div>
      <h1 className="active-board--title">Retro Board</h1>
      <div className="navbar--controls">
        <IconButton btnClass={"navbar--btn"} subtext={"Timer"} iconName={"timer"} iconSize={32} />
        <IconButton btnClass={"navbar--btn"} subtext={"Team"} iconName={"teamMembers"} iconSize={32} />
        <IconButton btnClass={"navbar--btn"} subtext={"Theme"} iconName={`theme${capitalizeStr(theme)}`} iconSize={32} onClick={toggleTheme} />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func
}

export default Navbar;
