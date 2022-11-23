import { useState, useRef, useEffect } from "react";
import "./style.css";

const Form = ({ getResult, getRate }) => {
  const currencies = [
    {
      id: 1,
      symbol: "PLN",
      rateUSD: 0.21301,
      rateEUR: 0.21307,
      rateCHF: 0.210728,
    },
    {
      id: 2,
      symbol: "USD",
      ratePLN: 4.6595,
      rateEUR: 1.00011,
      rateCHF: 0.989302,
    },
    {
      id: 3,
      symbol: "EUR",
      rateUSD: 0.999743,
      ratePLN: 4.6678,
      rateCHF: 0.989049,
    },
    {
      id: 4,
      symbol: "CHF",
      rateUSD: 1.01081,
      rateEUR: 1.01104,
      ratePLN: 4.74466,
    },
  ];
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState("PLN");
  const [endCurrency, setEndCurrency] = useState("PLN");
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    getResult(
      startCurrency,
      endCurrency,
      amount,
      getRate(currencies, startCurrency, endCurrency)
    );
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
              className="calculator__input"
              type="number"
              name="amount"
              min="0"
              step="any"
              onChange={({ target }) => setAmount(target.value)}
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
