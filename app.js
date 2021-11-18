 const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = 3000;  // this is the port our express server will run on
//Access-Control-Allow-Origin: http://localhost:3000;
const app = express(); // this is an instance of express

var connection = require('./conn/conn');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();    
});


//initializing routes

var admin = require('./routes/admin');

    
 

//code for running the server

app.listen(PORT,function(){

    console.log('server running on localhost:' + PORT);
})

// initializing api names and router to admin.js file 

app.post('/insertData',admin.insertData); 
app.get('/totalSurveys',admin.totalSurveys)
app.get('/avgAge',admin.avgAge)
app.get('/oldPerson',admin.oldPerson)
app.get('/youngest',admin.youngest)
app.get('/percPizza',admin.percPizza)
app.get('/percPasta',admin.percPasta)
app.get('/percPapAndWors',admin.percPapAndWors)
app.get('/totEatOut',admin.totEatOut)
app.get('/totMovie',admin.totMovie)
app.get('/totTv',admin.totTv)
app.get('/totRadio',admin.totRadio)




