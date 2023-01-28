import axios from 'axios';

const options = {
    "method": "GET",
    "hostname": "rest.coinapi.io",
    "path": "/v1/exchangerate/BTC?invert=false",
    "headers": {'X-CoinAPI-Key': '817211F9-C239-4AF8-AA46-18E525CA168B'}
};

export const coinApi = axios.getUri(options, function (response) {
    const chunks = [];
    response.on("data", function (chunk) {
      chunks.push(chunk);
    });
  });
   
  coinApi.end();