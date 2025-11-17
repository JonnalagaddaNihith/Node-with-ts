import * as http from "http";


const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader("Content-Type", "application/json");


  // Routing logic
  if (req.url === "/") {
    //http://localhost:3000/
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Welcome to Home Page!" }));
  } else if (req.url === "/about") {
    //http://localhost:3000/about
    res.writeHead(200);
    res.end(JSON.stringify({ message: "About Us Page", company: "Matrimony.com" }));
  } else {
    res.writeHead(404); //other calls
    res.end(JSON.stringify({ error: "Page Not Found" }));
  }
});


// Define port
const PORT = 3000;


// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
//http://localhost:3000/
//http://localhost:3000/about
//http://localhost:3000/discount


//http://localhost:4000/cart/1 => api => http://localhost:3001/cartdetails
