const connectDB = require("./config/db.config");

const PORT = process.env.PORT;

const express = require("express");
const productRouter = require("./routes/product.route")

const app = express();

app.use(express.json());

app.use('/products', productRouter);





app.listen(PORT, () => {console.log(`Server Running on Port ${PORT}`)})


// async function start() {
//     try {
//         await connectDB(process.env.MONGO_URI);
//     } catch(error) {
//         throw new Error("Sever Error")
//     }
// }

// start();
