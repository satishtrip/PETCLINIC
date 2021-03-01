require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import connectDB from "./config/connectDB"
import bodyParser from "body-parser"
let app = express()
//configuration for body parser to post data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

configViewEngine(app);
//connectDB();
//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;


app.listen(port, ()=>{
    console.log(`App is running at the port ${port}`);
 })