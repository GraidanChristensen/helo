const controller = require('./controller');
require('dotenv').config();
const express = require('express');
// const session = require('express-session');
const massive = require('massive')

const PORT = 4000;

const app = express();

app.use(express.json());

const {CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log("connected to database");
}).catch(err => console.log(err));



app.listen(PORT, ()=>console.log(`Listening on ${PORT}`));