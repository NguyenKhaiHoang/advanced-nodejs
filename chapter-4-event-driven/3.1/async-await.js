const fs = require("fs");

const readFileAsArray = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      const lines = data.toString().trim().split("\r\n");
      resolve(lines);
    });
  });
};

const countOdd = async () => {
  try {
    const lines = await readFileAsArray("./numbers");
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter((element) => element % 2 === 1);
    console.log(`oddNumbers length is ${oddNumbers.length}`);
  } catch (error) {
    console.log(error);
  }
};

countOdd();
