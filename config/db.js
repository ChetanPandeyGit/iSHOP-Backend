const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

const connection = async () => {
    try {
        // await mongoose.connect(`mongodb://127.0.0.1:27017/login`)
        await mongoose.connect(`mongodb+srv://starkboy02:Allpasswordsame@cluster0.uheiwhy.mongodb.net/login?retryWrites=true&w=majority`)
        console.log("connected")
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = connection;