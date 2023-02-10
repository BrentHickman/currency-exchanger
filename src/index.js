import ExchangeService from './exchange-service.js';

//Business Logic

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

//UI logic

//print message

function printExchange(exchangedAmmount, exchangeRate, exchangeCurrency, dollarAmmount) {
  let exchangeRateMessage = document.createElement('p');
  let exchangeResult = document.createElement('p');
  if (isNaN(exchangeRate)) {
    exchangeRateMessage.innerText = `Could not find exchange rate for ${exchangeCurrency}. Please check Currency Code.`;
    document.querySelector('#showExchange').append(exchangeRateMessage);
  } else if (isNaN(dollarAmmount)) {
    exchangeResult.innerText = `${dollarAmmount} is not a number. Please try again.`;
    document.querySelector('#showExchange').append(exchangeResult);
  }
  else {
    exchangeRateMessage.innerText = `The current exchange rate for ${exchangeCurrency} is USD x ${exchangeRate}.`;
    document.querySelector('#showExchange').append(exchangeRateMessage);
    exchangeResult.innerText = `$${dollarAmmount} USD exchanges to ${exchangedAmmount} ${exchangeCurrency}`;
    document.querySelector('#showExchange').append(exchangeResult);
  }
}

//handle API error

function printError(error) {
  document.querySelector('#showExchange').innerText = `There was an error accessing the exchange data for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

//collect input

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