// local - modules
const {a, add} = require("./local-1");
const {a: a2, add: add2} = require("./local-1");

console.log(add2(3, 4, 6));

// built- in - modules

const path = require("path");
console.log(path.join("D:/learning-node/", " local-1.js"));
