const url = require("url");

class controller {
    constructor(file) {        
        this.view = file;
        console.log(this.view);
    }

    display(req,res) {
        res.render(this.view);
    }
}


module.exports = {
    controller
}