class Node {
    constructor() {
        this._cache = {
            v: 0,
        };
        this.id = '';

        this.A = null;
        this.B = null;
    }


}

class CommonNode {
    constructor() {
        this._cache = {
            v: 0,
        };
        this.id = '';

        this.A = null;
    }
}

module.exports = Node;