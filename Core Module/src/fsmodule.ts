import * as fs from "fs"
fs.writeFileSync("example.txt","This is a test msg")
console.log(fs.readFileSync("example.txt").toString())