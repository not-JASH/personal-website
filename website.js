const express = require("express");
const path = require("path");

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

function onHttpStart() {
    console.log("Server started, listening on " + HTTP_PORT);
}

function renderView(view) {
    return function renderPage(req, res, next) {
        res.render(view, function handleRender(err, html) {
            if (err) {
                next(err);
                return;
            }

            res.send(html);
        });
    };
}

[
    ["/", "Main/Home.html"],
    ["/Portfolio", "Main/Portfolio.html"],
    ["/Work-Experience", "Main/WorkExperience.html"],
    ["/Education", "Main/Education.html"],
    ["/CHARS-Feasibility", "CHARS-Feas/CHARS-Feasibility.html"],
    ["/Shallow-Foundation-231-Cobourg", "231Cobourg/231Cobourg.html"],
    ["/CHARS-Design-Report", "CHARS-Des/CHARS-Design.html"],
    ["/Foundation-for-Tenth-Line", "TenthLine/TenthLine.html"],
    ["/Computer-Generated-Training-Data", "CGTD/CGTD.html"],
    ["/Parametric-Space", "ParametricSpace/ParametricSpace.html"],
    ["/WaveGAN", "WaveGAN/WaveGAN.html"],
    ["/Cryptocurrency-AI", "CryptoAI/CryptoAI.html"],
    ["/Skyrim-TNE", "Skyrim/SkyrimTNE.html"],
    ["/Skyrim-TNE/About", "Skyrim/About.html"],
    ["/Skyrim-TNE/Images", "Skyrim/Images.html"],
    ["/Skyrim-TNE/BeforeAndAfter", "Skyrim/BeforeAndAfter.html"],
    ["/Skyrim-TNE/Videos", "Skyrim/Videos.html"],
    ["/AI-Art", "AIArt/AIArt.html"]
].forEach(([route, view]) => {
    app.get(route, renderView(view));
});

app.use(function notFound(req, res) {
    res.status(404).send("Page not found.");
});

app.use(function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).send("Unable to render this page right now.");
});

app.listen(HTTP_PORT, onHttpStart);
