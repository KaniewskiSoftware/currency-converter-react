import { useState } from "react";
import "./style.css";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState("");
  const [endCurrency, setEndCurrency] = useState("");

  return (
    <form className="calculator">
      <fieldset className="calculator__fieldset">
        <legend className="calculator__title">Kalkulator Walut</legend>
        <p>
          <label>
            <span className="calculator__text">Kwota:</span>
            <input
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
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
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
              <option value="PLN">PLN</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
