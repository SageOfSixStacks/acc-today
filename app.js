const express = require("express");
const productRouter = require("./routes/product.route")

const app = express();

app.use(express.json());

app.use('/products', productRouter);

module.exports = app;