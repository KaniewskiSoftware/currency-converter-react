import { Section, Span } from "./styled";

const Result = ({ result }) => {
  return (
    <Section>
      <Span as="p">
        Wynik: <br />
        <Span>
          {result.value
            ? `${result.value} ${result.startCurrency} = ${
                result.value * result.rate.toFixed(2)
              } ${result.endCurrency}`
            : ``}
        </Span>
      </Span>
    </Section>
  );
};

export default Result;
