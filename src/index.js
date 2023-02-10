import ExchangeService from './exchange-service.js';

function exchangeDollars(exchangeCurrency, dollarAmmount) {
  let exchangePromise = ExchangeService.exchangeDollars(exchangeCurrency);
  exchangePromise.then(function(exchangeDataArray) {
    let exchangeRate = exchangeDataArray.conversion_rates[exchangeCurrency];
    let exchangedAmmount = (dollarAmmount * exchangeRate).toFixed(2);
      printExchange(exchangedAmmount, exchangeRate, exchangeCurrency, dollarAmmount);
  }, function(errorArray) {
    printError(errorArray);
  });
}

//UI

function printExchange(exchangedAmmount, exchangeRate, exchangeCurrency, dollarAmmount) {
  let exchangeRateMessage = document.createElement('p');
  let exchangeResult = document.createElement('p');

  exchangeRateMessage.innerText = `The current exchange rate for ${exchangeCurrency} is USD x ${exchangeRate}.`
  document.querySelector('#showExchange').append(exchangeRateMessage);

  exchangeResult.innerText = `$${dollarAmmount} USD exchanges to ${exchangedAmmount} ${exchangeCurrency}`;
  document.querySelector('#showExchange').append(exchangeResult);
}

function printError(error) {
  document.querySelector('#showExchange').innerText = `There was an error accessing the exchange data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const dollarAmmount = document.querySelector('#usDollar').value;
  document.querySelector('#usDollar').value = null;
  const exchangeCurrency = document.querySelector('#exchangeToCurrency').value;
  document.querySelector('#exchangeToCurrency').value = null;
  exchangeDollars(exchangeCurrency, dollarAmmount);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});