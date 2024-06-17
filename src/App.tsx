import { useState, useEffect } from "react";

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return { hours, minutes, seconds };
}

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
      setCurrentTime(getCurrentTime());
  }, [currentTime]);

  const { hours, minutes, seconds } = currentTime;

  const timerStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  return (
	<>
    <div className="bg-black w-screen h-screen flex items-center justify-center" style={timerStyle}>
	<div className="text-white  gap-5 text-9xl font-extrabold flex items-center justify-center">
      <p className="">{hours}</p>
      <span className="text-6xl">:</span>
      <p>{minutes}</p>
      <span className="text-6xl">:</span>
      <p>{seconds}</p>
	</div>
	<div className="text-lg text-white absolute right-0 bottom-0 p-10" style={timerStyle}>
		Stay focus
	</div>
    </div>
	</>
  );
}

export default App;
