class Node {
    constructor() {
        this.lines = [];
    }

    getLines(exception = null) {
        if (exception) {
            let index = this.lines.indexOf(exception);

            if (index > -1) {
                return this.lines.splice(index, 1);
            }
        }
        return this.lines;
    }
}

module.exports = Node;