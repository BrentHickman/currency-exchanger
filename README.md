# Currency Exchanger

#### Check the exchange value of the US Dollar

#### By Brent Hickman

## Technologies Used

* Javascript
* CSS
* HTML
* ExchangeRate-API
* Webpack

## User inputs a US Dollar ammount and will get that value in another chosen currency based on current exchange rates by entering a Currency Code.

## Setup/Installation Requirements

* Visit the [ExchangeRate-API](https://www.exchangerate-api.com) site. Input your email address and click the "Get Free Key" button.
* Create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
* Navigate to your dashboard and locate your API key.
* Open a terminal window and clone this repository by entering into the command line:
> git clone https://github.com/BrentHickman/currency-exchanger.git
* Install the nessesary dependencies by entering into the command line:
> npm install
* Create a .env file in the root of the project and add your ExchangeRate-API key in to the API_KEY variable:
> API_KEY=_This is where you'll add your ExchangeRate-API key_
* To launch a development server, enter into the command line:
> npm run start
* To create a production build to the dist directory, enter into the command line:
> npm run build

## Known Bugs

* _*Exchange rates may not be up to the minute accurate_

## License

* [MIT](https://opensource.org/licenses/MIT)