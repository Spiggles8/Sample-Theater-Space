import { useState } from "react";
import AudioControls from "./AudioControls";
import CameraControls from "./CameraControls";
import ShutdownButtonHeldSubPage from "./ShutdownButtonHeldSubPage";
import VideoControls from "./VideoControls";
import LightingControls from "./LightingControls";
import ShutdownButton from "./ShutdownButton";

export default function ControlsSubPage({ setActiveSubPageNumber }) {
  const [shutdownButtonHeldSubPage, setShutdownButtonHeldSubPage] =
    useState(false);

  return (
    <div className="text-white text-2xl">
      <AudioControls />
      <VideoControls />
      <LightingControls />
      <CameraControls />
      <ShutdownButton
        setShutdownButtonHeldSubPage={setShutdownButtonHeldSubPage}
        setActiveSubPageNumber={setActiveSubPageNumber}
      />
      {shutdownButtonHeldSubPage && <ShutdownButtonHeldSubPage />}
    </div>
  );
}
