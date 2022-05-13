const express = require('express');
const path = require('path');
const cors = require('cors');


require('dotenv').config();

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 8000;


app.get('/', (req,res) => {
    res.render('index.hbs', {
        title: 'Coisas a transportar'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


