#!/usr/bin/env node

const sharp = require("sharp");

console.log(sharp.version);
console.log(sharp.versions);

console.log(sharp.format.png);

async function openFile(input) {
  console.log(input);
  return await sharp(input).metadata();
}

openFile(`${__dirname}/gatsby-icon.png`)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
