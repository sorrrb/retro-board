import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../Contexts";
import "./Timer.css";
import IconButton from "../Buttons/IconButton/IconButton";

function Timer({ visibility, toggleVisibility }) {
  const theme = useContext(ThemeContext);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const formatUnitStr = unit => {
    const numUnit = parseInt(unit);
    return `${numUnit < 10 ? `0${unit}` : `${unit}`}`
  }

  return (
    <div className={`timer theme--${theme} flex place-center padding-lg`}>
      <IconButton
        btnClassList={"btn--timer-close"}
        imgClassList={"close-icon"}
        iconName="close"
        iconTitle={"delete-sign"}
        iconSize={16}
        iconFill={"606060"}
        iconStyle={"ios-glyphs"}
        onClick={toggleVisibility} />
      <p>00:00:00</p>
    </div>
  )
}

Timer.propTypes = {
  visibility: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func
}

export default Timer;
