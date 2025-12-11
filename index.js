// Import express and ejs
var express = require ('express')
var mysql = require('mysql2')
var ejs = require('ejs')
var session = require ('express-session')
const expressSanitizer = require('express-sanitizer');
const path = require('path')
require('dotenv').config()

// Create the express application object
const app = express()
const port = 8000

// Create an input sanitizer
app.use(expressSanitizer());

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs')

// Set up the body parser 
app.use(express.urlencoded({ extended: true }))

// Set up public folder (for css and static js)
app.use(express.static(path.join(__dirname, 'public')));

//create a session
app.use(session({
    secret: 'somerandomstuff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

// Define our application-specific data
app.locals.shopData = {shopName: "Fitness4you"}

// Define the database connection pool
const db = mysql.createPool({
    host: process.env.HEALTH_HOST,
    user: process.env.HEALTH_USER,
    password: process.env.HEALTH_PASSWORD,
    database: process.env.HEALTH_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
global.db = db;

// Load the route handlers
const mainRoutes = require("./routes/main")
app.use('/', mainRoutes)

// Load user routes
const userRoutes = require("./routes/users")
app.use('/users', userRoutes)

// Load equipment routes
const equipmentRoutes = require("./routes/equipment")
app.use('/equipment', equipmentRoutes)

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))