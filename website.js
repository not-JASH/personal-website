const express = require("express");
const path = require("path");
//const a = require('./assets/js/Controllers');



const app = express();
const HTTP_PORT = process.env.PORT || 8080
app.use(express.static(__dirname+'/assets'));
app.set("views",path.join(__dirname,"views"));
app.engine('html',require('ejs').renderFile);
app.set("view engine","ejs");

function onHttpStart(){
    console.log("Server started, listening on " + HTTP_PORT); 
}


// Main Pages

app.get("/",function(req,res) {
    res.render("Main/Home.html");
})

app.get("/Portfolio", function(req,res){
    res.render("Main/Portfolio.html");
})

app.get("/Work-Experience", function(req,res){
    res.render("Main/WorkExperience.html");
})

app.get("/Education", function(req,res) {
    res.render("Main/Education.html");
})

// Portfolio Pages

//misc sketches ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Misc-Sketches", function(req,res){
    res.render("Sketches/MiscSketches.html");
})

// tdsb arch ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/TDSB-Architecture", function(req,res){
    res.render("TDSB/TDSB-Architecture.html");
})

// chars feasibility ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/CHARS-Feasibility", function(req,res){
    res.render("CHARS-Feas/CHARS-Feasibility.html");
})

// 231 cobourg foundation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Shallow-Foundation-231-Cobourg", function(req,res){
    res.render("231Cobourg/231Cobourg.html");
})

// chars design report ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/CHARS-Design-Report", function(req,res){
    res.render("CHARS-Des/CHARS-Design.html");
})

// foundation for tenth line ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Foundation-for-Tenth-Line", function(req,res){
    res.render("TenthLine/TenthLine.html");
})

// computer generated training data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Computer-Generated-Training-Data", function(req,res){
    res.render("CGTD/CGTD.html");
})

// notes on wavelets and fourier transform ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Wavelets-and-Extended-Fourier", function(req,res){
    res.render("WaveletsAndFourier/Wavelets-and-Fourier.html");
})

// parametric space ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Parametric-Space", function(req,res){
    res.render("ParametricSpace/ParametricSpace.html");
})

// wave gan ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/WaveGAN", function(req,res){
    res.render("WaveGAN/WaveGAN.html");
})

// cryptocurrency ai ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Cryptocurrency-AI", function(req,res){
    res.render("CryptoAI/CryptoAI.html");
})

// skyrim true nord ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/Skyrim-TNE", function(req,res){
    res.render("Skyrim/SkyrimTNE.html");
})

app.get("/Skyrim-TNE/About", function(req,res){
    res.render("Skyrim/About.html");
})

app.get("/Skyrim-TNE/Images", function(req,res){
    res.render("Skyrim/Images.html");
})

app.get("/Skyrim-TNE/BeforeAndAfter", function(req,res){
    res.render("Skyrim/BeforeAndAfter.html");
})

app.get("/Skyrim-TNE/Videos", function(req,res){
    res.render("Skyrim/Videos.html");
})

// ai art ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/AI-Art", function(req,res){
    res.render("AIArt/AIArt.html");
})





















app.listen(HTTP_PORT,onHttpStart);