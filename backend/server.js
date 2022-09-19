const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const coisasRouter = require('./routers/coisas.route');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/coisas', coisasRouter)

app.get('/', (req,res) => {
    res.send('qq coisa');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;
