const fs = require('fs');

const readFileAsArray = (file, cb) => {
  fs.readFile(file, (err, data)=>{
    if (err) return cb(err);
    const lines = data.toString().trim().split('\r\n');
    cb(null, lines);
  })
}

readFileAsArray('./numbers', (err, lines)=>{
  if (err) throw err;
  lines = lines.map(Number);
  const oddNumbers = lines.filter(element => element % 2 === 1);
  console.log(`OddNumbers length is ${oddNumbers.length}`);
})