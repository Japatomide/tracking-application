// Module and dependencies imported
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDataBase } from "./config/db.js";
import { products } from "./products.js";
import "dotenv/config";
import { Product } from "./model/productModel.js";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Port that server is running on
const PORT = process.env.PORT;
// MongoDB Connection String
const MONGO_URI = process.env.MONGO_URI;

// Route to create products. NB: the products are coming from the products.js file at the root directory
// app.post("/create-product", async (req, res) => {
//   try {
//     const createdProducts = await Product.insertMany(products);
//     res.status(201).json(createdProducts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// Route that returns information about the products stored in the database, when the tracking number of the respective product passed in
app.get("/track/:trackingNumber", async (req, res) => {
  const { trackingNumber } = req.params;

  try {
    const product = await Product.findOne({ trackingNumber });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, async () => {
  try {
    await connectDataBase(MONGO_URI);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log("Error: ", error.message);
  }
});
