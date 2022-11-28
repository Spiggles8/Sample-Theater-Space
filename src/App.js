import { useState } from "react";
import "./App.css";
import StartSubPage from "./components/StartSubPage";
import SystemStartingUpSubPage from "./components/SystemStartingUpSubPage";
import NoConnectionSubPage from "./components/NoConnectionSubPage";
import ControlsSubPage from "./components/ControlsSubPage";
import SystemShuttingDownSubPage from "./components/SystemShuttingDownSubPage";

function App() {
  const [activeSubPageNumber, setActiveSubPageNumber] = useState(1);
  const subpageArray = [
    <NoConnectionSubPage />,
    <StartSubPage setActiveSubPageNumber={setActiveSubPageNumber} />,
    <SystemStartingUpSubPage setActiveSubPageNumber={setActiveSubPageNumber} />,
    <ControlsSubPage setActiveSubPageNumber={setActiveSubPageNumber} />,
    <SystemShuttingDownSubPage
      setActiveSubPageNumber={setActiveSubPageNumber}
    />,
  ];

  let activeSubPage = subpageArray[activeSubPageNumber];

  return (
    <div className="bg-[url('../public/Main_Background_01.jpg')] bg-no-repeat h-[1200px] w-[1920px]">
      {activeSubPage}
    </div>
  );
}

export default App;
