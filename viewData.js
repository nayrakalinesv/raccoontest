const fs = require('fs')
const { sortProducts, valuePerCategory } = require('./modules/ProductFunctions')

// Read data from database file
const data = JSON.parse( fs.readFileSync('./data/database.json', 'utf8') )

console.log("Lista de produtos ordenada")
console.log(sortProducts(data).map(product => product.name))
console.log("Valor de estoque por categoria")
console.log(valuePerCategory(data))