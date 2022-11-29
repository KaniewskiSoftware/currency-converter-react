import { useState, useRef, useEffect } from "react";
import { Calculator, Fieldset, Legend, Span, Input } from "./styled";
import { currencies } from "../../currencies/currencies";
// import { useAPI } from "./useAPI";
import {rates,status,date} from "./API"

const Form = ({ getResult}) => {
  // const {rates, status, date} = useAPI();
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState("PLN");
  const [endCurrency, setEndCurrency] = useState("USD");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);
  // console.log(rates[`${startCurrency}`])
  const getRate = (rates, startCurrency, endCurrency) => {
    if (startCurrency === endCurrency) {
      return 1;
    }
    else if (startCurrency === "PLN") {
      return rates[`${endCurrency}`]
    }

    return ((1/rates[`${startCurrency}`])*rates[`${endCurrency}`])
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getResult(
      startCurrency,
      endCurrency,
      amount,
      getRate(rates, startCurrency, endCurrency)
    );
    ref.current.focus();
  };

  return (
    <Calculator onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator Walut</Legend>
        <p>
          <label>
            <Span>Kwota:</Span>
            <Input
              ref={ref}
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              type="number"
              name="amount"
              min="0"
              step="any"
            />
          </label>
        </p>
        <p>
          <label>
            <Span>Waluta początkowa:</Span>
            <Input
              as="select"
              value={startCurrency}
              onChange={({ target }) => setStartCurrency(target.value)}
              name="startCurrency"
            >
              {Object.keys(rates).map((symbol => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              )))}
            </Input>
          </label>
        </p>
        <p>
          <label>
            <Span>Waluta docelowa:</Span>
            <Input
              as="select"
              value={endCurrency}
              onChange={({ target }) => setEndCurrency(target.value)}
              name="endCurrency"
            >
              {Object.keys(rates).map((symbol => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              )))}
            </Input>
          </label>
        </p>
        <p>
          <Input as="button" special>
            Przelicz
          </Input>
        </p>
      </Fieldset>
    </Calculator>
  );
};

export default Form;
