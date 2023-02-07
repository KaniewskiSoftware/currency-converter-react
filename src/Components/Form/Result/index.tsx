import {Section, Span} from "./styled";
import {ResultType} from "../index";

type ResultProps = {
    result: ResultType;
}
const Result = ({result}: ResultProps) => (
    <Section>
        <Span as="p">
            Wynik: <br/>
            <Span>
                {(result.value && result.rate)
                    ? `${result.value} ${result.startCurrency} = ${
                        +result.value * +result.rate.toFixed(2)
                    } ${result.endCurrency}`
                    : ``}
            </Span>
        </Span>
    </Section>
);


export default Result;
