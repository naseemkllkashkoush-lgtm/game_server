const productModule = require("../modules/product.model");

// CREATE
const createProduct = async (req, res) => {
    const { Name, Price, image, category, description, TimeCooking, MeatType } = req.body;
    try {
        const product = await productModule.create({
            Name, Price, image, category, description, TimeCooking, MeatType,
        });
        res.status(201).json({ // 201 is standard for "Created"
            message: "product created " + Name,
            data: product
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// FIND ALL
const findAllProduct = async (req, res) => {
    try {
        const products = await productModule.find(req.query || {}); // Usually use query params for filtering
        res.status(200).json({
            message: "products found",
            count: products.length,
            data: products
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// DELETE ONE
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Expecting /api/products/:id
        const deletedProduct = await productModule.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createProduct,
    findAllProduct,
    deleteProduct // Export the new function
};