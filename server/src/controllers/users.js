const User = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerUser =  async (req, res)=> {
  try{
    const userExists = await User.exists({"email":req.body.email})
    if(!userExists){
     const hashPassword  = await bcrypt.hash(req.body.password, saltRounds);
     req.body.password= hashPassword
     await User.create(req.body)
      res.json({msg:"User Registered Successfully"})
    }else{
      res.status(409).json({msg:"Email Already Taken"})
    }
  }catch(err){
    console.log(err)
  }
  }


  const loginUser =  async (req, res)=> {
    try{
      const user = await User.findOne({"email":req.body.email})
      if(user){
          const isMatched = await bcrypt.compare(req.body.password, user.password);
          if(isMatched){
            const token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);
            res.json({token, msg: "Authorized" })
          }else{
            res.status(401).json({msg:"Incorrect Password!!"})
          }
      }else{
        res.status(409).json({msg:"No Email Found."})
      }
    }catch(err){
      console.log(err)
    }
    }
module.exports = {registerUser,loginUser}
