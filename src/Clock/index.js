import { useState, useEffect } from "react";
import "./style.css";

const Clock = () => {
  const [theDate, setTheDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="header">
      <span>
        Dzisiaj jest {theDate.toLocaleDateString("pl", { weekday: "long" })}
      </span>
      {","}&nbsp;
      <span>
        {theDate.toLocaleDateString("pl", { day: "numeric", month: "long" })}
      </span>
      {","}&nbsp;
      <span>
        {theDate.toLocaleTimeString("pl", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </span>
    </header>
  );
};

export default Clock;
