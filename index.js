const express = require("express")
const connection = require('./config/db')
const route = require('./routes/route')
const cors = require('cors');
const bodyParser = require("body-parser")
const macbook = require('./routes/macbook')
const ipad = require('./routes/ipad')
const iphone = require('./routes/iphone')
const accessories = require('./routes/accessories')
const bestseller = require('./routes/bestseller')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin : "*"}));
app.use('/', route)
app.use(macbook)
app.use(ipad)
app.use(iphone)
app.use(accessories)
app.use(bestseller)


app.get("/", (req, res) => {
    res.send("the home page")
})
app.listen(process.env.PASS || 3001, async () => {
    try {
        await connection();
        console.log("server is running at 3001")
    }
    catch (err) {
        console.log(err)
    }
})