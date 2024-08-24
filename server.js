
const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
connectDB();
const PORT =  5000;

const app = express();

app.use(express.json());

// Enable CORS for all origins
app.use(cors());

app.use("/api/product", productRoutes)

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`))