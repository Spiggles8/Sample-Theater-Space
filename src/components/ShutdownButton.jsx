import { useRef } from "react";

export default function ShutdownButton({
  setShutdownButtonHeldSubPage,
  setActiveSubPageNumber,
}) {
  const timerRef = useRef();

  const showShutdownButtonHeldSubPage = (event) => {
    event.preventDefault();
    setShutdownButtonHeldSubPage(true);

    timerRef.current = setTimeout(() => {
      setShutdownButtonHeldSubPage(false);
      setActiveSubPageNumber(4);
    }, 5000);
  };

  const hideShutdownButtonHeldSubPage = (event) => {
    event.preventDefault();
    clearTimeout(timerRef.current);
    setShutdownButtonHeldSubPage(false);
  };

  return (
    <div>
      <button
        className="absolute top-[970px] left-[1690px] h-[225px] w-[225px] bg-red-600 rounded-full"
        onMouseDown={showShutdownButtonHeldSubPage}
        onMouseUp={hideShutdownButtonHeldSubPage}
        onTouchStart={showShutdownButtonHeldSubPage}
        onTouchEnd={hideShutdownButtonHeldSubPage}
      >
        Hold to Power Off System
      </button>
    </div>
  );
}
