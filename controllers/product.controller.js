

async function getAllProducts(req, res) {
    try {
        res.send("hello world")
    } catch(error) {
        throw new Error("sever error")
    }
};

module.exports = {getAllProducts};