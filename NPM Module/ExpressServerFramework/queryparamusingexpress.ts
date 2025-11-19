import express, { Request, Response } from "express";
import cors from "cors";


const app = express();
const PORT = 3000;


app.use(cors());


const orders = [
  { id: "O101", customer: "John Doe", amount: 1500, status: "pending" },
  { id: "O102", customer: "Jane Smith", amount: 3000, status: "shipped" },
  { id: "O103", customer: "Alice Brown", amount: 500, status: "delivered" },
  { id: "O104", customer: "David Johnson", amount: 7000, status: "pending" },
  { id: "O105", customer: "Chris Evans", amount: 2500, status: "shipped" },
];


// 📦 Route: Get Orders with Query Parameters
//http://localhost:3000/orders
//http://localhost:3000/orders?minAmount=1500status=pending&maxAmount=7000
app.get("/orders", (req: Request, res: Response) => {
  let filteredOrders = [...orders];
  // Filter by Status (pending, shipped, delivered)
  if (req.query.status) {
    filteredOrders = filteredOrders.filter(
      (o) =>
        o.status.toLowerCase() === (req.query.status as string).toLowerCase()
    );
  }


  // Filter by Amount Range
  if (req.query.minAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount >= parseInt(req.query.minAmount as string)
    );
  }
  if (req.query.maxAmount) {
    filteredOrders = filteredOrders.filter(
      (o) => o.amount <= parseInt(req.query.maxAmount as string)
    );
  }


  // Filter by Customer Name
  if (req.query.customer) {
    filteredOrders = filteredOrders.filter((o) =>
      o.customer
        .toLowerCase()
        .includes((req.query.customer as string).toLowerCase())
    );
  }


  res.json(filteredOrders);
});


// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`E-Commerce Order API running at http://localhost:${PORT}`);
});
