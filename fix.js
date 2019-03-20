// Importing dependencies
const fs = require("fs")
const { normalizeField, parseNumberField, establishField } = require('./modules/FieldFunctions')

// Loading JSON from file
const data = JSON.parse(fs.readFileSync("data/broken-database.json", "utf8"))

// Applying functions
let dataNameNormalized = normalizeField(data, 'name')
let dataNumberNormalized = parseNumberField(dataNameNormalized, 'price')
let dataFieldEstablished = establishField(dataNumberNormalized, 'quantity', 0)

// Saving reestructured data to file.
fs.writeFileSync("data/database.json", JSON.stringify(dataFieldEstablished))