import axios, {AxiosResponse} from "axios";
import {useState, useEffect} from "react";

export interface Rates {
    readonly [index: string]: number,
}

type GetDataResponse = {
    base: "PLN",
    date: string,
    motd: { [index: string]: string },
    rates: Rates,
    success: string,
}

const URL = "https://api.exchangerate.host/latest?base=PLN";

export const useAPI = () => {
    const [rates, setRates] = useState<Rates>({});
    const [date, setDate] = useState<string>("");
    const [status, setStatus] = useState<string>("pending");

    useEffect(() => {
        const getData = () => {
            axios
                .get(URL)
                .then((response: AxiosResponse<GetDataResponse>) => {
                    setRates(response.data.rates);
                    setDate(response.data.date);
                    setStatus("success");
                })
                .catch((error) => {
                    console.error("Something bad happened!", error);
                    setStatus("error");
                });
        };

        setTimeout(getData, 2000);
    }, []);
    return {rates, status, date};
};
