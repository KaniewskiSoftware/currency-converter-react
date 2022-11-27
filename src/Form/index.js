import { useState, useRef, useEffect } from "react";
import { Calculator, Fieldset, Legend, Span, Input } from "./styled";

import { currencies } from "../currencies/currencies";

const Form = ({ getResult, getRate }) => {
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState(currencies[0].symbol);
  const [endCurrency, setEndCurrency] = useState(currencies[1].symbol);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    getResult(
      startCurrency,
      endCurrency,
      amount,
      getRate(currencies, startCurrency, endCurrency)
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
              {currencies.map(({ id, symbol }) => (
                <option key={id} value={symbol}>
                  {symbol}
                </option>
              ))}
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
              {currencies.map(({ id, symbol }) => (
                <option key={id} value={symbol}>
                  {symbol}
                </option>
              ))}
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
