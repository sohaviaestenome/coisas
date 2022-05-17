const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const coisasRouter = require('./routers/coisas.route');


require('dotenv').config({path: './db/.env'});

const app = express();

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.json());

app.use('/coisas', coisasRouter)

app.get('/', (req,res) => {
    res.send('qq coisa');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;
