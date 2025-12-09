// Create a new router
const express = require("express")
const router = express.Router()

// Equipment page
router.get('/', (req, res) => {
    res.render('book.ejs');
});

// Handle equipment booking form submission
router.get('/booked', (req, res) => {

    res.send('You have booked the ' + req.query.name + 'for' + req.query.date + '<br><a href="/">Back to Home Page</a>');
});


// Export the router object so index.js can access it
module.exports = router