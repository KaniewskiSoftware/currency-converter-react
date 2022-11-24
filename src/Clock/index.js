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
      <p className="header__clock">
        Dzisiaj jest {theDate.toLocaleDateString("pl", { weekday: "long" })}
        {", "}
        {theDate.toLocaleDateString("pl", { day: "numeric", month: "long" })}
        {", "}
        {theDate.toLocaleDateString("pl", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
    </header>
  );
};

export default Clock;
