let EventEmitter2 = require('eventemitter2').EventEmitter2;

class EventEmitter extends EventEmitter2{
    constructor() {
        super({
            wildcard: true,
            newListener: false,
            maxListeners: 100,
        });
    }
}

module.exports = EventEmitter;