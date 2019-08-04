let EventEmitter = require('./EventEmitter');

class Line extends EventEmitter {
    constructor() {
        super();
        this.nodeA = null;
        this.nodeB = null;
        this.active = true;
        this.currents = [];
    }
}

module.exports = Line;