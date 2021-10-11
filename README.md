# schematicmmm
NPM package for making Cell Machine Mystic Mod schemati

## most recent commit
got the file reading working

## how to use
make a schematic class:

```
schematicmmm = require("lib (WIP)")

mySchematic = new schematicmmm.Schematic(args)
```

how to read from a file in the folder that the code is in

```
new schematicmmm.Schematic("./wherever/whatever.json")
```

how to read from the default schematics folder (C:/Users/[user]/AppData/LocalLow/Cell Machine Mystic Mod/schematics/ , will add option to change later)

```
new schematicmmm.Schematic("SchematicName.json")
```

how to read from an absolute address

```
new schematicmmm.Schematic(for example, "C:/Users/alpha/Documents/stoplookingatmyprivatestuff.json")
```

how to make one from scratch

```
new schematicmmm.Schematic(x, y)
```