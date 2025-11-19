import express, { Request, Response, NextFunction } from "express";
const app = express();
app.use(express.json());
// Middleware 1: Log incoming order requests
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
console.log(
    `[Middleware 1] Incoming order request at ${new Date().toISOString()}`
);
next();
});
// Middleware 2: Validate required fields in order body
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
const { customerName, foodItem, quantity } = req.body;
if (!customerName || !foodItem || !quantity) {
    res.status(400).json({ error: "Missing required order fields!" });
    return; // no return res.status(...) here, just return;
}
console.log(`[Middleware 2] Order fields validated`);
next();
});


// Middleware 3: Check if quantity is reasonable
app.use("/order", (req: Request, res: Response, next: NextFunction) => {
const { quantity } = req.body;
if (quantity <= 0 || quantity > 20) {
    res.status(400).json({ error: "Quantity must be between 1 and 20." });
    return;
}
console.log(`[Middleware 3] Quantity check passed`);
next();
});


// Final route handler: Process order
app.post("/order", (req: Request, res: Response) => {
const { customerName, foodItem, quantity } = req.body;
res.json({
    message: `Thank you, ${customerName}! Your order for ${quantity} ${foodItem}(s) has been received & it will be proceessed soon`,
});
});


app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
