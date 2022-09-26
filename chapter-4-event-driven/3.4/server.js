const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client){
    super();
    client.on('command', commandName =>{
      this.emit('response', commandName);
    })
  }
}

module.exports = (client) => new Server(client);