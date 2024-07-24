import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../Contexts";
import "../ControlBars.css";
import "./Toolbar.css";
import IconButton from "../../Buttons/IconButton/IconButton";

function Toolbar({ activeNavTab }) {
  const theme = useContext(ThemeContext);
  const [visibility, setVisibility] = useState(true);
  const [layoutDirection, setLayoutDirection] = useState("vertical");
  const [itemSearch, setItemSearch] = useState("");

  return (
    <div className={`toolbar theme--${theme} flex align-center`}>
      <div className="toolbar--controls flex align-center">
        <input
          className="toolbar--context flex align-center font-med padding-sm"
          name="toolbarContext"
          id="toolbarContext"
          placeholder="Set the context or state of affairs for your sprint..."
          aria-placeholder="Set the context or state of affairs for your sprint..."
        />
        <IconButton
          imgClassList={"visibility-icon"}
          iconFill={"FFFFFF"}
          iconName={`visibility${visibility ? "Shown" : "Hidden"}`}
          iconTitle={visibility ? "Hide Items" : "Show Items"}
          iconSize={16}
          iconStyle={"ios-glyphs"}
          onClick={() => { visibility ? setVisibility(false) : setVisibility(true) }}
        />
        <input
          className="toolbar--search flex align-center font-med padding-xs"
          type="search"
          name="toolbarSearch"
          id="toolbarSearch"
          placeholder="Search"
          aria-placeholder="Search"
          value={itemSearch}
          onChange={e => setItemSearch(e.target.value)}
        />
        <div className="toolbar--layout-container flex place-center padding-xxs">
          <IconButton
            btnClassList={`flex place-center padding-xxxs ${layoutDirection === "vertical" ? "active-layout" : ""}`}
            imgClassList={"vertical-layout-icon"}
            iconFill={"FFFFFF"}
            iconName={"layoutVertical"}
            iconTitle={"Set layout: Vertical"}
            iconStyle={"ios-filled"}
            iconSize={16}
            onClick={() => setLayoutDirection("vertical")}
          />
          <IconButton
            btnClassList={`flex place-center padding-xxxs ${layoutDirection === "horizontal" ? "active-layout" : ""}`}
            imgClassList={"horizontal-layout-icon"}
            iconFill={"FFFFFF"}
            iconName={"layoutHorizontal"}
            iconTitle={"Set layout: Horizontal"}
            iconStyle={"ios-filled"}
            iconSize={16}
            onClick={() => setLayoutDirection("horizontal")}
          />
        </div>
        <div className="separator"></div>
      </div>
      <div className="toolbar--nav-menu grid">
        {activeNavTab === 0 ? `Module ` : `${activeNavTab === 1 ? "Timer Controls Placeholder" : "Members Controls Placeholder"}`}
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  activeNavTab: PropTypes.number.isRequired
}

export default Toolbar;
