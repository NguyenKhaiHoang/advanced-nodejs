const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster){
  const cpus = os.cpus().length;
  for (let i=0; i<cpus;i++){
    cluster.fork();
  }

  Object.values(cluster.workers).forEach(worker => {
    worker.send(`Hello worker ${worker.id}`);
  });

  cluster.on('exit', (worker, code, signal) => {
    if (code!== 0 && !worker.exitedAfterDisconnect){
      console.log(`Worker ${worker.id} cashed. ` + 'Starting a new worker...');
    }
    cluster.fork();
  })

} else {
  require('./server');
}
