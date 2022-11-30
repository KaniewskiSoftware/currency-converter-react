import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://api.exchangerate.host/latest?base=PLN";

export const useAPI = () => {
  const [rates, setRates] = useState();
  const [date, setDate] = useState();
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const getData = () => {
      axios
        .get(URL)
        .then((response) => {
          setRates(response.data.rates);
          setDate(response.data.date);
          setStatus("success");
        })
        .catch((error) => {
          console.error("Something bad happened!", error);
          setStatus("error");
        });
    };

    setTimeout(getData, 2000);
  }, []);
  return { rates, status, date };
};
