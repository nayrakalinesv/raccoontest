const express = require('express')
const app = express()
const cors = require('cors')
const CSE_ID = "001491583890274093372:77fvd_etmsm"
const API_KEY = "AIzaSyBOwljj0ya-amH0mFn_vYSy6kbcEBDN7f4"
const GoogleImages = require('google-images')
const PORT = 2811
const client = new GoogleImages(CSE_ID, API_KEY)
const products = JSON.parse(require('fs').readFileSync('./data/database.json'))

app.use(express.json())
app.use(cors())

app.get('/products', async (req, res) => {
    let productsWithImage = []
    for(let product of products){
        let newProduct = {...product}
        newProduct.image_url = await imageFromQuery(product.name).catch(console.log)
        productsWithImage.push(newProduct)
    }
    res.send(productsWithImage)
})

app.listen(PORT, () => console.log("Listening on port " + PORT))

function imageFromQuery(query){
    return client.search(query).then(images => images[0].url)
}


