const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new EventEmitter();
const server = require('./server')(client);
server.on('response', commandName =>{
  console.log(`Response: ${commandName}`);
})
rl.on('line', (input)=>{
  // client emit to server
  client.emit('command', input);
});