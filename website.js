const express = require("express");
const path = require("path");
const a = require('./assets/js/Controllers');



const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");


const Home = new a.controller("Home.html");
const Portfolio = new a.controller("Portfolio.html");
const WorkExperience = new a.WorkExperience("workExperience.html");
const WaveGAN = new a.WaveGAN("WaveGAN.html");



function onHttpStart(){
    console.log("Server started, listening on " + HTTP_PORT); 
}

app.get("/",Home.display(req,res))

app.get("/Portfolio", Portfolio.display(req,res))

app.get("/Work-Experience", WorkExperience.display(req,res))

app.get("/WaveGAN", WaveGAN.display(req,res))

app.listen(HTTP_PORT,onHttpStart);