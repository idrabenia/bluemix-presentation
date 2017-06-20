const request = require('request');


function main () {
  const url = process.env.TARGET_URL;
  const deviceId = process.env.INSTANCE_GUID;

  setInterval(() => sendData(url, deviceId), 1000);
}


function sendData(url, deviceId) {
  let options = {
    uri: url, method: 'POST',
    json: { deviceId: deviceId, value: Math.random() * 100 }
  };

  request(options, processError);
}


function processError (error, response, body) {
  if (error || response.statusCode !== 200) {
    const msg = `Error: ${error && error.message || JSON.stringify(response)}`;
    console.log(msg);
  }
}

main();