const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username:  String,        
    email: String,    
    password:  String
      
})

const projectModel = mongoose.model('information', user)

module.exports = projectModel;