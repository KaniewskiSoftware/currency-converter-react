import "./style.css";

const Form = () => (
  <form className="calculator js-calculator">
    <fieldset className="calculator__fieldset">
      <legend className="calculator__title">Kalkulator Walut</legend>
      <p>
        <label>
          <span className="calculator__text">Kwota:</span>
          <input
            className="calculator__input js-amount"
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
            className="calculator__input js-startCurrency"
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
            className="calculator__input js-endCurrency"
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

export default Form;
