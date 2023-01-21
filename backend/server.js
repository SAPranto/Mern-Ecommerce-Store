const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')

dotenv.config()

const app = express()

app.get('/',(req,res) => {
    res.send('API Is Running..')
})
app.get('/api/products',(req,res) => {
    res.json(products)
})
app.get('/api/products/:id',(req,res) => {
    const product = products.find(p =>p._id === req.params.id)
    res.json(products)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server Running In ${process.env.NODE_ENV} Mode On Port ${process.env.PORT}`))