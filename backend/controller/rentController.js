const db = require('../models/index')
const User = db.user

const addRent = async(req, res)=>{
    const data = await User.create({ firstName: "Jane", lastName: "Sakei" });
    // const data = await jane.save()
    res.status(200).json(data)
}

module.exports = {
    addRent
}