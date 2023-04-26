const User = require("../model/projectmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "@chetan";
const saltround = 10;

const register = async (req,res,next) => {
  const { username, email, password} = req.body
  try {
      
      const existingUser = await User.findOne({email:email})
      if (existingUser) {
          return res.status(200).json({ message: 'User already registered' });
        }
      else{
          const hashpassword =await bcrypt.hash(password, saltround) 
          const model = new User({ username:username, email:email ,password:hashpassword })
          const dbres = await model.save();
          return res.send({ message: 'User registered successfully' });
      }      
  }      
  catch{
      res.status(500).send("Server Error")
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne( {email: email }). then( (user)=>{
    if(!user){ res.status(200).send({ message: "Wrong email or user not registered"  });   }
    else{
        bcrypt.compare( password, user.password, function(err, comp){
           if(comp==true){  
               jwt.sign( {email}, JWT_SECRET, (err, token)=>{  res.status(200).send({ token:token, message: "Logged in successfully"   }); }     )
               }
               else{
                   res.status(200).send({ message: "Id is correct but password is wrong" });
               }
        })
    }
})};



module.exports = {
  register,
  login,
};
