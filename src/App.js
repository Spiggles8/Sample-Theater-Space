import { useState } from "react";
import "./App.css";
import ControlsSubPage from "./components/ControlsSubPage";
import StartSubPage from "./components/StartSubPage";
import SystemStartingUpSubPage from "./components/SystemStartingUpSubPage";
import SystemShuttingDownSubPage from "./components/SystemShuttingDownSubPage";

function App() {
  const [startSubPage, setStartSubPage] = useState(true);
  const [systemStartingUpSubPage, setSystemStartingUpSubPage] = useState(false);
  const [systemShuttingDownSubPage, setSystemShuttingDownSubPage] =
    useState(false);
  const [controlsSubPage, setControlsSubPage] = useState(false);

  return (
    <div>
      {startSubPage && (
        <StartSubPage
          className="SubPage"
          setSystemStartingUpSubPage={setSystemStartingUpSubPage}
          setStartSubPage={setStartSubPage}
        />
      )}
      {systemStartingUpSubPage && (
        <SystemStartingUpSubPage
          className="SubPage"
          setControlsSubPage={setControlsSubPage}
          setSystemStartingUpSubPage={setSystemStartingUpSubPage}
        />
      )}
      {controlsSubPage && (
        <ControlsSubPage
          className="SubPage"
          setSystemShuttingDownSubPage={setSystemShuttingDownSubPage}
          setControlsSubPage={setControlsSubPage}
        />
      )}
      {systemShuttingDownSubPage && (
        <SystemShuttingDownSubPage
          className="SubPage"
          setStartSubPage={setStartSubPage}
          setSystemShuttingDownSubPage={setSystemShuttingDownSubPage}
        />
      )}
    </div>
  );
}

export default App;
