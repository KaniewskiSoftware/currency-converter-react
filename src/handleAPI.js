import axios from "axios";
import { useState, useEffect } from "react";

export const useAPI = () => {
  const [rates, setRates] = useState();
  const [status, setStatus] = useState("pending");
  const url = "https://api.exchangerate.host/latest?base=PLN";

  useEffect(() => {
    const getData = () => {
      const response = axios.get(url);
      response
        .then((response) => {
          console.log(response);
          setRates(response.data.rates);
          setStatus("success");
        })
        .catch((error) => {
          console.log("Something bad happened!", error);
          setStatus("error");
        });
    };
    setTimeout(getData, 2000);
  }, []);
  console.log(rates);
  return { rates, status };
};

// axios.get("https://api.exchangerate.host/latest")
// .then

// var requestURL = "https://api.exchangerate.host/latest";
// var request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   var response = request.response;
//   console.log(response);
// };
