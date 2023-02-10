import ExchangeService from './exchange-service.js';

export function exchangeDollars(exchangeCurrency, dollarAmmount) {
  let exchangePromise = ExchangeService.exchangeDollars(exchangeCurrency);
  exchangePromise.then(function(exchangeDataArray) {
    let exchangeRate = exchangeDataArray.conversion_rates[exchangeCurrency];
    let exchangedAmmount = (dollarAmmount * exchangeRate).toFixed(2);
      printExchange(exchangedAmmount, exchangeRate, exchangeCurrency, dollarAmmount);
  }, function(errorArray) {
    printError(errorArray);
  });
}