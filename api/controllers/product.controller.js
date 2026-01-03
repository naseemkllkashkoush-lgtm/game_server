const productModule = require("../modules/product.model");
const createProduct = async (req, res) => {
    const {
        Name,
        Price,
        picture,
        category,
        description,
        TimeCooking,
        MeatType,
    } = req.body
    try {
        const product = await productModule.create({
            Name,
            Price,
            picture,
            category,
            description,
            TimeCooking,
            MeatType,
        })
        res.status(200).json({
            message: "product created " + Name
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
};
const findAllProduct = async (req, res) => {

    try {
        const product = await productModule.find(req?.body || {})
        res.status(200).json({
            message: "products found ",
            data: product
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    };
}
module.exports = {
    createProduct,
    findAllProduct,
}