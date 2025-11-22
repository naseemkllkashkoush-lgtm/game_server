const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/main" , (req , res)=>{
res.status(200).json({
    name:"naseem",
    age:14, 
})
})

app.post("/order" , (req , res) => {
    const {order} = req.body;

if(!order.amount) {
    return res.status(500).json({
error:true,
errormessage:"order field"

    })
}

    res.status(200).json({
        message: "order resived",
        price: order.amount * order.price,
    })
})

module.exports = app;