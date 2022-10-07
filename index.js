const app = require('./app');
const appWs = require('./ws');

const server = app.listen(process.env.PORT || 3010, () => {
  console.log(`App Express is running!`);
});

appWs(server);
