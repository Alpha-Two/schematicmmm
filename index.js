var fs = require("fs")
var os = require("os")
class schemC {
    cellData = null
    sizeX = 0;
    sizeY = 0;

    /*
    file address system

    if first 2 letters are ./ its a relative file
    if first 2 letters are [A-Z]: its an absolute address
    else, it is in the default folder
    */
    constructor(a, b) {
        let reltest = /(?<!.)\.\//;
        let absotest = /(?<!.)\w:\//g;
        if (reltest.test(a)) {
            let data = JSON.parse(fs.readFileSync(a));
            let subValue = data.min;
            this.#setDataArray(data.max.x - subValue.x, data.max.y - subValue.y);
            data.cells.forEach(element => {
                this.cellData[element.x - subValue.x][element.y - subValue.y] = new Cell(element.cellType, element.direction)
            });
            console.log("its relative")
            return
        }
        if (absotest.test(a)) {
            let data = JSON.parse(fs.readFileSync(a));
            let subValue = data.min;
            this.#setDataArray(data.max.x - subValue.x, data.max.y - subValue.y);
            data.cells.forEach(element => {
                this.cellData[element.x - subValue.x][element.y - subValue.y] = new Cell(element.cellType, element.direction)
            });
            console.log("its absolute")
            return
        }
        if (typeof b === "undefined") {
            let tempAddress = os.userInfo().homedir.replace(/\\/g, "/") + "/AppData/LocalLow/LondonH/Cell Machine Mystic Mod/schematics/" + a
            console.log(tempAddress)
            let data = JSON.parse(fs.readFileSync(tempAddress));
            console.log(data)
            let subValue = data.min;
            this.#setDataArray(data.max.x - subValue.x + 1, data.max.y - subValue.y + 1);
            data.cells.forEach(element => {
                this.cellData[element.x - subValue.x][element.y - subValue.y] = new Cell(element.cellType, element.direction)
            });
            console.log(this.cellData)
            console.log("its schematic folder")
            return
        }
        if (typeof b !== "undefined") {
            this.sizeX = a
            this.sizeY = b
            this.#setDataArray(a, b);
            return
        }
    }
    #setDataArray(x, y) {
        this.cellData = []
        for (var i = 0; i < x; i++) {
            this.cellData.push([])
            for (var j = 0; j < y; j++) {
                this.cellData[i].push("hi");
            }
        }
    }
}

class Cell {
    type = null;
    direction = null;
    constructor(t, d) {
        this.type = t;
        this.direction = d;
    }
}
exports.Schematic = schemC
exports.types = {
    generator: 0,
    cwrotator: 1,
    ccwrotator: 2,
    mover: 3,
    slide: 4,
    push: 5,
    wall: 6,
    enemy: 7,
    trash: 8
}