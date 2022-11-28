export default function CameraControls() {
  return (
    <fieldset className="absolute top-[745px] left-[880px] h-[435px] w-[635px] border-4 border-black rounded-xl">
      <legend>Camera Presets</legend>
      <button className="absolute top-[35px] left-[11px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Presenter Near
      </button>
      <button className="absolute top-[150px] left-[11px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Presenter Far
      </button>
      <button className="absolute top-[270px] left-[11px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Wide Stage
      </button>
      <button className="absolute top-[35px] left-[300px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Wide Audience
      </button>
      <button className="absolute top-[150px] left-[300px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Left Audience
      </button>
      <button className="absolute top-[270px] left-[300px] h-[105px] w-[250px] bg-blue-900 rounded-md">
        Right Audience
      </button>
    </fieldset>
  );
}
