import express from "express";
import { connect } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import path from "path";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
const __dirname = path.resolve();

app.use('/api/products', productRoutes);

if (process.env.NODE_ENV === "production") {
    
}


app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
