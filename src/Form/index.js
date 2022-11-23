import { useState, useRef, useEffect } from "react";
import "./style.css";
import { currencies } from "../currencies/currencies";

const Form = ({ getResult, getRate }) => {
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState(currencies[0].symbol);
  const [endCurrency, setEndCurrency] = useState(currencies[0].symbol);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  },[]);

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
    <form className="calculator" onSubmit={onFormSubmit}>
      <fieldset className="calculator__fieldset">
        <legend className="calculator__title">Kalkulator Walut</legend>
        <p>
          <label>
            <span className="calculator__text">Kwota:</span>
            <input
              ref={ref}
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="calculator__input"
              type="number"
              name="amount"
              min="0"
              step="any"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="calculator__text">Waluta początkowa:</span>
            <select
              value={startCurrency}
              onChange={({ target }) => setStartCurrency(target.value)}
              className="calculator__input"
              name="startCurrency"
            >
              {currencies.map(({ id, symbol }) => (
                <option key={id} value={symbol}>
                  {symbol}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <label>
            <span className="calculator__text">Waluta docelowa:</span>
            <select
              value={endCurrency}
              onChange={({ target }) => setEndCurrency(target.value)}
              className="calculator__input"
              name="endCurrency"
            >
              {currencies.map(({ id, symbol }) => (
                <option key={id} value={symbol}>
                  {symbol}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="calculator__input calculator__input--special">
            Przelicz
          </button>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
