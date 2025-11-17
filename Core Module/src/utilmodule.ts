import { inspect } from "util";
interface addressPart1{
    doorno:number,
    streetName:string
}
// Define a TypeScript interface for User
interface Address {
    part1: addressPart1,
  city: string;
  zip: string;
}


interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  roles: string[];
}


// Simulated user data (like from an API)
const user: User = {
  id: 101,
  name: "Alice",
  email: "alice@example.com",
  address: {
  part1:  {doorno:10,
     streetName:"X street"
    },
    city: "New York",
    zip: "10001",
  },
  roles: ["Admin", "Editor"],
};


// Regular console.log (less readable for complex objects)
console.log("User Data:", user);


// Using util.inspect for better readability
console.log("Formatted User Data:");
console.log(inspect(user, { depth: null, colors: true }));
