const User = require("../model/projectmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "@chetan";
const saltround = 10;

const register = async (req, res) => {

  const { email, password, username } = req.body;    
  User.findOne( {email: email}).then(function(user){  
    if(user){
    return (res.status(200).send({ message: 'used same id' }))}
    else{        
            bcrypt.hash( password, 10, function(err, hash ){
                var model = new User({
                    username: username,
                    email: email,
                    password: hash
                })                           
                model.save().then( (doneresponse)=>{ if(doneresponse){ res.status(200).send({ message: 'अतिथि देवो भव' })   }; console.log("User Saved")   }   )
                .catch( (e)=>{ res.json({ message: e  })   }  )
            })
    }
    res.redirect('http://localhost:5173/login');
})};

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne( {email: email }). then( (user)=>{
    if(!user){ res.status(200).send({ message: "Wrong email or user not registered"  }); console.log("Wrong email or user not registered")    }
    else{
        bcrypt.compare( password, user.password, function(err, comp){
           if(comp==true){  
               jwt.sign( {email}, 'secretkey', (err, token)=>{  res.status(200).send({ token:token, message: "Signed in successfully"   }); console.log("Signed in successfully")}     )
               }
               else{
                   res.status(200).send({ message: "Id is correct but password is wrong" }); console.log("Id is correct but password is wrong")
               }
        })
    }
})};

module.exports = {
  register,
  login,
};
