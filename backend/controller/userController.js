const db = require('../models/index')
const User = db.user

const addRent = async(req, res)=>{
    console.log("rent data", req.body)
    const data = await User.create(req.body);
    // // const data = await jane.save()
    res.status(200).send("Rent Added Successfully")
}

const userList = async(req, res)=>{ 
    const data = await User.findAll();
    // // const data = await jane.save()
    res.status(200).json(data)
}
module.exports = {
    addRent,
    userList
}