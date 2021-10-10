fs = require("fs")

class schemC {
    cellData = []
    sizeX = 0;
    sizeY = 0;
    constructor(sizeX, sizeY) {
        this.sizeX = sizeX
        this.sizeY = sizeY
    }
}

exports.schematicClass = schemC