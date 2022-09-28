const fs = require('fs');

function readFileSize(filename, cb){
  if (typeof filename !== 'string'){
    return process.nextTick(
      cb,
      new TypeError('argument should be string')
    );
  }

  fs.stat(filename, (err, stats)=>{
    if (err) return cb(err);
    cb(null, stats.size);
  });
}

readFileSize(1, (err, size)=>{
  if (err) throw err;
  console.log(`Size: ${size}`);
})

console.log('Hi!');