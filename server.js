var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')

// Database configuration 
var sequelize = require('./config/db.js')
var StateModel = require('./model/state.js')(sequelize, Sequelize)

// App configuration 
var api_routes = require('./routes/states.js')

var app = express() 

app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.use(bodyParser.json())

state_api_routes = api_routes(StateModel)
app.use('/api', state_api_routes)


// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
  })


// Start server running 
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})