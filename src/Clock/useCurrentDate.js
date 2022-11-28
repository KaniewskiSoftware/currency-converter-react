import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [theDate, setTheDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTheDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return theDate;
};
