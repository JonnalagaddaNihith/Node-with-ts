import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// GET /products
app.get("/products", async (req: Request, res: Response) => {
try {
    const response = await axios.get("https://dummyjson.com/products");
    res.json(response.data);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching data" });
}
});

app.listen(PORT, () => {
console.log(`Server running`);
});
