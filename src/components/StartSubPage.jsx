import SystemStartingUpSubPage from "./SystemStartingUpSubPage";

export default function StartSubPage({setSystemStartingUpSubPage, setStartSubPage}) {

  const showSystemStartingUpSubPage = (event) => {
    event.preventDefault();
    setSystemStartingUpSubPage(true);
    setStartSubPage(false);
  }

  return (
    <div className="SubPage">
      <div className="CornerTitle">
        <h3>Sample Theater Name</h3>
        <p>Touch Panel Location</p>
      </div>
      <button onClick={showSystemStartingUpSubPage}>Tap to Start System</button>
    </div>
  );
}
