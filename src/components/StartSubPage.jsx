//import { publishEvent } from "@crestron/ch5-crcomlib";

export default function StartSubPage({ setActiveSubPageNumber }) {
  const showSystemStartingUpSubPage = (event) => {
    event.preventDefault();
    setActiveSubPageNumber(2);
    //publishEvent("b", "Start_Button", true);
    //publishEvent("b", "Start_Button", false);
  };

  return (
    <div className="text-white text-3xl">
      <div className="absolute top-0 left-0 w-[1920px] text-right">
        <h3>Sample Theater Name</h3>
        <p>Touch Panel Location</p>
      </div>
      <button
        className="absolute top-0 left-0 h-[1200px] w-[1920px] text-center text-9xl"
        onClick={showSystemStartingUpSubPage}
      >
        Tap to Start System
      </button>
    </div>
  );
}
