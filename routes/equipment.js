// Create a new router
const express = require("express")
const router = express.Router()

// redirects to log in page
const redirectLogin = (req, res, next) => {
    if(!req.session.userId) {
        res.redirect('../users/login') 
    } else {
        next ();
    }
}


//equipment list page
router.get('/list', redirectLogin, (req, res) => {
   res.render('equipment_list.ejs');
});

// book equipment page
router.get('/', redirectLogin, (req, res) => {
    res.render('book.ejs');
});

// Handle equipment booking form submission
router.get('/booked', (req, res) => {
    // new sql query - take data that user has inputed from form, and insert it into bookings table

    res.send('You have booked the ' + req.query.name + 'for' + req.query.date + '<br><a href="/">Back to Home Page</a>');
});

// new ejs = search equipment - in here, router get the search form, and it will search the booking table for matching information 


// Export the router object so index.js can access it
module.exports = router