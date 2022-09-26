const fs = require('fs');

const readFileAsArray = (file) => {
  return new Promise((resolve, reject)=>{
    fs.readFile(file, (err, data)=>{
      if (err) reject(err);
      resolve(data.toString().trim().split(`\r\n`));
    })
  })
}

readFileAsArray('./numbers').then((lines)=>{
  lines = lines.map(Number);
  const oddNumbers = lines.filter(element => element % 2 === 1);
  console.log(`OddNumbers length is ${oddNumbers.length}`);
}).catch(err=>console.log(err));