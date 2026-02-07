const { Schema, model } = require("mongoose");

const USER_SCHEMA = new Schema({
    Name: {
        type: String,
        required: true,
        min: 1
    },
    Email: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "should match email"]
    },

    PaymentNum: {
        type: String,
        // match: [/^\d{16}$/, "most be 16 digits"],
        max: 16,
        min: 16,

    },

    PaymentCardDate: {
        type: Date,

    },

    CVC: {
        type: String,

        max: 3,
        min: 3
    },
    age: {
        type: Number,
        required: true,
        match: [/^\d{2}$/, "most be 2 digits"],
    },

    Password: {
        type: String,
        required: true,
        match: [/^\d{16}$/, "most be 16 digits"],
    },
    PhoneNum: {
        required: true,
        type: String,
        match: [/^\d{10}$/, "most be 10 digits"],
    },
    lastname: {
        required: true,
        type: String,
        // match:[/^\d{15}$/, "most be 16 digits"],
    }

});

const usermodule = model("user", USER_SCHEMA);
module.exports = usermodule
