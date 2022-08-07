const express = require("express");
const path = require("path");
const controllers = require('./assets/js/controllers');



const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");

const Home = new controllers.controller("Home.html");
const Portfolio = new controllers.controller("Portfolio.html");
const WorkExperience = new controllers.controller("WorkExperience.html");
const WaveGAN = new controllers.controller("WaveGAN.html");

function onHttpStart(){
    console.log("Server started, listening on " + HTTP_PORT); 
}

app.get("/", function(req,res) {
    Home.display(req,res);
})



app.get("/Portfolio", Portfolio.display(req,res))
app.get("/Work-Experience", WorkExperience.display(req,res))
app.get("/WaveGAN", WaveGAN.display(req,res))






app.listen(HTTP_PORT,onHttpStart);