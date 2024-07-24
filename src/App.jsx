import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./Contexts";
import Navbar from "./components/ControlBars/Navbar/Navbar";
import Toolbar from "./components/ControlBars/Toolbar/Toolbar";
import Timer from "./components/Timer/Timer";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeNavTab, setActiveNavTab] = useState(0)
  const [timerVisible, setTimerVisible] = useState(false);
  const [membersVisible, setMembersVisible] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const showTimer = () => setTimerVisible(true);
  const toggleTimer = () => setTimerVisible(!timerVisible);
  const toggleMembers = () => setMembersVisible(!membersVisible);

  const toggleActiveTab = e => {
    const oldIndex = parseInt(activeNavTab);
    const tabClassListStr = e.currentTarget.classList.value;
    const newActiveIndex = parseInt(tabClassListStr[tabClassListStr.length - 1]);
    setActiveNavTab(newActiveIndex);
    if (newActiveIndex === 1) {
      (timerVisible && oldIndex === 1 ?
        toggleTimer() :
        showTimer());
    }
    if (newActiveIndex === 2) toggleMembers();
  }

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar activeTab={parseInt(activeNavTab)} toggleTheme={toggleTheme} toggleActiveTab={toggleActiveTab} />
      <Toolbar activeNavTab={parseInt(activeNavTab)} />
      {timerVisible && <Timer visibility={timerVisible} toggleVisibility={toggleTimer} />}
    </ThemeContext.Provider>
  )
}

export default App
