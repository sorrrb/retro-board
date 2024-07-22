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
    <nav className={`navbar theme--${theme} flex align-center`}>
      <div className="logo--container flex align-center">
        <Icon name={"logo"} size={48} />
        <h1 className="logo--text font-xl">
          <span>CanCodes</span>
          <span>Retro</span>
        </h1>
      </div>
      <h1 className="board--title font-xxl">Retro Board</h1>
      <div className="navbar--btns flex place-center">
        <div className="navbar--control-btns flex place-center">
          <IconButton
            imgClassList={'timer-icon'}
            iconName={"timer"}
            iconSize={32} />
          <div className="separator"></div>
          <IconButton
            imgClassList={'members-icon'}
            iconName={"teamMembers"}
            iconSize={32} />
        </div>
        <div className="separator"></div>
        <div className="navbar--theme-btn">
          <IconButton
            imgClassList={'theme-icon'}
            iconName={`theme${capitalizeStr(theme)}`}
            iconSize={32}
            onClick={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  toggleTheme: PropTypes.func
}

export default Navbar;
