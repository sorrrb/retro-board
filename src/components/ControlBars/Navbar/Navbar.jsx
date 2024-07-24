import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../Contexts";
import "../ControlBars.css";
import "./Navbar.css";
import Icon from "../../Icon/Icon";
import IconButton from "../../Buttons/IconButton/IconButton";

const capitalizeStr = str => str.charAt(0).toUpperCase() + str.slice(1);

function Navbar({ activeTab, toggleTheme, toggleActiveTab }) {
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
            btnClassList={`${activeTab === 1 ? "active-tab" : ""} active-index--1`}
            imgClassList={"timer-icon"}
            iconName={"timer"}
            iconTitle={"Sprint Timer"}
            iconSize={32}
            onClick={toggleActiveTab}
            tabData={{ index: 1, isActive: (activeTab === 1) }} />
          <div className="separator"></div>
          <IconButton
            btnClassList={`${activeTab === 2 ? "active-tab" : ""} active-index--2`}
            imgClassList={"members-icon"}
            iconName={"teamMembers"}
            iconTitle={"Sprint Members"}
            iconSize={32}
            onClick={toggleActiveTab}
            tabData={{ index: 2, isActive: (activeTab === 2) }} />
        </div>
        <div className="separator"></div>
        <div className="navbar--theme-btn">
          <IconButton
            imgClassList={"theme-icon"}
            iconName={`theme${capitalizeStr(theme)}`}
            iconTitle={`${theme === "light" ? "Dark" : "Light"} Mode`}
            iconSize={32}
            onClick={toggleTheme} />
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  toggleTheme: PropTypes.func,
  toggleActiveTab: PropTypes.func
}

export default Navbar;
