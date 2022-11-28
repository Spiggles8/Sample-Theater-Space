export default function AudioControls() {
  return (
    <div className="absolute top-[15px] left-[60px] h-[675px] w-[960px] text-center">
      {/* Program Audio Fieldset */}
      <fieldset className="border-4 border-black rounded-xl absolute top-[15px] left-[60px] h-[675px] w-[275px]">
        <legend>Program Audio</legend>

        {/* Program Audio Volume */}
        <div className="absolute top-[40px] left-[25px] w-[75px] bg-gray-200 rounded-full h-[560px] dark:bg-gray-700">
          <div
            className="bg-blue-600 h-full rounded-full transition-[height]"
            style={{ height: "70%" }}
          ></div>
        </div>

        {/* Program Audio Volume Up Button */}
        <button className="absolute top-[100px] left-[150px] h-[110px] w-[100px] bg-green-400 rounded items-center">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2zM18 30a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL UP
        </button>

        {/* Program Audio Volume Down Button */}
        <button className="absolute top-[300px] left-[150px] h-[110px] w-[100px] bg-yellow-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M22 15h10v2H22zm-4 15a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL DOWN
        </button>

        {/* Program Audio Mute Button */}
        <button className="absolute top-[500px] left-[150px] h-[110px] w-[100px] bg-red-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536l-1.414 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.464l1.414-1.414L19 10.586l3.536-3.536l1.414 1.414L20.414 12z"
              />
            </svg>
          </a>
          MUTE
        </button>
      </fieldset>

      {/* Podium Microphone Audio Fieldset */}
      <fieldset className="border-4 border-black rounded-xl absolute top-[15px] left-[355px] h-[675px] w-[275px]">
        <legend>Podium Mic Audio</legend>

        {/* Podium Microphone Volume */}
        <div className="absolute top-[40px] left-[25px] w-[75px] bg-gray-200 rounded-full h-[560px] dark:bg-gray-700">
          <div
            className="bg-blue-600 h-full rounded-full transition-[height]"
            style={{ height: "70%" }}
          ></div>
        </div>

        {/* Podium Microphone Volume Up Button */}
        <button className="absolute top-[100px] left-[150px] h-[110px] w-[100px] bg-green-400 rounded items-center">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2zM18 30a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL UP
        </button>

        {/* Podium Microphone Volume Down Button */}
        <button className="absolute top-[300px] left-[150px] h-[110px] w-[100px] bg-yellow-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M22 15h10v2H22zm-4 15a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL DOWN
        </button>

        {/* Podium Microphone Mute Button */}
        <button className="absolute top-[500px] left-[150px] h-[110px] w-[100px] bg-red-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536l-1.414 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.464l1.414-1.414L19 10.586l3.536-3.536l1.414 1.414L20.414 12z"
              />
            </svg>
          </a>
          MUTE
        </button>
      </fieldset>

      {/* Wireless Microphone Audio Fieldset */}
      <fieldset className="border-4 border-black rounded-xl absolute top-[15px] left-[700px] h-[675px] w-[275px]">
        <legend>Wireless Mic Audio</legend>

        {/* Wireless Microphone Volume */}
        <div className="absolute top-[40px] left-[25px] w-[75px] bg-gray-200 rounded-full h-[560px] dark:bg-gray-700">
          <div
            className="bg-blue-600 h-full rounded-full transition-[height]"
            style={{ height: "70%" }}
          ></div>
        </div>

        {/* Wireless Microphone Volume Up Button */}
        <button className="absolute top-[100px] left-[150px] h-[110px] w-[100px] bg-green-400 rounded items-center">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M32 15h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2zM18 30a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL UP
        </button>

        {/* Wireless Microphone Volume Down Button */}
        <button className="absolute top-[300px] left-[150px] h-[110px] w-[100px] bg-yellow-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M22 15h10v2H22zm-4 15a.997.997 0 0 1-.71-.297L9.665 22H3a1 1 0 0 1-1-.999V11a1 1 0 0 1 .999-1h6.667l7.623-7.703A1 1 0 0 1 19 3v26a1 1 0 0 1-1 1z"
              />
            </svg>
          </a>
          VOL DOWN
        </button>

        {/* Wireless Microphone Mute Button */}
        <button className="absolute top-[500px] left-[150px] h-[110px] w-[100px] bg-red-400 rounded">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16zm14.525-4l3.536 3.536l-1.414 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.464l1.414-1.414L19 10.586l3.536-3.536l1.414 1.414L20.414 12z"
              />
            </svg>
          </a>
          MUTE
        </button>
      </fieldset>
    </div>
  );
}
