import { useEffect, useState } from "react";

export default function SystemShuttingDownSubPage({ setActiveSubPageNumber }) {
  const [percent, setPercent] = useState(1);
  const timerTotal = 5000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSubPageNumber(1);
    }, timerTotal);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setPercent((percent) => percent + 0.1);
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[url('../public/System_Changing_Background_01.jpg')] bg-no-repeat bg-cover h-[1200px] w-[1920px] text-white text-3xl">
      <div className="absolute top-0 left-0 w-[1920px] text-right">
        <h3>Sample Theater Name</h3>
        <p>Touch Panel Location</p>
      </div>
      <h1 className="absolute top-[320px] left-[650px] text-center text-7xl">
        Please Wait {"\n"} System is Shutting Down Now
      </h1>
      <div className="absolute top-[780px] left-[70px] w-[1780px] bg-gray-200 rounded-full h-[50px] dark:bg-gray-700">
        <div
          className="bg-red-600 h-full rounded-full transition-[width]"
          style={{ width: percent + "%" }}
        ></div>
      </div>
    </div>
  );
}
