const express = require("express");
const mongoose = require("mongoose");
const prot = process.env.port|| 443;
const app = express();

mongoose.connect("mongodb://localhost:443/AppDB" ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("MongoDB connected");
});

//midwave
app.use(express.json());
const userRoute = require("./routes/user.js");
app.use("/user.handlebars" , userRoute);
app.route("/").get((req,res)=> res.json("hello world!"));
app.listen(port, () => console.log('welcome your listinng ar port ${port}'));
app.listen(443, "127.3.5.7");