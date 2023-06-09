import React, { useState } from "react";
import "../components/StartStop.css";
import Timer from "../components/Timer";
import ControlButtons from "../components/ControlButtons";
import { type } from "os";


const StartStop = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="stop-watch">
      <p className="fs-1" id="headline">
        Start Travel
      </p>
      <p className="fs-1">Time passed</p>

      <Timer time={time} />
      <span className="DistanceText">{"Distance"}</span>
      <span className="DistanceDigits">{"00.00km"}</span>

      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
      />
    </div>
  );
};

export default StartStop;