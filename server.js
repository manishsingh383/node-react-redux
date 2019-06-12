const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser')
const bookItems = require('./routes/api/transactionDetails');
const app = express();
app.use(bodyParser.json());

//Db COnfig
const db =  require('./config/keys').mongoURI;

//connect Mongo
mongoose
.connect(db,{useNewUrlParser:true})
.then(() =>console.log('mongo db connected'))
.catch(err => console.log(err));

//Use Routes
app.use('/api/transaction', bookItems );

const port =  process.env.port || 5000;
app.listen(port, () => console.log('server started on port ' + port));