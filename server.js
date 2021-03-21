// require packages
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

//require db models
require('./models')

//config express app
const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)

//middleware
app.use(morgan('tiny'))
app.use(cors())

//request body parser
app.use(express.json())

const middleware = (req, res, next) => {
    console.log('Hello from a middleware')
    next()
}

// GET / -- test index route
app.get('/', middleware, (req, res) => {
    res.json({ msg: 'Hello world!'})
})
// controllers

// tell express to listen on a port
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is now listening on port: ${PORT}`)
})