export default function LightingControls() {
  return (
    <fieldset className="absolute top-[745px] left-[350px] h-[435px] w-[400px] border-4 border-black rounded-xl">
      <legend>Lighting Scenes</legend>
      <button className="absolute top-[35px] left-[11px] h-[105px] w-[370px] bg-blue-900 rounded-md">
        Presentation
      </button>
      <button className="absolute top-[160px] left-[11px] h-[105px] w-[370px] bg-blue-900 rounded-md">
        Video
      </button>
      <button className="absolute top-[285px] left-[11px] h-[105px] w-[370px] bg-blue-900 rounded-md">
        All On
      </button>
    </fieldset>
  );
}
