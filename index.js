const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const products = require('./data/products.json');


app.get('/', (req, res) => {
    res.send('electro learning API running');
}
);

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const selectedDetails = products.find(p => p.id === id)
    res.send(selectedDetails)
})



app.listen(port, () => {
    console.log('electro learning port running on', port);
})