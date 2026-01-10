const usermodule = require("../modules/user.model");


const createuser = async (req, res) => {
const {
    Name,
    PaymentNum,
     lastname,
    PhoneNum,
    age,
   PaymentCardDate,
    CVC,
    Password,
} = req.body
try {
    const user = await usermodule.create({
        Name,
        PaymentNum,
        PaymentCardDate,
        CVC,
        Password,
        PhoneNum,
        age,
        lastname,
    })
    res.status(200).json({
        message: "wellcome " + Name 

    });
}
catch (error) {
    res.status(400).json({
        success: false,
        message: error.message
    });
};
}

const login = async (req, res) => {
    try {
        const { PhoneNum, Password } = req.body;
        const user = await usermodule.findOne({ PhoneNum });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "user not found "
            });
        }
        if (user.Password === Password) {
            res.status(200).json({
                user,
                success: true,
                message: "wellcome" + user.Name
            });
        }
        else {
            res.status(400).json({
                success: false,
                message:"wrong password"
            });
            
        }
    }
    catch(error){
res.status(400).json({
    success: false,
    message: error.message
})
    }
 }
module.exports = {
    createuser,
    login
};