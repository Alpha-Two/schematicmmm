fs = require("fs")

class schemC {
    cellData = []
    sizeX = 0;
    sizeY = 0;
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX
        this.sizeY = sizeY
        return
    }
}

class cell {
    x = 0;
    y = 0;
    t = null;
    constructor(x, y, t) {
        this.x = x;
        this.y = y;
        this.t = t;
    }
}
exports.schematicClass = schemC
exports.types = {
    generator: 0
}