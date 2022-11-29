import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState({
    startCurrency: "PLN",
    endCurrency: "PLN",
    value: "",
    rate: 1,
  });

  const getResult = (startCurrency, endCurrency, value, rate) => {
    setResult((result) => ({
      ...result,
      startCurrency: startCurrency,
      endCurrency: endCurrency,
      value: value,
      rate: rate,
    }));
  };

  return (
    <Container>
      <Clock />
      <Form getResult={getResult}/>
      <Result result={result} />
    </Container>
  );
}

export default App;
