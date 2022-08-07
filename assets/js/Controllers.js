const url = require("url");

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