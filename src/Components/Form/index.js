import { useState, useRef } from "react";
import Result from "./Result";
import { Calculator, Fieldset, Legend, Span, Input } from "./styled";
import { useAPI } from "./useAPI";
import { getRate } from "./getRate";

const Form = () => {
  const { rates, status, date } = useAPI();
  const [amount, setAmount] = useState("");
  const [startCurrency, setStartCurrency] = useState("PLN");
  const [endCurrency, setEndCurrency] = useState("USD");
  const [result, setResult] = useState({});
  const ref = useRef();

  const getResult = (startCurrency, endCurrency, value, rate) => {
    setResult((result) => ({
      ...result,
      startCurrency: startCurrency,
      endCurrency: endCurrency,
      value: value,
      rate: rate,
    }));
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
  if (status === "pending") {
    return (
      <>
        <Legend>Kalkulator Walut</Legend>
        <Input as="p">
          Sekundka <br />
          Ładuję kursy walut z exchangerate.host... 😎
        </Input>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <Legend>Kalkulator Walut</Legend>
        <Input as="p" error>
          Hmmm... Coś poszło nie tak 🤯 Sprawdź czy masz połączenie z
          internetem.
          <br />
          Jeśli masz... to wygląda na to, że to nasza wina. Może spróbuj
          później? 😜
        </Input>
      </>
    );
  }

  const selectOptions = Object.keys(rates);

  return (
    <>
      <Calculator onSubmit={onFormSubmit}>
        <Fieldset>
          <Legend>Kalkulator Walut</Legend>
          <p>
            <label>
              <Span>Kwota:</Span>
              <Input
                autoFocus
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
                {selectOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
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
                {selectOptions.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
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
          <p>
            <Span info>
              Kursy walut pobierane są z exchangerate.host
              <br />
              Aktualne na dzień: {date}
            </Span>
          </p>
        </Fieldset>
      </Calculator>
      <Result result={result} />
    </>
  );
};

export default Form;
