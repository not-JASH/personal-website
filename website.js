const express = require("express");
const path = require("path");

const { getLegacyPage } = require("./lib/legacy-page");
const { routes } = require("./data/site-data");

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

function onHttpStart() {
    console.log("Server started, listening on " + HTTP_PORT);
}

function withSharedStyles(page) {
    const stylesheets = [...(page.stylesheets || []), "/css/app.css"].filter(
        (href, index, entries) => entries.indexOf(href) === index
    );

    return {
        ...page,
        stylesheets
    };
}

function buildPage(routeConfig) {
    if (routeConfig.kind === "legacy") {
        return withSharedStyles({
            ...routeConfig,
            ...getLegacyPage(path.join(__dirname, routeConfig.source))
        });
    }

    return withSharedStyles(routeConfig);
}

routes.forEach((routeConfig) => {
    app.get(routeConfig.path, function renderPage(req, res, next) {
        try {
            const page = buildPage(routeConfig);

            res.render("layout", {
                bodyTemplate: page.template,
                page
            });
        } catch (err) {
            next(err);
        }
    });
});

app.use(function notFound(req, res) {
    res.status(404).send("Page not found.");
});

app.use(function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).send("Unable to render this page right now.");
});

app.listen(HTTP_PORT, onHttpStart);
