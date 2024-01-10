const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const port = 3000;
const app = express();

const authRouter = require("./routes/auth");
const ProductRouter = require("./routes/Product");
const CartRouter = require("./routes/Cartapi");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/E_commerce")

console.log("database connected")

app.get('/', (req, res) => {
  console.log("started successfully")
})

app.use("/auth", authRouter);
app.use("/product", ProductRouter);
app.use("/cartapi", CartRouter);

console.log("api working")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})