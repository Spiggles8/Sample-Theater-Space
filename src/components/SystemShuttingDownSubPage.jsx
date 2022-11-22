import { useEffect } from "react";

export default function SystemShuttingDownSubPage({setStartSubPage, setSystemShuttingDownSubPage}) {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartSubPage(true);
      setSystemShuttingDownSubPage(false);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

    return (
      <div className="SubPage">
        <div className="CornerTitle">
          <h3>Sample Theater Name</h3>
          <p>Touch Panel Location</p>
        </div>
        <h1>System Shutting Down SubPage</h1>
      </div>
    );
  }
  