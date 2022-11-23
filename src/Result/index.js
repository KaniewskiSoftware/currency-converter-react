import "./style.css";

const Result = ({ result }) => {
  return (
    <section className="result">
      <p className="result__text">
        Wynik: <br />
        <span className="result__text">
          {result.value ? `${result.value} ${result.startCurrency} = ${result.value * result.rate.toFixed(2)} ${result.endCurrency}` : ``}
        </span>
      </p>
    </section>
  );
};

export default Result;
