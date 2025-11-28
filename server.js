const app = require("./app")
const connectDB = require("./config/db.config");

const PORT = process.env.PORT;

async function start() {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {console.log(`Server Running on Port ${PORT}`)})
    } catch(error) {
        throw new Error("Sever Error")
    }
}

start();