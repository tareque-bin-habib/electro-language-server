const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



const products = require('./data/products.json')


app.get('/', (req, res) => {
    res.send('electro learning API running');
}
);

app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log('electro learning port running on', port);
})