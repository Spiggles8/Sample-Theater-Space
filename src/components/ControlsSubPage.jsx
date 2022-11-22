import { useState, useRef } from "react";
import ShutdownButtonHeldSubPage from "./ShutdownButtonHeldSubPage";

export default function ControlsSubPage({
  setSystemShuttingDownSubPage,
  setControlsSubPage,
}) {
  const timerRef = useRef();
  const [shutdownButtonHeldSubPage, setShutdownButtonHeldSubPage] =
    useState(false);

  const showShutdownButtonHeldSubPage = (event) => {
    event.preventDefault();
    setShutdownButtonHeldSubPage(true);

    timerRef.current = setTimeout(() => {
      setSystemShuttingDownSubPage(true);
      setShutdownButtonHeldSubPage(false);
      setControlsSubPage(false);
    }, 5000);
  };

  const hideShutdownButtonHeldSubPage = (event) => {
    event.preventDefault();
    clearTimeout(timerRef.current);
    setShutdownButtonHeldSubPage(false);
  };

  return (
    <div className="SubPage">
        <div className="ProgramAudio">
          <h4>Program Audio</h4>
            <button className="VolumeUpButton">VOL UP</button>
            <button className="VolumeDownButton">VOL DOWN</button>
            <button className="MuteButton">MUTE</button>
        </div>
        <div className="PodiumMicAudio">
          <h4>Podium Mic Audio</h4>
            <button className="VolumeUpButton">VOL UP</button>
            <button className="VolumeDownButton">VOL DOWN</button>
            <button className="MuteButton">MUTE</button>
        </div>
        <div className="WirelessMicAudio">
          <h4>Wireless Mic Audio</h4>
            <button className="VolumeUpButton">VOL UP</button>
            <button className="VolumeDownButton">VOL DOWN</button>
            <button className="MuteButton">MUTE</button>
        </div>
        <div className="VideoInputs">
          <h4>Video Inputs</h4>
          <button className="VideoInputButtons">Podium Laptop</button>
          <button className="VideoInputButtons">BluRay Player</button>
          <button className="VideoInputButtons">Screen Share</button>
          <button className="VideoInputButtons">Signage</button>
        </div>
        <div className="LightingScenes">
          <h4>Lighting Scenes</h4>
          <button className="LightingSceneButton">Presentation</button>
          <button className="LightingSceneButton">Video</button>
          <button className="LightingSceneButton">All On</button>
        </div>
        <div className="CameraPresets">
          <h4>Camera Presets</h4>
          <button className="CameraPresetButton">Presenter Near</button>
          <button className="CameraPresetButton">Presenter Far</button>
          <button className="CameraPresetButton">Wide Stage</button>
          <button className="CameraPresetButton">Wide Audience</button>
          <button className="CameraPresetButton">Left Audience</button>
          <button className="CameraPresetButton">Right Audience</button>
        </div>
        <button
          className="ShutdownButton"
          onMouseDown={showShutdownButtonHeldSubPage}
          onMouseUp={hideShutdownButtonHeldSubPage}
          onTouchStart={showShutdownButtonHeldSubPage}
          onTouchEnd={hideShutdownButtonHeldSubPage}
        >
          Hold to Power Off System
        </button>
      {shutdownButtonHeldSubPage && (
        <ShutdownButtonHeldSubPage
          setShutdownButtonHeldSubPage={setShutdownButtonHeldSubPage}
        />
      )}
    </div>
  );
}
