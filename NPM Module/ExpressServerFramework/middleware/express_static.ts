import express, { Request, Response } from "express";
import path from "path";
const appServer = express();
// Serve static files under /orders
appServer.use("/orders", express.static(path.join(__dirname, "public")));
// Explicit route to return order.json
appServer.get("/orders", (req: Request, res: Response) => {
  //console.log(path.join(__dirname, "public", "orderdata.json").toString());
  res.sendFile(path.join(__dirname, "public", "order.json"));
});
//http://localhost:3000/orders
appServer.listen(3000, () => {
  console.log("server is running");
});
