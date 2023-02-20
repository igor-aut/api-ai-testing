const axios = require('axios');

let iterate = (json) => {

    for (let i = 0; i < 5; i++) {
        let name = json.data[i].symbol;
        let price = json.data[i].quote.USD.price;
        console.log(name + ': $' + price);
    }
}

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '0d60e431-aa60-4f39-83e3-880b21e72b0a',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    iterate(json);
    resolve(json);
  }
});