var express = require('express');
var app = express();
var fs = require("fs");
const Sequelize = require('sequelize');
const UserModel = require('./models/users');

//
var server = app.listen(3002, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

//enable cors
var cors = require('cors')
app.use(cors())//use this after the variable declaration

//use body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());



//connect to database using sequelize
const sequelize = new Sequelize('jeweldata', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = UserModel(sequelize, Sequelize);

//apis
//get all users list
app.get('/allusers', function (req, res) {
    let result = User.findAll({
        attributes: [`id`, `first_name`, `last_name`, `email`, `contact`, `username`, `status`, `role_id`]
    });
    result.then(function (value) {
      res.send(value)
    });
   })


 app.get('/user', function (req, res) {
  
  })
 //validate user
 app.post('/authenticate', function (req, res) {
     // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    User.findOne({ where: {email: req.body.email,'password': req.body.password} }).then(project => {
        // project will be the first entry of the Projects table with the title 'aProject' || null
       if(project){
            res.send({"status":true});
       }else{
            res.send({"status":false});
       }
    })
 });


 