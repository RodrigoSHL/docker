var cron = require('node-cron');

let count = 0;

cron.schedule('1-59/5 * * * * *', () => {
    count++;
  console.log('Tic every 5 seconds / times called: ', count);
});

console.log('first');