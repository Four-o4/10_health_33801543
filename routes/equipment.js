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


//equipment list page - When clicked it will redirect to login page if account is not created. Once logged in the list of equipment 
// from the database will be displayed
router.get('/list', redirectLogin, (req, res) => {
    //grab the equipment list from database
    let sql = "SELECT * FROM equipment";

    //execute sql query
    db.query(sql, (err, result) => {
        if (err) {
            next(err);
        }
        else {
            res.render('equipment_list.ejs',{availableEquipment:result});
        }
    });
});

// Book equipment page
router.get('/book', redirectLogin, (req, res) => {
    res.render('book.ejs');
});

router.post('/booked', redirectLogin, (req, res, next) => {

    // new sql query - take data that user has inputed from form, and insert it into bookings table
    let sql = "INSERT INTO booking (username, equipment_name, time, booking_date) VALUES (?, ?, ?, ?)";

    //Taking the information the user input in the booking form
    let newBooking = [req.body.username, req.body.name, req.body.time, req.body.date];

    //Query will add booking information into the booking table in db
    db.query(sql, newBooking, (err, result) => {
        if (err) {
            return next(err);
        }
        else{
        res.send(
            'You have booked the ' + req.body.name + ' for ' + req.body.date + ' at ' + req.body.time + '<br><a href="/">Back to Home Page</a>'
        );}
    });
});



// new ejs = search equipment - in here, router get the search form, and it will search the booking table for matching information 

router.get('/search', redirectLogin, (req, res) => {
    res.render('search.ejs');
});

router.post('/search/results', (req, res, next) => {
    // new sql query - take data that user has inputed from form, and search it in bookings table
    let sql = "SELECT * FROM booking WHERE equipment_name = ?";
    let searchTerm = [req.body.name];

    //query will search the database for any bookings matching the equipment name input by user
    db.query(sql, searchTerm, (err, result) => {
        if (err) {
            return next(err);
        }

        else if (result.length === 0) { 
            return res.send('No booking found.<br><a href="/equipment/search">Back to Search Page</a>');
        }
            
        else {
            //if result is found, a message will pop up to the user, showing the details of their search
            let message = result.map(b => 
            
            `${b.username} booked ${b.equipment_name} on ${b.booking_date} at ${b.time}`).join('\n');
            
            res.send(`<pre>${message}</pre><br><a href="/equipment/search">Back to Search Page</a>`);
        }

    });
});


// Export the router object so index.js can access it
module.exports = router