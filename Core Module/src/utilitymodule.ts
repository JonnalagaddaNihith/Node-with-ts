import { inspect } from "util";

const deepObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          message: "Hello, from deep inside!",
        },
      },
    },
  },
};


console.log("🔹 Regular console.log:");
console.log(deepObject);


console.log("\n🔹 Using util.inspect (depth: null, colors: true):");
console.log(inspect(deepObject, { depth: null, colors: true }));