const express = require('express')
const products = require('./data/products')

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

app.listen(4000, console.log('Server Running On Port 4000'))