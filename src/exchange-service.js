export default class ExchangeService {  
  static exchangeDollars(startCurrency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${startCurrency}`;
      request.addEventListener("loadend", function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, startCurrency]);
        } else {
          reject([this, response, startCurrency]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

