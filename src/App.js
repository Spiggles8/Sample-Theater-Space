import { useState } from "react";
import "./App.css";
import StartSubPage from "./components/StartSubPage";
import SystemStartingUpSubPage from "./components/SystemStartingUpSubPage";

function App() {
  const [startSubPage, setStartSubPage] = useState(true);
  const [systemStartingUpSubPage, setSystemStartingUpSubPage] = useState(false);
  const [systemShuttingDownSubPage, setSystemShuttingDownSubPage] =
    useState(false);
  const [controlsSubPage, setControlsSubPage] = useState(false);
  const [pressingShutdownSubPage, setPressingShutdownSubPage] = useState(false);

  return (
    <div id="TouchScreenBoundary">
      {startSubPage && (
        <StartSubPage
          setSystemStartingUpSubPage={setSystemStartingUpSubPage}
          setStartSubPage={setStartSubPage}
        />
      )}
      {systemStartingUpSubPage && <SystemStartingUpSubPage />}
    </div>
  );
}

export default App;
