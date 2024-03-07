const { ApiError, Client, Environment } = require('square');

// Determine if the application is running in production or sandbox mode
const isProduction = process.env.NODE_ENV === 'production';

// Directly assign your Square access token here
const SQUARE_ACCESS_TOKEN = 'EAAAl4uAAKHNLsNGP1RxWM17XSyIyEGo6fC7GQUg2ixmixPyZ04yzgyRaO8bluVo';

const client = new Client({
  environment: isProduction ? Environment.Production : Environment.Sandbox,
  accessToken: SQUARE_ACCESS_TOKEN,
});

module.exports = { ApiError, client };
