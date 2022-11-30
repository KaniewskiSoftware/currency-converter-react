export const getRate = (rates, startCurrency, endCurrency) => {
    if (startCurrency === "PLN") {
      return rates[endCurrency];
    }

    if (startCurrency === endCurrency) {
      return 1;
    }

    return (1 / rates[startCurrency]) * rates[endCurrency];
  };