const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

const connection = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/login`,
        { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("connected")
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = connection;