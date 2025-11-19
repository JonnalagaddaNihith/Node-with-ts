import express, { Request, Response } from "express";
let appServer = express();
appServer.use(express.json());
appServer.post("/placeorder", (req: Request, res: Response) => {
    console.log(req?.body);
    let { customerName, phoneNumber, address, items } = req?.body; //destructuring the data
    console.log(customerName);
    console.log(phoneNumber);
    res
    .status(200)
    .send(
    `Received your request ${customerName}. You will receive your order soon`
    );
});
appServer.listen(3000, () => {
    console.log("server is running");
});
