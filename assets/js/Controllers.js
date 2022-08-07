const { assert } = require("console");
const url = require("url");
const { isStringObject } = require("util/types");

class controller {
    constructor(file) {        
        this.view = file;
    }

    display(req,res) {
        res.render(this.view);
    }
}


module.exports = {
    controller
}