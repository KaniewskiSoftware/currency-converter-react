import { useState, useEffect } from "react";
import { Header } from "./styled";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

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
    <Header>
      Dzisiaj jest
      {" "}
      {formatDate(theDate)}
    </Header>
  );
};

export default Clock;
