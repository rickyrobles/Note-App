// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday"
// };
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
