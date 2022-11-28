import { useState, useEffect } from "react";

export default function ShutdownButtonHeldSubPage() {
  const [shutdownButtonHeldPercent, setShutdownButtonHeldPercent] = useState(1);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setShutdownButtonHeldPercent(
        (shutdownButtonHeldPercent) => shutdownButtonHeldPercent + 0.1
      );
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 h-[965px] w-[1920px] bg-red-500">
      <div className="absolute top-0 left-0 w-[1920px] text-right">
        <h3>Sample Theater Name</h3>
        <p>Touch Panel Location</p>
      </div>
      <h1 className="text-6xl text-center">SHUTDOWN BUTTON IS BEING HELD</h1>
      <div className="absolute top-[780px] left-[70px] w-[1780px] bg-gray-200 rounded-full h-[50px] dark:bg-gray-700">
        <div
          className="bg-red-800 h-full rounded-full transition-[width]"
          style={{ width: shutdownButtonHeldPercent + "%" }}
        ></div>
      </div>
    </div>
  );
}
