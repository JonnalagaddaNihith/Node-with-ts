import * as fs from "fs";


function echo(name: string) {
  console.log(name);
}
// Write file asynchronously
fs.writeFile(
  "exampleasync.txt",
  "Hello, Node.js with TypeScript (Async)!",
  (err) => {
    if (err) throw err;
    console.log("File written successfully.");
    fs.readFileSync("exampleasync.txt");
  }
);


echo("sudha");
console.log("Line no 16 got executed")
fs.readFile("example.txt", (err, data) => {
  if (err) throw err;
 console.log("File Content:", data);
});
console.log("Line no 21 got executed");


fs.appendFile("example.txt", "\nAppending async content...", (err) => {
  if (err) throw err;
  console.log("Content appended.");
});
console.log("Line no 27 got executed");
//delete a file from the filesystem.
// fs.unlink("example.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted.");
// });
