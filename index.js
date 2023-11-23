// local module

// const myModule = require("./local-1");
const { add, a } = require("./local-1");
const { add: add2, a: a2 } = require("./local-2");

// console.log(myModule.add(2, 3));
console.log(add(2, 3));
console.log(add2(2, 3));

// built-in modules
const path = require("path");
console.log(
  path.dirname(
    "/D:/OneDrive - Independent University, Bangladesh/LEVEL 2/Module 7/index.js"
  )
);

console.log(
  path.join(
    "/D:/OneDrive - Independent University, Bangladesh/LEVEL 2/Module 7/index.js",
    "local-1.js"
  )
);
