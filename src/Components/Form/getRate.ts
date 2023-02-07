import {Rates} from "./useAPI";

export type GetRate = (rates: Rates, startCurrency: string, endCurrency: string) => number;

export const getRate: GetRate = (rates, startCurrency, endCurrency) => {
    if (startCurrency === "PLN") {
        return rates[endCurrency];
    }

    if (startCurrency === endCurrency) {
        return 1;
    }

    return (1 / rates[startCurrency]) * rates[endCurrency];
};