const fs = require("fs");

const legacyCache = new Map();

function decodePathHref(href) {
    return href
        .replace(/^(\.\.\/)+assets\/css\//, "/css/")
        .replace(/^\.\.\/assets\/css\//, "/css/");
}

function collectMatches(source, expression, mapFn) {
    return Array.from(source.matchAll(expression), mapFn);
}

function extractBodyParts(source) {
    const bodyOpen = source.match(/<body([^>]*)>/i);

    if (!bodyOpen) {
        return {
            bodyAttrs: "",
            bodyHtml: ""
        };
    }

    const bodyStart = bodyOpen.index + bodyOpen[0].length;
    const bodyClose = source.search(/<\/body>|<\/html>/i);
    const bodyEnd = bodyClose >= 0 ? bodyClose : source.length;

    return {
        bodyAttrs: (bodyOpen[1] || "").trim(),
        bodyHtml: source.slice(bodyStart, bodyEnd).trim()
    };
}

function extractTitle(source) {
    const titleMatch = source.match(/<title>([\s\S]*?)<\/title>/i);
    return titleMatch ? titleMatch[1].trim() : "Jashua Luna";
}

function extractInlineStyle(source) {
    const styles = collectMatches(
        source,
        /<style[^>]*>([\s\S]*?)<\/style>/gi,
        (match) => match[1].trim()
    ).filter(Boolean);

    return styles.join("\n\n");
}

function extractStylesheets(source) {
    const seen = new Set();

    return collectMatches(
        source,
        /<link[^>]+href="([^"]+\.css[^"]*)"[^>]*>/gi,
        (match) => decodePathHref(match[1].trim())
    ).filter((href) => {
        if (seen.has(href)) {
            return false;
        }

        seen.add(href);
        return true;
    });
}

function extractHeadScripts(source) {
    const headMatch = source.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const headSource = headMatch ? headMatch[1] : "";

    return collectMatches(
        headSource,
        /<script[^>]+src="([^"]+)"[^>]*><\/script>/gi,
        (match) => match[1].trim()
    );
}

function parseLegacyPage(filePath) {
    const source = fs.readFileSync(filePath, "utf8");
    const { bodyAttrs, bodyHtml } = extractBodyParts(source);

    return {
        title: extractTitle(source),
        bodyAttrs,
        bodyHtml,
        headScripts: extractHeadScripts(source),
        inlineStyle: extractInlineStyle(source),
        stylesheets: extractStylesheets(source)
    };
}

function getLegacyPage(filePath) {
    if (!legacyCache.has(filePath)) {
        legacyCache.set(filePath, parseLegacyPage(filePath));
    }

    return legacyCache.get(filePath);
}

module.exports = {
    getLegacyPage
};
