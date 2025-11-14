const mongoose = require("mongoose");


async function connectDB(uri) {
    try {
        await mongoose.connect(uri);
        console.log("CONNECTED TO THE DB")
    } catch(error) {
        throw new Error("Server Down")
    }
};

module.exports = connectDB;