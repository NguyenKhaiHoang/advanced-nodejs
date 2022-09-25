// process is an event emitter
process.on('exit', (code)=>{
  // do one final synchronous operation
  // before the node process terminates
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', err => {
  // something went unhandled
  // Do any cleanup and exit anyway

  console.log(err);

  // Force exit the process too
  process.exit(1);
})

// keep the event loop busy
process.stdin.resume();

// trigger a TypeError exception
console.dog();