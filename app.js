// console.log("Hello Node.js");

// import {greetingUser} from './functions.js';

import fs from "fs";
import os from "os";
import path from "path";

const { promises } = fs;

const users = [
  { name: 'Mike', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Nicola', age: 17 },
];

const newData = [
  { name: "Anna", age: 24 },
  { name: "Tom", age: 52 },
];

// async function readData() {
//   fs.readFile('./data.json', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     let { users } = JSON.parse(data);

//     newData.map((item) => users.push(item));
//     fs.writeFile('data.json', `{"users": ${JSON.stringify(users)}}`, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log('Data written to file');
//       }
//     });
//   });
// }
// readData();

async function isExist(data) {
  try {
    await promises.stat(data);
    return true;
  } catch (err) {
    return false;
  }
}

const data = await isExist('./data.json');
console.log(data);

// console.log(__dirname);
// console.log(__filename);



// console.log(import.meta.url);
// console.log(new URL(import.meta.url).pathname);