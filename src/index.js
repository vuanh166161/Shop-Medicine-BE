const express = require("express");
const dotenv = require('dotenv');
const mongoose  = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors');
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json())
app.use(cookieParser())


routes(app);


mongoose.connect('mongodb+srv://anhnvgcc200163:aihao166161@cluster0.ji0fakl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('Connect DB success')
})
.catch((err) =>{
    console.log(err)
})

app.listen(port, () => {
    console.log('Server is running in port', + port)
})
