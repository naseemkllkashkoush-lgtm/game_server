const { Schema, model } = require("mongoose");

const PRODUCT_SCHEMA = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Price: { // Added this field
        type: Number,
        required: true,
    },
    image: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    TimeCooking: {
        type: Number
    },
    MeatType: {
        type: String
    }
}, { timestamps: true }); // Optional: adds createdAt and updatedAt

const productModule = model("product", PRODUCT_SCHEMA);
module.exports = productModule;