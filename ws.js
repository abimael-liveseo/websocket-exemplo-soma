const WebSocket = require('ws');

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {

    let cmd = data.toString().split('|')[0];
    let firstValue = parseInt(data.toString().split('|')[1]);
    let secondValue = parseInt(data.toString().split('|')[2]);

    switch (cmd) {
        case 'soma':
            ws.send(firstValue + secondValue);
            break;
        case 'subtrai':
            ws.send(firstValue - secondValue);
            break;
    }
    
}

function onConnection(ws, req) {
  ws.on('message', (data) => onMessage(ws, data));
  ws.on('error', (error) => onError(ws, error));
  console.log(`onConnection`);
}

module.exports = (server) => {
  const wss = new WebSocket.Server({
    server,
  });

  wss.on('connection', onConnection);

  console.log(`App Web Socket Server is running!`);
  return wss;
};
