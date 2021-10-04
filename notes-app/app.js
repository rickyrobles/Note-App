//lesson1
// const fs = require("fs");

// // fs.writeFileSync("notes.txt", "My name is Jovelyn");
// fs.appendFileSync("notes.txt", " Im from Sorsogon");
// require("./utils.js");

// const name = "Jovelyn";

// console.log(name);
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");
// const msg = getNotes();
// console.log(msg);

// const greenMsh = chalk.blue.inverse.bold("Success");
// console.log(greenMsh);

// console.log(process.argv[2]);
//Customize yargs version
yargs.version("1.1.0");

// Create Add command
yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  }
});
