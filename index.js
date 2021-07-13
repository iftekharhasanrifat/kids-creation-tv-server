const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute  = require('./routes/auth');
const adminRoute  = require('./routes/admins');
const kidsNewsRoute  = require('./routes/kidsNews');

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(console.log("Connected to Mongo"))
.catch(err => console.log(err));

app.use("/api/auth",authRoute);
app.use("/api/admins",adminRoute);
app.use("/api/kidsNews",kidsNewsRoute);

app.listen("5000", () => {
    console.log("backend is running")
})